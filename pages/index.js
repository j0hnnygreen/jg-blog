import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { pageTitles } from "../components/layout";

export default function Home() {
  return (
    <div className="container">
      <Layout page="home">
        <Head>
          <title>{pageTitles.index}</title>
        </Head>

        <main className="main">
          <h1 className={styles.title}>Welcome to my site!</h1>

          <h2 className={styles.heading2}>
            I&apos;m a Cybersecurity Enthusiast and a Full-Stack Developer.
          </h2>

          <p className={styles.description}>
            This website contains tools and resources about Cybersecurity and
            other Computer Science related topics.
          </p>

          <div className={styles.terminal}>
            <div>
              <p>
                <span id={styles.span1}>root@root</span>
                <span id={styles.span2}>:~#</span> ./social
              </p>
              <p>
                &gt;{" "}
                <a href="https://twitter.com/@im_greej" target="_blank">
                  Twitter
                  <span className="logo">
                    <Image
                      src="/assets/home/twitter.png"
                      alt="Twitter Logo"
                      width={16}
                      height={16}
                    />
                  </span>
                </a>
              </p>
              <p>
                &gt;{" "}
                <a href="https://github.com/j0hnnygreen" target="_blank">
                  Github
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
              <p>
                <span id={styles.span1}>root@root</span>
                <span id={styles.span2}>:~#</span>{" "}
                <span className={styles.cursor}>&nbsp;&nbsp;</span>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
