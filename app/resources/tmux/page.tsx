import type { Metadata } from "next";
import TmuxCheatsheet from "../../../components/TmuxCheatsheet";

export const metadata: Metadata = {
  title: "Tmux Cheatsheet",
};

export default function TmuxPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Tmux Cheatsheet</h1>
      <TmuxCheatsheet />
    </div>
  );
}
