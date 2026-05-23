import component1Icon from "@/assets/icons/component.svg";
import component2Icon from "@/assets/icons/component2.svg";
import component3Icon from "@/assets/icons/component3.svg";
import component4Icon from "@/assets/icons/component4.svg";
import component6Icon from "@/assets/icons/component6.svg";

const COMPONENT_ICONS = {
    1: component1Icon,
    2: component2Icon,
    3: component3Icon,
    4: component4Icon,
} as const;

export const getComponentIconByTerminals = (terminalsRaw: string): string => {
    const terminals = Number.parseInt(terminalsRaw.trim(), 10);

    if (!Number.isFinite(terminals) || terminals < 1) {
        return component1Icon;
    }

    if (terminals >= 5) {
        return component6Icon;
    }

    return COMPONENT_ICONS[terminals as keyof typeof COMPONENT_ICONS] ?? component6Icon;
};
