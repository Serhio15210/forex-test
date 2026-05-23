import { PlanCardSkeleton } from "../plan-card-skeleton";
import styles from "../plans-section.module.scss";

const SKELETON_CARDS_COUNT = 4;

export const PlansLoadingGrid = () => (
    <div className={styles.plansSection}>
        {Array.from({ length: SKELETON_CARDS_COUNT }, (_, index) => (
            <PlanCardSkeleton key={index} />
        ))}
    </div>
);
