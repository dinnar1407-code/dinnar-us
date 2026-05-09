/**
 * Customer-name desensitization rules.
 * Applied at content-build time AND as a runtime safety net for any string
 * that might leak into UI. Keep this list in sync with content-scraped/scrape.py.
 */

const RULES: Array<[RegExp, string]> = [
  [/\b(Apple|iPhone|iPad|MacBook)\b/g, "Fortune 500 Consumer Electronics Leader"],
  [/苹果/g, "Fortune 500 Consumer Electronics Leader"],
  [/\bTesla\b/g, "Global Leading EV Manufacturer"],
  [/特斯拉/g, "Global Leading EV Manufacturer"],
  [/\bCATL\b/g, "Global Top Battery Manufacturer"],
  [/宁德时代/g, "Global Top Battery Manufacturer"],
  [/\bBosch\b/g, "Global Tier-1 Automotive Supplier"],
  [/博世/g, "Global Tier-1 Automotive Supplier"],
  [/\bLG\b/g, "Global Display Technology Leader"],
  [/\bBOE\b/g, "Leading Display Panel Manufacturer"],
  [/京东方/g, "Leading Display Panel Manufacturer"],
  [/\b(Huawei)\b/g, "Leading Telecom & Devices OEM"],
  [/华为/g, "Leading Telecom & Devices OEM"],
  [/\b(Xiaomi)\b/g, "Top Consumer Electronics OEM"],
  [/小米/g, "Top Consumer Electronics OEM"],
  [/\b(OPPO|VIVO|vivo)\b/g, "Tier-1 Mobile OEM"],
  [/\b(Samsung)\b/g, "Global Display & Devices Leader"],
  [/三星/g, "Global Display & Devices Leader"],
  [/\b(BYD)\b/g, "Top EV & Battery Manufacturer"],
  [/比亚迪/g, "Top EV & Battery Manufacturer"],
];

export function desensitize(input: string): string {
  let out = input;
  for (const [pat, repl] of RULES) {
    out = out.replace(pat, repl);
  }
  return out;
}
