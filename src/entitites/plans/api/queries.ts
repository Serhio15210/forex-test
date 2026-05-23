import { resolveDatacenterParam } from "@/shared/config/datacenter-ids";
import type { FetchPlansParams, BillmgrPlansResponse, Plan } from "../model/types";
import { parsePlansResponse } from "./parse-plans";

const getPlansApiUrl = (): string => {
    const url = import.meta.env.VITE_PLANS_API_URL;

    if (!url) {
        throw new Error("VITE_PLANS_API_URL is not defined in environment variables");
    }

    return url;
};

export const fetchPlans = async ({ datacenter, fperiod }: FetchPlansParams): Promise<Plan[]> => {
    const body = new URLSearchParams({
        func: "v2.instances.order.pricelist",
        out: "json",
        lang: "en",
        page: "1",
        page_size: "999",
        datacenter: resolveDatacenterParam(datacenter),
        fperiod,
    });

    const response = await fetch(getPlansApiUrl(), {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch plans");
    }

    const data = (await response.json()) as BillmgrPlansResponse;

    return parsePlansResponse(data, fperiod);
};
