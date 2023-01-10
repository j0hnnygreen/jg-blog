const { sortByCategory } = require("../lib/sortObjectsByKey");

const cryptography = "Cryptography";
const osint = "OSINT";
const rce = "RCE";
const cheatsheets = "Cheatsheets";
const privesc = "Privilege Escalation";

let TOOLS = [
  {
    category: cryptography,
    name: "Crackstation",
    url: "https://crackstation.net/",
    description:
      "CrackStation uses massive pre-computed lookup tables to crack password hashes. [MD5, NTLM, SHA1, SHA256, SHA512]",
  },
  {
    category: cryptography,
    name: "CyberChef",
    url: "https://gchq.github.io/CyberChef",
    description:
      "CyberChef is the Cyber Swiss Army Knife. [encoding, decoding, QR-Code, Hex, URL, Base64]",
  },
  {
    category: cryptography,
    name: "Vigenere Solver",
    url: "https://www.guballa.de/vigenere-solver",
    description:
      "This online tool breaks Vigenere ciphers without knowing the key.",
  },
  {
    category: cryptography,
    name: "quipqiup",
    url: "https://quipqiup.com/",
    description:
      "quipqiup is a fast and automated cryptogram solver by Edwin Olson for substitution ciphers.",
  },
  {
    category: osint,
    name: "ViewDNS",
    url: "https://viewdns.info/",
    description:
      "Reverse IP Lookup, Reverse Whois Lookup, IP Location Finder, Reverse DNS Lookup.",
  },
  {
    category: osint,
    name: "Wayback machine",
    url: "https://archive.org/web/",
    description:
      "The Wayback Machine is a digital archive of the World Wide Web founded by the Internet Archive.",
  },
  {
    category: osint,
    name: "ICANN Lookup",
    url: "https://lookup.icann.org/",
    description: "Whois lookup.",
  },
  {
    category: osint,
    name: "WhatsMyName",
    url: "https://whatsmyname.app/",
    description: "Enumerate usernames across many websites.",
  },
  {
    category: rce,
    name: "Payload Of All Things Reverse Shells",
    url: "https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md",
    description:
      "A list of useful payloads and bypass for Web Application Security and Pentest/CTF.",
  },
  {
    category: rce,
    name: "PHP Reverse Shell",
    url: "https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php",
    description: "PHP reverse shell.",
  },
  {
    category: cheatsheets,
    name: "Reverse Shell Generator",
    url: "/resources/reverseshells",
    description: "Generate Reverse shells with any IP address or PORT number.",
  },
  {
    category: cheatsheets,
    name: "Tmux",
    url: "/resources/tmux",
    description: "Tmux key bindings, sessions, panes, copy.",
  },
  {
    category: privesc,
    name: "GTFOBins",
    url: "https://gtfobins.github.io/",
    description:
      "GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured systems. [PrivEsc using binaries]",
  },
  {
    category: privesc,
    name: "HackTricks Linux Privilege Escalation",
    url: "https://book.hacktricks.xyz/linux-hardening/privilege-escalation",
    description: "Linux Privelege Escalation Techniques. [linux privesc]",
  },
  {
    category: privesc,
    name: "HackTricks Windows Privilege Escalation",
    url: "https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation",
    description: "Windows Privelege Escalation Techniques. [windows privesc]",
  },
  {
    category: privesc,
    name: "PEASS-ng",
    url: "https://github.com/carlospolop/PEASS-ng/releases/latest",
    description: "Scripts to Check Privilege Escalation. [winPeas, linPeas]",
  },
];

TOOLS = sortByCategory(TOOLS);

module.exports = TOOLS;
