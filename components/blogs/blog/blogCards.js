import styles from "../../../styles/Blog.module.css";

export function CardTerminal({ children }) {
  return (
    <div className={styles.terminal}>
      <code>{children}</code>
    </div>
  );
}

export default function BlogCard({ children, heading }) {
  return (
    <div className={styles.blogCards}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
