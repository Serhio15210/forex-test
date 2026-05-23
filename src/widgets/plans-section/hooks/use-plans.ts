import { useQuery } from "@tanstack/react-query";
import { fetchPlans, FOREX_SERVER_TITLE_TAG } from "@/entitites/plans";
import type { Plan } from "@/entitites/plans";
import type { DateFilterPeriod } from "@/shared/types/date-filter-period";

export type UsePlansParams = {
    datacenter?: number;
    fperiod: DateFilterPeriod;
};

export const plansQueryKey = ({ datacenter, fperiod }: UsePlansParams) =>
    ["plans", datacenter ?? "all", fperiod] as const;

const selectForexPlans = (plans: Plan[]) =>
    plans.filter((plan) => plan.titleTag === FOREX_SERVER_TITLE_TAG);

export const usePlans = ({ datacenter, fperiod }: UsePlansParams) =>
    useQuery({
        queryKey: plansQueryKey({ datacenter, fperiod }),
        queryFn: () => fetchPlans({ datacenter, fperiod }),
        select: selectForexPlans,
    });
