import Head from "next/head";
import { use, useState } from "react";
import Layout, { pageTitles } from "../components/layout";
import SearchBar from "../components/resources/searchBar";
import ToolsSection from "../components/resources/toolsSection";
import styles from "../styles/Resources.module.css";
import TOOLS from "../models/resources.model";

export default function Resources() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container">
      <Layout page="resources">
        <Head>
          <title>{pageTitles.resources}</title>
        </Head>

        <main className="main">
          <h1 className={styles.title}>Tools and Resources</h1>
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />

          <div className={styles.toolsDisplay}>
            <ToolsSection filterText={filterText} tools={TOOLS} />
            <div className={styles.bottomHR}>
              <hr />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
