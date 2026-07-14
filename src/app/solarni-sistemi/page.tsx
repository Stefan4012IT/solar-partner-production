"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getLocaleFromValue } from "@/lib/i18n";
import { SolarSystemsPage } from "./SolarSystemsPage";

export default function SolarSystemsRoute() {
  return (
    <Suspense fallback={null}>
      <SolarSystemsRouteContent />
    </Suspense>
  );
}

function SolarSystemsRouteContent() {
  const searchParams = useSearchParams();
  return <SolarSystemsPage locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
