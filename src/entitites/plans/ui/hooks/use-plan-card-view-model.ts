import { useMemo } from "react";
import { buildPlanBuyHref } from "../../config/plan-card-static";
import { buildPlanFeatures } from "../../lib/build-plan-features";
import { buildPlanTags } from "../../lib/build-plan-tags";
import { buildSoldOutTooltip } from "../../lib/build-sold-out-tooltip";
import {
    formatCurrencySymbol,
    formatPlanPrice,
    getBillingPeriodLabel,
    getPlanDisplayName,
    getPlanTerminalsCount,
} from "../../lib/format-plan";
import { getComponentIconByTerminals } from "../../lib/get-component-icon";
import type { Plan } from "../../model/types";
import type { DateFilterPeriod } from "@/shared/types/date-filter-period";

type UsePlanCardViewModelParams = {
    plan: Plan;
    fperiod: DateFilterPeriod;
};

export const usePlanCardViewModel = ({ plan, fperiod }: UsePlanCardViewModelParams) =>
    useMemo(() => {
        const terminalsCount = getPlanTerminalsCount(plan);

        return {
            displayName: getPlanDisplayName(plan.title),
            terminalsCount,
            componentIcon: terminalsCount ? getComponentIconByTerminals(terminalsCount) : null,
            currencySymbol: formatCurrencySymbol(plan.currency),
            price: formatPlanPrice(plan.price),
            periodLabel: getBillingPeriodLabel(fperiod),
            features: buildPlanFeatures(plan),
            tags: buildPlanTags(plan),
            soldOutTooltip: buildSoldOutTooltip(plan),
            buyHref: buildPlanBuyHref(plan.id),
        };
    }, [fperiod, plan]);
