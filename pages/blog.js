import Head from "next/head";
import { use, useState } from "react";
import Layout, { pageTitles } from "../components/layout";
import SearchBar from "../components/resources/searchBar";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container">
      <Layout page="blog">
        <Head>
          <title>{pageTitles.resources}</title>
        </Head>

        <main className="main">
          <h1 className={styles.title}>Blog Posts</h1>
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />

          <p>No Posts Yet!</p>
        </main>
      </Layout>
    </div>
  );
}
