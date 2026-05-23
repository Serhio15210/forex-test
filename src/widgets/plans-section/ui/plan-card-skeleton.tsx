import styles from "./plan-card-skeleton.module.scss";

export const PlanCardSkeleton = () => {
    return (
        <article className={styles.planCardSkeleton}>
            <div className={styles.header}>
                <div className={styles.titleBlock}>
                    <span className={`${styles.bone} ${styles.title}`} />
                    <span className={`${styles.bone} ${styles.price}`} />
                </div>
                <span className={`${styles.bone} ${styles.icon}`} />
            </div>
            <span className={`${styles.bone} ${styles.specsBar}`} />
            <span className={`${styles.bone} ${styles.terminalsRow}`} />
            <div className={styles.features}>
                <span className={`${styles.bone} ${styles.feature}`} />
                <span className={`${styles.bone} ${styles.feature}`} />
                <span className={`${styles.bone} ${styles.feature}`} />
            </div>
            <div className={styles.tags}>
                <span className={`${styles.bone} ${styles.tag}`} />
                <span className={`${styles.bone} ${styles.tag}`} />
                <span className={`${styles.bone} ${styles.tag}`} />
            </div>
            <div className={styles.footer}>
                <span className={`${styles.bone} ${styles.buyButton}`} />
                <span className={`${styles.bone} ${styles.cartButton}`} />
            </div>
        </article>
    );
};
