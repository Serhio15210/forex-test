import { useCallback, useMemo, useRef, useState } from "react";
import { formatDetailLabel } from "../../lib/format-detail-label";
import { buildSpecsLine } from "../../lib/format-plan";
import type { Plan } from "../../model/types";
import { useDismissOnOutside } from "@/shared/lib/hooks";

export const useFeaturesDropdown = (plan: Plan) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const specsLine = useMemo(() => buildSpecsLine(plan), [plan]);
    const rows = useMemo(
        () =>
            plan.details.map((detail) => ({
                id: detail.name,
                label: formatDetailLabel(detail.name),
                value: detail.value,
            })),
        [plan.details],
    );

    const closeDropdown = useCallback(() => setIsOpen(false), []);
    const toggleDropdown = useCallback(() => setIsOpen((open) => !open), []);

    useDismissOnOutside(wrapperRef, { isActive: isOpen, onDismiss: closeDropdown });

    return {
        isOpen,
        rows,
        specsLine,
        toggleDropdown,
        wrapperRef,
    };
};
