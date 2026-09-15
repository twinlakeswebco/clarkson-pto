"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

const navItems = [
  ["Events", "#events"],
  ["Volunteer", "#volunteer"],
  ["Resources", "#resources"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

// Matches the CSS breakpoint where the desktop navigation replaces the menu.
const DESKTOP_NAV_QUERY = "(min-width: 980px)";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close when the layout switches to desktop navigation. A plain resize
  // listener would also fire when mobile browser toolbars collapse on scroll.
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_NAV_QUERY);
    const close = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);

  // Close on Escape or on a tap/click outside the menu while it is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Clarkson Elementary PTO home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><img src="/redhawk.png" alt="" /></span>
          <span><strong>Clarkson</strong><small>Elementary PTO</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="button button-dark header-login" href="/members">Member area</a>
          <div className={`mobile-menu ${open ? "is-open" : ""}`} ref={menuRef}>
            <button
              ref={toggleRef}
              className="mobile-menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
            {open && (
              <nav id="mobile-navigation" aria-label="Mobile navigation">
                {navItems.map(([label, href]) => (
                  <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
                ))}
                <a href="/members">Member area</a>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
