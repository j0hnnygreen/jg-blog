import { sortByCategory } from "../lib/sortObjectsByKey";

const databases = "Databases";
const maths = "Mathematics";
const networking = "Computer Networking";
const reversing = "Reverse Engineering";
const binExp = "Binary Exploitation";
const fullStack = "Full Stack Development";
const passwordAttacks = "Password Attacks";

export interface BlogEntry {
  category: string;
  name: string;
  url: string;
  description: string;
  /** Small topic labels shown on cards; used for tag filtering. */
  tags: string[];
}

let BLOGS: BlogEntry[] = [
  {
    category: binExp,
    name: "The Stack — Frames & Calling Conventions",
    url: "/blogs/stackLayout",
    description:
      "x86-64 memory layout, stack frames, prologue/epilogue and the System V calling convention.",
    tags: ["assembly", "stack", "calling-convention", "pwn"],
  },
  {
    category: databases,
    name: "PostgreSQL",
    url: "/blogs/postgresql",
    description:
      "Getting started with psql: connecting to local and remote servers, meta-commands and CSV import/export.",
    tags: ["psql", "sql", "databases"],
  },
  {
    category: maths,
    name: "Boolean Algebra & Logic Gates",
    url: "/blogs/booleanAlgebra",
    description:
      "Truth tables, the laws, De Morgan's theorems, universal NAND/NOR gates and XOR in CTF ciphers.",
    tags: ["boolean", "logic-gates", "discrete-maths", "xor"],
  },
  {
    category: maths,
    name: "Complex Numbers and Quadratic Equations",
    url: "/blogs/cnAndQuadraticEq",
    description:
      "Summary of complex numbers and quadratic equations: i, discriminants, roots and factorisation.",
    tags: ["algebra", "complex-numbers", "quadratic-equations"],
  },
  {
    category: maths,
    name: "Modular Arithmetic",
    url: "/blogs/modularArithmetic",
    description:
      "Clock arithmetic, congruence properties, GCD & Euclid, modular inverses, Fermat's little theorem and mini-RSA.",
    tags: ["modular", "number-theory", "cryptography", "gcd"],
  },
  {
    category: maths,
    name: "Probability & Combinatorics",
    url: "/blogs/probability",
    description:
      "Sample spaces, addition/multiplication rules, conditional probability, Bayes' theorem, permutations, combinations, expected value.",
    tags: ["probability", "combinatorics", "bayes", "statistics"],
  },
  {
    category: maths,
    name: "Trigonometry",
    url: "/blogs/trigonometry",
    description:
      "Trigonometric formulae: radian/degree conversion, identities, compound angles and the standard values table.",
    tags: ["trigonometry", "identities", "geometry"],
  },
  {
    category: networking,
    name: "Netcat Essentials",
    url: "/blogs/netcat",
    description:
      "Swiss army knife recipes: banner grabbing, listeners, file transfer, bind/reverse shells, port scanning, ncat over TLS.",
    tags: ["netcat", "shells", "networking", "recon"],
  },
  {
    category: networking,
    name: "OSI Model",
    url: "/blogs/osiModel",
    description: "The seven OSI layers and what happens at each of them.",
    tags: ["networking", "osi-model", "protocols"],
  },
  {
    category: networking,
    name: "SSH Tunneling & Port Forwarding",
    url: "/blogs/sshTunneling",
    description:
      "Local (-L), remote (-R) and dynamic (-D) tunnels, SOCKS + proxychains pivoting, key auth and ~/.ssh/config.",
    tags: ["ssh", "tunneling", "port-forwarding", "pivoting"],
  },
  {
    category: passwordAttacks,
    name: "Hash Cracking — Hashcat & John",
    url: "/blogs/hashCracking",
    description:
      "Identify hash formats, dictionary/mask/rule attacks in hashcat and John, the wordlists and modes worth memorizing.",
    tags: ["hashcat", "john-the-ripper", "password-attacks", "cracking"],
  },
  {
    category: reversing,
    name: "GDB",
    url: "/blogs/gdbIntro",
    description:
      "Introduction to GDB with pwndbg/GEF: breakpoints, examining memory & registers, stepping and scripting.",
    tags: ["gdb", "debugging", "assembly"],
  },
  {
    category: reversing,
    name: "x86-64bit Registers",
    url: "/blogs/intelRegisters64",
    description:
      "Quick reference for x86-64 Intel General Purpose Registers and their 32/16/8-bit aliases.",
    tags: ["x86-64", "assembly", "registers"],
  },
  {
    category: fullStack,
    name: "Git Essentials",
    url: "/blogs/gitEssentials",
    description:
      "The daily add/commit/push loop, branching & conflict resolution, undoing mistakes, stash and a log graph.",
    tags: ["git", "version-control", "branching", "rebase"],
  },
  {
    category: fullStack,
    name: "HTTP Essentials",
    url: "/blogs/httpEssentials",
    description:
      "Request/response anatomy, methods, status codes to memorize, security-relevant headers and curl workflows.",
    tags: ["http", "rest", "headers", "curl", "web"],
  },
  {
    category: binExp,
    name: "Linux Syscalls",
    url: "/blogs/syscalls",
    description:
      "Interactive Linux syscall tables for x86-64 and x86 with their register arguments.",
    tags: ["linux", "syscalls", "assembly"],
  },
];

BLOGS = sortByCategory(BLOGS);

/** All unique tags, alphabetically sorted, for the tag filter bar. */
export const ALL_TAGS: string[] = [
  ...new Set(BLOGS.flatMap((blog) => blog.tags)),
].sort();

export default BLOGS;
