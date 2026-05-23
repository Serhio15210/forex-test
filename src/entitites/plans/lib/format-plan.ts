import type { DateFilterPeriod } from "@/shared/types/date-filter-period";
import type { Plan } from "../model/types";

const CURRENCY_SYMBOLS: Record<string, string> = {
    EUR: "€",
    USD: "$",
};

const BILLING_PERIOD_LABELS: Record<DateFilterPeriod, string> = {
    "-50": "day",
    "1": "month",
    "3": "3 months",
    "6": "6 months",
    "12": "year",
};

export const getPlanDisplayName = (title: string): string => title.split("|")[0]?.trim() ?? title;

export const getPlanDetailValue = (plan: Plan, detailName: string): string =>
    plan.details.find((detail) => detail.name === detailName)?.value?.trim() ?? "";

export const getPlanTerminalsCount = (plan: Plan): string => getPlanDetailValue(plan, "CPU count");

export const formatCurrencySymbol = (currency: string): string =>
    CURRENCY_SYMBOLS[currency.toUpperCase()] ?? currency;

export const formatPlanPrice = (price: number): string => price.toFixed(2);

export const getBillingPeriodLabel = (fperiod: DateFilterPeriod): string =>
    BILLING_PERIOD_LABELS[fperiod];

const formatGbAsLabel = (value: string, label: string): string => {
    const amount = value.replace(/\s*gb/i, "").trim();

    return amount ? `${amount} ${label}` : "";
};

export const buildSpecsLine = (plan: Plan): string => {
    const cpu = getPlanDetailValue(plan, "CPU count");
    const memory = getPlanDetailValue(plan, "Memory");
    const disk = getPlanDetailValue(plan, "Disk space");
    const portSpeed = getPlanDetailValue(plan, "Port speed");

    return [
        cpu ? `${cpu} TRM` : null,
        memory ? formatGbAsLabel(memory, "RAM") : null,
        disk ? formatGbAsLabel(disk, "NVMe") : null,
        portSpeed || null,
    ]
        .filter(Boolean)
        .join(" · ");
};
