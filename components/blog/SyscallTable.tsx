"use client";

import { useMemo, useState } from "react";
import styles from "../../styles/Blog.module.css";
import { SYSCALLS, type Syscall } from "../../models/syscalls.model";
import { SYSCALLS_X86, type SyscallX86 } from "../../models/syscalls32.model";
type SyscallRow = Syscall | SyscallX86;

const X64_REGISTER_NAMES = ["rdi", "rsi", "rdx", "r10", "r8", "r9"] as const;
const X86_REGISTER_NAMES = ["ebx", "ecx", "edx", "esi", "edi", "ebp"] as const;

function SyscallDataTable({
  rows,
  isX64,
}: {
  rows: SyscallRow[];
  isX64: boolean;
}) {
  const registerNames = isX64 ? X64_REGISTER_NAMES : X86_REGISTER_NAMES;

  return (
    <table className={styles.altTable}>
      <thead>
        <tr>
          <th>#</th>
          <th>SYSCALL NAME</th>
          <th>{isX64 ? "RAX" : "EAX"}</th>
          {registerNames.map((register) => (
            <th key={register}>{register.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.num}>
            <td>{row.num}</td>
            <td>{row.name}</td>
            <td>{row.rax}</td>
            {row.args.map((arg, index) => (
              <td key={index}>{arg}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SyscallX64Table() {
  return <SyscallsTable rows={SYSCALLS} isX64 />;
}

export function SyscallX86Table() {
  return <SyscallsTable rows={SYSCALLS_X86} isX64={false} />;
}

function SyscallsTable({
  rows,
  isX64,
}: {
  rows: SyscallRow[];
  isX64: boolean;
}) {
  const [filterText, setFilterText] = useState("");

  const query = filterText.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (query === "") return rows;
    const queryNumber = Number(query);
    return rows.filter((row) => {
      if (row.name.toLowerCase().includes(query)) return true;
      if (row.args.some((arg) => arg.toLowerCase().includes(query)))
        return true;
      if (!Number.isNaN(queryNumber) && queryNumber === Number(row.num))
        return true;
      return false;
    });
  }, [rows, query]);

  return (
    <>
      <div className={styles.tableToolbar}>
        <input
          type="search"
          className={styles.tableSearch}
          placeholder="Filter syscalls…"
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
          aria-label="Filter syscalls"
        />
        <span className={styles.tableCount}>
          {filtered.length}/{rows.length} syscalls
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.emptyTable}>
          No syscalls found for{" "}
          <strong>{filterText.trim()}</strong>.
        </p>
      ) : (
        <div className={styles.tableDiv}>
          <SyscallDataTable rows={filtered} isX64={isX64} />
        </div>
      )}
    </>
  );
}
