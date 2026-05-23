import type { DateFilterOption, DateFilterPeriod } from "../types/date-filter-period";

export const DATE_FILTER_OPTIONS: readonly DateFilterOption[] = [
    { value: "-50", label: "1 day" },
    { value: "1", label: "1 month" },
    { value: "3", label: "3 months" },
    { value: "6", label: "6 months" },
    { value: "12", label: "12 months" },
];

export const DEFAULT_DATE_FILTER_PERIOD: DateFilterPeriod = "1";
