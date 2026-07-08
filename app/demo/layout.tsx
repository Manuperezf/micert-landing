import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/demo" },
  robots: { index: false, follow: true },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
