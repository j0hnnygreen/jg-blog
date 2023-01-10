import Head from "next/head";
import { useState } from "react";
import BlogsSection from "../components/blogs/blogsSection";
import Layout, { pageTitles } from "../components/layout";
import SearchBar from "../components/resources/searchBar";
import styles from "../styles/Blog.module.css";
import tableStyles from "../styles/Resources.module.css";
import BLOGS from "../models/blogs.model";

export default function Blog() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container">
      <Layout page="blog">
        <Head>
          <title>{pageTitles.blog}</title>
        </Head>

        <main className="main">
          <h1 className={styles.title}>Blog Posts</h1>
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />

          <div className={tableStyles.toolsDisplay}>
            <BlogsSection filterText={filterText} blogs={BLOGS} />
            <div className={styles.bottomHR}>
              <hr />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
