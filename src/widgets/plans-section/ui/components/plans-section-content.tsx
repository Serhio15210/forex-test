import type { DateFilterPeriod } from "@/shared/types/date-filter-period";
import type { PlansSectionState } from "../../hooks/use-plans-section";
import { PlansGrid } from "./plans-grid";
import { PlansLoadingGrid } from "./plans-loading-grid";
import { PlansStatePanel } from "./plans-state-panel";

type PlansSectionContentProps = {
    state: PlansSectionState;
    fperiod: DateFilterPeriod;
};

export const PlansSectionContent = ({ state, fperiod }: PlansSectionContentProps) => {
    switch (state.status) {
        case "loading":
            return <PlansLoadingGrid />;
        case "error":
            return (
                <PlansStatePanel title="Failed to load plans" text={state.message} />
            );
        case "empty":
            return (
                <PlansStatePanel
                    title="No plans available"
                    text="There are no tariffs for the selected data center and billing period. Try changing the filters above."
                />
            );
        case "success":
            return (
                <PlansGrid
                    plans={state.plans}
                    fperiod={fperiod}
                    bestChoicePlanId={state.bestChoicePlanId}
                />
            );
    }
};
