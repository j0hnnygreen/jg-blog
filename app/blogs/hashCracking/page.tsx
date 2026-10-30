import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Hash Cracking — Hashcat & John",
  description:
    "Cracking password hashes offline: looking up hash modes, hashcat masks & wordlist attacks, John the Ripper equivalents and wordlists worth knowing.",
};

export default function HashCrackingPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Hash Cracking — Hashcat &amp; John</h1>
      <div className={styles.article}>
        <BlogCard heading="Workflow">
          <p>
            Password cracking is an offline attack: you obtain a database of
            hashes (e.g. from a CTF box or an authorized assessment) and test
            candidate passwords locally, at millions of guesses per second.
            The loop is always:
          </p>
          <ol>
            <li>
              <b>Identify</b> the hash format.
            </li>
            <li>
              <b>Create</b> a candidate list — a wordlist, a mask, or rules
              applied to a wordlist.
            </li>
            <li>
              <b>Run</b> the cracker and check which candidates hash to a match.
            </li>
          </ol>
        </BlogCard>

        <BlogCard heading="Identifying a hash">
          <p>
            Some formats can be recognized straight from their wrapper, e.g.{" "}
            <code>$1$</code> = MD5crypt, <code>$2y$</code> = bcrypt,{" "}
            <code>$6$</code> = SHA512crypt, <code>hashcat</code> example hashes
            are browsable at hashcat.net/wiki/doku.php?id=example_hashes.
          </p>
          <CardTerminal title="identify">
            <pre>{`$ hashid '$6$x/J1YQ9I$Z1glZQ33C5nSPR3YlKfKfT8J3E9F2wZ8Lb'  # reports sha512crypt (mode 1800)

# Windows: NTLM hashes are 32 hex chars, e.g. admin:1000:aad3b...:b4b9b...:::
# MD5      = 32 hex chars
# SHA1     = 40 hex chars
# SHA256   = 64 hex chars`}</pre>
          </CardTerminal>
          <p>
            Prefer confirmation from context (configuration file, database
            dump) over a tool&apos;s guess when possible.
          </p>
        </BlogCard>

        <BlogCard heading="hashcat in practice">
          <p>
            The three building blocks are a <b>mode</b> (-m), the hash file and
            an attack mode (-a).
          </p>
          <CardTerminal title="hashcat">
            <pre>{`# dictionary attack (mode 0 = MD5)
$ hashcat -m 0 -a 0 hashes.txt rockyou.txt

# dictionary + best64 rule mutations
$ hashcat -m 0 -a 0 hashes.txt rockyou.txt -r best64.rule

# brute force "mask" attack: Password123 (upper + lower + digits)
$ hashcat -m 0 -a 3 hashes.txt ?u?l?l?l?l?l?l?d?d?d

# NTLM from a Windows dump
$ hashcat -m 1000 -a 0 hashes.txt rockyou.txt

# sha512crypt (/etc/shadow) — slow, needs optimised kernel (-O)
$ hashcat -m 1800 -a 0 hashes.txt rockyou.txt -O

# show already-cracked results at any time
$ hashcat -m 0 hashes.txt --show`}</pre>
          </CardTerminal>
          <p>
            Useful modes to memorize: <code>-m 0</code> MD5,{" "}
            <code>-m 100</code> SHA1, <code>-m 1400</code> SHA256,{" "}
            <code>-m 1800</code> sha512crypt, <code>-m 1000</code> NTLM,{" "}
            <code>-m 22000</code> WPA-PBKDF2, <code>-m 3200</code> bcrypt{" "}
            (slow).
          </p>
          <p>
            Cheat masks: <code>?l</code> lowercase, <code>?u</code> uppercase,{" "}
            <code>?d</code> digit, <code>?s</code> symbol, <code>?a</code>{" "}
            all characters, <code>?b</code> byte <em>(0x00-0xff)</em>.
          </p>
        </BlogCard>

        <BlogCard heading="John the Ripper">
          <p>
            John auto-detects many formats and pipelines nicely with
            extraction tools from <i>/usr/share/john</i> (e.g.{" "}
            <code>ssh2john</code>, <code>keepass2john</code>,{" "}
            <code>office2john</code>).
          </p>
          <CardTerminal title="john">
            <pre>{`$ john --wordlist=rockyou.txt hashes.txt
$ john --show hashes.txt            # print cracked passwords
$ john --list=formats               # all supported formats

# a key-protected SSH private key (crack its passphrase)
$ ssh2john id_rsa > ssh.hash
$ john --wordlist=rockyou.txt ssh.hash`}</pre>
          </CardTerminal>
          <p>
            <mark>
              <strong>Note</strong>
            </mark>{" "}
            John is usually faster for classic <i>shadow</i>-style formats and
            single-file targets; hashcat wins when a GPU is available.
          </p>
        </BlogCard>

        <BlogCard heading="Wordlists worth knowing">
          <ul>
            <li>
              <b>rockyou.txt</b> — the classic 14-million-word breach list,{" "}
              <code>/usr/share/wordlists/rockyou.txt</code> on Kali.
            </li>
            <li>
              <b>SecLists</b> (Daniel Miessler) — curated lists for every
              purpose (passwords, usernames, web-discovery, fuzzing). github.com/danielmiessler/SecLists
            </li>
            <li>
              <b>CrackStation</b> — instant lookup against pre-computed tables
              for MD5/SHA1/hash, linked in the site&apos;s{" "}
              <a className={styles.extLink} href="/resources">tools</a> list.
            </li>
          </ul>
          <p>
            Always crack against a target&apos;s policies: pin the rules to the
            minimum password length and the observed pattern (capital + digits +
            symbol) before importing giant wordlists.
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
