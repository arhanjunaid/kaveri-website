"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = { href: string; label: string };

export function SiteNavLinks({ items }: { items: MenuItem[] }) {
  const pathname = usePathname();
  return <nav className="desktop-nav" aria-label="Main navigation">
    {items.map((item) => {
      const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
      return <Link key={item.href} href={item.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}>{item.label}</Link>;
    })}
  </nav>;
}
