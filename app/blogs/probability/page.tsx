import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Probability & Combinatorics",
  description:
    "Core probability for CS: sample spaces, addition & multiplication rules, conditional probability, Bayes' theorem, permutations, combinations and expected value.",
};

export default function ProbabilityPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Probability &amp; Combinatorics</h1>
      <div className={styles.article}>
        <BlogCard heading="Sample space &amp; events">
          <p>
            <b>Probability</b> quantifies uncertainty. For a random experiment
            with equally likely outcomes:
          </p>
          <CardTerminal title="definition">
            <pre>{`P(E) = (favourable outcomes) / (total outcomes),   0 ≤ P(E) ≤ 1`}</pre>
          </CardTerminal>
          <ul>
            <li>
              <b>Sample space (S)</b>: every possible outcome. Rolling a die:
              S = &#123;1, 2, 3, 4, 5, 6&#125;.
            </li>
            <li>
              <b>Event (E)</b>: any subset of S, e.g. &quot;even number&quot; =
              &#123;2, 4, 6&#125;, so P(E) = 3/6 = 0.5.
            </li>
            <li>
              P(not E) = 1 − P(E).
            </li>
          </ul>
        </BlogCard>

        <BlogCard heading="Addition rule">
          <p>
            For the probability that <b>A or B</b> happens (careful: overlap
            gets counted twice by naive addition):
          </p>
          <CardTerminal title="formula">
            <pre>{`P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

mutually exclusive (can't both happen):  P(A ∪ B) = P(A) + P(B)

example (die):  P(odd ∪ "4") = 3/6 + 1/6 − 0 = 2/3`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Multiplication rule &amp; independence">
          <p>
            For <b>A and B</b> happening together, multiply chances along the
            path:
          </p>
          <CardTerminal title="formula">
            <pre>{`independent events:      P(A ∩ B) = P(A) · P(B)
dependent events:        P(A ∩ B) = P(A) · P(B | A)

example: two aces in two draws without replacement
         (4/52) · (3/51) ≈ 0.45%`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Conditional probability &amp; Bayes">
          <p>
            P(B | A) means &quot;probability of B <em>given</em> A already
            happened&quot;. It powers spam filters, virus scanners and the
            famous base-rate trap:
          </p>
          <CardTerminal title="bayes">
            <pre>{`        P(A | B) = P(B | A) · P(A) / P(B)

example: a test for a disease is 99% accurate, 1 in 1000 people
         are infected, a random person tests positive.
         true cases   = 0.99 · 0.001  ≈ 0.00099
         false alarms = 0.01 · 0.999  ≈ 0.00999
         P(infected | positive) ≈ 0.00099 / 0.01098 ≈ 9%

intuition beats fear: most positives were never infected.`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Counting: permutations &amp; combinations">
          <p>
            Counting underlies everything from password strength to hash
            collisions.
          </p>
          <CardTerminal title="formulas">
            <pre>{`permutations (order matters):
        nPr = n! / (n−r)!          # e.g. 8P3 = 8·7·6 = 336

combinations (order doesn't):
        nCr = n! / (r! · (n−r)!)   # e.g. 5C2 = 10

with repetition:      n^r          # e.g. a 4-digit PIN: 10^4 = 10000
 arrangements of items: n!
 pigeonhole principle: n items in m boxes, n > m  ⇒  some box has ≥ 2`}</pre>
          </CardTerminal>
          <p>
            Note the birthday paradox tie-in: with 23 people, P(shared
            birthday) &gt; 50% even though 23 &lt; 365 — pair-wise comparisons
            grow like n², which is also why hash <em>collisions</em> appear
            after roughly √N tries.
          </p>
        </BlogCard>

        <BlogCard heading="Expected value &amp; binomial">
          <p>
            <b>Expected value</b> is the long-run average of a random
            variable: E = Σ value · probability.
          </p>
          <CardTerminal title="formulas">
            <pre>{`expected value of a die:   (1+2+…+6)/6 = 3.5

binomial: exactly r successes in n trials
        P(X = r) = nCr · p^r · (1−p)^(n−r)
        E[X]     = n·p        Var[X] = n·p·(1−p)`}</pre>
          </CardTerminal>
          <p>
            Worked implication: lotteries have negative expected value; a good
            password policy raises the cracker&apos;s expected cost instead of
            promising impossible security.
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
