import yellowCheckIcon from "@/assets/icons/yellow-check.svg";
import styles from "../plan-card.module.scss";

type PlanFeaturesSectionProps = {
    features: string[];
};

export const PlanFeaturesSection = ({ features }: PlanFeaturesSectionProps) => {
    if (features.length === 0) {
        return null;
    }

    return (
        <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Features</h4>
            <ul className={styles.featuresList}>
                {features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                        <img src={yellowCheckIcon} alt="" width={16} height={16} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
