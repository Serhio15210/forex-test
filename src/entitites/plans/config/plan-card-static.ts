export const TERMINALS_TOOLTIP_TEXT =
    "This value is the plan CPU count from your tariff. Each terminal is a separate slot for a trading platform (e.g. MetaTrader) you can run at the same time on this VPS.";

export const buildPlanBuyHref = (planId: string): string =>
    `/buy?plan=${encodeURIComponent(planId)}`;
