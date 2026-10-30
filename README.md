# jg-blog

Personal blog on Cybersecurity, Full-Stack Development and Computer Science Mathematics.

## What's inside

- **`/blog`** — searchable write-ups: binary exploitation & reversing (GDB, x86-64 registers, syscalls, the stack), networking (OSI model, netcat, SSH tunneling), full-stack development (Git, HTTP), databases and mathematics (probability, boolean algebra, modular arithmetic, trigonometry, complex numbers).
- **`/resources`** — curated tool directory: reconnaissance, web security, password attacks, forensics/steganography, cryptography, OSINT and privilege escalation — plus in-house interactive tools:
  - Reverse shell generator (`/resources/reverseshells`)
  - Bash & Linux cheatsheet (`/resources/bash`)
  - Nmap cheatsheet (`/resources/nmap`)
  - chmod calculator (`/resources/chmod`)
  - Tmux cheatsheet (`/resources/tmux`)

## Stack

Next.js (App Router) + TypeScript + CSS Modules, dark/light theming, client-side search and filtering across all indexes, auto-generated `sitemap.xml` and `robots.txt` driven directly by the content models.

## Adding content

- A new blog post = a new page under `app/blogs/<slug>/` plus an entry in `models/blogs.model.ts`.
- A new tool/cheatsheet = an entry in `models/resources.model.ts` (external link) and, for in-house pages, a new route under `app/resources/` with its data in a `models/*.model.ts` file.
- Sitemap, robots, search and tag filtering all update automatically.
