import Head from "next/head";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";

export default function ComplexNumAndQuadraticEq() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.maths.quadratic}</title>
        </Head>
        <main className="main">
          <h1 className={blogStyles.title}>
            Complex Numbers And Quadratic Equations
          </h1>
          <p></p>

          <BlogCard heading="Complex Numbers">
            <p>
              For the complex number <em>z = a + ib,</em> <i>a</i> is the{" "}
              <em>real part</em> and <i>b</i> is the <em>imaginary part</em>.
            </p>
            <CardTerminal>
              <ol>
                <li>
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>z</mi>
                    <mo>&#xA0;</mo>
                    <mo>=</mo>
                    <mo>&#xA0;</mo>
                    <mi>a</mi>
                    <mo>&#xA0;</mo>
                    <mo>+</mo>
                    <mo>&#xA0;</mo>
                    <mi>i</mi>
                    <mi>b</mi>
                  </math>{" "}
                  [Complex Number]
                </li>
                <br />
                <li>
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup>
                      <mi>z</mi>
                      <mrow>
                        <mo>-</mo>
                        <mn>1</mn>
                      </mrow>
                    </msup>
                    <mo>&#xA0;</mo>
                    <mo>=</mo>
                    <mo>&#xA0;</mo>
                    <mfrac>
                      <mi>a</mi>
                      <mrow>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <msup>
                          <mi>b</mi>
                          <mn>2</mn>
                        </msup>
                      </mrow>
                    </mfrac>
                    <mo>&#xA0;</mo>
                    <mo>+</mo>
                    <mo>&#xA0;</mo>
                    <mi>i</mi>
                    <mfrac>
                      <mrow>
                        <mo>-</mo>
                        <mi>b</mi>
                      </mrow>
                      <mrow>
                        <msup>
                          <mi>a</mi>
                          <mn>2</mn>
                        </msup>
                        <mo>+</mo>
                        <msup>
                          <mi>b</mi>
                          <mn>2</mn>
                        </msup>
                      </mrow>
                    </mfrac>
                  </math>{" "}
                  [Multiplicative inverse of complex number]
                </li>
                <br />
                <li>
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <msup>
                      <mi>i</mi>
                      <mn>2</mn>
                    </msup>
                    <mo>&#xA0;</mo>
                    <mo>=</mo>
                    <mo>&#xA0;</mo>
                    <mo>-</mo>
                    <mn>1</mn>
                  </math>
                </li>
                <br />
                <li>
                  <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>i</mi>
                    <mo>&#xA0;</mo>
                    <mo>=</mo>
                    <mo>&#xA0;</mo>
                    <msqrt>
                      <mrow>
                        <mo>-</mo>
                        <mn>1</mn>
                      </mrow>
                    </msqrt>
                  </math>
                </li>
              </ol>
            </CardTerminal>
            <h3>Polar Representation</h3>
            <p>
              The polar form of the complex number <em>z = x + iy</em> is{" "}
              <em>r (cos &#x3b8; + i sin &#x3b8;)</em>, where{" "}
              <em>
                r ={" "}
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msqrt>
                    <mrow>
                      <msup>
                        <mi>x</mi>
                        <mn>2</mn>
                      </msup>
                      <mo>+</mo>
                      <msup>
                        <mi>y</mi>
                        <mn>2</mn>
                      </msup>
                    </mrow>
                  </msqrt>
                </math>
              </em>{" "}
              (the modulus of z) and <em>cos &#x3b8; = x / r</em>,{" "}
              <em>sin &#x3b8; = y / r</em>.
            </p>
          </BlogCard>

          <BlogCard heading="Quadratic Equations">
            For a quadratic equation{" "}
            <em>
              ax<sup>2</sup> + bx + c = 0
            </em>{" "}
            where a, b and c are the co-efficients then the roots of the
            equation is given by
            <CardTerminal>
              <p>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mi>x</mi>
                  <mo>&#xA0;</mo>
                  <mo>=</mo>
                  <mo>&#xA0;</mo>
                  <mfrac>
                    <mrow>
                      <mo>-</mo>
                      <mi>b</mi>
                      <mo>&#xA0;</mo>
                      <mo>&#xb1;</mo>
                      <mo>&#xA0;</mo>
                      <msqrt>
                        <mrow>
                          <msup>
                            <mi>b</mi>
                            <mn>2</mn>
                          </msup>
                          <mo>&#xA0;</mo>
                          <mo>-</mo>
                          <mo>&#xA0;</mo>
                          <mn>4</mn>
                          <mi>a</mi>
                          <mi>c</mi>
                        </mrow>
                      </msqrt>
                    </mrow>
                    <mrow>
                      <mn>2</mn>
                      <mi>a</mi>
                    </mrow>
                  </mfrac>
                </math>
              </p>
            </CardTerminal>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}
