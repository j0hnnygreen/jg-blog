import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Boolean Algebra & Logic Gates",
  description:
    "Boolean algebra for programmers: truth tables, laws, De Morgan's theorems, XOR in CTFs/cryptography and how it shows up in code.",
};

export default function BooleanAlgebraPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Boolean Algebra &amp; Logic Gates</h1>
      <div className={styles.article}>
        <BlogCard heading="Values &amp; basic operators">
          <p>
            Boolean algebra works on exactly two values, <b>0</b> (false) and{" "}
            <b>1</b> (true). Its three base operators:
          </p>
          <CardTerminal title="truth-tables">
            <pre>{`NOT (¬A)          AND (A·B)         OR (A+B)
A | ¬A            A B | A·B         A B | A+B
0 |  1            0 0 |  0          0 0 |  0
1 |  0            0 1 |  0          0 1 |  1
                  1 0 |  0          1 0 |  1
                  1 1 |  1          1 1 |  1`}</pre>
          </CardTerminal>
          <p>
            In code these are <code>!</code>, <code>&amp;&amp;</code>,{" "}
            <code>||</code> (or bitwise <code>~</code>, <code>&amp;</code>,{" "}
            <code>|</code>).
          </p>
        </BlogCard>

        <BlogCard heading="XOR — the CTF operator">
          <p>
            XOR (⊕) is true when the inputs <em>differ</em>. It is its own
            inverse, which makes it central to simple ciphers and hashing
            tricks:
          </p>
          <CardTerminal title="xor">
            <pre>{`A B | A⊕B
0 0 |  0
0 1 |  1
1 0 |  1
1 1 |  0

key properties:
    A ⊕ A = 0        (self-cancel)
    A ⊕ 0 = A        (identity)
    A ⊕ B ⊕ A = B    (order-independent)// => decode by re-encrypting!

single-byte XOR cipher:  C = P ⊕ key   ⟹   P = C ⊕ key`}</pre>
          </CardTerminal>
          <p>
            This is why CyberChef (linked from{" "}
            <a className={styles.extLink} href="/resources">tools</a>) is the
            first stop on a cipher challenge: toggle XOR, guess a key, look for
            readable output.
          </p>
        </BlogCard>

        <BlogCard heading="The laws">
          <CardTerminal title="laws">
            <pre>{`identity:       A + 0 = A          A · 1 = A
null:           A + 1 = 1          A · 0 = 0
idempotent:     A + A = A          A · A = A
complement:     A + ¬A = 1         A · ¬A = 0
double negation: ¬(¬A) = A
De Morgan:      ¬(A + B) = ¬A · ¬B
                ¬(A · B) = ¬A + ¬B`}</pre>
          </CardTerminal>
          <p>
            <mark>
              <strong>De Morgan in code</strong>
            </mark>
            : <code>!(x &amp;&amp; y)</code> ≡ <code>!x || !y</code> — flipping{" "}
            <code>if (a || b)</code> conditions inside out without bugs.
          </p>
        </BlogCard>

        <BlogCard heading="Derived gates">
          <CardTerminal title="gates">
            <pre>{`NAND = ¬(A·B)      NOR = ¬(A+B)      XNOR = ¬(A⊕B)

universal gates: NAND (or NOR) alone can build AND, OR, NOT
    ¬A   = (A NAND A)
    A·B  = ((A NAND B) NAND (A NAND B))`}</pre>
          </CardTerminal>
          <p>
            Which is exactly why physical chips are manufactured from NAND
            gates — one building block for every circuit.
          </p>
        </BlogCard>

        <BlogCard heading="Where programmers meet this">
          <ul>
            <li>
              <b>Short-circuit evaluation</b>: <code>(&amp;&amp;</code> stops
              on the first false, <code>||</code> on the first true — cheap
              pre-conditions first.
            </li>
            <li>
              <b>Bit masks</b>: flag sets combine with <code>|</code>, test
              with <code>&amp;</code>, toggle with <code>^</code>.
            </li>
            <li>
              <b>Parity checks</b>: XOR of all bits gives even/odd parity used
              in hashing and error detection.
            </li>
            <li>
              <b>Simplifying conditions</b>: apply the laws above to flatten
              nested boolean spaghetti before rewriting code.
            </li>
          </ul>
        </BlogCard>
      </div>
    </div>
  );
}
