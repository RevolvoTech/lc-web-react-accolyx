const fallbackSiteUrl = "https://www.accolyx.com";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Accolyx",
  title: "Accolyx | IT Audit, Accounting & Outsourcing",
  description:
    "Accolyx provides IT audit and consultancy alongside audit, accounting, reporting, and finance outsourcing support for businesses that need clearer control and dependable information.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl),
  email: "info@accolyx.com",
  address: {
    streetAddress: "182-184 High Street North",
    addressLocality: "London",
    postalCode: "E6 2JA",
    addressCountry: "GB",
  },
  logoPath: "/brand/accolyx-mark.png",
  ogImagePath: "/brand/accolyx-og.png",
  locale: "en_US",
  keywords: [
    "IT audit",
    "IT audit consultancy",
    "IT general controls review",
    "cyber security advisory",
    "internal audit",
    "accounting outsourcing",
    "bookkeeping services",
    "IFRS advisory",
    "financial reporting support",
    "management reporting",
    "finance function outsourcing",
  ],
  services: [
    {
      name: "IT Audit & Consultancy",
      description:
        "IT general controls, cyber and access risk, systems assurance, control design, and remediation planning.",
    },
    {
      name: "Audit, Accounting & Outsourcing",
      description:
        "Internal audit, accounting and bookkeeping, IFRS and reporting support, and finance function outsourcing.",
    },
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
