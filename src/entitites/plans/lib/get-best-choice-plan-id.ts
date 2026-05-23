import { getPlanTerminalsCount } from "./format-plan";
import type { Plan } from "../model/types";

export const getBestChoicePlanId = (plans: Plan[]): string | null => {
    let bestPlan: { id: string; ratio: number; price: number } | null = null;

    for (const plan of plans) {
        if (plan.soldOut) {
            continue;
        }

        const cpuCount = Number.parseInt(getPlanTerminalsCount(plan), 10);

        if (!Number.isFinite(cpuCount) || cpuCount <= 0) {
            continue;
        }

        const ratio = plan.price / cpuCount;

        if (
            !bestPlan ||
            ratio < bestPlan.ratio ||
            (ratio === bestPlan.ratio && plan.price < bestPlan.price)
        ) {
            bestPlan = { id: plan.id, ratio, price: plan.price };
        }
    }

    return bestPlan?.id ?? null;
};
