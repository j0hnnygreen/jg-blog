"use client";

import { useState } from "react";
import Image from "next/image";
import CheatsheetSection from "./resources/CheatsheetSection";
import SearchBar from "./SearchBar";
import { TMUX } from "../models/cheatsheets.model";
import tmuxLogo from "../public/assets/resources/tmux.png";
export default function TmuxCheatsheet() {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <Image
        src={tmuxLogo}
        alt="Tmux Logo"
        width={220}
        priority
        className="centered-image"
      />
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        placeholder="Search commands, shortcuts and notes…"
      />
      <CheatsheetSection filterText={filterText} cheatsheetModel={TMUX} />
    </>
  );
}
