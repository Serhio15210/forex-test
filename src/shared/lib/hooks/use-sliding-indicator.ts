import { useCallback, useLayoutEffect, useRef, useState } from "react";

export type SlidingIndicatorState = {
    left: number;
    width: number;
    opacity: number;
};

const HIDDEN_INDICATOR: SlidingIndicatorState = { left: 0, width: 0, opacity: 0 };

export const useSlidingIndicator = <TId>(selectedId: TId | null, ...remeasureDeps: unknown[]) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef(new Map<TId, HTMLElement>());
    const [indicator, setIndicator] = useState<SlidingIndicatorState>(HIDDEN_INDICATOR);

    const updateIndicator = useCallback(() => {
        if (selectedId === null) {
            setIndicator(HIDDEN_INDICATOR);
            return;
        }

        const item = itemRefs.current.get(selectedId);
        const container = containerRef.current;

        if (!item || !container) {
            return;
        }

        setIndicator({
            left: item.offsetLeft,
            width: item.offsetWidth,
            opacity: 1,
        });
    }, [selectedId]);

    useLayoutEffect(() => {
        updateIndicator();
    }, [updateIndicator, ...remeasureDeps]);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const resizeObserver = new ResizeObserver(updateIndicator);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, [updateIndicator]);

    const setItemRef = useCallback((id: TId, element: HTMLElement | null) => {
        if (element) {
            itemRefs.current.set(id, element);
            return;
        }

        itemRefs.current.delete(id);
    }, []);

    return {
        containerRef,
        setItemRef,
        indicator,
    };
};
