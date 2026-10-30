import type { CheatSheet } from "./cheatsheets.model";

export const NMAP: CheatSheet[] = [
  {
    title: "Getting Started",
    commands: [
      {
        command: "nmap [target]",
        description: "Default TCP scan of the 1000 most common ports",
        descriptionWords: "default scan, common ports, quick scan",
      },
      {
        command: "nmap -h",
        description: "Show the nmap help menu (options grouped by category)",
        descriptionWords: "help, usage, manual",
      },
      {
        command: "nmap [target] > scan.nmap",
        description: "Save the human-friendly output to a file",
        descriptionWords: "save output, redirect, log scan",
      },
      {
        command: "nmap -oA scan [target]",
        description:
          "Save output in all 3 formats (scan.nmap, scan.gnmap, scan.xml)",
        descriptionWords: "save all formats, grepable, xml, normal output",
      },
    ],
    descriptionWords: "default scan, common ports, help, save output, gnmap xml",
  },
  {
    title: "Host Discovery (Ping Scans)",
    commands: [
      {
        command: "nmap -sn [target]",
        description:
          "Ping scan only — list live hosts without scanning ports",
        descriptionWords: "ping scan, list hosts, host discovery, no port scan",
      },
      {
        command: "nmap -sn 192.168.1.0/24",
        description: "Discover live hosts in a whole network range",
        descriptionWords: "network sweep, subnet, live hosts, cidr",
      },
      {
        command: "nmap -iL hosts.txt",
        description: "Scan targets read from a file (one per line)",
        descriptionWords: "from file, target list, input list",
      },
      {
        command: "nmap -Pn [target]",
        description:
          "Force the scan even if the host does not answer pings (firewalls)",
        descriptionWords: "no ping, assume host up, firewall blocked icmp",
      },
      {
        command: "nmap -sT [target]",
        description: "TCP connect scan (works without root)",
        descriptionWords: "tcp connect, default scan, no root",
      },
      {
        command: "nmap -sS [target]",
        description:
          "Stealth SYN scan (needs root) — half-open connections, quieter",
        descriptionWords: "syn scan, stealth, half open, root",
      },
      {
        command: "nmap -sU [target]",
        description: "UDP scan (needs root) — DNS, SNMP, DHCP, NTP run here",
        descriptionWords: "udp scan, dns, snmp, datagram",
      },
    ],
    descriptionWords:
      "ping scan, host discovery, subnet sweep, target file, no ping, force scan, tcp connect, syn stealth, udp",
  },
  {
    title: "Port Specification",
    commands: [
      {
        command: "-p 80,443",
        description: "Scan specific ports",
        descriptionWords: "specific ports, list ports",
      },
      {
        command: "-p 1-1000",
        description: "Scan a port range",
        descriptionWords: "port range, range scan",
      },
      {
        command: "-p-",
        description: "Scan all 65535 ports (much slower — combine with -T4)",
        descriptionWords: "all ports, full scan, 65535, complete",
      },
      {
        command: "--top-ports 100",
        description: "Scan the N most commonly used ports",
        descriptionWords: "top ports, common ports, faster full scan",
      },
      {
        command: "-sV --version-all",
        description: "Union of all TCP/UDP ports for the version scan",
        descriptionWords: "all protocols, version scan all ports",
      },
    ],
    descriptionWords:
      "ports, port range, all ports, full scan, 65535, top ports, common",
  },
  {
    title: "Service & Version Detection",
    commands: [
      {
        command: "nmap -sV [target]",
        description: "Detect service versions on open ports",
        descriptionWords: "service version, banner, fingerprint",
      },
      {
        command: "nmap -A [target]",
        description:
          "Aggressive scan: version detection + default scripts + OS + traceroute",
        descriptionWords: "aggressive, everything, os detection, traceroute, all in one",
      },
      {
        command: "nmap -O [target]",
        description: "Operating system detection from TCP/IP fingerprinting",
        descriptionWords: "os fingerprint, operating system, tcp fingerprint",
      },
      {
        command: "nmap -sC [target]",
        description: "Run the default script category (equivalent to --script default)",
        descriptionWords: "default scripts, http, ftp, banner grabs",
      },
    ],
    descriptionWords:
      "version detection, service detection, aggressive scan, os fingerprint, default scripts, banners",
  },
  {
    title: "Script Scanning (NSE)",
    commands: [
      {
        command: "--script=vuln",
        description: "Run vulnerability detection scripts against a host",
        descriptionWords: "vulnerability scan, cve, vulns, check exploits",
      },
      {
        command: "--script=http-enum",
        description: "Enumerate common paths/apps on a web server",
        descriptionWords: "web directories, enumerate web, http paths",
      },
      {
        command: "--script=smb-vuln* -p 139,445",
        description: "Check SMB (EternalBlue family and friends) on Windows hosts",
        descriptionWords: "smb, samba, windows, eternalblue, ms17-010",
      },
      {
        command: "--script-help [name]",
        description: "Show the usage and arguments of a given script",
        descriptionWords: "script help, nse documentation, usage",
      },
    ],
    descriptionWords:
      "nse scripts, vulnerability detection, web enum, smb vuln, metasploit companion, script categories",
    note: "Full script catalogue: https://nmap.org/nsedoc/",
  },
  {
    title: "Timing & Performance",
    commands: [
      {
        command: "-T0 … -T5",
        description:
          "Preset speed: T2 'polite'(slow) → T4 'aggressive'(good default) → T5 'insane'(noisy)",
        descriptionWords: "timing template, speed, insane, aggressive, polite",
      },
      {
        command: "--min-rate 1000",
        description: "Send packets no slower than the given rate",
        descriptionWords: "minimum rate, speed up scan, packets per second",
      },
      {
        command: "--max-retries 2",
        description: "Avoid re-scanning dead ports repeatedly",
        descriptionWords: "retries, faster, avoid rescan",
      },
      {
        command: "--max-rtt-timeout 200ms",
        description: "Cap probe timeouts to fail fast on filtered ports",
        descriptionWords: "timeout, fail fast, responsive hosts only",
      },
    ],
    descriptionWords:
      "timing templates, speed, aggressive, min rate, retries, timeouts, performance",
  },
  {
    title: "Firewall & IDS Evasion",
    commands: [
      {
        command: "-f (or -f -f)",
        description: "Fragment packets (MTU smaller than 1500 also helps)",
        descriptionWords: "fragmentation, evade firewall, split packets",
      },
      {
        command: "-D [decoy1,decoy2],ME",
        description: "Scan using decoy IP addresses to confuse IDS logging",
        descriptionWords: "decoy, anonymous, hide source, confuse logs",
      },
      {
        command: "--source-port 53",
        description: "Pretend the probes come from a trusted port like DNS",
        descriptionWords: "spoof source port, trusted port, dns",
      },
      {
        command: "-n",
        description: "Skip DNS resolution — faster and quieter",
        descriptionWords: "no dns, disable resolution, faster scan",
      },
      {
        command: "--data-length 32",
        description: "Append random data so scans don't look signature-generated",
        descriptionWords: "random payload, pad packets, shape signatures",
      },
    ],
    descriptionWords:
      "evasion, firewall, ids, fragment packets, decoys, spoof, no dns, noisy signature, bypass",
    note: "Use responsibly — only scan systems you are authorized to test.",
  },
  {
    title: "Output Formats",
    commands: [
      {
        command: "-oN [file.nmap]",
        description: "Normal human-readable output",
        descriptionWords: "normal output, save to file, text log",
      },
      {
        command: "-oG [file.gnmap]",
        description: "Grepable output — perfect for feeding into other tools",
        descriptionWords: "grepable, gnmap, piped output, parse with awk grep",
      },
      {
        command: "-oX [file.xml]",
        description: "XML output for import into Metasploit or other tools",
        descriptionWords: "xml output, import, parse results",
      },
      {
        command: "-v / -vv",
        description: "Increase verbosity to watch progress in real time",
        descriptionWords: "verbose, very verbose, live progress",
      },
    ],
    descriptionWords:
      "output formats, normal, grepable, xml, verbose, save results, parse scan",
  },
];
