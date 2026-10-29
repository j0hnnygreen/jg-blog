import { GithubIcon, TwitterIcon } from "./icons";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} johnnygreen — built with Next.js
        </p>
        <div className={styles.socials}>
          <a
            className={styles.socialLink}
            href="https://twitter.com/@im_greej"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            className={styles.socialLink}
            href="https://github.com/j0hnnygreen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
