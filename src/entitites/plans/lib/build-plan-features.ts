import { formatDetailLabel } from "./format-detail-label";
import type { Plan } from "../model/types";

const SPECS_BAR_DETAIL_NAMES = new Set(["CPU count", "Memory", "Disk space", "Port speed"]);

export const buildPlanFeatures = (plan: Plan): string[] => {
    const detailLines = plan.details
        .filter((detail) => !SPECS_BAR_DETAIL_NAMES.has(detail.name))
        .map((detail) => `${formatDetailLabel(detail.name)}: ${detail.value}`);

    return detailLines;
};
