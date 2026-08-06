export function outcomeTone(outcome: string): string {
  if (outcome === "PASS") return "pass";
  if (outcome === "PARTIAL") return "partial";
  return "fail";
}
