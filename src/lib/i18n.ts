export type Locale = "sr" | "en";

export const locales: Locale[] = ["sr", "en"];
export const defaultLocale: Locale = "sr";

export const localizedRoutes = {
  intro: "/",
  solar: "/solarni-sistemi",
  drones: "/dronovi",
  security: "/sigurnosni-sistemi",
  about: "/o-nama",
} as const;

export type RouteKey = keyof typeof localizedRoutes;

const legacyRouteMap: Record<string, RouteKey> = {
  "/": "intro",
  "/intro": "intro",
  "/solarni-sistemi": "solar",
  "/dronovi": "drones",
  "/profesionalni-dronovi": "drones",
  "/sigurnosni-sistemi": "security",
  "/o-nama": "about",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getRouteKey(pathname: string): RouteKey {
  const cleanPath = pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/";

  if (legacyRouteMap[cleanPath]) {
    return legacyRouteMap[cleanPath];
  }

  return "intro";
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function getLocaleFromValue(value?: string | string[] | null): Locale {
  const locale = Array.isArray(value) ? value[0] : value;

  return locale && isLocale(locale) ? locale : defaultLocale;
}

export function getLocalizedPath(routeKey: RouteKey, locale?: Locale) {
  const path = localizedRoutes[routeKey];

  return locale && locale !== defaultLocale ? `${path}?lang=${locale}` : path;
}

export function withHash(path: string, hash?: string) {
  if (!hash) {
    return path;
  }

  const [basePath, queryString] = path.split("?");

  return queryString ? `${basePath}?${queryString}${hash}` : `${basePath}${hash}`;
}
