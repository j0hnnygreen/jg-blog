import type { Metadata } from "next";
import ChmodCalculator from "../../../components/resources/ChmodCalculator";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Chmod Calculator",
  description:
    "Interactive Linux permission calculator. Tick the read/write/execute bits or special flags and copy the chmod command.",
};

export default function ChmodPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">chmod Calculator</h1>
      <div className={styles.article}>
        <p>
          Tick the permission bits for <strong>owner</strong>,{" "}
          <strong>group</strong> and <strong>others</strong> plus the optional{" "}
          <em>setuid / setgid / sticky</em> flags, then copy one of the
          generated <code>chmod</code> commands below. Handy while setting up a
          box or doing Linux privilege-escalation enumeration.
        </p>
        <ChmodCalculator />

        <h3>How the numbers add up</h3>
        <p>
          Each triad is a single octal digit: <code>r = 4</code>,{" "}
          <code>w = 2</code>, <code>x = 1</code>. So <code>rwx = 7</code>,{" "}
          <code>r-x = 5</code> and <code>rw- = 6</code>. An optional leading
          digit encodes the special flags: <code>4 = setuid</code>,{" "}
          <code>2 = setgid</code>, <code>1 = sticky</code>.
        </p>
      </div>
    </div>
  );
}
