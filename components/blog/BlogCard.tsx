import styles from "../../styles/Blog.module.css";

export default function BlogCard({
  children,
  heading,
  wide = false,
}: {
  children: React.ReactNode;
  heading: string;
  /** Stretch to the full content width — for wide data tables. */
  wide?: boolean;
}) {
  return (
    <section
      className={
        wide
          ? `${styles.articleCard} ${styles.articleCardWide}`
          : styles.articleCard
      }
    >
      <h2 className={styles.cardHeading}>{heading}</h2>
      {children}
    </section>
  );
}
