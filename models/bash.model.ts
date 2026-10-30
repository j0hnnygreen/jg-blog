import type { CheatSheet } from "./cheatsheets.model";

export const BASH: CheatSheet[] = [
  {
    title: "File & Directory Navigation",
    commands: [
      {
        command: "pwd",
        description: "Print the current working directory",
        descriptionWords: "current directory, working directory, where am i",
      },
      {
        command: "cd /path/to/dir",
        description: "Change the current working directory",
        descriptionWords: "change directory, go to, navigate",
      },
      {
        command: "cd -",
        description: "Go back to the previous working directory",
        descriptionWords: "previous directory, go back, toggle dirs",
      },
      {
        command: "cd ~",
        description: "Go to the home directory",
        descriptionWords: "home directory, tilde",
      },
      {
        command: "cd ..",
        description: "Go one directory up",
        descriptionWords: "parent directory, up one level",
      },
      {
        command: "ls",
        description: "List files and directories",
        descriptionWords: "list files, contents of directory",
      },
      {
        command: "ls -la",
        description:
          "List all files (including hidden) with permissions, sizes and dates",
        descriptionWords: "hidden files, long format, permissions, all files",
      },
      {
        command: "tree [-L depth]",
        description: "Show files and directories as an indented tree",
        descriptionWords: "tree view, directory structure, hierarchy",
      },
      {
        command: "stat [file]",
        description: "Show detailed information about a file (size, inode, timestamps)",
        descriptionWords: "file info, metadata, timestamps, inode",
      },
    ],
    descriptionWords:
      "navigate, current directory, change directory, previous directory, home, list files, hidden files, tree, file info, stat",
  },
  {
    title: "Working with Files",
    commands: [
      {
        command: "cp [source] [dest]",
        description: "Copy a file or directory (use -r for directories)",
        descriptionWords: "copy, recursive",
      },
      {
        command: "mv [old] [new]",
        description: "Move or rename a file/directory",
        descriptionWords: "move, rename",
      },
      {
        command: "rm [file]",
        description: "Delete a file (use -rf for a non-empty directory)",
        descriptionWords: "delete file, remove, force",
      },
      {
        command: "mkdir -p a/b/c",
        description: "Create a directory (create missing parent directories with -p)",
        descriptionWords: "make directory, create folder, parents",
      },
      {
        command: "touch [file]",
        description: "Create an empty file or update its timestamp",
        descriptionWords: "create file, empty file, timestamp, touch file",
      },
      {
        command: "ln -s [target] [link]",
        description: "Create a symbolic link to a file or directory",
        descriptionWords: "symlink, symbolic link, link file",
      },
      {
        command: "file [path]",
        description: "Identify a file's type (magic bytes)",
        descriptionWords: "file type, magic bytes, identify binary",
      },
      {
        command: "find /dir -name \"*.txt\"",
        description: "Find files by name under a directory",
        descriptionWords: "find files, search files, by name, wildcard",
      },
      {
        command: "find /dir -type f -size +100M",
        description: "Find files larger than 100 MB",
        descriptionWords: "large files, by size",
      },
      {
        command: "md5sum / sha256sum [file]",
        description: "Compute a file's MD5 or SHA-256 hash",
        descriptionWords: "hash file, checksum, integrity",
      },
    ],
    descriptionWords:
      "copy files, move, rename, delete, remove, create directory, empty file, symlink, file type, magic bytes, find files, search, file size, hash, checksum",
  },
  {
    title: "Reading & Editing Text",
    commands: [
      {
        command: "cat [file]",
        description: "Print a file's contents to stdout",
        descriptionWords: "print file, view file, concatenate",
      },
      {
        command: "less [file]",
        description: "View a file with paging and search (/)",
        descriptionWords: "pager, scroll, view large file",
      },
      {
        command: "head -n [10] [file]",
        description: "Print the first n lines of a file",
        descriptionWords: "first lines, beginning",
      },
      {
        command: "tail -n [10] [file]",
        description: "Print the last n lines of a file",
        descriptionWords: "last lines, end, tail file",
      },
      {
        command: "tail -f [log]",
        description: "Follow a growing file (e.g. a log) in real time",
        descriptionWords: "follow logs, live output, watch file",
      },
      {
        command: "wc -l [file]",
        description: "Count lines (also words with -w and bytes with -c)",
        descriptionWords: "count lines, word count, byte count",
      },
      {
        command: "grep -i -n \"pattern\" [file]",
        description:
          "Search text with a pattern (-i ignore case, -n line numbers, -r recursive)",
        descriptionWords: "search text, regex, filter lines, ignore case, recursive",
      },
      {
        command: "grep -v \"pattern\"",
        description: "Print lines that DO NOT match the pattern",
        descriptionWords: "invert match, exclude lines",
      },
      {
        command: "sed 's/old/new/g' [file]",
        description: "Search and replace text, printing the result (use -i to write in-place)",
        descriptionWords: "replace text, substitute, stream editor, in place",
      },
      {
        command: "awk -F',' '{print $2}' [file]",
        description: "Split each line by a field separator and select columns",
        descriptionWords: "columns, fields, csv, print column, field separator",
      },
      {
        command: "cut -d: -f1 [file]",
        description: "Cut fields from delimited lines (e.g. /etc/passwd usernames)",
        descriptionWords: "split delimiter, columns, extract field",
      },
      {
        command: "sort -u / sort -nr [file]",
        description: "Sort lines (unique only / numeric reverse)",
        descriptionWords: "sort lines, alphabetical, numeric, unique",
      },
      {
        command: "uniq [file]",
        description: "Collapse repeated adjacent lines (often used after sort)",
        descriptionWords: "duplicate lines, deduplicate",
      },
      {
        command: "diff -u [a] [b]",
        description: "Compare two files line by line",
        descriptionWords: "difference between files, compare files",
      },
      {
        command: "tr -d '\\n'",
        description: "Translate or delete characters (e.g. strip newlines)",
        descriptionWords: "characters, translate, delete newlines, replace char",
      },
    ],
    descriptionWords:
      "view file, print file, pager, head tail first last lines, follow logs, count lines, search text, regex, replace text, columns fields csv, sort unique duplicates, diff compare, translate characters, tr",
  },
  {
    title: "Users, Groups & Permissions",
    commands: [
      {
        command: "whoami",
        description: "Print the current effective username",
        descriptionWords: "current user, am i root",
      },
      {
        command: "id",
        description: "Print UID, GID and all groups of the current user",
        descriptionWords: "user id, group id, uid, gid, groups",
      },
      {
        command: "sudo -l",
        description: "List commands the current user may run with sudo",
        descriptionWords: "sudoers, sudo privileges, privesc, allowed commands",
      },
      {
        command: "su [user]",
        description: "Switch user (with - to inherit the login environment)",
        descriptionWords: "switch user, become root, login shell",
      },
      {
        command: "useradd / adduser [name]",
        description: "Create a new user account",
        descriptionWords: "add user, create account",
      },
      {
        command: "usermod -aG sudo [user]",
        description: "Append a user to a group (e.g. sudoers)",
        descriptionWords: "modify user, add to group, sudo group, append group",
      },
      {
        command: "chmod 755 [file]",
        description: "Change file mode bits (see the chmod calculator)",
        descriptionWords: "permissions, mode bits, rwx, octal",
      },
      {
        command: "chown user:group [file]",
        description: "Change the owner and group of a file",
        descriptionWords: "change owner, ownership, group, chown",
      },
      {
        command: "passwd [user]",
        description: "Change a user's password",
        descriptionWords: "change password, password",
      },
      {
        command: "cat /etc/passwd",
        description: "List system users (shells and hashed passwords are elsewhere)",
        descriptionWords: "list users, passwd file, shells, enum users",
      },
    ],
    descriptionWords:
      "current user, whoami, id, uid, sudo list, switch user, create user, add to group, permissions, chmod, chown, ownership, password, enumerate users",
  },
  {
    title: "Processes & Services",
    commands: [
      {
        command: "ps aux",
        description: "Show every running process with details",
        descriptionWords: "processes, list processes, ps, running",
      },
      {
        command: "ps -ef --forest",
        description: "Show processes as a parent/child tree",
        descriptionWords: "process tree, parent child",
      },
      {
        command: "top / htop",
        description: "Live interactive process and resource viewer",
        descriptionWords: "cpu usage, memory usage, monitor, live view",
      },
      {
        command: "kill [-9] [pid]",
        description: "Send a signal to a process (-9 forces termination)",
        descriptionWords: "kill process, terminate, stop process, signal",
      },
      {
        command: "pkill -f 'script.py'",
        description: "Kill processes matching a pattern",
        descriptionWords: "kill by name, pattern, terminate by name",
      },
      {
        command: "jobs / fg / bg",
        description: "Manage background jobs of the current shell",
        descriptionWords: "background job, foreground, resume, stop ctrl z",
      },
      {
        command: "[cmd] &",
        description: "Run a command in the background",
        descriptionWords: "run in background, ampersand, async shell",
      },
      {
        command: "nohup [cmd] &",
        description: "Run a command immune to hangups, output to nohup.out",
        descriptionWords: "keep running after logout, disconnect, persist",
      },
      {
        command: "systemctl status [unit]",
        description: "Show the status of a systemd service",
        descriptionWords: "service status, systemd, daemon",
      },
      {
        command: "systemctl start|stop|restart [unit]",
        description: "Control a systemd service",
        descriptionWords: "start service, stop service, restart service",
      },
      {
        command: "journalctl -u [unit] -f",
        description: "Follow the logs of a systemd unit",
        descriptionWords: "service logs, journald, follow logs",
      },
      {
        command: "crontab -e",
        description: "Edit the current user's scheduled jobs",
        descriptionWords: "cron jobs, schedule task, crontab",
      },
    ],
    descriptionWords:
      "processes, ps, kill, terminate, htop top cpu memory, background jobs, nohup, systemd service, systemctl, logs, journald, cron schedule",
  },
  {
    title: "Networking",
    commands: [
      {
        command: "ip a",
        description: "Show all network interfaces and their addresses",
        descriptionWords: "interfaces, ip address, ifconfig replacement",
      },
      {
        command: "ip r",
        description: "Show the routing table (default gateway)",
        descriptionWords: "routes, gateway, routing table",
      },
      {
        command: "ping -c 4 [host]",
        description: "Send 4 ICMP echo requests to a host",
        descriptionWords: "ping host, connectivity check, icmp",
      },
      {
        command: "dig / nslookup [domain]",
        description: "Query DNS records for a domain",
        descriptionWords: "dns lookup, resolve domain, dns records, a record",
      },
      {
        command: "ss -tulpn",
        description: "List listening TCP/UDP sockets and their owners",
        descriptionWords: "open ports, listening ports, sockets, netstat replacement",
      },
      {
        command: "netstat -ano",
        description: "Show connections and ports with PIDs (great for quick triage)",
        descriptionWords: "netstat, connections, ports, pid",
      },
      {
        command: "curl -v [url]",
        description: "Make an HTTP request and show verbose output",
        descriptionWords: "http request, download, verbose headers, curl",
      },
      {
        command: "curl -I [url]",
        description: "Fetch only the response headers (HEAD request)",
        descriptionWords: "headers only, head request, status code",
      },
      {
        command: "wget [url]",
        description: "Download a file over HTTP(S)/FTP",
        descriptionWords: "download file, mirror, save remotely",
      },
      {
        command: "ssh user@host",
        description: "Open an encrypted shell session on a remote host",
        descriptionWords: "ssh, remote shell, login to server",
      },
      {
        command: "scp [file] user@host:/path",
        description: "Copy files to/from a remote host over SSH",
        descriptionWords: "copy over ssh, transfer files, secure copy",
      },
      {
        command: "nmap -sV -T4 [target]",
        description: "Fast version scan of common ports on a target",
        descriptionWords: "port scan, service versions, nmap, recon",
      },
    ],
    descriptionWords:
      "network interfaces, ip address, routes, gateway, ping, dns, resolve, open ports, listening sockets, curl request, headers, download, ssh, scp transfer, nmap scan",
    note: "See the Nmap cheatsheet for a full breakdown of scanning options.",
  },
  {
    title: "Archives & Compression",
    commands: [
      {
        command: "tar -xvf [archive.tar]",
        description: "Extract a tar archive verbosely",
        descriptionWords: "extract tar, unpack, tape archive",
      },
      {
        command: "tar -czvf [out.tar.gz] [dir]",
        description: "Create a gzip-compressed tar from a directory",
        descriptionWords: "create tar.gz, compress directory, gzip",
      },
      {
        command: "unzip [archive.zip]",
        description: "Extract a zip archive",
        descriptionWords: "extract zip, unpack zip",
      },
      {
        command: "zip -r [out.zip] [dir]",
        description: "Compress a whole directory into a zip",
        descriptionWords: "create zip, compress folder, recursive zip",
      },
      {
        command: "gunzip [file.gz] / zcat [file.gz]",
        description: "Decompress a .gz file / read it without saving",
        descriptionWords: "decompress gzip, read gz, gzcat",
      },
      {
        command: "base64 [file]",
        description: "Encode or decode (with -d) base64 data from a file",
        descriptionWords: "encode base64, decode base64, transfer data",
      },
    ],
    descriptionWords:
      "tar extract, create archive, compress, gzip, zip, unzip, decompress, base64 encode decode",
  },
  {
    title: "Shell Productivity & Tricks",
    commands: [
      {
        command: "history | grep [cmd]",
        description: "Search previously executed commands",
        descriptionWords: "history, find old command, rerun",
      },
      {
        command: "!!",
        description: "Run the previous command again (e.g. sudo !!)",
        descriptionWords: "repeat last command, bang bang, sudo",
      },
      {
        command: "ctrl + r",
        description: "Search interactively through command history",
        descriptionWords: "reverse search history, incremental search",
      },
      {
        command: "ctrl + c / ctrl + z",
        description: "Interrupt a running command / suspend it to a job",
        descriptionWords: "stop command, interrupt, suspend, background",
      },
      {
        command: "[cmd] > [file]",
        description: "Redirect stdout to a file (overwrite; >> appends)",
        descriptionWords: "redirect output, save output, overwrite, append",
      },
      {
        command: "[cmd] 2> [err-file]",
        description: "Redirect stderr to a file (2>&1 merges both streams)",
        descriptionWords: "error output, stderr, redirect errors, combine streams",
      },
      {
        command: "[cmd1] | [cmd2]",
        description: "Pipe the output of one command into the next",
        descriptionWords: "pipe, chain commands, filters",
      },
      {
        command: "xargs [cmd]",
        description: "Build arguments from stdin (e.g. find … | xargs rm)",
        descriptionWords: "arguments stdin, pipe into command, batch",
      },
      {
        command: "[cmd1] && [cmd2]",
        description: "Run cmd2 only if cmd1 succeeded (|| runs it on failure)",
        descriptionWords: "conditional run, and then, or else, chain",
      },
      {
        command: "export VAR=value",
        description: "Set an environment variable for the session",
        descriptionWords: "environment variable, export, env, set variable",
      },
      {
        command: "alias ll='ls -la'",
        description: "Create a command shortcut",
        descriptionWords: "alias, shortcut, customize shell",
      },
      {
        command: "watch -n 2 [cmd]",
        description: "Re-run a command every 2 seconds and show the diff",
        descriptionWords: "repeat command, monitor interval, watch",
      },
    ],
    descriptionWords:
      "history, repeat command, reverse search, interrupt suspend, redirect output, stderr, pipes, xargs, conditional chain, environment variable, alias, watch repeat",
  },
];
