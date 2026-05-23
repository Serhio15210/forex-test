import type { Plan } from "../../model/types";
import { useFeaturesDropdown } from "../hooks/use-features-dropdown";
import styles from "./features-dropdown.module.scss";

type FeaturesDropdownProps = {
    plan: Plan;
};

export const FeaturesDropdown = ({ plan }: FeaturesDropdownProps) => {
    const { isOpen, rows, specsLine, toggleDropdown, wrapperRef } = useFeaturesDropdown(plan);

    return (
        <div ref={wrapperRef} className={`${styles.wrapper} ${isOpen ? styles.wrapperOpen : ""}`}>
            <div className={`${styles.specsBar} ${isOpen ? styles.specsBarOpen : ""}`}>
                <span className={styles.specsText}>{specsLine}</span>
                <button
                    type="button"
                    className={`${styles.menuButton} ${isOpen ? styles.menuButtonActive : ""}`}
                    onClick={toggleDropdown}
                >
                    <span className={styles.menuDots} />
                </button>
            </div>

            <div className={styles.dropdownPanel}>
                <div className={styles.dropdownPanelInner}>
                    <ul className={styles.dropdown}>
                        {rows.map((row) => (
                            <li key={row.id} className={styles.dropdownRow}>
                                <span className={styles.dropdownLabel}>{row.label}</span>
                                <span className={styles.dropdownValue}>{row.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
