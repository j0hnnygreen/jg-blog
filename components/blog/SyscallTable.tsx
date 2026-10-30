"use client";

import { useMemo, useState } from "react";
import styles from "../../styles/Blog.module.css";
import { SYSCALLS } from "../../models/syscalls.model";
import { SYSCALLS_X86 } from "../../models/syscalls32.model";
import { SYSCALLS_ARM64 } from "../../models/syscallsArm64.model";
import { SYSCALLS_ARM } from "../../models/syscallsArm.model";

// Uniform row shape regardless of the source model.
interface Row {
  num: string;
  name: string;
  numHex: string;
  args: string[];
}

// Column headers differ per architecture: the register carrying the syscall
// number and the registers carrying its arguments.
interface ArchConfig {
  numRegister: string;
  argRegisters: string[];
}

const X64_CONFIG: ArchConfig = {
  numRegister: "RAX",
  argRegisters: ["RDI", "RSI", "RDX", "R10", "R8", "R9"],
};

const X86_CONFIG: ArchConfig = {
  numRegister: "EAX",
  argRegisters: ["EBX", "ECX", "EDX", "ESI", "EDI", "EBP"],
};

const ARM64_CONFIG: ArchConfig = {
  numRegister: "X8",
  argRegisters: ["X0", "X1", "X2", "X3", "X4", "X5"],
};

const ARM_CONFIG: ArchConfig = {
  numRegister: "R7",
  argRegisters: ["R0", "R1", "R2", "R3", "R4", "R5"],
};

function mapDec(x: { num: string; name: string; rax: string; args: string[] }): Row {
  return { num: x.num, name: x.name, numHex: x.rax, args: x.args };
}

function mapX8(rows: Array<{ num: string; name: string; x8: string; args: string[] }>): Row[] {
  return rows.map(({ num, name, x8, args }) => ({
    num,
    name,
    numHex: x8,
    args,
  }));
}

function mapR7(rows: Array<{ num: string; name: string; r7: string; args: string[] }>): Row[] {
  return rows.map(({ num, name, r7, args }) => ({
    num,
    name,
    numHex: r7,
    args,
  }));
}

function SyscallDataTable({
  rows,
  config,
}: {
  rows: Row[];
  config: ArchConfig;
}) {
  return (
    <table className={styles.altTable}>
      <thead>
        <tr>
          <th>#</th>
          <th>SYSCALL NAME</th>
          <th>{config.numRegister}</th>
          {config.argRegisters.map((register) => (
            <th key={register}>{register}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row.num}-${row.name}`}>
            <td>{row.num}</td>
            <td>{row.name}</td>
            <td>{row.numHex}</td>
            {row.args.map((arg, index) => (
              <td key={index}>{arg}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Exported per-architecture tables share one generic filterable renderer.
export function SyscallX64Table() {
  return (
    <SyscallsTable rows={SYSCALLS.map(mapDec)} config={X64_CONFIG} />
  );
}

export function SyscallX86Table() {
  return (
    <SyscallsTable rows={SYSCALLS_X86.map(mapDec)} config={X86_CONFIG} />
  );
}

export function SyscallArm64Table() {
  return (
    <SyscallsTable rows={mapX8(SYSCALLS_ARM64)} config={ARM64_CONFIG} />
  );
}

export function SyscallArmTable() {
  return <SyscallsTable rows={mapR7(SYSCALLS_ARM)} config={ARM_CONFIG} />;
}

function SyscallsTable({
  rows,
  config,
}: {
  rows: Row[];
  config: ArchConfig;
}) {
  const [filterText, setFilterText] = useState("");

  const query = filterText.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (query === "") return rows;
    const queryDecimal = parseInt(query, 10);
    const queryHex = query.startsWith("0x")
      ? parseInt(query, 16)
      : Number.NaN;
    return rows.filter((row) => {
      if (row.name.toLowerCase().includes(query)) return true;
      if (row.args.some((arg) => arg.toLowerCase().includes(query))) return true;
      if (!Number.isNaN(queryDecimal) && queryDecimal === parseInt(row.num, 10))
        return true;
      if (!Number.isNaN(queryHex) && queryHex === parseInt(row.numHex, 16))
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
          placeholder="Filter syscalls (name, decimal or hex number, arguments)…"
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
          <SyscallDataTable rows={filtered} config={config} />
        </div>
      )}
    </>
  );
}
