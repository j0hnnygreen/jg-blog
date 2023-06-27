import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";
import Navbar from "./navigationBar";

export const pageTitles = {
  index: "Johnnygreen",
  resources: "Tools and Resources",
  blog: "Blog",
  revshells: "Reverse Shells",
  tmux: "Tmux",
  databases: { postgresql: "PostgreSQL" },
  maths: {
    quadratic: "Complex Numbers & Quadratic Equations",
    trigonometry: "Trigonometry",
  },
  networking: { osimodel: "OSI Model" },
  reversing: { gdbintro: "GDB", registers64bit: "x86-64bit Registers" },
};

export default function Layout({ children, page }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <meta name="description" content="Personal Blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar page={page} />
      <div>{children}</div>
      <footer className="footer">
        <p>
          <span className="footerHeading">Contact</span>
          <a href="https://twitter.com/@im_greej" target="_blank">
            Twitter{" "}
            <span className="logo">
              <Image
                src="/assets/home/twitter.png"
                alt="Twitter Logo"
                width={16}
                height={16}
              />
            </span>
          </a>
          <a href="https://github.com/j0hnnygreen" target="_blank">
            Github{" "}
            <span className="logo">
              <Image
                src="/assets/home/github.png"
                alt="Github Logo"
                width={16}
                height={16}
              />
            </span>
          </a>
        </p>
      </footer>
    </div>
  );
}
