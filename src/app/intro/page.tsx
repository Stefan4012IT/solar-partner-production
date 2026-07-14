"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getLocaleFromValue } from "@/lib/i18n";
import { IntroExperience } from "./IntroExperience";

export default function IntroPage() {
  return (
    <Suspense fallback={null}>
      <IntroPageContent />
    </Suspense>
  );
}

function IntroPageContent() {
  const searchParams = useSearchParams();
  return <IntroExperience locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
