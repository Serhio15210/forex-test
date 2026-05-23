import type { DateFilterPeriod } from "@/shared/types/date-filter-period";
import { parseFlabelTags } from "../lib/parse-flabel-tags";
import type { BillmgrPlanElem, BillmgrPlansResponse, Plan } from "../model/types";

const asArray = <T>(value: T | T[] | undefined): T[] => {
    if (value === undefined) {
        return [];
    }

    return Array.isArray(value) ? value : [value];
};

const readValue = (field?: { $?: string }): string => field?.$ ?? "";

const getLabelTagValue = (
    tags: { $?: string }[] | undefined,
    prefix: string,
): string | undefined => {
    const tag = tags?.find(
        (item) => item.$?.startsWith(`${prefix}%3A`) ?? item.$?.startsWith(`${prefix}:`),
    );

    if (!tag?.$) {
        return undefined;
    }

    const encodedSeparator = tag.$.indexOf("%3A");
    if (encodedSeparator !== -1) {
        return decodeURIComponent(tag.$.slice(encodedSeparator + 3));
    }

    const separator = tag.$.indexOf(":");
    return separator !== -1 ? tag.$.slice(separator + 1) : undefined;
};

const parsePlanElem = (elem: BillmgrPlanElem, fperiod: DateFilterPeriod): Plan | null => {
    const prices = asArray(elem.prices?.price);
    const selectedPrice = prices.find((price) => readValue(price.period) === fperiod);

    if (!selectedPrice) {
        return null;
    }

    const tags = asArray(elem.flabel?.tag);
    const soldOut = getLabelTagValue(tags, "soldout") === "True";
    const labelTags = parseFlabelTags(tags.map((tag) => readValue(tag)).filter(Boolean));

    return {
        id: readValue(elem.id),
        keyvalue: readValue(elem.keyvalue),
        title: readValue(elem.title),
        titleTag: readValue(elem.title_tag),
        datacenterId: readValue(elem.datacenter?.id),
        datacenterName: readValue(elem.datacenter?.value),
        price: Number.parseFloat(readValue(selectedPrice.cost)),
        currency: readValue(selectedPrice.currency),
        soldOut,
        details: asArray(elem.detail).map((detail) => ({
            name: readValue(detail.name),
            value: readValue(detail.value),
        })),
        labelTags,
    };
};

export const parsePlansResponse = (
    response: BillmgrPlansResponse,
    fperiod: DateFilterPeriod,
): Plan[] => {
    const instancesList = asArray(response.doc?.list).find((list) => asArray(list.elem).length > 0);

    return asArray(instancesList?.elem)
        .map((elem) => parsePlanElem(elem, fperiod))
        .filter((plan): plan is Plan => plan !== null);
};
