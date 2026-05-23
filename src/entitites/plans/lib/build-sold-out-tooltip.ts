import type { Plan } from "../model/types";

export const buildSoldOutTooltip = (plan: Plan): string => {
    const location = plan.datacenterName ? ` in ${plan.datacenterName}` : "";

    return `This plan is sold out${location} and is temporarily unavailable for order.`;
};
