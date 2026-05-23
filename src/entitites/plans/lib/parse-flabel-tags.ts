import type { PlanLabelTag } from "../model/types";

export const parseFlabelTag = (rawTag: string): PlanLabelTag | null => {
    const decoded = decodeURIComponent(rawTag);

    if (!decoded.includes(":")) {
        return null;
    }

    const separatorIndex = decoded.indexOf(":");
    const key = decoded.slice(0, separatorIndex).trim();
    const value = decoded.slice(separatorIndex + 1).trim();

    if (!key || !value) {
        return null;
    }

    return { key, value };
};

export const parseFlabelTags = (rawTags: string[]): PlanLabelTag[] =>
    rawTags.map(parseFlabelTag).filter((tag): tag is PlanLabelTag => tag !== null);
