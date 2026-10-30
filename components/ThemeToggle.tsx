"use client";

import styles from "../styles/Navbar.module.css";

// Three-way theme preference: system (follow the OS) → light → dark → system.
// The preference is stored on <html> as data-theme-pref, the *resolved* theme
// as data-theme. Icons are picked purely in CSS from data-theme-pref, so
// there is never a hydration mismatch: no storage entry = system scheme.
type Pref = "system" | "light" | "dark";

const ORDER: Pref[] = ["system", "light", "dark"];

function apply(pref: Pref) {
  const root = document.documentElement;
  let resolved = pref;

  if (pref === "system") {
    // Drop the override so the OS scheme wins again.
    try {
      localStorage.removeItem("theme");
    } catch {
      // Storage can be unavailable (private mode).
    }
    resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    try {
      localStorage.setItem("theme", pref);
    } catch {
      // Theme still applies for this visit.
    }
  }

  root.dataset.theme = resolved;
  root.dataset.themePref = pref;
}

export default function ThemeToggle() {
  function cycle() {
    const pref = (document.documentElement.dataset.themePref as Pref) || "system";
    const next = ORDER[(ORDER.indexOf(pref) + 1) % ORDER.length];
    apply(next);
  }

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={cycle}
      aria-label="Cycle theme: system, light or dark"
      title="Theme: system → light → dark"
    >
      {/* Shown when the preference is explicitly LIGHT. */}
      <svg
        className={styles.iconSun}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
      </svg>

      {/* ...and the moon when DARK. */}
      <svg
        className={styles.iconMoon}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* ...and this monitor icon when the system scheme is in use. */}
      <svg
        className={styles.iconSystem}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M12 17v3M8 21h8" />
      </svg>
    </button>
  );
}
