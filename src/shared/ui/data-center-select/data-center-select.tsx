import type { DataCenterCountry } from "../../types/data-center-country";
import { useSlidingIndicator } from "../../lib/hooks";
import styles from "./data-center.module.scss";
import { CountryOption } from "./ui/country-option";

export type DataCenterSelectProps = {
    selectedCountry: number | null;
    onCountrySelect: (countryNumber: number) => void;
    countries: readonly DataCenterCountry[];
};

export const DataCenterSelect = ({
    selectedCountry,
    onCountrySelect,
    countries,
}: DataCenterSelectProps) => {
    const { containerRef, setItemRef, indicator } = useSlidingIndicator(selectedCountry, countries);

    return (
        <div ref={containerRef} className={styles.dataCenter}>
            <span
                className={styles.indicator}
                style={{
                    transform: `translateX(${indicator.left}px)`,
                    width: indicator.width,
                    opacity: indicator.opacity,
                }}
            />
            {countries.map((country) => (
                <CountryOption
                    key={country.number}
                    ref={(element) => setItemRef(country.number, element)}
                    country={country}
                    isSelected={selectedCountry === country.number}
                    onSelect={onCountrySelect}
                />
            ))}
        </div>
    );
};
