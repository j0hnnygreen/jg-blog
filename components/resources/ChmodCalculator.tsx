"use client";

import { useMemo, useState } from "react";
import CardTerminal from "../blog/CardTerminal";
import styles from "../../styles/Chmod.module.css";

type Permissions = {
  r: boolean;
  w: boolean;
  x: boolean;
};

type Mode = {
  owner: Permissions;
  group: Permissions;
  other: Permissions;
  setuid: boolean;
  setgid: boolean;
  sticky: boolean;
};

const INITIAL_MODE: Mode = {
  owner: { r: true, w: true, x: true },
  group: { r: true, w: false, x: true },
  other: { r: true, w: false, x: true },
  setuid: false,
  setgid: false,
  sticky: false,
};

const SPECIALS: {
  key: "setuid" | "setgid" | "sticky";
  label: string;
  hint: string;
}[] = [
  {
    key: "setuid",
    label: "SetUID (4000)",
    hint: "Runs with the owner's privileges — e.g. /usr/bin/passwd.",
  },
  {
    key: "setgid",
    label: "SetGID (2000)",
    hint: "Runs with the group's privileges / inherits the directory's group.",
  },
  {
    key: "sticky",
    label: "Sticky (1000)",
    hint: "On directories: only the owner may delete files (e.g. /tmp).",
  },
];

const GROUPS: { key: "owner" | "group" | "other"; label: string }[] = [
  { key: "owner", label: "Owner (u)" },
  { key: "group", label: "Group (g)" },
  { key: "other", label: "Others (o)" },
];

const PRESETS: { label: string; apply: () => Mode }[] = [
  { label: "755", apply: () => ({ ...INITIAL_MODE }) },
  {
    label: "644",
    apply: () => ({
      ...INITIAL_MODE,
      owner: { r: true, w: true, x: false },
      group: { r: true, w: false, x: false },
      other: { r: true, w: false, x: false },
    }),
  },
  {
    label: "600",
    apply: () => ({
      ...INITIAL_MODE,
      owner: { r: true, w: true, x: false },
      group: { r: false, w: false, x: false },
      other: { r: false, w: false, x: false },
    }),
  },
  {
    label: "700",
    apply: () => ({
      ...INITIAL_MODE,
      group: { r: false, w: false, x: false },
      other: { r: false, w: false, x: false },
    }),
  },
  { label: "755 + SUID", apply: () => ({ ...INITIAL_MODE, setuid: true }) },
  {
    label: "777",
    apply: () => ({
      ...INITIAL_MODE,
      group: { r: true, w: true, x: true },
      other: { r: true, w: true, x: true },
    }),
  },
];

function triadDigit(p: Permissions): number {
  return (p.r ? 4 : 0) + (p.w ? 2 : 0) + (p.x ? 1 : 0);
}

function triadSymbols(p: Permissions): string {
  return (p.r ? "r" : "-") + (p.w ? "w" : "-") + (p.x ? "x" : "-");
}

function computeOctal(mode: Mode): string {
  const special =
    (mode.setuid ? 4 : 0) + (mode.setgid ? 2 : 0) + (mode.sticky ? 1 : 0);
  const base =
    triadDigit(mode.owner) * 100 +
    triadDigit(mode.group) * 10 +
    triadDigit(mode.other);
  return special === 0 ? String(base) : `${special}${String(base).padStart(3, "0")}`;
}

// ls -l style rendering, e.g. "-rwxr-xr-x" with s/t shown for special bits.
function computeLsLine(mode: Mode): string {
  let owner = triadSymbols(mode.owner);
  let group = triadSymbols(mode.group);
  let other = triadSymbols(mode.other);

  if (mode.setuid) owner = owner[1] + "s" + owner[2];
  if (mode.setgid) group = group[1] + "s" + group[2];
  if (mode.sticky) other = other[1] + "t" + other[2];

  return `-${owner}${group}${other}`;
}

// Symbolic chmod string like "u=rwx,g=rx,o=rx" (numeric form covers specials).
function computeSymbolicCommand(mode: Mode): string {
  const format = (label: string, p: Permissions) => {
    const bits = (p.r ? "r" : "") + (p.w ? "w" : "") + (p.x ? "x" : "");
    return `${label}=${bits || "-"}`;
  };
  return [
    format("u", mode.owner),
    format("g", mode.group),
    format("o", mode.other),
  ].join(",");
}

export default function ChmodCalculator() {
  const [mode, setMode] = useState<Mode>(INITIAL_MODE);

  const octal = useMemo(() => computeOctal(mode), [mode]);
  const lsLine = useMemo(() => computeLsLine(mode), [mode]);
  const specialUsed = mode.setuid || mode.setgid || mode.sticky;

  const commands = useMemo(() => {
    const list = [`chmod ${octal} /path/to/file`];
    // Symbolic mode cannot express setuid/setgid/sticky, so only show it
    // when no special bits are ticked.
    if (!specialUsed) {
      list.push(`chmod ${computeSymbolicCommand(mode)} /path/to/file`);
    }
    return list;
  }, [octal, mode, specialUsed]);

  return (
    <>
      <div className={styles.presets}>
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            className={styles.presetBtn}
            onClick={() => setMode(preset.apply())}
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className={styles.groups}>
        {GROUPS.map((group) => (
          <fieldset key={group.key} className={styles.group}>
            <legend className={styles.groupLabel}>{group.label}</legend>
            <div className={styles.toggles}>
              {(["r", "w", "x"] as const).map((bit) => (
                <label key={bit} className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={mode[group.key][bit]}
                    onChange={() =>
                      setMode((current) => ({
                        ...current,
                        [group.key]: {
                          ...current[group.key],
                          [bit]: !current[group.key][bit],
                        },
                      }))
                    }
                  />
                  <span className={styles.toggleBit}>{bit}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className={styles.specials}>
        {SPECIALS.map((special) => (
          <label
            key={special.key}
            className={styles.specialToggle}
            title={special.hint}
          >
            <input
              type="checkbox"
              checked={mode[special.key]}
              onChange={() =>
                setMode((current) => ({
                  ...current,
                  [special.key]: !current[special.key],
                }))
              }
            />
            <span>{special.label}</span>
          </label>
        ))}
      </div>

      <div className={styles.result}>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Octal</span>
          <strong className={styles.resultValue}>{octal}</strong>
        </div>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Symbolic</span>
          <strong className={styles.resultValue}>{lsLine}</strong>
        </div>
      </div>

      <CardTerminal title="chmod">
        <pre>
          {commands
            .map((cmd) => `$ ${cmd}`)
            .join("\n")}
        </pre>
      </CardTerminal>
    </>
  );
}
