export type Locale = "sr" | "en";

export const locales: Locale[] = ["sr", "en"];
export const defaultLocale: Locale = "sr";

export const localizedRoutes = {
  intro: {
    sr: "/sr",
    en: "/en",
  },
  solar: {
    sr: "/sr/solarni-sistemi",
    en: "/en/solar-systems",
  },
  drones: {
    sr: "/sr/dronovi",
    en: "/en/drones",
  },
  security: {
    sr: "/sr/sigurnosni-sistemi",
    en: "/en/security-systems",
  },
  about: {
    sr: "/sr/o-nama",
    en: "/en/about",
  },
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

const localizedRouteEntries = Object.entries(localizedRoutes) as Array<
  [RouteKey, Record<Locale, string>]
>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getRouteKey(pathname: string): RouteKey {
  const cleanPath = pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/";

  if (legacyRouteMap[cleanPath]) {
    return legacyRouteMap[cleanPath];
  }

  for (const [key, paths] of localizedRouteEntries) {
    if (Object.values(paths).includes(cleanPath)) {
      return key;
    }
  }

  return "intro";
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function getLocalizedPath(routeKey: RouteKey, locale: Locale) {
  return localizedRoutes[routeKey][locale];
}

export function withHash(path: string, hash?: string) {
  return hash ? `${path}${hash}` : path;
}
