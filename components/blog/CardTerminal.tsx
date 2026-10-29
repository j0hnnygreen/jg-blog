"use client";

import { useRef, useState } from "react";
import styles from "../../styles/Terminal.module.css";

export default function CardTerminal({
  children,
  title = "terminal",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bodyRef.current?.innerText ?? "");
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1300);
    } catch {
      // Clipboard not available (e.g. insecure context)
    }
  }

  return (
    <figure className={styles.terminal}>
      <figcaption className={styles.bar}>
        <span className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.title} aria-hidden="true">
          {title}
        </span>
        <button
          type="button"
          className={`${styles.copyBtn}${copied ? ` ${styles.copyBtnDone}` : ""}`}
          onClick={handleCopy}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </figcaption>
      <div ref={bodyRef} className={styles.body}>
        {children}
      </div>
    </figure>
  );
}
