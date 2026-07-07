import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/demo" },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
