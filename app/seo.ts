const fallbackSiteUrl = "https://www.accolyx.com";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Accolyx",
  title: "Accolyx | KSA IFRS 18 & Accounting Advisory",
  description:
    "Accolyx provides KSA-focused IFRS 18 readiness, accounting, advisory, internal audit, IT audit, and cyber security support for businesses in Saudi Arabia.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl),
  email: "info@accolyx.com",
  logoPath: "/brand/accolyx-mark.png",
  ogImagePath: "/brand/accolyx-og.png",
  locale: "en_SA",
  keywords: [
    "KSA IFRS 18",
    "IFRS 18 Saudi Arabia",
    "IFRS 18 KSA advisory",
    "SOCPA IFRS 18",
    "IFRS 18 implementation Saudi Arabia",
    "IFRS 18 readiness",
    "Saudi Arabia IFRS advisory",
    "KSA accounting advisory",
    "accounting services",
    "IFRS advisory",
    "financial reporting support",
    "internal audit",
    "IT audit",
    "cyber security advisory",
    "management reporting",
    "finance process review",
    "controls review",
    "technology risk",
  ],
  services: [
    {
      name: "Accounting",
      description:
        "Month-end close, ledger review, reconciliations, and management reporting support.",
    },
    {
      name: "IFRS",
      description:
        "IFRS 18 readiness, technical accounting, disclosure support, and financial statement preparation.",
    },
    {
      name: "KSA IFRS 18 Readiness",
      description:
        "Saudi Arabia-focused IFRS 18 transition planning, SOCPA-endorsed IFRS review, statement presentation, and disclosure support.",
    },
    {
      name: "Advisory",
      description:
        "Finance process review, cash flow visibility, performance insight, and decision support.",
    },
    {
      name: "Internal Audit",
      description:
        "Risk assessment, control testing, governance review, and practical action plans.",
    },
    {
      name: "IT Audit & Cyber Security",
      description:
        "IT control review, access control assessment, cyber risk review, and remediation planning.",
    },
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
