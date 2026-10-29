import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import styles from "../../../styles/Blog.module.css";
import { SYSCALLS } from "../../../models/syscalls.model";

export const metadata: Metadata = {
  title: "Linux Syscalls",
};

export default function LinuxSyscallsPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Linux Syscalls</h1>
      <div className={styles.article}>
        <BlogCard heading="Call Convention">
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
        </BlogCard>

        <BlogCard heading="x64 Syscalls Table">
          <div className={styles.tableDiv}>
            <table className={styles.altTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>SYSCALL NAME</th>
                  <th>RAX</th>
                  <th>RDI</th>
                  <th>RSI</th>
                  <th>RDX</th>
                  <th>R10</th>
                  <th>R8</th>
                  <th>R9</th>
                </tr>
              </thead>
              <tbody>
                {SYSCALLS.map((syscall) => (
                  <tr key={syscall.num}>
                    <td>{syscall.num}</td>
                    <td>{syscall.name}</td>
                    <td>{syscall.rax}</td>
                    {syscall.args.map((arg, index) => (
                      <td key={index}>{arg}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BlogCard>
      </div>
    </div>
  );
}
