"use client";

import styles from "./page.module.scss";

type PlatformInquiryLinkProps = {
  children: React.ReactNode;
  platform: string;
};

export function PlatformInquiryLink({ children, platform }: PlatformInquiryLinkProps) {
  return (
    <a
      className={styles.platformCta}
      href="#upit"
      onClick={(event) => {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("drone-platform-select", { detail: { platform } }));
        window.history.replaceState(null, "", "#upit");
        document.getElementById("upit")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}
