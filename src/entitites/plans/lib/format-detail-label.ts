const DETAIL_LABELS: Record<string, string> = {
    "CPU count": "Cores",
    Memory: "RAM",
    "Disk space": "NVMe",
    "Port speed": "Speed",
    network: "Network",
    "Support tier": "Support",
    Bandwidth: "Bandwidth",
    "Traffic volume": "Traffic",
};

export const formatDetailLabel = (name: string): string => DETAIL_LABELS[name] ?? name;
