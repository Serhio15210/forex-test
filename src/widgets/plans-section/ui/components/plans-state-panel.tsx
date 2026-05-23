import styles from "../plans-section.module.scss";

type PlansStatePanelProps = {
    title: string;
    text: string;
};

export const PlansStatePanel = ({ title, text }: PlansStatePanelProps) => (
    <div className={styles.statePanel}>
        <p className={styles.stateTitle}>{title}</p>
        <p className={styles.stateText}>{text}</p>
    </div>
);
