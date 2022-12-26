import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "../../components/resources/searchBar";
import TmuxLogo from "../../public/assets/resources/tmux.png";
import Layout, { pageTitles } from "../../components/layout";
import styles from "../../styles/Cheatsheets.module.css";
import resStyles from "../../styles/Resources.module.css";
import CheatsheetSection from "../../components/resources/cheatsheets";
import { TMUX } from "../../models/cheatsheets.model";

export default function Tmux() {
  const [filterText, setFilterText] = useState("");

  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.tmux}</title>
        </Head>

        <main className="main">
          <h1 className={resStyles.title}>Tmux Cheatsheet</h1>

          <p></p>

          <Image src={TmuxLogo} alt="Tmux Logo." width={300} />

          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />

          <p></p>

          <CheatsheetSection filterText={filterText} cheatsheetModel={TMUX} />
        </main>
      </Layout>
    </div>
  );
}
