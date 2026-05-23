import { DATA_CENTER_COUNTRIES } from "@/shared/config/data-center-countries";
import { DEFAULT_DATE_FILTER_PERIOD } from "@/shared/config/date-filter-options";
import { DataCenterSelect, DatePicker } from "@/shared";
import type { DateFilterPeriod } from "@/shared";
import styles from "./page-header.module.scss";

export type PageHeaderProps = {
    selectedCountry: number | null;
    onCountrySelect: (countryNumber: number) => void;
    dateFilter: DateFilterPeriod;
    onDateFilterChange: (period: DateFilterPeriod) => void;
    onClearFilters: () => void;
};

export const PageHeader = ({
    selectedCountry,
    onCountrySelect,
    dateFilter,
    onDateFilterChange,
    onClearFilters,
}: PageHeaderProps) => {
    const hasActiveFilters = selectedCountry !== null || dateFilter !== DEFAULT_DATE_FILTER_PERIOD;

    return (
        <div className={styles.pageHeader}>
            <h1>Buy Forex VPS plans</h1>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <label>Data Center</label>
                    <DataCenterSelect
                        selectedCountry={selectedCountry}
                        onCountrySelect={onCountrySelect}
                        countries={DATA_CENTER_COUNTRIES}
                    />
                </div>
                <div className={styles.filter}>
                    <label>Billing period</label>
                    <DatePicker value={dateFilter} setValue={onDateFilterChange} />
                </div>
                <button
                    type="button"
                    className={styles.clearButton}
                    onClick={onClearFilters}
                    disabled={!hasActiveFilters}
                >
                    Clear filters
                </button>
            </div>
        </div>
    );
};
