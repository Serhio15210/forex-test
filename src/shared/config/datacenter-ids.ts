export const ALLOWED_DATACENTER_IDS = [12, 17, 19] as const;

export type AllowedDatacenterId = (typeof ALLOWED_DATACENTER_IDS)[number];

export const ALL_DATACENTERS_PARAM = ALLOWED_DATACENTER_IDS.join(",");

export const isAllowedDatacenterId = (datacenter: number): datacenter is AllowedDatacenterId =>
    (ALLOWED_DATACENTER_IDS as readonly number[]).includes(datacenter);

export const resolveDatacenterParam = (datacenter?: number): string => {
    if (datacenter === undefined) {
        return ALL_DATACENTERS_PARAM;
    }

    if (!isAllowedDatacenterId(datacenter)) {
        throw new Error(
            `Invalid datacenter "${datacenter}". Allowed values: ${ALLOWED_DATACENTER_IDS.join(", ")}`,
        );
    }

    return String(datacenter);
};
