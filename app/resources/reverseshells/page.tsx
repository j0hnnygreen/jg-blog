import type { Metadata } from "next";
import ReverseShells from "../../../components/resources/ReverseShells";
import revShellPayloads from "../../../models/revshellPayloads.model";

export const metadata: Metadata = {
  title: "Reverse Shell Generator",
};

export default function RevShellsPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Reverse Shells</h1>
      <ReverseShells payloads={revShellPayloads} />
    </div>
  );
}
