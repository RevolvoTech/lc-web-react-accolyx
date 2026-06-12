import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accolyx | Accounting, Audit & Advisory",
  description:
    "Focused accounting, IFRS, advisory, internal audit, IT audit, and cyber security support for clearer financial decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
