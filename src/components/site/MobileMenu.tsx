"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItem = { href: string; label: string };

export function MobileMenu({ items }: { items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return <>
    <button
      type="button"
      className={`mobile-menu-toggle${isOpen ? " is-open" : ""}`}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-site-menu"
      onClick={() => setIsOpen((open) => !open)}
    >
      <span />
      <span />
      <span />
    </button>
    {isOpen ? <nav id="mobile-site-menu" className="mobile-menu-panel" aria-label="Mobile navigation">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return <Link key={item.href} href={item.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined} onClick={() => setIsOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>;
      })}
    </nav> : null}
  </>;
}
