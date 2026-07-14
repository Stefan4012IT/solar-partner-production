"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getLocaleFromValue } from "@/lib/i18n";
import { IntroExperience } from "./intro/IntroExperience";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  return <IntroExperience locale={getLocaleFromValue(searchParams.get("lang"))} />;
}
