import { useMemo } from "react";
import { getBestChoicePlanId } from "@/entitites/plans";
import type { Plan } from "@/entitites/plans";
import type { DateFilterPeriod } from "@/shared/types/date-filter-period";
import { usePlans } from "./use-plans";

export type UsePlansSectionParams = {
    datacenter?: number;
    fperiod: DateFilterPeriod;
};

type PlansSectionLoadingState = {
    status: "loading";
};

type PlansSectionErrorState = {
    status: "error";
    message: string;
};

type PlansSectionEmptyState = {
    status: "empty";
};

type PlansSectionSuccessState = {
    status: "success";
    plans: Plan[];
    bestChoicePlanId: string | null;
};

export type PlansSectionState =
    | PlansSectionLoadingState
    | PlansSectionErrorState
    | PlansSectionEmptyState
    | PlansSectionSuccessState;

const getPlansErrorMessage = (error: unknown): string =>
    error instanceof Error ? error.message : "Please try again later.";

export const usePlansSection = ({
    datacenter,
    fperiod,
}: UsePlansSectionParams): PlansSectionState => {
    const { data: plans = [], isPending, isError, error } = usePlans({ datacenter, fperiod });
    const bestChoicePlanId = useMemo(() => getBestChoicePlanId(plans), [plans]);

    if (isPending) {
        return { status: "loading" };
    }

    if (isError) {
        return {
            status: "error",
            message: getPlansErrorMessage(error),
        };
    }

    if (plans.length === 0) {
        return { status: "empty" };
    }

    return {
        status: "success",
        plans,
        bestChoicePlanId,
    };
};
