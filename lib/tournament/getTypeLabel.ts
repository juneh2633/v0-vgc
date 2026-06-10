export const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    novice: "NOV",
    nov: "NOV",
    advanced: "ADV",
    adv: "ADV",
    exhaust: "EXH",
    exh: "EXH",
    maximum: "MXM",
    mxm: "MXM",
    infinite: "INF",
    inf: "INF",
    gravity: "GRV",
    grv: "GRV",
    heavenly: "HVN",
    hvn: "HVN",
    vivid: "VVD",
    vvd: "VVD",
    exceed: "XCD",
    xcd: "XCD",
    ultimate: "ULT",
    ult: "ULT",
    nabla: "NBL",
    nbl: "NBL",
  }
  return labels[type?.toLowerCase()] || type?.toUpperCase() || ""
}
