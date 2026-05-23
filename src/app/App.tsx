import { useCallback, useState } from "react";
import { PageHeader } from "@/widgets/page-header";
import { PlansSection } from "@/widgets/plans-section";
import { DEFAULT_DATE_FILTER_PERIOD } from "@/shared/config/date-filter-options";
import type { DateFilterPeriod } from "@/shared/types/date-filter-period";

function App() {
    const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
    const [dateFilter, setDateFilter] = useState<DateFilterPeriod>(DEFAULT_DATE_FILTER_PERIOD);

    const handleClearFilters = useCallback(() => {
        setSelectedCountry(null);
        setDateFilter(DEFAULT_DATE_FILTER_PERIOD);
    }, []);

    return (
        <section>
            <PageHeader
                selectedCountry={selectedCountry}
                onCountrySelect={setSelectedCountry}
                dateFilter={dateFilter}
                onDateFilterChange={setDateFilter}
                onClearFilters={handleClearFilters}
            />
            <PlansSection datacenter={selectedCountry ?? undefined} fperiod={dateFilter} />
        </section>
    );
}

export default App;
