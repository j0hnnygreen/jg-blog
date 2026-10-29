import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import { SyscallX64Table, SyscallX86Table } from "../../../components/blog/SyscallTable";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Linux Syscalls",
};

export default function LinuxSyscallsPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Linux Syscalls</h1>
      <div className={styles.article}>
        <BlogCard heading="Call Convention">
          <p>
            The system call convention for each architecture, with the
            return-value and argument registers:
          </p>
          <div className={styles.tableDiv}>
            <table className={styles.dashedTable}>
              <thead>
                <tr>
                  <th>Arch</th>
                  <th>Return Value</th>
                  <th>1st Arg</th>
                  <th>2nd Arg</th>
                  <th>3rd Arg</th>
                  <th>4th Arg</th>
                  <th>5th Arg</th>
                  <th>6th Arg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>x86</td>
                  <td>EAX</td>
                  <td>EBX</td>
                  <td>ECX</td>
                  <td>EDX</td>
                  <td>ESI</td>
                  <td>EDI</td>
                  <td>EBP</td>
                </tr>
                <tr>
                  <td>x64</td>
                  <td>RAX</td>
                  <td>RDI</td>
                  <td>RSI</td>
                  <td>RDX</td>
                  <td>R10</td>
                  <td>R8</td>
                  <td>R9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The syscall number is passed in <b>RAX</b> / <b>EAX</b>; the
            tables below list the number in decimal and, in the{" "}
            <b>RAX / EAX</b> column, in hexadecimal — the value to load into
            the register before issuing the syscall.
          </p>
        </BlogCard>

        <BlogCard heading="x86_64 (x64) Syscalls Table">
          <SyscallX64Table />
        </BlogCard>

        <BlogCard heading="x86 (i386) Syscalls Table">
          <p>
            Argument registers follow the 32-bit <b>i386</b> convention
            (<b>EBX</b>, <b>ECX</b>, <b>EDX</b>, <b>ESI</b>, <b>EDI</b>,{" "}
            <b>EBP</b>). A dash means the syscall takes no arguments or no
            prototype is recorded for it.
          </p>
          <SyscallX86Table />
        </BlogCard>
      </div>
    </div>
  );
}
