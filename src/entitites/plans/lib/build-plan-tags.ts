import type { Plan, PlanLabelTag } from "../model/types";

const formatPlanTag = ({ key, value }: PlanLabelTag): string | null => {
    switch (key) {
        case "cpu":
            return `${value} CPU`;
        case "os":
            return value;
        case "type":
            return value;
        case "soldout":
            return value === "True" ? "Sold out" : null;
        default:
            return value;
    }
};

export const buildPlanTags = (plan: Plan): string[] => {
    const labelTags = plan.labelTags
        .map(formatPlanTag)
        .filter((tag): tag is string => tag !== null);

    if (!plan.datacenterName) {
        return labelTags;
    }

    return [plan.datacenterName, ...labelTags];
};
