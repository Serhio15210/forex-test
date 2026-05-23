import { useCallback, useMemo, useRef, useState } from "react";
import calendarIcon from "../../../assets/icons/calendar.svg";
import dropdownArrowIcon from "../../../assets/icons/dropdown-arrow.svg";
import { DATE_FILTER_OPTIONS } from "../../config/date-filter-options";
import { useDismissOnOutside } from "../../lib/hooks";
import type { DateFilterOption, DateFilterPeriod } from "../../types/date-filter-period";
import styles from "./date-picker.module.scss";

export type { DateFilterOption, DateFilterPeriod };

export type DatePickerProps = {
    value: DateFilterPeriod;
    setValue: (value: DateFilterPeriod) => void;
    options?: readonly DateFilterOption[];
};

export const DatePicker = ({ value, setValue, options = DATE_FILTER_OPTIONS }: DatePickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const selectedLabel = useMemo(
        () => options.find((option) => option.value === value)?.label ?? "",
        [options, value],
    );

    const closeList = useCallback(() => setIsOpen(false), []);

    useDismissOnOutside(wrapperRef, { isActive: isOpen, onDismiss: closeList });

    const handleSelect = useCallback(
        (period: DateFilterPeriod) => {
            setValue(period);
            closeList();
        },
        [setValue, closeList],
    );

    return (
        <div ref={wrapperRef} className={styles.datePickerWrapper}>
            <button
                type="button"
                className={`${styles.datePicker} ${isOpen ? styles.datePickerOpen : ""}`}
                onClick={() => setIsOpen((open) => !open)}
            >
                <img src={calendarIcon} alt="" width={16} height={16} />
                <span className={styles.value}>{selectedLabel}</span>
                <img src={dropdownArrowIcon} alt="" width={11} height={7} className={styles.arrow} />
            </button>

            <ul
                className={`${styles.datePickerList} ${isOpen ? styles.datePickerListOpen : ""}`}
            >
                {options.map((option) => {
                    const isActive = option.value === value;

                    return (
                        <li key={option.value}>
                            <button
                                type="button"
                                tabIndex={isOpen ? 0 : -1}
                                className={`${styles.listItem} ${isActive ? styles.listItemActive : ""}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
