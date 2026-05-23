import questionIcon from "@/assets/icons/question.svg";
import terminalIcon from "@/assets/icons/terminal.svg";
import { TERMINALS_TOOLTIP_TEXT } from "../../config/plan-card-static";
import styles from "../plan-card.module.scss";

type PlanTerminalsRowProps = {
    terminalsCount: string;
};

export const PlanTerminalsRow = ({ terminalsCount }: PlanTerminalsRowProps) => (
    <div className={styles.terminalsRow}>
        <img src={terminalIcon} alt="" width={14} height={14} className={styles.terminalsIcon} />
        <span className={styles.terminalsLabel}>Terminals</span>
        <span className={styles.terminalsValue}>{terminalsCount}</span>
        <span className={styles.terminalsHintWrapper}>
            <button type="button" className={styles.terminalsHintButton}>
                <img src={questionIcon} alt="" width={16} height={16} />
            </button>
            <span className={styles.terminalsTooltip}>
                {TERMINALS_TOOLTIP_TEXT}
            </span>
        </span>
    </div>
);
