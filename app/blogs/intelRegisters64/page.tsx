import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import ImageZoom from "../../../components/blog/ImageZoom";
import styles from "../../../styles/Blog.module.css";
import registersImage from "../../../public/assets/blogs/reversing/registers64/registers.svg";

export const metadata: Metadata = {
  title: "x86-64bit Registers",
};

export default function Registers64BitPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Intel x86-64 bit General Purpose Registers</h1>
      <div className={styles.article}>
        <BlogCard heading="Registers">
          <p>
            A register is a temporary storage or working location built into the
            CPU itself. Computations are typically performed by the CPU using
            registers.
          </p>
          <div className={styles.blogImgs}>
            <ImageZoom
              src={registersImage}
              alt="x86-64 General Purpose Registers diagram"
              className={styles.centerImg}
              width={600}
              height={600}
            />
          </div>
        </BlogCard>

        <BlogCard heading="Register Convention">
          <ul>
            <li>
              <b>RAX</b> - Stores function return values.
            </li>
            <li>
              <b>RBX</b> - Base pointer to the data section.
            </li>
            <li>
              <b>RCX</b> - Counter for loop operations.
            </li>
            <li>
              <b>RSP</b> - Points to the current top of the stack.
            </li>
            <li>
              <b>RBP</b> - Points to the base of the stack frame.
            </li>
            <li>
              <b>RIP</b> - Points to the next instruction to be executed. Since
              the rip points to the next instruction, that means the instruction
              being pointed to by rip, and shown in the debugger, has not yet
              been executed.
            </li>
            <li>
              <b>RSI</b> - Source index pointer for string operations.
            </li>
            <li>
              <b>RDI</b> - Destination index pointer for string operations.
            </li>
          </ul>
        </BlogCard>

        <BlogCard heading="Function Calling Convention">
          <div className={styles.tableDiv}>
            <table className={styles.dashedTable}>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Return Value</th>
                  <th>1st Arg</th>
                  <th>2nd Arg</th>
                  <th>3rd Arg</th>
                  <th>4th Arg</th>
                  <th>5th Arg</th>
                  <th>6th Arg</th>
                  <th>More Args</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Linux</td>
                  <td>RAX</td>
                  <td>RDI</td>
                  <td>RSI</td>
                  <td>RDX</td>
                  <td>RCX</td>
                  <td>R8</td>
                  <td>R9</td>
                  <td>Pushed to Stack</td>
                </tr>
                <tr>
                  <td>Windows</td>
                  <td>RAX</td>
                  <td>RCX</td>
                  <td>RDX</td>
                  <td>R8</td>
                  <td>R9</td>
                  <td>Pushed to Stack</td>
                  <td>Pushed to Stack</td>
                  <td>Pushed to Stack</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BlogCard>

        <BlogCard heading="Further Reading">
          <p>
            For more information please refer to the book,{" "}
            <a
              className={styles.extLink}
              href="http://www.egr.unlv.edu/~ed/assembly64.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              x86-64 Assembly Language Programming with Ubuntu, Ed Jorgensen,
              University of Nevada
            </a>
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
