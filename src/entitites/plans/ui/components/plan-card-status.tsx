import styles from "../plan-card.module.scss";

type PlanCardStatusProps = {
    isBestChoice: boolean;
    isSoldOut: boolean;
    soldOutTooltip: string;
};

export const PlanCardStatus = ({
    isBestChoice,
    isSoldOut,
    soldOutTooltip,
}: PlanCardStatusProps) => (
    <>
        {isSoldOut ? (
            <span className={styles.soldOutTooltip}>
                {soldOutTooltip}
            </span>
        ) : null}
        {isBestChoice ? <div className={styles.bestChoice}>Best choice</div> : null}
    </>
);
