import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "SSH Tunneling & Port Forwarding",
  description:
    "SSH port forwarding explained: local (-L), remote (-R) and dynamic (-D) tunnels, key authentication and the ssh config file.",
};

export default function SshTunnelingPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">SSH Tunneling &amp; Port Forwarding</h1>
      <div className={styles.article}>
        <BlogCard heading="Why tunnel with SSH?">
          <p>
            An SSH connection is an encrypted channel between you and a remote
            host. Beyond an interactive shell, SSH can carry <em>any</em> TCP
            traffic through that channel, which is what the three forwarding
            modes are for:
          </p>
          <ul>
            <li>
              <b>Local</b> <code>-L</code>: forward a local port to a host
              reachable <em>from the server</em>.
            </li>
            <li>
              <b>Remote</b> <code>-R</code>: expose a local port on the remote
              server (share your machine with a friend/CTF partner).
            </li>
            <li>
              <b>Dynamic</b> <code>-D</code>: a SOCKS proxy you can point a
              browser at.
            </li>
          </ul>
          <p>
            Useful shared flags: <code>-N</code> (do not run a command, just
            hold the tunnel), <code>-f</code> (background after auth),{" "}
            <code>-v</code> (verbose for debugging), <code>-o</code> (extra
            options such as <code>ExitOnForwardFailure=yes</code>).
          </p>
        </BlogCard>

        <BlogCard heading="Local forwarding (-L)">
          <p>
            Reach a service that is only available <em>from</em> the server.
            The classic case: an internal web app on the private network.
          </p>
          <CardTerminal title="ssh -L">
            <pre>{`# syntax: -L [bind_addr:]local_port:destination_host:destination_port
$ ssh -L 8080:10.0.0.42:80 -N user@server

# now this hits 10.0.0.42:80 through the tunnel
$ curl http://localhost:8080`}</pre>
          </CardTerminal>
          <p>
            Browsers then reach the internal site at <i>localhost:8080</i> and
            all traffic is end-to-end encrypted by SSH even though the
            inner service is plain HTTP.
          </p>
        </BlogCard>

        <BlogCard heading="Remote forwarding (-R)">
          <p>
            Publishes a port that lives on <em>your</em> machine onto the
            server. Typical use: expose a local dev server to a teammate.
          </p>
          <CardTerminal title="ssh -R">
            <pre>{`# server:3000 forwards back to your local dev server
$ ssh -R 3000:localhost:5173 -N user@server

# teammate on the server can now open http://localhost:3000`}</pre>
          </CardTerminal>
          <p>
            <mark>
              <strong>Note</strong>
            </mark>{" "}
            the server must permit this: <i>GatewayPorts yes</i> in its{" "}
            <i>sshd_config</i>, otherwise the published port binds to{" "}
            <code>127.0.0.1</code> on the server only.
          </p>
        </BlogCard>

        <BlogCard heading="Dynamic forwarding (-D) &amp; proxychains">
          <p>
            Turns SSH into a <b>SOCKS5 proxy</b>. Great for pivoting into an
            internal network through one compromised host.
          </p>
          <CardTerminal title="ssh -D">
            <pre>{`$ ssh -D 1080 -N user@pivot-host

# test that the proxy resolves
$ curl --proxy socks5h://127.0.0.1:1080 http://internal.site

# route a full tool set through the tunnel
$ proxychains nmap -sT -Pn 10.0.0.0/24`}</pre>
          </CardTerminal>
          <p>
            <code>proxychains</code> reads <i>/etc/proxychains4.conf</i>; make
            sure the last line reads <code>socks5 127.0.0.1 1080</code>.
          </p>
        </BlogCard>

        <BlogCard heading="SSH keys">
          <h3>Generate a key</h3>
          <CardTerminal title="ssh-keygen">
            <pre>{`$ ssh-keygen -t ed25519 -C "me@laptop"
# modern default; RSA-4096 (-t rsa -b 4096) for legacy servers
$ ssh-add ~/.ssh/id_ed25519`}</pre>
          </CardTerminal>

          <h3>Install the public key on a server</h3>
          <CardTerminal title="ssh-copy-id">
            <pre>{`$ ssh-copy-id user@server
# equivalent to appending .ssh/id_ed25519.pub into
# /home/user/.ssh/authorized_keys on the server`}</pre>
          </CardTerminal>
          <p>
            The public key can be shown sideways{` — `}never paste the{" "}
            <b>private</b> key (no suffix, <code>chmod 600</code>) anywhere.
          </p>
        </BlogCard>

        <BlogCard heading="The ~/.ssh/config file">
          <p>
            Stop retyping long connections by saving them as short aliases:
          </p>
          <CardTerminal title="config">
            <pre>{`Host ctf
  HostName 10.10.10.27
  User johnny
  Port 22
  IdentityFile ~/.ssh/ctf_id_ed25519
  LocalForward 8080 10.10.10.27:80

$ ssh ctf        # connects and opens the tunnel in one go`}</pre>
          </CardTerminal>
        </BlogCard>
      </div>
    </div>
  );
}
