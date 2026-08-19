"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const navItems = [
  ["Events", "#events"],
  ["Volunteer", "#volunteer"],
  ["Resources", "#resources"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Clarkson Elementary PTO home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><img src="/redhawk.png" alt="Clarkson Redhawk" /></span>
          <span><strong>Clarkson</strong><small>Elementary PTO</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a className="button button-dark header-login" href="/members">Member area</a>
          <div className={`mobile-menu ${open ? "is-open" : ""}`}>
            <button
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
