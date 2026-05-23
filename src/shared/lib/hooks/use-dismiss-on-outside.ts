import { type RefObject, useEffect } from "react";

type UseDismissOnOutsideOptions = {
    isActive: boolean;
    onDismiss: () => void;
};

export const useDismissOnOutside = <T extends HTMLElement>(
    ref: RefObject<T | null>,
    { isActive, onDismiss }: UseDismissOnOutsideOptions,
) => {
    useEffect(() => {
        if (!isActive) {
            return;
        }

        const handlePointerDown = (event: PointerEvent) => {
            if (!ref.current?.contains(event.target as Node)) {
                onDismiss();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onDismiss();
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isActive, onDismiss, ref]);
};
