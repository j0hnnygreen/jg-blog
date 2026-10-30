import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Modular Arithmetic",
  description:
    "Modular arithmetic for CS: clock arithmetic, congruence properties, GCD & Euclid, modular inverse, Fermat's little theorem and the RSA connection.",
};

export default function ModularArithmeticPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Modular Arithmetic</h1>
      <div className={styles.article}>
        <BlogCard heading="Clock arithmetic">
          <p>
            Modulo answers &quot;what&apos;s left after wrapping around&quot;:
            17:00 + 9 hours is 2:00 the next day, because there are 24 hours
            on a clock:
          </p>
          <CardTerminal title="definition">
            <pre>{`a mod n = the remainder of dividing a by n
    26 mod 24  =  2
    100 mod 10 =  0
   -7  mod 26  = 19   # languages differ for negative numbers!

congruence notation:  a ≡ b (mod n)   ⟺   n | (a − b)`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Properties (they all carry over)">
          <CardTerminal title="properties">
            <pre>{`(a + b) mod n  =  ((a mod n) + (b mod n))      mod n
(a · b) mod n  =  ((a mod n) · (b mod n))      mod n
a^k            =  ((a mod n)^k)                mod n
(a + b)²       ≡  a² + 2ab + b²                (always)

worked:  17 · 23 mod 12
         = (17 mod 12) · (23 mod 12)   = 5 · 11 = 55
         = 55 mod 12 = 7`}</pre>
          </CardTerminal>
          <p>
            Keeping numbers small <em>at every step</em> is the trick behind
            fast modular exponentiation (square-and-multiply) used
            everywhere in cryptography.
          </p>
        </BlogCard>

        <BlogCard heading="GCD &amp; Euclid">
          <CardTerminal title="euclid">
            <pre>{`gcd(a, b) = gcd(b, a mod b)      stops when b = 0

gcd(48, 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6

a and b are coprime  ⟺  gcd(a, b) = 1      (needed for inverses)`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Modular inverse">
          <p>
            Division doesn&apos;t exist mod n, but multiplication by an{" "}
            <b>inverse</b> does — and only when the operand is coprime with n:
          </p>
          <CardTerminal title="inverse">
            <pre>{`a · b ≡ 1 (mod n)   ⟹   b is a⁻¹, written b = a⁻¹

exists ⟺  gcd(a, n) = 1
find it with the extended Euclidean algorithm or Euler/Fermat

example:  7⁻¹ mod 26  = 15   because  7 · 15 = 105 = 4·26 + 1`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Fermat's little theorem">
          <CardTerminal title="fermat">
            <pre>{`p prime, a not divisible by p:
        a^(p−1) ≡ 1 (mod p)
hence   a^(−1)  ≡ a^(p−2) (mod p)        # the inverse, powers only!

mini RSA: n = p·q, e·d ≡ 1 (mod (p−1)(q−1))
          c = m^e mod n     m = c^d mod n
          security ← factoring n is hard`}</pre>
          </CardTerminal>
          <p>
            The same structure powers the Miller-Rabin primality test and
            Diffie-Hellman key exchange. When you meet a CTF challenge with
            huge exponents, the answer is nearly always{" "}
            <b>reduce every step</b> (pow(a, e, n) in Python does this
            natively).
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
