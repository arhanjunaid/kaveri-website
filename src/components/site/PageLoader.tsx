"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const startedAt = useRef(Date.now());
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const failSafeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const hide = (minimum = 0) => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      const remaining = Math.max(0, minimum - (Date.now() - startedAt.current));
      hideTimer.current = setTimeout(() => setVisible(false), remaining);
    };

    startedAt.current = Date.now();
    hide(1100);
    const handleNavigation = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return;
      const next = new URL(anchor.href, window.location.href);
      if (next.origin !== window.location.origin || next.pathname === window.location.pathname) return;

      startedAt.current = Date.now();
      setVisible(true);
      if (failSafeTimer.current) clearTimeout(failSafeTimer.current);
      failSafeTimer.current = setTimeout(() => setVisible(false), 12000);
    };

    document.addEventListener("click", handleNavigation);
    return () => {
      document.removeEventListener("click", handleNavigation);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (failSafeTimer.current) clearTimeout(failSafeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (pathname === previousPathname.current) return;
    previousPathname.current = pathname;
    if (failSafeTimer.current) clearTimeout(failSafeTimer.current);
    if (!visible) return;
    const elapsed = Date.now() - startedAt.current;
    const remaining = Math.max(300, 1100 - elapsed);
    hideTimer.current = setTimeout(() => setVisible(false), remaining);
  }, [pathname]);

  return <div className={`page-loader${visible ? " is-visible" : ""}`} role="status" aria-label="Loading Kaveri HealthTech">
    <div className="page-loader-content">
      <svg className="loader-heart" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 41s-17-10.8-17-23A9.2 9.2 0 0 1 24 12a9.2 9.2 0 0 1 17 6c0 12.2-17 23-17 23Z" />
      </svg>
      <svg className="heartbeat-line" viewBox="0 0 220 40" aria-hidden="true">
        <path d="M2 20h62l10 0 8-10 9 21 10-27 10 23 8-7h99" />
      </svg>
      <span>Kaveri HealthTech</span>
      <small>Care in motion</small>
    </div>
  </div>;
}
