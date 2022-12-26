import Link from "next/link";
import styles from "./navigationBar.module.css";

export default function Navbar({ page }) {
  return (
    <header className={styles.navbar}>
      <Link id={page === "home" ? styles.highlightBtn : null} href="/">
        Home
      </Link>
      <Link
        id={page === "resources" ? styles.highlightBtn : null}
        href="/resources"
      >
        Resources
      </Link>
      <Link id={page === "blog" ? styles.highlightBtn : null} href="/blog">
        Blog
      </Link>
    </header>
  );
}
