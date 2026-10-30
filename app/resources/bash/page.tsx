import type { Metadata } from "next";
import GenericCheatsheet from "../../../components/GenericCheatsheet";
import { BASH } from "../../../models/bash.model";

export const metadata: Metadata = {
  title: "Bash Cheatsheet",
};

export default function BashPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Bash &amp; Linux Cheatsheet</h1>
      <GenericCheatsheet
        data={BASH}
        placeholder="Search bash commands by name or purpose…"
      />
    </div>
  );
}
