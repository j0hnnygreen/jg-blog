"use client";

import { useState } from "react";
import BlogCardSection from "./ListSection";
import SearchBar from "./SearchBar";
import BLOGS from "../models/blogs.model";

export default function BlogIndex() {
  const [filterText, setFilterText] = useState("");

  return (
    <>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        placeholder="Search posts by name, topic or category…"
      />
      <BlogCardSection items={BLOGS} filterText={filterText} what="posts" />
    </>
  );
}
