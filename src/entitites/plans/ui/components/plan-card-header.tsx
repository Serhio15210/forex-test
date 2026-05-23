import { FeaturesDropdown } from "./features-dropdown";
import type { Plan } from "../../model/types";
import styles from "../plan-card.module.scss";

type PlanCardHeaderProps = {
    plan: Plan;
    displayName: string;
    currencySymbol: string;
    price: string;
    periodLabel: string;
    componentIcon: string | null;
};

export const PlanCardHeader = ({
    plan,
    displayName,
    currencySymbol,
    price,
    periodLabel,
    componentIcon,
}: PlanCardHeaderProps) => (
    <div className={styles.header}>
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.titleRow}>
                    <h3 className={styles.title}>{displayName}</h3>
                </div>

                <div className={styles.priceRow}>
                    <p className={styles.price}>
                        <span className={styles.currency}>{currencySymbol}</span>
                        <span className={styles.amount}>{price}</span>
                    </p>
                    <span className={styles.period}>{periodLabel}</span>
                </div>
            </div>
            {componentIcon ? (
                <div className={styles.titleIcons}>
                    <img src={componentIcon} alt="" />
                </div>
            ) : null}
        </div>

        <FeaturesDropdown plan={plan} />
    </div>
);
