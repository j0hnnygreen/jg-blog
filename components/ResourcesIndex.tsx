"use client";

import { useState } from "react";
import BlogCardSection from "./ListSection";
import SearchBar from "./SearchBar";
import TOOLS from "../models/resources.model";

export default function ResourcesIndex() {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        placeholder="Search tools by name, topic or category…"
      />
      <BlogCardSection items={TOOLS} filterText={filterText} what="tools" />
    </>
  );
}
