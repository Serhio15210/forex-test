import { forwardRef } from "react";
import type { DataCenterCountry } from "../../../../types/data-center-country";
import styles from "./country-option.module.scss";

export type CountryOptionProps = {
    country: DataCenterCountry;
    isSelected: boolean;
    onSelect: (countryNumber: number) => void;
};

export const CountryOption = forwardRef<HTMLButtonElement, CountryOptionProps>(
    ({ country, isSelected, onSelect }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={`${styles.option} ${isSelected ? styles.optionSelected : ""}`}
                onClick={() => onSelect(country.number)}
            >
                <img
                    src={country.image}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.flag}
                    loading="lazy"
                />
                <span className={styles.name}>{country.name}</span>
            </button>
        );
    },
);

CountryOption.displayName = "CountryOption";
