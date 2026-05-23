import type { DateFilterPeriod } from "@/shared/types/date-filter-period";

export type FetchPlansParams = {
    datacenter?: number;
    fperiod: DateFilterPeriod;
};

export type PlanDetail = {
    name: string;
    value: string;
};

export type PlanLabelTag = {
    key: string;
    value: string;
};

export const FOREX_SERVER_TITLE_TAG = "forex_server" as const;

export type Plan = {
    id: string;
    keyvalue: string;
    title: string;
    titleTag: string;
    datacenterId: string;
    datacenterName: string;
    price: number;
    currency: string;
    soldOut: boolean;
    details: PlanDetail[];
    /** Parsed from API `flabel.tag` */
    labelTags: PlanLabelTag[];
};

type BillmgrValue = {
    $?: string;
};

type BillmgrPrice = {
    $special_price?: string;
    cost?: BillmgrValue;
    currency?: BillmgrValue;
    period?: BillmgrValue;
};

type BillmgrDetail = {
    name?: BillmgrValue;
    value?: BillmgrValue;
};

type BillmgrLabelTag = {
    $?: string;
};

type BillmgrPlanElem = {
    id?: BillmgrValue;
    keyvalue?: BillmgrValue;
    title?: BillmgrValue;
    title_tag?: BillmgrValue;
    detail?: BillmgrDetail | BillmgrDetail[];
    prices?: {
        price?: BillmgrPrice | BillmgrPrice[];
    };
    flabel?: {
        tag?: BillmgrLabelTag | BillmgrLabelTag[];
    };
    datacenter?: {
        id?: BillmgrValue;
        value?: BillmgrValue;
    };
};

type BillmgrInstancesList = {
    elem?: BillmgrPlanElem | BillmgrPlanElem[];
};

export type BillmgrPlansResponse = {
    doc?: {
        list?: BillmgrInstancesList | BillmgrInstancesList[];
    };
};

export type { BillmgrPlanElem };
