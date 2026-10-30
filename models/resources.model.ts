import { sortByCategory } from "../lib/sortObjectsByKey";

const cryptography = "Cryptography";
const osint = "OSINT";
const rce = "RCE";
const cheatsheets = "Cheatsheets";
const privesc = "Privilege Escalation";
const recon = "Reconnaissance";
const webSecurity = "Web Security";
const networkAnalysis = "Network Analysis";
const passwordAttacks = "Password Attacks";
const forensics = "Forensics & Steganography";

export interface ToolEntry {
  category: string;
  name: string;
  url: string;
  description: string;
}

let TOOLS: ToolEntry[] = [
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
    category: cryptography,
    name: "dcode.fr",
    url: "https://www.dcode.fr/en",
    description:
      "Huge catalogue of cipher tools and solvers — caesar, rot13, affine, keyed ciphers and more.",
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
    category: osint,
    name: "Shodan",
    url: "https://www.shodan.io/",
    description:
      "Search engine for internet-connected devices — banners, open ports, services and exposed infrastructure.",
  },
  {
    category: osint,
    name: "censys",
    url: "https://search.censys.io/",
    description:
      "Scan the internet and find exposed hosts, certificates and misconfigurations.",
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
    category: cheatsheets,
    name: "Bash & Linux",
    url: "/resources/bash",
    description:
      "Searchable daily-driver commands: files, text processing, permissions, processes, networking and shell tricks.",
  },
  {
    category: cheatsheets,
    name: "Nmap",
    url: "/resources/nmap",
    description:
      "Scan types, host discovery, version detection, NSE scripts, timing, output formats and basic evasion.",
  },
  {
    category: cheatsheets,
    name: "chmod Calculator",
    url: "/resources/chmod",
    description:
      "Interactive Linux permission calculator with setuid/setgid/sticky and copyable commands.",
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
    description: "Linux Privilege Escalation Techniques. [linux privesc]",
  },
  {
    category: privesc,
    name: "HackTricks Windows Privilege Escalation",
    url: "https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation",
    description: "Windows Privilege Escalation Techniques. [windows privesc]",
  },
  {
    category: privesc,
    name: "PEASS-ng",
    url: "https://github.com/carlospolop/PEASS-ng/releases/latest",
    description: "Scripts to Check Privilege Escalation. [winPeas, linPeas]",
  },
  {
    category: recon,
    name: "Nmap",
    url: "https://nmap.org/",
    description:
      "The classic network scanner — host discovery, port scanning, service/version detection and an NSE scripting engine.",
  },
  {
    category: recon,
    name: "RustScan",
    url: "https://github.com/RustScan/RustScan",
    description:
      "Very fast port scanner that pipes open ports straight into nmap for service detection.",
  },
  {
    category: recon,
    name: "Wireshark",
    url: "https://www.wireshark.org/",
    description:
      "The de facto graphical packet analyzer — deep protocol dissection and live capture.",
  },
  {
    category: recon,
    name: "WhatWeb",
    url: "https://github.com/urbanadventurer/WhatWeb",
    description:
      "Identify web technologies from a site: CMS, frameworks, javascript libraries and servers.",
  },
  {
    category: webSecurity,
    name: "Burp Suite",
    url: "https://portswigger.net/burp",
    description:
      "Intercepting proxy for testing web applications — request/response manipulation, repeater, intruder.",
  },
  {
    category: webSecurity,
    name: "ffuf",
    url: "https://github.com/ffuf/ffuf",
    description:
      "Fast web fuzzer — directory brute-forcing, vhost discovery and parameter fuzzing.",
  },
  {
    category: webSecurity,
    name: "sqlmap",
    url: "https://sqlmap.org/",
    description:
      "Automates the process of detecting and exploiting SQL injection flaws. [union, blind, time-based]",
  },
  {
    category: webSecurity,
    name: "nuclei",
    url: "https://github.com/projectdiscovery/nuclei",
    description:
      "Vulnerability scanner built on community templates — CVEs, misconfigurations, exposed panels.",
  },
  {
    category: webSecurity,
    name: "wafw00f",
    url: "https://github.com/EnableSecurity/wafw00f",
    description:
      "Fingerprint the Web Application Firewall sitting in front of a target.",
  },
  {
    category: networkAnalysis,
    name: "tcpdump",
    url: "https://www.tcpdump.org/",
    description:
      "Command-line packet analyzer — capture filters like 'tcp port 443' straight in the terminal.",
  },
  {
    category: networkAnalysis,
    name: "netcat",
    url: "https://nmap.org/ncat/",
    description:
      "Reads and writes raw TCP/UDP; shells, banner grabs, transfer over TLS with ncat.",
  },
  {
    category: networkAnalysis,
    name: "testssl.sh",
    url: "https://testssl.sh/",
    description:
      "Check a TLS service's ciphers, protocols, certificate chain and common weaknesses.",
  },
  {
    category: passwordAttacks,
    name: "Hashcat",
    url: "https://hashcat.net/hashcat/",
    description:
      "GPU-accelerated password recovery — dictionary, rule and mask attacks for 300+ hash modes.",
  },
  {
    category: passwordAttacks,
    name: "John the Ripper",
    url: "https://github.com/openwall/john",
    description:
      "Classic password cracker that pairs well with format extractors (ssh2john, keepass2john…).",
  },
  {
    category: passwordAttacks,
    name: "SecLists",
    url: "https://github.com/danielmiessler/SecLists",
    description:
      "Curated lists for security testing — passwords, usernames, URLs, sensitive data patterns.",
  },
  {
    category: passwordAttacks,
    name: "Wordlist rockyou",
    url: "https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt",
    description:
      "The famous 14-million password list from the 2009 rockyou breach. [kali: /usr/share/wordlists]",
  },
  {
    category: forensics,
    name: "Binwalk",
    url: "https://github.com/ReFirmLabs/binwalk",
    description:
      "Search a binary image for embedded files and executable code. [firmware, stego containers]",
  },
  {
    category: forensics,
    name: "Steghide",
    url: "https://github.com/StefanoDeVuyst/steghide",
    description:
      "Hide and extract data inside images and audio files, optionally with a passphrase.",
  },
  {
    category: forensics,
    name: "ExifTool",
    url: "https://exiftool.org/",
    description:
      "Read, write and edit meta information in images, PDFs and videos. [EXIF, GPS, comments]",
  },
  {
    category: forensics,
    name: "Foremost",
    url: "https://sourceforge.net/projects/foremost/",
    description:
      "File carver — recover files from disk images or binary blobs based on headers and footers.",
  },
];

TOOLS = sortByCategory(TOOLS);

export default TOOLS;
