import Head from "next/head";
import { useState } from "react";
import reactStringReplace from "react-string-replace";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout, { pageTitles } from "../../components/layout";
import SearchBar from "../../components/resources/searchBar";
import styles from "../../styles/Revshells.module.css";
import resStyles from "../../styles/Resources.module.css";
import revShellPayloads from "../../models/revshellPayloads.model";

function IPandPortInput({
  IPAddr,
  setIPAddr,
  Port,
  setPort,
  changePayloadParams,
}) {
  function handleClick() {
    let isIPValid = false;
    let isPortValid = false;

    if (Port >= 0 && Port < 65536 && Port.toString().match(/^\d{1,5}$/)) {
      isPortValid = true;
    } else {
      toast.error("Invalid Port!");
    }

    if (
      IPAddr.match(/^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$/)
    ) {
      isIPValid = true;
    } else {
      toast.error("Invalid IP!");
    }

    if (isIPValid && isPortValid) {
      changePayloadParams({ ip: IPAddr, port: Port });
    }
  }

  return (
    <div className={styles.userInput}>
      <label htmlFor={styles.ipAddr}>IP:</label>
      <input
        id={styles.ipAddr}
        type="text"
        value={IPAddr}
        onChange={(e) => setIPAddr(e.target.value)}
      />
      <label htmlFor={styles.port}>PORT:</label>
      <input
        id={styles.port}
        type="number"
        value={Port}
        min="0"
        max="65535"
        onChange={(e) => setPort(e.target.value)}
      />
      <button id={styles.changeBtn} onClick={handleClick}>
        Change
      </button>
    </div>
  );
}

function PayloadCategoryRow({ category }) {
  return (
    <>
      <tr>
        <td colSpan={2}></td>
      </tr>
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    </>
  );
}

function PayloadRow({ name, payload, ip, port }) {
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  const payloadToCopy = payload
    .replace(/CHANGEIP/, ip)
    .replace(/CHANGEPORT/, port);
  payload = reactStringReplace(payload, /(CHANGEIP)/, (match, i) => (
    <span className={styles.highlight} key={match + i}>
      {ip}
    </span>
  ));
  payload = reactStringReplace(payload, /(CHANGEPORT)/, (match, i) => (
    <span className={styles.highlight} key={match + i}>
      {port}
    </span>
  ));

  return (
    <tr>
      <td className={styles.name}>{name}</td>
      <td className={styles.payload}>
        <span
          className={styles.copyText}
          onClick={() => {
            navigator.clipboard.writeText(payloadToCopy);
            toast.success("Copied!", { autoClose: 1000 });
          }}
        >
          {payload}
        </span>
      </td>
    </tr>
  );
}

export default function RevShells() {
  const [filterText, setFilterText] = useState("");
  const [IPAddr, setIPAddr] = useState("10.10.1.1");
  const [Port, setPort] = useState(1234);
  const [payloadParams, setPayloadParams] = useState({
    ip: "10.10.1.1",
    port: 1234,
  });

  const rows = [];
  let lastCategory = null;

  revShellPayloads.forEach((revShellPayload) => {
    if (
      revShellPayload.name.toLowerCase().indexOf(filterText.toLowerCase()) ===
        -1 &&
      revShellPayload.category
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    if (revShellPayload.category !== lastCategory) {
      rows.push(
        <PayloadCategoryRow
          category={revShellPayload.category}
          key={revShellPayload.category}
        />
      );
    }

    rows.push(
      <PayloadRow
        name={revShellPayload.name}
        payload={revShellPayload.payload}
        ip={payloadParams.ip}
        port={payloadParams.port}
        key={revShellPayload.id}
      />
    );

    lastCategory = revShellPayload.category;
  });

  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.revshells}</title>
        </Head>

        <main className="main">
          <h1 className={resStyles.title}>Reverse Shells</h1>

          <ToastContainer />

          <IPandPortInput
            IPAddr={IPAddr}
            setIPAddr={setIPAddr}
            Port={Port}
            setPort={setPort}
            payloadParams={payloadParams}
            changePayloadParams={setPayloadParams}
          />

          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />

          <div className={styles.payloadSection}>
            <table className={styles.payloadTable}>
              <tbody>{rows}</tbody>
            </table>
            <br />
          </div>

          <p></p>

          <div className={styles.payloadSection}>
            <h2>Interactive Terminal</h2>
            <p className={styles.payload}>
              ctrl+z
              <br />
              <span
                className={styles.zshSTTY}
                onClick={() => {
                  navigator.clipboard.writeText("stty raw -echo; fg");
                  toast.success("Copied!", { autoClose: 1000 });
                }}
              >
                stty raw -echo; fg
              </span>
              <br />
              <br />
              <span
                className={styles.zshSTTY}
                onClick={() => {
                  navigator.clipboard.writeText("export TERM=xterm");
                  toast.success("Copied!", { autoClose: 1000 });
                }}
              >
                export TERM=xterm
              </span>
              <br />
              <br />
              <span
                className={styles.zshSTTY}
                onClick={() => {
                  navigator.clipboard.writeText("stty rows 24 columns 80");
                  toast.success("Copied!", { autoClose: 1000 });
                }}
              >
                stty rows &lt;num&gt; columns &lt;cols&gt;
              </span>
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
}
