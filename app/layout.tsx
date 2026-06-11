import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accolyx | Accounting and Advisory Services",
  description:
    "Accounting and advisory services for IFRS reporting, internal audit, IT audit, cyber security, controls, and finance operations.",
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
