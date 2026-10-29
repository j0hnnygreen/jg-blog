"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const renderedLinks = LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`${styles.link}${isActive(pathname, link.href) ? ` ${styles.linkActive}` : ""}`}
      onClick={() => setMenuOpen(false)}
      aria-current={isActive(pathname, link.href) ? "page" : undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="johnnygreen — home">
          <span className={styles.brandMark} aria-hidden="true">
            &gt;_
          </span>
          <span className={styles.brandText}>johnnygreen</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {renderedLinks}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls={styles.mobileMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <div
          id={styles.mobileMenu}
          className={`${styles.mobileMenu}${menuOpen ? "" : ` ${styles.mobileMenuClosed}`}`}
        >
          {renderedLinks}
        </div>
      </div>
    </header>
  );
}
