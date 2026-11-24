import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Kaveri HealthTech | Care that moves with you", template: "%s | Kaveri HealthTech" },
  description: "Patient-first medical transport and healthcare support, delivered with skill, compassion and calm.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
