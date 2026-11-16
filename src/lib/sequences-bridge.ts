const counters: Record<"LIHLO" | "KF", number> = { LIHLO: 0, KF: 13 };
export function nextSequenceId(prefix: "LIHLO" | "KF") {
  counters[prefix] += 1;
  return `${prefix}-DEMO-2026-${String(counters[prefix]).padStart(5, "0")}`;
}
