"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import CheatsheetSection from "./resources/CheatsheetSection";
import type { CheatSheet } from "../models/cheatsheets.model";

// Generic searchable cheatsheet view reused by the Bash and Nmap pages
// (the Tmux page adds a logo on top before including this).
export default function GenericCheatsheet({
  data,
  placeholder,
}: {
  data: CheatSheet[];
  placeholder: string;
}) {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        placeholder={placeholder}
      />
      <CheatsheetSection filterText={filterText} cheatsheetModel={data} />
    </>
  );
}
