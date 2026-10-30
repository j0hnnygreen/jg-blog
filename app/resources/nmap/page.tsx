import type { Metadata } from "next";
import GenericCheatsheet from "../../../components/GenericCheatsheet";
import { NMAP } from "../../../models/nmap.model";

export const metadata: Metadata = {
  title: "Nmap Cheatsheet",
};

export default function NmapPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Nmap Cheatsheet</h1>
      <GenericCheatsheet
        data={NMAP}
        placeholder="Search nmap flags, scans and scripts…"
      />
    </div>
  );
}
