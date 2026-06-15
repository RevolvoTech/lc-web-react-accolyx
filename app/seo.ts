const fallbackSiteUrl = "https://www.accolyx.com";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Accolyx",
  title: "Accolyx | Accounting, IFRS, Audit & Cyber Security Advisory",
  description:
    "Accolyx provides focused accounting, IFRS, advisory, internal audit, IT audit, and cyber security support for businesses that need clearer financial decisions.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl),
  email: "info@accolyx.com",
  logoPath: "/brand/accolyx-mark.png",
  ogImagePath: "/brand/accolyx-og.png",
  locale: "en_US",
  keywords: [
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
        "Technical accounting, disclosure support, and financial statement preparation.",
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
