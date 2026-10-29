"use client";

import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { RevshellPayload } from "../../models/revshellPayloads.model";
import SearchBar from "../SearchBar";
import styles from "../../styles/Revshells.module.css";

const DEFAULT_IP = "10.10.1.1";
const DEFAULT_PORT = "1234";

const IP_PATTERN =
  /^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/;
const PORT_PATTERN = /^\d{1,5}$/;

function highlightPayload(
  payload: string,
  ip: string,
  port: string,
): React.ReactNode[] {
  const parts = payload.split(/(CHANGEIP|CHANGEPORT)/g);
  return parts.map((part, index) => {
    if (part === "CHANGEIP") {
      return (
        <span key={index} className={styles.highlight}>
          {ip}
        </span>
      );
    }
    if (part === "CHANGEPORT") {
      return (
        <span key={index} className={styles.highlight}>
          {port}
        </span>
      );
    }
    return part;
  });
}

function resolvePayload(payload: string, ip: string, port: string): string {
  return payload
    .replaceAll("CHANGEIP", ip)
    .replaceAll("CHANGEPORT", String(port));
}

function CopyButton({
  text,
  className,
  doneLabel = "Copied ✓",
}: {
  text: string;
  className?: string;
  doneLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied!", { autoClose: 1000 });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1300);
    } catch {
      toast.error("Copy failed");
    }
  }

  return (
    <button
      type="button"
      className={`${className ?? ""} ${copied ? styles.copyBtnDone : ""}`}
      onClick={handleCopy}
    >
      {copied ? doneLabel : "Copy"}
    </button>
  );
}

export default function ReverseShells({
  payloads,
}: {
  payloads: RevshellPayload[];
}) {
  const [filterText, setFilterText] = useState("");
  const [ip, setIp] = useState(DEFAULT_IP);
  const [port, setPort] = useState(DEFAULT_PORT);
  const [ipFieldInvalid, setIpFieldInvalid] = useState(false);
  const [portFieldInvalid, setPortFieldInvalid] = useState(false);
  const [applied, setApplied] = useState({
    ip: DEFAULT_IP,
    port: DEFAULT_PORT,
  });

  function validate(value: { ip: string; port: string }): boolean {
    const portValue = value.port.toString();
    const portValid =
      PORT_PATTERN.test(portValue) &&
      Number(portValue) >= 0 &&
      Number(portValue) < 65536;
    const ipValid = IP_PATTERN.test(value.ip);
    if (!portValid) {
      toast.error("Invalid port!");
    }
    if (!ipValid) {
      toast.error("Invalid IP!");
    }
    setIpFieldInvalid(!ipValid);
    setPortFieldInvalid(!portValid);
    return ipValid && portValid;
  }

  function handleApply() {
    if (validate({ ip, port })) {
      setApplied({ ip, port });
      toast.success("Parameters updated!");
    }
  }

  const query = filterText.trim().toLowerCase();
  const filtered = payloads.filter(
    (payload) =>
      payload.name.toLowerCase().includes(query) ||
      payload.category.toLowerCase().includes(query) ||
      payload.payload.toLowerCase().includes(query),
  );

  const groups = new Map<string, RevshellPayload[]>();
  for (const payload of filtered) {
    const group = groups.get(payload.category) ?? [];
    group.push(payload);
    groups.set(payload.category, group);
  }

  return (
    <>
      <ToastContainer />

      <form
        className={styles.config}
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          handleApply();
        }}
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor="revshell-ip">
            IP address
          </label>
          <input
            id="revshell-ip"
            className={`${styles.input}${ipFieldInvalid ? ` ${styles.inputInvalid}` : ""}`}
            type="text"
            inputMode="text"
            autoComplete="off"
            placeholder="10.10.1.1"
            value={ip}
            onChange={(event) => setIp(event.target.value)}
            aria-invalid={ipFieldInvalid}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="revshell-port">
            Port
          </label>
          <input
            id="revshell-port"
            className={`${styles.input}${portFieldInvalid ? ` ${styles.inputInvalid}` : ""}`}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="1234"
            value={port}
            onChange={(event) => setPort(event.target.value)}
            aria-invalid={portFieldInvalid}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Apply
        </button>
      </form>

      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        placeholder="Search shells…"
      />

      {filtered.length === 0 ? (
        <p className={styles.empty}>
          No shells found for{" "}
          <strong className={styles.emptyQuery}>{filterText.trim()}</strong>.
        </p>
      ) : (
        [...groups.entries()].map(([category, groupPayloads]) => (
          <section key={category} className={styles.group}>
            <h2 className={styles.groupHeading}>{category}</h2>
            {groupPayloads.map((payload) => (
              <article key={payload.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.name}>{payload.name}</h3>
                  <CopyButton
                    className={styles.copyBtn}
                    text={resolvePayload(payload.payload, applied.ip, applied.port)}
                  />
                </div>
                <code className={styles.payload}>
                  {highlightPayload(payload.payload, applied.ip, applied.port)}
                </code>
              </article>
            ))}
          </section>
        ))
      )}

      <article className={styles.sectionCard}>
        <h2 className={styles.sectionHeading}>Interactive Terminal</h2>
        <p className={styles.sectionIntro}>
          Send the process to the background with <code>ctrl+z</code>, then run
          these from your own terminal to upgrade the shell:
        </p>
        <div className={styles.shortcut}>
          <p className={styles.shortcutHint}>Step 1 — suspend the process</p>
          <code>ctrl+z</code>
        </div>
        <div className={styles.shortcut}>
          <code>stty raw -echo; fg</code>
          <CopyButton className={styles.copyBtn} text="stty raw -echo; fg" />
        </div>
        <div className={styles.shortcut}>
          <code>export TERM=xterm</code>
          <CopyButton className={styles.copyBtn} text="export TERM=xterm" />
        </div>
        <div className={styles.shortcut}>
          <p className={styles.shortcutHint}>
            Set rows/columns to your terminal size before this one
          </p>
          <code>stty rows &lt;num&gt; columns &lt;cols&gt;</code>
          <CopyButton
            className={styles.copyBtn}
            text="stty rows 24 columns 80"
          />
        </div>
      </article>
    </>
  );
}
