import styles from "../plan-card.module.scss";

type PlanTagsSectionProps = {
    tags: string[];
};

export const PlanTagsSection = ({ tags }: PlanTagsSectionProps) => {
    if (tags.length === 0) {
        return null;
    }

    return (
        <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Labels</h4>
            <div className={styles.tags}>
                {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </section>
    );
};
