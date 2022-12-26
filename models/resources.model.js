const { sortByCategory, sortByName } = require("../lib/sortObjectsByKey");

let TOOLS = [
  {
    category: "Cryptography",
    name: "Crackstation",
    url: "https://crackstation.net/",
    description:
      "CrackStation uses massive pre-computed lookup tables to crack password hashes. [MD5, NTLM, SHA1, SHA256, SHA512]",
  },
  {
    category: "Cryptography",
    name: "CyberChef",
    url: "https://gchq.github.io/CyberChef",
    description:
      "CyberChef is the Cyber Swiss Army Knife. [encoding, decoding, QR-Code, Hex, URL, Base64]",
  },
  {
    category: "Cryptography",
    name: "Vigenere Solver",
    url: "https://www.guballa.de/vigenere-solver",
    description:
      "This online tool breaks Vigenere ciphers without knowing the key.",
  },
  {
    category: "Cryptography",
    name: "quipqiup",
    url: "https://quipqiup.com/",
    description:
      "quipqiup is a fast and automated cryptogram solver by Edwin Olson for substitution ciphers.",
  },
  {
    category: "OSINT",
    name: "ViewDNS",
    url: "https://viewdns.info/",
    description:
      "Reverse IP Lookup, Reverse Whois Lookup, IP Location Finder, Reverse DNS Lookup.",
  },
  {
    category: "OSINT",
    name: "Wayback machine",
    url: "https://archive.org/web/",
    description:
      "The Wayback Machine is a digital archive of the World Wide Web founded by the Internet Archive.",
  },
  {
    category: "OSINT",
    name: "ICANN Lookup",
    url: "https://lookup.icann.org/",
    description: "Whois lookup.",
  },
  {
    category: "OSINT",
    name: "WhatsMyName",
    url: "https://whatsmyname.app/",
    description: "Enumerate usernames across many websites.",
  },
  {
    category: "RCE",
    name: "Payload Of All Things Reverse Shells",
    url: "https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md",
    description:
      "A list of useful payloads and bypass for Web Application Security and Pentest/CTF.",
  },
  {
    category: "RCE",
    name: "PHP Reverse Shell",
    url: "https://github.com/pentestmonkey/php-reverse-shell/blob/master/php-reverse-shell.php",
    description: "PHP reverse shell.",
  },
  {
    category: "Cheatsheets",
    name: "Reverse Shell Generator",
    url: "/resources/reverseshells",
    description: "Generate Reverse shells with any IP address or PORT number.",
  },
  {
    category: "Cheatsheets",
    name: "Tmux",
    url: "/resources/tmux",
    description: "Tmux key bindings, sessions, panes, copy.",
  },
];

TOOLS = sortByCategory(TOOLS);

module.exports = TOOLS;
