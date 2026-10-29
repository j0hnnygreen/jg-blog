import Link from "next/link";
import { ArrowRightIcon } from "../components/icons";
import styles from "../styles/Home.module.css";

const SHORTCUTS = [
  {
    href: "/blog",
    title: "~/blog",
    description: "Notes and write-ups on networking, reversing, math and more.",
  },
  {
    href: "/resources",
    title: "~/resources",
    description:
      "Curated cybersecurity tools, cheatsheets and privilege escalation resources.",
  },
  {
    href: "/resources/reverseshells",
    title: "~/reverse-shells",
    description: "Reverse shell payloads for any IP and port, ready to copy.",
  },
] as const;

export default function Home() {
  return (
    <div className="site-main">
      <section className={styles.hero}>
        <h1 className={styles.heading}>Welcome to my site!</h1>

        <p className={styles.tagline}>
          I&apos;m a <strong>Cybersecurity Enthusiast</strong> and a{" "}
          <strong>Full-Stack Developer</strong>. This website contains tools and
          resources about Cybersecurity and other Computer Science related
          topics.
        </p>

        <div className={styles.cards}>
          {SHORTCUTS.map((shortcut) => (
            <Link key={shortcut.href} href={shortcut.href} className={styles.card}>
              <span className={styles.cardTitle}>
                {shortcut.title}
                <span className={styles.cardArrow}>
                  <ArrowRightIcon />
                </span>
              </span>
              <span className={styles.cardDesc}>{shortcut.description}</span>
            </Link>
          ))}
        </div>

        <div className={styles.terminal}>
          <div className={styles.terminalBar}>
            <span className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className={styles.terminalTitle} aria-hidden="true">
              social.sh
            </span>
          </div>
          <div className={styles.terminalBody}>
            <p className={styles.line}>
              <span className={styles.prompt}>root@root</span>
              <span className={styles.path}>:~$</span> whoami
            </p>
            <p className={styles.line}>
              <span className={styles.output}>
                &gt; Cybersecurity Enthusiast &amp; Full-Stack Developer
              </span>
            </p>
            <p className={styles.line}>
              <span className={styles.prompt}>root@root</span>
              <span className={styles.path}>:~$</span> ./social
            </p>
            <p className={styles.line}>
              <span className={styles.output}>
                &gt;{" "}
                <a
                  className={styles.socialLink}
                  href="https://twitter.com/@im_greej"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{"  "}
                <a
                  className={styles.socialLink}
                  href="https://github.com/j0hnnygreen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </span>
            </p>
            <p className={styles.line}>
              <span className={styles.prompt}>root@root</span>
              <span className={styles.path}>:~$</span>{" "}
              <span className={styles.cursor} aria-hidden="true">
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
