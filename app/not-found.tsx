import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NotFound() {
  return (
    <div className="site-main">
      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <span className={styles.dots} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className={styles.terminalTitle} aria-hidden="true">
            404.sh
          </span>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.line}>
            <span className={styles.prompt}>root@root</span>
            <span className={styles.path}>:~$</span> grep -r &quot;this
            page&quot; ~/*
          </p>
          <p className={styles.line}>
            <span className={styles.output}>
              &gt; error: 404 — nothing to show here
            </span>
          </p>
          <p className={styles.line}>
            <span className={styles.prompt}>root@root</span>
            <span className={styles.path}>:~$</span> cd{" "}
            <Link href="/" className={styles.socialLink}>
              ~
            </Link>
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          color: "var(--text-muted)",
        }}
      >
        <Link href="/" className={styles.socialLink}>
          &larr; Back to the homepage
        </Link>
      </p>
    </div>
  );
}
