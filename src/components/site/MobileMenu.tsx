"use client";

import { useState } from "react";
import Link from "next/link";

type MenuItem = { href: string; label: string };

export function MobileMenu({ items }: { items: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

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
      {items.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}
    </nav> : null}
  </>;
}
