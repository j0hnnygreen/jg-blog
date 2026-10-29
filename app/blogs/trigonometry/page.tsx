import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Trigonometry",
};

export default function TrigonometryPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Trigonometric Functions</h1>
      <div className={styles.article}>
        <BlogCard heading="Formulas">
          <CardTerminal title="formulas">
            <pre>
              <ul>
                <li>
                  If in a circle of radius <i>r</i>, an arc of length <i>l</i>{" "}
                  subtends an angle of &#x3b8;
                  <br />
                  radians, then <em>l = r&#x3b8;</em>
                </li>
                <br />
                <li>
                  <em>
                    Radian measure ={" "}
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mfrac>
                        <mi>&#x3c0;</mi>
                        <mn>180</mn>
                      </mfrac>
                      <mo>&#xA0;</mo>
                      <mo>&#xd7;</mo>
                      <mo>&#xA0;</mo>
                    </math>
                    Degree measure
                  </em>
                </li>
                <br />
                <li>
                  <em>
                    Degree measure ={" "}
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mfrac>
                        <mi>180</mi>
                        <mn>&#x3c0;</mn>
                      </mfrac>
                      <mo>&#xA0;</mo>
                      <mo>&#xd7;</mo>
                      <mo>&#xA0;</mo>
                    </math>
                    Radian measure
                  </em>
                </li>
                <br />
                <li>
                  <em>
                    cos<sup>2</sup> x + sin<sup>2</sup> x = 1
                  </em>
                </li>
                <br />
                <li>
                  <em>
                    1 + tan<sup>2</sup> x = sec<sup>2</sup> x
                  </em>
                </li>
                <br />
                <li>
                  <em>
                    1 + cot<sup>2</sup> x = cosec<sup>2</sup> x
                  </em>
                </li>
                <br />
                <li>
                  <em>cos (2n&#x3c0; + x) = cos x</em>
                </li>
                <br />
                <li>
                  <em>sin (2n&#x3c0; + x) = sin x</em>
                </li>
                <br />
                <li>
                  <em>sin (-x) = -sin x</em>
                </li>
                <br />
                <li>
                  <em>cos (-x) = cos x</em>
                </li>
                <br />
                <li>
                  <em>cos (x + y) = cos x cos y - sin x sin y</em>
                </li>
                <br />
                <li>
                  <em>cos (x - y) = cos x cos y + sin x sin y</em>
                </li>
                <br />
                <li>
                  <em>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mi>cos</mi>
                      <mo>&#xA0;</mo>
                      <mo>(</mo>
                      <mfrac>
                        <mi>&#x3c0;</mi>
                        <mn>2</mn>
                      </mfrac>
                      <mo>&#xA0;</mo>
                      <mo>-</mo>
                      <mo>&#xA0;</mo>
                      <mi>x</mi>
                      <mo>)</mo>
                      <mo>&#xA0;</mo>
                      <mo>=</mo>
                      <mo>&#xA0;</mo>
                      <mi>s</mi>
                      <mi>i</mi>
                      <mi>n</mi>
                      <mo>&#xA0;</mo>
                      <mi>x</mi>
                    </math>
                  </em>
                </li>
                <br />
                <li>
                  <em>
                    <math xmlns="http://www.w3.org/1998/Math/MathML">
                      <mi>sin</mi>
                      <mo>&#xA0;</mo>
                      <mo>(</mo>
                      <mfrac>
                        <mi>&#x3c0;</mi>
                        <mn>2</mn>
                      </mfrac>
                      <mo>&#xA0;</mo>
                      <mo>-</mo>
                      <mo>&#xA0;</mo>
                      <mi>x</mi>
                      <mo>)</mo>
                      <mo>&#xA0;</mo>
                      <mo>=</mo>
                      <mo>&#xA0;</mo>
                      <mi>c</mi>
                      <mi>o</mi>
                      <mi>s</mi>
                      <mo>&#xA0;</mo>
                      <mi>x</mi>
                    </math>
                  </em>
                </li>
                <br />
                <li>
                  <em>sin (x + y) = sin x cos y + cos x sin y</em>
                </li>
                <br />
                <li>
                  <em>sin (x - y) = sin x cos y - cos x sin y</em>
                </li>
              </ul>
            </pre>
          </CardTerminal>
        </BlogCard>
      </div>
    </div>
  );
}
