import Head from "next/head";
import Image from "next/image";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";
import regImage from "../../public/assets/blogs/reversing/registers64/registers.svg";
import Link from "next/link";

export default function Registers64Bit() {
  const viewModal = () => {
    document.getElementById("modal-img").style.visibility = "visible";
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    document.getElementById("modal-img").style.visibility = "hidden";
    document.body.style.overflow = "auto";
  };
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.reversing.registers64bit}</title>
        </Head>

        <main className="main">
          <h1 className={blogStyles.title}>
            Intel x86-64 bit General Purpose Registers
          </h1>
          <p></p>

          <div
            id="modal-img"
            style={{
              position: "fixed",
              zIndex: "1",
              top: "100px",
              background: "rgba(225, 225, 225, 0.8)",
              backdropFilter: "blur(10px)",
              maxHeight: "calc(100vh - 150px)",
              overflowY: "auto",
              overflowX: "scroll",
              borderRadius: "15px",
              visibility: "hidden",
            }}
            onClick={closeModal}
          >
            <svg
              id={blogStyles.closeSVG}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              onClick={closeModal}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g clipPath="url(#clip0_429_11083)">
                  {" "}
                  <path
                    d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                    stroke="#000000"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_429_11083">
                    {" "}
                    <rect width="24" height="24" fill="white"></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </g>
            </svg>
            <Image
              className={blogStyles.centerImg}
              src={regImage}
              alt="OSI Model"
              width={1200}
              height={1200}
            />
          </div>

          <BlogCard heading="Registers">
            <p>
              A register is a temporary storage or working location built into
              the CPU itself. Computations are typically performed by the CPU
              using registers.
            </p>
            <div className={blogStyles.blogImgs}>
              <pre>
                <Image
                  style={{ cursor: "pointer" }}
                  className={blogStyles.centerImg}
                  src="/assets/blogs/reversing/registers64/registers.svg"
                  alt="OSI Model"
                  width={600}
                  height={600}
                  onClick={viewModal}
                />
              </pre>
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
                <b>RIP</b> - Points to the next instruction to be executed.
                Since the rip points to the next instruction, that means the
                instruction being pointed to by rip, and shown in the debugger,
                has not yet been executed.
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
            <div className={blogStyles.tableDiv}>
              <table className={blogStyles.dashedTable}>
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
              <Link
                className={blogStyles.extLink}
                href="http://www.egr.unlv.edu/~ed/assembly64.pdf"
                target="_blank"
              >
                x86-64 Assembly Language Programming with Ubuntu, Ed Jorgensen,
                University of Nevada
              </Link>
            </p>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}
