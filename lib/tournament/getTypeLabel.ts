export const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    nov: "NOV",
    adv: "ADV",
    exh: "EXH",
    mxm: "MXM",
    inf: "INF",
    grv: "GRV",
    hvn: "HVN",
    vvd: "VVD",
    xcd: "XCD",
  }
  return labels[type?.toLowerCase()] || type?.toUpperCase() || ""
}
