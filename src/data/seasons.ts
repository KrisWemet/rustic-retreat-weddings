import content from "@/data/site-content.json";

type Package = (typeof content.packages.packages)[number];
type SeasonInfo = { weekendsLeft?: number; months: string; status?: string };

const seasonInfo: Record<string, SeasonInfo> = content.packages.seasons;

// Pricing is set by the wedding year: 2028 prices apply to every 2028 wedding.
export const SEASONS = ["2027", "2028"] as const;
export type Season = (typeof SEASONS)[number];

export const priceFor = (pkg: Package, season: Season) => (season === "2027" ? pkg.price : pkg.price2028);

const toNumber = (price: string) => Number(price.replace(/,/g, ""));

export const weekendsLeft = (season: Season) => seasonInfo[season]?.weekendsLeft;

export const isSoldOut = (season: Season) => weekendsLeft(season) === 0;

// Show the earliest season that still has dates open.
export const DEFAULT_SEASON: Season = SEASONS.find((season) => !isSoldOut(season)) ?? SEASONS[SEASONS.length - 1];

// The 2027 saving over 2028, only when it is the same for every package.
const savings = [...new Set(content.packages.packages.map((pkg) => toNumber(pkg.price2028) - toNumber(pkg.price)))];
export const SEASON_SAVING = savings.length === 1 && savings[0] > 0 ? savings[0].toLocaleString("en-CA") : null;

export const seasonNote = (season: Season) => {
  const info = seasonInfo[season];
  const left = info?.weekendsLeft;
  if (season === "2027") {
    if (left === 0) return "2027 is fully booked. 2028 dates are open.";
    const count = left === undefined ? "" : `Only ${left} weekend${left === 1 ? "" : "s"} left for ${info.months} 2027. `;
    const saving = SEASON_SAVING ? `2027 weddings are $${SEASON_SAVING} less than 2028.` : "";
    return `${count}${saving}`.trim();
  }
  return `${info?.status ?? ""} 2028 pricing applies to every 2028 wedding.`.trim();
};
