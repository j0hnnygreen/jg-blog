import styles from "../../styles/Blog.module.css";

export default function BlogCard({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  return (
    <section className={styles.articleCard}>
      <h2 className={styles.cardHeading}>{heading}</h2>
      {children}
    </section>
  );
}
