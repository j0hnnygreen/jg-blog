import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import {
  SyscallX64Table,
  SyscallX86Table,
  SyscallArm64Table,
  SyscallArmTable,
} from "../../../components/blog/SyscallTable";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Linux Syscalls",
};

export default function LinuxSyscallsPage() {
  return (
    <div className="site-main site-main--wide">
      <h1 className="page-title">Linux Syscalls</h1>
      <div className={styles.article}>
        <BlogCard heading="Call Convention" wide>
          <p>
            The system call convention for each architecture, with the
            return-value and argument registers:
          </p>
          <div className={styles.tableDiv}>
            <table className={styles.dashedTable}>
              <thead>
                <tr>
                  <th>Arch</th>
                  <th>NR (Number)</th>
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
                  <td>RAX</td>
                  <td>RDI</td>
                  <td>RSI</td>
                  <td>RDX</td>
                  <td>R10</td>
                  <td>R8</td>
                  <td>R9</td>
                </tr>
                <tr>
                  <td>arm</td>
                  <td>R7</td>
                  <td>R0</td>
                  <td>R0</td>
                  <td>R1</td>
                  <td>R2</td>
                  <td>R3</td>
                  <td>R4</td>
                  <td>R5</td>
                </tr>
                <tr>
                  <td>arm64</td>
                  <td>X8</td>
                  <td>X0</td>
                  <td>X0</td>
                  <td>X1</td>
                  <td>X2</td>
                  <td>X3</td>
                  <td>X4</td>
                  <td>X5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The syscall number is passed in <b>RAX</b> / <b>EAX</b> /{" "}
            <b>X8</b> / <b>R7</b> (depending on the architecture); the tables
            below list the number in decimal and, in the register column, in
            hexadecimal — the value to load into the register before issuing
            the syscall.
          </p>
          <p>
            Live reference:{" "}
            <a className={styles.extLink} href="https://syscall.sh/">
              syscall.sh
            </a>
            .
          </p>
        </BlogCard>

        <BlogCard heading="x86_64 (x64) Syscalls Table" wide>
          <SyscallX64Table />
        </BlogCard>

        <BlogCard heading="x86 (i386) Syscalls Table" wide>
          <p>
            Argument registers follow the 32-bit <b>i386</b> convention
            (<b>EBX</b>, <b>ECX</b>, <b>EDX</b>, <b>ESI</b>, <b>EDI</b>,{" "}
            <b>EBP</b>). A dash means the syscall takes no arguments or no
            prototype is recorded for it.
          </p>
          <SyscallX86Table />
        </BlogCard>

        <BlogCard heading="arm64 (AArch64) Syscalls Table" wide>
          <p>
            On 64-bit <b>AArch64</b> the syscall number travels in <b>x8</b>{" "}
            and the arguments in <b>x0–x5</b> (a dash means the syscall takes
            no arguments or no prototype is recorded for it). Snapshot
            published in{" "}
            <a className={styles.extLink} href="https://arm64.syscall.sh/">
              syscall.sh
            </a>
            , covering numbers 0–291.
          </p>
          <SyscallArm64Table />
        </BlogCard>

        <BlogCard heading="arm (ARMv7/EABI) Syscalls Table" wide>
          <p>
            On 32-bit <b>ARM EABI</b> the number goes in <b>r7</b> and the
            arguments in <b>r0–r5</b>. The numbers at the very end of the
            table (<b>0xF0001–0xF0005</b>) are ARM-private calls —{" "}
            <i>ARM_breakpoint</i>, <i>ARM_cacheflush</i>, <i>ARM_set_tls</i>{" "}
            and friends — which live in a private 0xF0000 range outside the
            generic EABI numbering.
          </p>
          <SyscallArmTable />
        </BlogCard>
      </div>
    </div>
  );
}
