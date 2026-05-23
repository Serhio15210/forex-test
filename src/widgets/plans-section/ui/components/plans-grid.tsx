import { PlanCard } from "@/entitites/plans";
import type { Plan } from "@/entitites/plans";
import type { DateFilterPeriod } from "@/shared/types/date-filter-period";
import styles from "../plans-section.module.scss";

type PlansGridProps = {
    plans: Plan[];
    fperiod: DateFilterPeriod;
    bestChoicePlanId: string | null;
};

export const PlansGrid = ({ plans, fperiod, bestChoicePlanId }: PlansGridProps) => (
    <div className={styles.plansSection}>
        {plans.map((plan) => (
            <PlanCard
                key={plan.keyvalue}
                plan={plan}
                fperiod={fperiod}
                isBestChoice={plan.id === bestChoicePlanId}
            />
        ))}
    </div>
);
