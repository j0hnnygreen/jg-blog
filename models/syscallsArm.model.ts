// Source: https://arm.syscall.sh (ARMv7/EABI syscall table, extracted verbatim)
export interface SyscallArm {
  num: string;
  name: string;
  /** Syscall number in hexadecimal, as loaded into the R7 register. */
  r7: string;
  args: string[];
}

export const SYSCALLS_ARM: SyscallArm[] = [
 {
  "num": "0",
  "name": "restart_syscall",
  "r7": "0",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "1",
  "name": "exit",
  "r7": "1",
  "args": [
   "int error_code",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "2",
  "name": "fork",
  "r7": "2",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "3",
  "name": "read",
  "r7": "3",
  "args": [
   "unsigned int fd",
   "char *buf",
   "size_t count",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "4",
  "name": "write",
  "r7": "4",
  "args": [
   "unsigned int fd",
   "const char *buf",
   "size_t count",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "5",
  "name": "open",
  "r7": "5",
  "args": [
   "const char *filename",
   "int flags",
   "umode_t mode",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "6",
  "name": "close",
  "r7": "6",
  "args": [
   "unsigned int fd",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "7",
  "name": "not implemented",
  "r7": "7",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "8",
  "name": "creat",
  "r7": "8",
  "args": [
   "const char *pathname",
   "umode_t mode",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "9",
  "name": "link",
  "r7": "9",
  "args": [
   "const char *oldname",
   "const char *newname",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "10",
  "name": "unlink",
  "r7": "A",
  "args": [
   "const char *pathname",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "11",
  "name": "execve",
  "r7": "B",
  "args": [
   "const char *filename",
   "const char *const *argv",
   "const char *const *envp",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "12",
  "name": "chdir",
  "r7": "C",
  "args": [
   "const char *filename",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "13",
  "name": "not implemented",
  "r7": "D",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "14",
  "name": "mknod",
  "r7": "E",
  "args": [
   "const char *filename",
   "umode_t mode",
   "unsigned dev",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "15",
  "name": "chmod",
  "r7": "F",
  "args": [
   "const char *filename",
   "umode_t mode",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "16",
  "name": "lchown",
  "r7": "10",
  "args": [
   "const char *filename",
   "uid_t user",
   "gid_t group",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "17",
  "name": "not implemented",
  "r7": "11",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "18",
  "name": "not implemented",
  "r7": "12",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "19",
  "name": "lseek",
  "r7": "13",
  "args": [
   "unsigned int fd",
   "off_t offset",
   "unsigned int whence",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "20",
  "name": "getpid",
  "r7": "14",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "21",
  "name": "mount",
  "r7": "15",
  "args": [
   "char *dev_name",
   "char *dir_name",
   "char *type",
   "unsigned long flags",
   "void *data",
   "-"
  ]
 },
 {
  "num": "22",
  "name": "not implemented",
  "r7": "16",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "23",
  "name": "setuid",
  "r7": "17",
  "args": [
   "uid_t uid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "24",
  "name": "getuid",
  "r7": "18",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "25",
  "name": "not implemented",
  "r7": "19",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "26",
  "name": "ptrace",
  "r7": "1A",
  "args": [
   "long request",
   "long pid",
   "unsigned long addr",
   "unsigned long data",
   "-",
   "-"
  ]
 },
 {
  "num": "27",
  "name": "not implemented",
  "r7": "1B",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "28",
  "name": "not implemented",
  "r7": "1C",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "29",
  "name": "pause",
  "r7": "1D",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "30",
  "name": "not implemented",
  "r7": "1E",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "31",
  "name": "not implemented",
  "r7": "1F",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "32",
  "name": "not implemented",
  "r7": "20",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "33",
  "name": "access",
  "r7": "21",
  "args": [
   "const char *filename",
   "int mode",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "34",
  "name": "nice",
  "r7": "22",
  "args": [
   "int increment",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "35",
  "name": "not implemented",
  "r7": "23",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "36",
  "name": "sync",
  "r7": "24",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "37",
  "name": "kill",
  "r7": "25",
  "args": [
   "pid_t pid",
   "int sig",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "38",
  "name": "rename",
  "r7": "26",
  "args": [
   "const char *oldname",
   "const char *newname",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "39",
  "name": "mkdir",
  "r7": "27",
  "args": [
   "const char *pathname",
   "umode_t mode",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "40",
  "name": "rmdir",
  "r7": "28",
  "args": [
   "const char *pathname",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "41",
  "name": "dup",
  "r7": "29",
  "args": [
   "unsigned int fildes",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "42",
  "name": "pipe",
  "r7": "2A",
  "args": [
   "int *fildes",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "43",
  "name": "times",
  "r7": "2B",
  "args": [
   "struct tms *tbuf",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "44",
  "name": "not implemented",
  "r7": "2C",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "45",
  "name": "brk",
  "r7": "2D",
  "args": [
   "unsigned long brk",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "46",
  "name": "setgid",
  "r7": "2E",
  "args": [
   "gid_t gid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "47",
  "name": "getgid",
  "r7": "2F",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "48",
  "name": "not implemented",
  "r7": "30",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "49",
  "name": "geteuid",
  "r7": "31",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "50",
  "name": "getegid",
  "r7": "32",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "51",
  "name": "acct",
  "r7": "33",
  "args": [
   "const char *name",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "52",
  "name": "umount2",
  "r7": "34",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "53",
  "name": "not implemented",
  "r7": "35",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "54",
  "name": "ioctl",
  "r7": "36",
  "args": [
   "unsigned int fd",
   "unsigned int cmd",
   "unsigned long arg",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "55",
  "name": "fcntl",
  "r7": "37",
  "args": [
   "unsigned int fd",
   "unsigned int cmd",
   "unsigned long arg",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "56",
  "name": "not implemented",
  "r7": "38",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "57",
  "name": "setpgid",
  "r7": "39",
  "args": [
   "pid_t pid",
   "pid_t pgid",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "58",
  "name": "not implemented",
  "r7": "3A",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "59",
  "name": "not implemented",
  "r7": "3B",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "60",
  "name": "umask",
  "r7": "3C",
  "args": [
   "int mask",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "61",
  "name": "chroot",
  "r7": "3D",
  "args": [
   "const char *filename",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "62",
  "name": "ustat",
  "r7": "3E",
  "args": [
   "unsigned dev",
   "struct ustat *ubuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "63",
  "name": "dup2",
  "r7": "3F",
  "args": [
   "unsigned int oldfd",
   "unsigned int newfd",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "64",
  "name": "getppid",
  "r7": "40",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "65",
  "name": "getpgrp",
  "r7": "41",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "66",
  "name": "setsid",
  "r7": "42",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "67",
  "name": "sigaction",
  "r7": "43",
  "args": [
   "int",
   "const struct old_sigaction *",
   "struct old_sigaction *",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "68",
  "name": "not implemented",
  "r7": "44",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "69",
  "name": "not implemented",
  "r7": "45",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "70",
  "name": "setreuid",
  "r7": "46",
  "args": [
   "uid_t ruid",
   "uid_t euid",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "71",
  "name": "setregid",
  "r7": "47",
  "args": [
   "gid_t rgid",
   "gid_t egid",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "72",
  "name": "sigsuspend",
  "r7": "48",
  "args": [
   "int unused1",
   "int unused2",
   "old_sigset_t mask",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "73",
  "name": "sigpending",
  "r7": "49",
  "args": [
   "old_sigset_t *uset",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "74",
  "name": "sethostname",
  "r7": "4A",
  "args": [
   "char *name",
   "int len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "75",
  "name": "setrlimit",
  "r7": "4B",
  "args": [
   "unsigned int resource",
   "struct rlimit *rlim",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "76",
  "name": "not implemented",
  "r7": "4C",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "77",
  "name": "getrusage",
  "r7": "4D",
  "args": [
   "int who",
   "struct rusage *ru",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "78",
  "name": "gettimeofday",
  "r7": "4E",
  "args": [
   "struct timeval *tv",
   "struct timezone *tz",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "79",
  "name": "settimeofday",
  "r7": "4F",
  "args": [
   "struct timeval *tv",
   "struct timezone *tz",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "80",
  "name": "getgroups",
  "r7": "50",
  "args": [
   "int gidsetsize",
   "gid_t *grouplist",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "81",
  "name": "setgroups",
  "r7": "51",
  "args": [
   "int gidsetsize",
   "gid_t *grouplist",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "82",
  "name": "not implemented",
  "r7": "52",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "83",
  "name": "symlink",
  "r7": "53",
  "args": [
   "const char *old",
   "const char *new",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "84",
  "name": "not implemented",
  "r7": "54",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "85",
  "name": "readlink",
  "r7": "55",
  "args": [
   "const char *path",
   "char *buf",
   "int bufsiz",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "86",
  "name": "uselib",
  "r7": "56",
  "args": [
   "const char *library",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "87",
  "name": "swapon",
  "r7": "57",
  "args": [
   "const char *specialfile",
   "int swap_flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "88",
  "name": "reboot",
  "r7": "58",
  "args": [
   "int magic1",
   "int magic2",
   "unsigned int cmd",
   "void *arg",
   "-",
   "-"
  ]
 },
 {
  "num": "89",
  "name": "not implemented",
  "r7": "59",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "90",
  "name": "not implemented",
  "r7": "5A",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "91",
  "name": "munmap",
  "r7": "5B",
  "args": [
   "unsigned long addr",
   "size_t len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "92",
  "name": "truncate",
  "r7": "5C",
  "args": [
   "const char *path",
   "long length",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "93",
  "name": "ftruncate",
  "r7": "5D",
  "args": [
   "unsigned int fd",
   "unsigned long length",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "94",
  "name": "fchmod",
  "r7": "5E",
  "args": [
   "unsigned int fd",
   "umode_t mode",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "95",
  "name": "fchown",
  "r7": "5F",
  "args": [
   "unsigned int fd",
   "uid_t user",
   "gid_t group",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "96",
  "name": "getpriority",
  "r7": "60",
  "args": [
   "int which",
   "int who",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "97",
  "name": "setpriority",
  "r7": "61",
  "args": [
   "int which",
   "int who",
   "int niceval",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "98",
  "name": "not implemented",
  "r7": "62",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "99",
  "name": "statfs",
  "r7": "63",
  "args": [
   "const char * path",
   "struct statfs *buf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "100",
  "name": "fstatfs",
  "r7": "64",
  "args": [
   "unsigned int fd",
   "struct statfs *buf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "101",
  "name": "not implemented",
  "r7": "65",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "102",
  "name": "not implemented",
  "r7": "66",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "103",
  "name": "syslog",
  "r7": "67",
  "args": [
   "int type",
   "char *buf",
   "int len",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "104",
  "name": "setitimer",
  "r7": "68",
  "args": [
   "int which",
   "struct itimerval *value",
   "struct itimerval *ovalue",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "105",
  "name": "getitimer",
  "r7": "69",
  "args": [
   "int which",
   "struct itimerval *value",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "106",
  "name": "stat",
  "r7": "6A",
  "args": [
   "const char *filename",
   "struct __old_kernel_stat *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "107",
  "name": "lstat",
  "r7": "6B",
  "args": [
   "const char *filename",
   "struct __old_kernel_stat *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "108",
  "name": "fstat",
  "r7": "6C",
  "args": [
   "unsigned int fd",
   "struct __old_kernel_stat *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "109",
  "name": "not implemented",
  "r7": "6D",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "110",
  "name": "not implemented",
  "r7": "6E",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "111",
  "name": "vhangup",
  "r7": "6F",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "112",
  "name": "not implemented",
  "r7": "70",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "113",
  "name": "not implemented",
  "r7": "71",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "114",
  "name": "wait4",
  "r7": "72",
  "args": [
   "pid_t pid",
   "int *stat_addr",
   "int options",
   "struct rusage *ru",
   "-",
   "-"
  ]
 },
 {
  "num": "115",
  "name": "swapoff",
  "r7": "73",
  "args": [
   "const char *specialfile",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "116",
  "name": "sysinfo",
  "r7": "74",
  "args": [
   "struct sysinfo *info",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "117",
  "name": "not implemented",
  "r7": "75",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "118",
  "name": "fsync",
  "r7": "76",
  "args": [
   "unsigned int fd",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "119",
  "name": "sigreturn",
  "r7": "77",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "120",
  "name": "clone",
  "r7": "78",
  "args": [
   "unsigned long",
   "unsigned long",
   "int *",
   "int *",
   "unsigned long",
   "-"
  ]
 },
 {
  "num": "121",
  "name": "setdomainname",
  "r7": "79",
  "args": [
   "char *name",
   "int len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "122",
  "name": "uname",
  "r7": "7A",
  "args": [
   "struct old_utsname *",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "123",
  "name": "not implemented",
  "r7": "7B",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "124",
  "name": "adjtimex",
  "r7": "7C",
  "args": [
   "struct __kernel_timex *txc_p",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "125",
  "name": "mprotect",
  "r7": "7D",
  "args": [
   "unsigned long start",
   "size_t len",
   "unsigned long prot",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "126",
  "name": "sigprocmask",
  "r7": "7E",
  "args": [
   "int how",
   "old_sigset_t *set",
   "old_sigset_t *oset",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "127",
  "name": "not implemented",
  "r7": "7F",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "128",
  "name": "init_module",
  "r7": "80",
  "args": [
   "void *umod",
   "unsigned long len",
   "const char *uargs",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "129",
  "name": "delete_module",
  "r7": "81",
  "args": [
   "const char *name_user",
   "unsigned int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "130",
  "name": "not implemented",
  "r7": "82",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "131",
  "name": "quotactl",
  "r7": "83",
  "args": [
   "unsigned int cmd",
   "const char *special",
   "qid_t id",
   "void *addr",
   "-",
   "-"
  ]
 },
 {
  "num": "132",
  "name": "getpgid",
  "r7": "84",
  "args": [
   "pid_t pid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "133",
  "name": "fchdir",
  "r7": "85",
  "args": [
   "unsigned int fd",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "134",
  "name": "bdflush",
  "r7": "86",
  "args": [
   "int func",
   "long data",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "135",
  "name": "sysfs",
  "r7": "87",
  "args": [
   "int option",
   "unsigned long arg1",
   "unsigned long arg2",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "136",
  "name": "personality",
  "r7": "88",
  "args": [
   "unsigned int personality",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "137",
  "name": "not implemented",
  "r7": "89",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "138",
  "name": "setfsuid",
  "r7": "8A",
  "args": [
   "uid_t uid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "139",
  "name": "setfsgid",
  "r7": "8B",
  "args": [
   "gid_t gid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "140",
  "name": "_llseek",
  "r7": "8C",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "141",
  "name": "getdents",
  "r7": "8D",
  "args": [
   "unsigned int fd",
   "struct linux_dirent *dirent",
   "unsigned int count",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "142",
  "name": "_newselect",
  "r7": "8E",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "143",
  "name": "flock",
  "r7": "8F",
  "args": [
   "unsigned int fd",
   "unsigned int cmd",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "144",
  "name": "msync",
  "r7": "90",
  "args": [
   "unsigned long start",
   "size_t len",
   "int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "145",
  "name": "readv",
  "r7": "91",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "146",
  "name": "writev",
  "r7": "92",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "147",
  "name": "getsid",
  "r7": "93",
  "args": [
   "pid_t pid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "148",
  "name": "fdatasync",
  "r7": "94",
  "args": [
   "unsigned int fd",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "149",
  "name": "_sysctl",
  "r7": "95",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "150",
  "name": "mlock",
  "r7": "96",
  "args": [
   "unsigned long start",
   "size_t len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "151",
  "name": "munlock",
  "r7": "97",
  "args": [
   "unsigned long start",
   "size_t len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "152",
  "name": "mlockall",
  "r7": "98",
  "args": [
   "int flags",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "153",
  "name": "munlockall",
  "r7": "99",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "154",
  "name": "sched_setparam",
  "r7": "9A",
  "args": [
   "pid_t pid",
   "struct sched_param *param",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "155",
  "name": "sched_getparam",
  "r7": "9B",
  "args": [
   "pid_t pid",
   "struct sched_param *param",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "156",
  "name": "sched_setscheduler",
  "r7": "9C",
  "args": [
   "pid_t pid",
   "int policy",
   "struct sched_param *param",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "157",
  "name": "sched_getscheduler",
  "r7": "9D",
  "args": [
   "pid_t pid",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "158",
  "name": "sched_yield",
  "r7": "9E",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "159",
  "name": "sched_get_priority_max",
  "r7": "9F",
  "args": [
   "int policy",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "160",
  "name": "sched_get_priority_min",
  "r7": "A0",
  "args": [
   "int policy",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "161",
  "name": "sched_rr_get_interval",
  "r7": "A1",
  "args": [
   "pid_t pid",
   "struct __kernel_timespec *interval",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "162",
  "name": "nanosleep",
  "r7": "A2",
  "args": [
   "struct __kernel_timespec *rqtp",
   "struct __kernel_timespec *rmtp",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "163",
  "name": "mremap",
  "r7": "A3",
  "args": [
   "unsigned long addr",
   "unsigned long old_len",
   "unsigned long new_len",
   "unsigned long flags",
   "unsigned long new_addr",
   "-"
  ]
 },
 {
  "num": "164",
  "name": "setresuid",
  "r7": "A4",
  "args": [
   "uid_t ruid",
   "uid_t euid",
   "uid_t suid",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "165",
  "name": "getresuid",
  "r7": "A5",
  "args": [
   "uid_t *ruid",
   "uid_t *euid",
   "uid_t *suid",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "166",
  "name": "not implemented",
  "r7": "A6",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "167",
  "name": "not implemented",
  "r7": "A7",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "168",
  "name": "poll",
  "r7": "A8",
  "args": [
   "struct pollfd *ufds",
   "unsigned int nfds",
   "int timeout",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "169",
  "name": "nfsservctl",
  "r7": "A9",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "170",
  "name": "setresgid",
  "r7": "AA",
  "args": [
   "gid_t rgid",
   "gid_t egid",
   "gid_t sgid",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "171",
  "name": "getresgid",
  "r7": "AB",
  "args": [
   "gid_t *rgid",
   "gid_t *egid",
   "gid_t *sgid",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "172",
  "name": "prctl",
  "r7": "AC",
  "args": [
   "int option",
   "unsigned long arg2",
   "unsigned long arg3",
   "unsigned long arg4",
   "unsigned long arg5",
   "-"
  ]
 },
 {
  "num": "173",
  "name": "rt_sigreturn",
  "r7": "AD",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "174",
  "name": "rt_sigaction",
  "r7": "AE",
  "args": [
   "int",
   "const struct sigaction *",
   "struct sigaction *",
   "size_t",
   "-",
   "-"
  ]
 },
 {
  "num": "175",
  "name": "rt_sigprocmask",
  "r7": "AF",
  "args": [
   "int how",
   "sigset_t *set",
   "sigset_t *oset",
   "size_t sigsetsize",
   "-",
   "-"
  ]
 },
 {
  "num": "176",
  "name": "rt_sigpending",
  "r7": "B0",
  "args": [
   "sigset_t *set",
   "size_t sigsetsize",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "177",
  "name": "rt_sigtimedwait",
  "r7": "B1",
  "args": [
   "const sigset_t *uthese",
   "siginfo_t *uinfo",
   "const struct __kernel_timespec *uts",
   "size_t sigsetsize",
   "-",
   "-"
  ]
 },
 {
  "num": "178",
  "name": "rt_sigqueueinfo",
  "r7": "B2",
  "args": [
   "pid_t pid",
   "int sig",
   "siginfo_t *uinfo",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "179",
  "name": "rt_sigsuspend",
  "r7": "B3",
  "args": [
   "sigset_t *unewset",
   "size_t sigsetsize",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "180",
  "name": "pread64",
  "r7": "B4",
  "args": [
   "unsigned int fd",
   "char *buf",
   "size_t count",
   "loff_t pos",
   "-",
   "-"
  ]
 },
 {
  "num": "181",
  "name": "pwrite64",
  "r7": "B5",
  "args": [
   "unsigned int fd",
   "const char *buf",
   "size_t count",
   "loff_t pos",
   "-",
   "-"
  ]
 },
 {
  "num": "182",
  "name": "chown",
  "r7": "B6",
  "args": [
   "const char *filename",
   "uid_t user",
   "gid_t group",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "183",
  "name": "getcwd",
  "r7": "B7",
  "args": [
   "char *buf",
   "unsigned long size",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "184",
  "name": "capget",
  "r7": "B8",
  "args": [
   "cap_user_header_t header",
   "cap_user_data_t dataptr",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "185",
  "name": "capset",
  "r7": "B9",
  "args": [
   "cap_user_header_t header",
   "const cap_user_data_t data",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "186",
  "name": "sigaltstack",
  "r7": "BA",
  "args": [
   "const struct sigaltstack *uss",
   "struct sigaltstack *uoss",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "187",
  "name": "sendfile",
  "r7": "BB",
  "args": [
   "int out_fd",
   "int in_fd",
   "off_t *offset",
   "size_t count",
   "-",
   "-"
  ]
 },
 {
  "num": "188",
  "name": "not implemented",
  "r7": "BC",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "189",
  "name": "not implemented",
  "r7": "BD",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "190",
  "name": "vfork",
  "r7": "BE",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "191",
  "name": "ugetrlimit",
  "r7": "BF",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "192",
  "name": "mmap2",
  "r7": "C0",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "193",
  "name": "truncate64",
  "r7": "C1",
  "args": [
   "const char *path",
   "loff_t length",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "194",
  "name": "ftruncate64",
  "r7": "C2",
  "args": [
   "unsigned int fd",
   "loff_t length",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "195",
  "name": "stat64",
  "r7": "C3",
  "args": [
   "const char *filename",
   "struct stat64 *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "196",
  "name": "lstat64",
  "r7": "C4",
  "args": [
   "const char *filename",
   "struct stat64 *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "197",
  "name": "fstat64",
  "r7": "C5",
  "args": [
   "unsigned long fd",
   "struct stat64 *statbuf",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "198",
  "name": "lchown32",
  "r7": "C6",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "199",
  "name": "getuid32",
  "r7": "C7",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "200",
  "name": "getgid32",
  "r7": "C8",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "201",
  "name": "geteuid32",
  "r7": "C9",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "202",
  "name": "getegid32",
  "r7": "CA",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "203",
  "name": "setreuid32",
  "r7": "CB",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "204",
  "name": "setregid32",
  "r7": "CC",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "205",
  "name": "getgroups32",
  "r7": "CD",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "206",
  "name": "setgroups32",
  "r7": "CE",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "207",
  "name": "fchown32",
  "r7": "CF",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "208",
  "name": "setresuid32",
  "r7": "D0",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "209",
  "name": "getresuid32",
  "r7": "D1",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "210",
  "name": "setresgid32",
  "r7": "D2",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "211",
  "name": "getresgid32",
  "r7": "D3",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "212",
  "name": "chown32",
  "r7": "D4",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "213",
  "name": "setuid32",
  "r7": "D5",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "214",
  "name": "setgid32",
  "r7": "D6",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "215",
  "name": "setfsuid32",
  "r7": "D7",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "216",
  "name": "setfsgid32",
  "r7": "D8",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "217",
  "name": "getdents64",
  "r7": "D9",
  "args": [
   "unsigned int fd",
   "struct linux_dirent64 *dirent",
   "unsigned int count",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "218",
  "name": "pivot_root",
  "r7": "DA",
  "args": [
   "const char *new_root",
   "const char *put_old",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "219",
  "name": "mincore",
  "r7": "DB",
  "args": [
   "unsigned long start",
   "size_t len",
   "unsigned char * vec",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "220",
  "name": "madvise",
  "r7": "DC",
  "args": [
   "unsigned long start",
   "size_t len",
   "int behavior",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "221",
  "name": "fcntl64",
  "r7": "DD",
  "args": [
   "unsigned int fd",
   "unsigned int cmd",
   "unsigned long arg",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "222",
  "name": "not implemented",
  "r7": "DE",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "223",
  "name": "not implemented",
  "r7": "DF",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "224",
  "name": "gettid",
  "r7": "E0",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "225",
  "name": "readahead",
  "r7": "E1",
  "args": [
   "int fd",
   "loff_t offset",
   "size_t count",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "226",
  "name": "setxattr",
  "r7": "E2",
  "args": [
   "const char *path",
   "const char *name",
   "const void *value",
   "size_t size",
   "int flags",
   "-"
  ]
 },
 {
  "num": "227",
  "name": "lsetxattr",
  "r7": "E3",
  "args": [
   "const char *path",
   "const char *name",
   "const void *value",
   "size_t size",
   "int flags",
   "-"
  ]
 },
 {
  "num": "228",
  "name": "fsetxattr",
  "r7": "E4",
  "args": [
   "int fd",
   "const char *name",
   "const void *value",
   "size_t size",
   "int flags",
   "-"
  ]
 },
 {
  "num": "229",
  "name": "getxattr",
  "r7": "E5",
  "args": [
   "const char *path",
   "const char *name",
   "void *value",
   "size_t size",
   "-",
   "-"
  ]
 },
 {
  "num": "230",
  "name": "lgetxattr",
  "r7": "E6",
  "args": [
   "const char *path",
   "const char *name",
   "void *value",
   "size_t size",
   "-",
   "-"
  ]
 },
 {
  "num": "231",
  "name": "fgetxattr",
  "r7": "E7",
  "args": [
   "int fd",
   "const char *name",
   "void *value",
   "size_t size",
   "-",
   "-"
  ]
 },
 {
  "num": "232",
  "name": "listxattr",
  "r7": "E8",
  "args": [
   "const char *path",
   "char *list",
   "size_t size",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "233",
  "name": "llistxattr",
  "r7": "E9",
  "args": [
   "const char *path",
   "char *list",
   "size_t size",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "234",
  "name": "flistxattr",
  "r7": "EA",
  "args": [
   "int fd",
   "char *list",
   "size_t size",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "235",
  "name": "removexattr",
  "r7": "EB",
  "args": [
   "const char *path",
   "const char *name",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "236",
  "name": "lremovexattr",
  "r7": "EC",
  "args": [
   "const char *path",
   "const char *name",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "237",
  "name": "fremovexattr",
  "r7": "ED",
  "args": [
   "int fd",
   "const char *name",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "238",
  "name": "tkill",
  "r7": "EE",
  "args": [
   "pid_t pid",
   "int sig",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "239",
  "name": "sendfile64",
  "r7": "EF",
  "args": [
   "int out_fd",
   "int in_fd",
   "loff_t *offset",
   "size_t count",
   "-",
   "-"
  ]
 },
 {
  "num": "240",
  "name": "futex",
  "r7": "F0",
  "args": [
   "u32 *uaddr",
   "int op",
   "u32 val",
   "struct __kernel_timespec *utime",
   "u32 *uaddr2",
   "u32 val3"
  ]
 },
 {
  "num": "241",
  "name": "sched_setaffinity",
  "r7": "F1",
  "args": [
   "pid_t pid",
   "unsigned int len",
   "unsigned long *user_mask_ptr",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "242",
  "name": "sched_getaffinity",
  "r7": "F2",
  "args": [
   "pid_t pid",
   "unsigned int len",
   "unsigned long *user_mask_ptr",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "243",
  "name": "io_setup",
  "r7": "F3",
  "args": [
   "unsigned nr_reqs",
   "aio_context_t *ctx",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "244",
  "name": "io_destroy",
  "r7": "F4",
  "args": [
   "aio_context_t ctx",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "245",
  "name": "io_getevents",
  "r7": "F5",
  "args": [
   "aio_context_t ctx_id",
   "long min_nr",
   "long nr",
   "struct io_event *events",
   "struct __kernel_timespec *timeout",
   "-"
  ]
 },
 {
  "num": "246",
  "name": "io_submit",
  "r7": "F6",
  "args": [
   "aio_context_t",
   "long",
   "struct iocb * *",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "247",
  "name": "io_cancel",
  "r7": "F7",
  "args": [
   "aio_context_t ctx_id",
   "struct iocb *iocb",
   "struct io_event *result",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "248",
  "name": "exit_group",
  "r7": "F8",
  "args": [
   "int error_code",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "249",
  "name": "lookup_dcookie",
  "r7": "F9",
  "args": [
   "u64 cookie64",
   "char *buf",
   "size_t len",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "250",
  "name": "epoll_create",
  "r7": "FA",
  "args": [
   "int size",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "251",
  "name": "epoll_ctl",
  "r7": "FB",
  "args": [
   "int epfd",
   "int op",
   "int fd",
   "struct epoll_event *event",
   "-",
   "-"
  ]
 },
 {
  "num": "252",
  "name": "epoll_wait",
  "r7": "FC",
  "args": [
   "int epfd",
   "struct epoll_event *events",
   "int maxevents",
   "int timeout",
   "-",
   "-"
  ]
 },
 {
  "num": "253",
  "name": "remap_file_pages",
  "r7": "FD",
  "args": [
   "unsigned long start",
   "unsigned long size",
   "unsigned long prot",
   "unsigned long pgoff",
   "unsigned long flags",
   "-"
  ]
 },
 {
  "num": "254",
  "name": "not implemented",
  "r7": "FE",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "255",
  "name": "not implemented",
  "r7": "FF",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "256",
  "name": "set_tid_address",
  "r7": "100",
  "args": [
   "int *tidptr",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "257",
  "name": "timer_create",
  "r7": "101",
  "args": [
   "clockid_t which_clock",
   "struct sigevent *timer_event_spec",
   "timer_t * created_timer_id",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "258",
  "name": "timer_settime",
  "r7": "102",
  "args": [
   "timer_t timer_id",
   "int flags",
   "const struct __kernel_itimerspec *new_setting",
   "struct __kernel_itimerspec *old_setting",
   "-",
   "-"
  ]
 },
 {
  "num": "259",
  "name": "timer_gettime",
  "r7": "103",
  "args": [
   "timer_t timer_id",
   "struct __kernel_itimerspec *setting",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "260",
  "name": "timer_getoverrun",
  "r7": "104",
  "args": [
   "timer_t timer_id",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "261",
  "name": "timer_delete",
  "r7": "105",
  "args": [
   "timer_t timer_id",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "262",
  "name": "clock_settime",
  "r7": "106",
  "args": [
   "clockid_t which_clock",
   "const struct __kernel_timespec *tp",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "263",
  "name": "clock_gettime",
  "r7": "107",
  "args": [
   "clockid_t which_clock",
   "struct __kernel_timespec *tp",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "264",
  "name": "clock_getres",
  "r7": "108",
  "args": [
   "clockid_t which_clock",
   "struct __kernel_timespec *tp",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "265",
  "name": "clock_nanosleep",
  "r7": "109",
  "args": [
   "clockid_t which_clock",
   "int flags",
   "const struct __kernel_timespec *rqtp",
   "struct __kernel_timespec *rmtp",
   "-",
   "-"
  ]
 },
 {
  "num": "266",
  "name": "statfs64",
  "r7": "10A",
  "args": [
   "const char *path",
   "size_t sz",
   "struct statfs64 *buf",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "267",
  "name": "fstatfs64",
  "r7": "10B",
  "args": [
   "unsigned int fd",
   "size_t sz",
   "struct statfs64 *buf",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "268",
  "name": "tgkill",
  "r7": "10C",
  "args": [
   "pid_t tgid",
   "pid_t pid",
   "int sig",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "269",
  "name": "utimes",
  "r7": "10D",
  "args": [
   "char *filename",
   "struct timeval *utimes",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "270",
  "name": "arm_fadvise64_64",
  "r7": "10E",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "271",
  "name": "pciconfig_iobase",
  "r7": "10F",
  "args": [
   "long which",
   "unsigned long bus",
   "unsigned long devfn",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "272",
  "name": "pciconfig_read",
  "r7": "110",
  "args": [
   "unsigned long bus",
   "unsigned long dfn",
   "unsigned long off",
   "unsigned long len",
   "void *buf",
   "-"
  ]
 },
 {
  "num": "273",
  "name": "pciconfig_write",
  "r7": "111",
  "args": [
   "unsigned long bus",
   "unsigned long dfn",
   "unsigned long off",
   "unsigned long len",
   "void *buf",
   "-"
  ]
 },
 {
  "num": "274",
  "name": "mq_open",
  "r7": "112",
  "args": [
   "const char *name",
   "int oflag",
   "umode_t mode",
   "struct mq_attr *attr",
   "-",
   "-"
  ]
 },
 {
  "num": "275",
  "name": "mq_unlink",
  "r7": "113",
  "args": [
   "const char *name",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "276",
  "name": "mq_timedsend",
  "r7": "114",
  "args": [
   "mqd_t mqdes",
   "const char *msg_ptr",
   "size_t msg_len",
   "unsigned int msg_prio",
   "const struct __kernel_timespec *abs_timeout",
   "-"
  ]
 },
 {
  "num": "277",
  "name": "mq_timedreceive",
  "r7": "115",
  "args": [
   "mqd_t mqdes",
   "char *msg_ptr",
   "size_t msg_len",
   "unsigned int *msg_prio",
   "const struct __kernel_timespec *abs_timeout",
   "-"
  ]
 },
 {
  "num": "278",
  "name": "mq_notify",
  "r7": "116",
  "args": [
   "mqd_t mqdes",
   "const struct sigevent *notification",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "279",
  "name": "mq_getsetattr",
  "r7": "117",
  "args": [
   "mqd_t mqdes",
   "const struct mq_attr *mqstat",
   "struct mq_attr *omqstat",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "280",
  "name": "waitid",
  "r7": "118",
  "args": [
   "int which",
   "pid_t pid",
   "struct siginfo *infop",
   "int options",
   "struct rusage *ru",
   "-"
  ]
 },
 {
  "num": "281",
  "name": "socket",
  "r7": "119",
  "args": [
   "int",
   "int",
   "int",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "282",
  "name": "bind",
  "r7": "11A",
  "args": [
   "int",
   "struct sockaddr *",
   "int",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "283",
  "name": "connect",
  "r7": "11B",
  "args": [
   "int",
   "struct sockaddr *",
   "int",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "284",
  "name": "listen",
  "r7": "11C",
  "args": [
   "int",
   "int",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "285",
  "name": "accept",
  "r7": "11D",
  "args": [
   "int",
   "struct sockaddr *",
   "int *",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "286",
  "name": "getsockname",
  "r7": "11E",
  "args": [
   "int",
   "struct sockaddr *",
   "int *",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "287",
  "name": "getpeername",
  "r7": "11F",
  "args": [
   "int",
   "struct sockaddr *",
   "int *",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "288",
  "name": "socketpair",
  "r7": "120",
  "args": [
   "int",
   "int",
   "int",
   "int *",
   "-",
   "-"
  ]
 },
 {
  "num": "289",
  "name": "send",
  "r7": "121",
  "args": [
   "int",
   "void *",
   "size_t",
   "unsigned",
   "-",
   "-"
  ]
 },
 {
  "num": "290",
  "name": "sendto",
  "r7": "122",
  "args": [
   "int",
   "void *",
   "size_t",
   "unsigned",
   "struct sockaddr *",
   "int"
  ]
 },
 {
  "num": "291",
  "name": "recv",
  "r7": "123",
  "args": [
   "int",
   "void *",
   "size_t",
   "unsigned",
   "-",
   "-"
  ]
 },
 {
  "num": "292",
  "name": "recvfrom",
  "r7": "124",
  "args": [
   "int",
   "void *",
   "size_t",
   "unsigned",
   "struct sockaddr *",
   "int *"
  ]
 },
 {
  "num": "293",
  "name": "shutdown",
  "r7": "125",
  "args": [
   "int",
   "int",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "294",
  "name": "setsockopt",
  "r7": "126",
  "args": [
   "int fd",
   "int level",
   "int optname",
   "char *optval",
   "int optlen",
   "-"
  ]
 },
 {
  "num": "295",
  "name": "getsockopt",
  "r7": "127",
  "args": [
   "int fd",
   "int level",
   "int optname",
   "char *optval",
   "int *optlen",
   "-"
  ]
 },
 {
  "num": "296",
  "name": "sendmsg",
  "r7": "128",
  "args": [
   "int fd",
   "struct user_msghdr *msg",
   "unsigned flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "297",
  "name": "recvmsg",
  "r7": "129",
  "args": [
   "int fd",
   "struct user_msghdr *msg",
   "unsigned flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "298",
  "name": "semop",
  "r7": "12A",
  "args": [
   "int semid",
   "struct sembuf *sops",
   "unsigned nsops",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "299",
  "name": "semget",
  "r7": "12B",
  "args": [
   "key_t key",
   "int nsems",
   "int semflg",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "300",
  "name": "semctl",
  "r7": "12C",
  "args": [
   "int semid",
   "int semnum",
   "int cmd",
   "unsigned long arg",
   "-",
   "-"
  ]
 },
 {
  "num": "301",
  "name": "msgsnd",
  "r7": "12D",
  "args": [
   "int msqid",
   "struct msgbuf *msgp",
   "size_t msgsz",
   "int msgflg",
   "-",
   "-"
  ]
 },
 {
  "num": "302",
  "name": "msgrcv",
  "r7": "12E",
  "args": [
   "int msqid",
   "struct msgbuf *msgp",
   "size_t msgsz",
   "long msgtyp",
   "int msgflg",
   "-"
  ]
 },
 {
  "num": "303",
  "name": "msgget",
  "r7": "12F",
  "args": [
   "key_t key",
   "int msgflg",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "304",
  "name": "msgctl",
  "r7": "130",
  "args": [
   "int msqid",
   "int cmd",
   "struct msqid_ds *buf",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "305",
  "name": "shmat",
  "r7": "131",
  "args": [
   "int shmid",
   "char *shmaddr",
   "int shmflg",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "306",
  "name": "shmdt",
  "r7": "132",
  "args": [
   "char *shmaddr",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "307",
  "name": "shmget",
  "r7": "133",
  "args": [
   "key_t key",
   "size_t size",
   "int flag",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "308",
  "name": "shmctl",
  "r7": "134",
  "args": [
   "int shmid",
   "int cmd",
   "struct shmid_ds *buf",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "309",
  "name": "add_key",
  "r7": "135",
  "args": [
   "const char *_type",
   "const char *_description",
   "const void *_payload",
   "size_t plen",
   "key_serial_t destringid",
   "-"
  ]
 },
 {
  "num": "310",
  "name": "request_key",
  "r7": "136",
  "args": [
   "const char *_type",
   "const char *_description",
   "const char *_callout_info",
   "key_serial_t destringid",
   "-",
   "-"
  ]
 },
 {
  "num": "311",
  "name": "keyctl",
  "r7": "137",
  "args": [
   "int cmd",
   "unsigned long arg2",
   "unsigned long arg3",
   "unsigned long arg4",
   "unsigned long arg5",
   "-"
  ]
 },
 {
  "num": "312",
  "name": "semtimedop",
  "r7": "138",
  "args": [
   "int semid",
   "struct sembuf *sops",
   "unsigned nsops",
   "const struct __kernel_timespec *timeout",
   "-",
   "-"
  ]
 },
 {
  "num": "313",
  "name": "vserver",
  "r7": "139",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "314",
  "name": "ioprio_set",
  "r7": "13A",
  "args": [
   "int which",
   "int who",
   "int ioprio",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "315",
  "name": "ioprio_get",
  "r7": "13B",
  "args": [
   "int which",
   "int who",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "316",
  "name": "inotify_init",
  "r7": "13C",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "317",
  "name": "inotify_add_watch",
  "r7": "13D",
  "args": [
   "int fd",
   "const char *path",
   "u32 mask",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "318",
  "name": "inotify_rm_watch",
  "r7": "13E",
  "args": [
   "int fd",
   "__s32 wd",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "319",
  "name": "mbind",
  "r7": "13F",
  "args": [
   "unsigned long start",
   "unsigned long len",
   "unsigned long mode",
   "const unsigned long *nmask",
   "unsigned long maxnode",
   "unsigned flags"
  ]
 },
 {
  "num": "320",
  "name": "get_mempolicy",
  "r7": "140",
  "args": [
   "int *policy",
   "unsigned long *nmask",
   "unsigned long maxnode",
   "unsigned long addr",
   "unsigned long flags",
   "-"
  ]
 },
 {
  "num": "321",
  "name": "set_mempolicy",
  "r7": "141",
  "args": [
   "int mode",
   "const unsigned long *nmask",
   "unsigned long maxnode",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "322",
  "name": "openat",
  "r7": "142",
  "args": [
   "int dfd",
   "const char *filename",
   "int flags",
   "umode_t mode",
   "-",
   "-"
  ]
 },
 {
  "num": "323",
  "name": "mkdirat",
  "r7": "143",
  "args": [
   "int dfd",
   "const char * pathname",
   "umode_t mode",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "324",
  "name": "mknodat",
  "r7": "144",
  "args": [
   "int dfd",
   "const char * filename",
   "umode_t mode",
   "unsigned dev",
   "-",
   "-"
  ]
 },
 {
  "num": "325",
  "name": "fchownat",
  "r7": "145",
  "args": [
   "int dfd",
   "const char *filename",
   "uid_t user",
   "gid_t group",
   "int flag",
   "-"
  ]
 },
 {
  "num": "326",
  "name": "futimesat",
  "r7": "146",
  "args": [
   "int dfd",
   "const char *filename",
   "struct timeval *utimes",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "327",
  "name": "fstatat64",
  "r7": "147",
  "args": [
   "int dfd",
   "const char *filename",
   "struct stat64 *statbuf",
   "int flag",
   "-",
   "-"
  ]
 },
 {
  "num": "328",
  "name": "unlinkat",
  "r7": "148",
  "args": [
   "int dfd",
   "const char * pathname",
   "int flag",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "329",
  "name": "renameat",
  "r7": "149",
  "args": [
   "int olddfd",
   "const char * oldname",
   "int newdfd",
   "const char * newname",
   "-",
   "-"
  ]
 },
 {
  "num": "330",
  "name": "linkat",
  "r7": "14A",
  "args": [
   "int olddfd",
   "const char *oldname",
   "int newdfd",
   "const char *newname",
   "int flags",
   "-"
  ]
 },
 {
  "num": "331",
  "name": "symlinkat",
  "r7": "14B",
  "args": [
   "const char * oldname",
   "int newdfd",
   "const char * newname",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "332",
  "name": "readlinkat",
  "r7": "14C",
  "args": [
   "int dfd",
   "const char *path",
   "char *buf",
   "int bufsiz",
   "-",
   "-"
  ]
 },
 {
  "num": "333",
  "name": "fchmodat",
  "r7": "14D",
  "args": [
   "int dfd",
   "const char * filename",
   "umode_t mode",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "334",
  "name": "faccessat",
  "r7": "14E",
  "args": [
   "int dfd",
   "const char *filename",
   "int mode",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "335",
  "name": "pselect6",
  "r7": "14F",
  "args": [
   "int",
   "fd_set *",
   "fd_set *",
   "fd_set *",
   "struct __kernel_timespec *",
   "void *"
  ]
 },
 {
  "num": "336",
  "name": "ppoll",
  "r7": "150",
  "args": [
   "struct pollfd *",
   "unsigned int",
   "struct __kernel_timespec *",
   "const sigset_t *",
   "size_t",
   "-"
  ]
 },
 {
  "num": "337",
  "name": "unshare",
  "r7": "151",
  "args": [
   "unsigned long unshare_flags",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "338",
  "name": "set_robust_list",
  "r7": "152",
  "args": [
   "struct robust_list_head *head",
   "size_t len",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "339",
  "name": "get_robust_list",
  "r7": "153",
  "args": [
   "int pid",
   "struct robust_list_head * *head_ptr",
   "size_t *len_ptr",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "340",
  "name": "splice",
  "r7": "154",
  "args": [
   "int fd_in",
   "loff_t *off_in",
   "int fd_out",
   "loff_t *off_out",
   "size_t len",
   "unsigned int flags"
  ]
 },
 {
  "num": "341",
  "name": "arm_sync_file_range",
  "r7": "155",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "341",
  "name": "sync_file_range2",
  "r7": "155",
  "args": [
   "int fd",
   "unsigned int flags",
   "loff_t offset",
   "loff_t nbytes",
   "-",
   "-"
  ]
 },
 {
  "num": "342",
  "name": "tee",
  "r7": "156",
  "args": [
   "int fdin",
   "int fdout",
   "size_t len",
   "unsigned int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "343",
  "name": "vmsplice",
  "r7": "157",
  "args": [
   "int fd",
   "const struct iovec *iov",
   "unsigned long nr_segs",
   "unsigned int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "344",
  "name": "move_pages",
  "r7": "158",
  "args": [
   "pid_t pid",
   "unsigned long nr_pages",
   "const void * *pages",
   "const int *nodes",
   "int *status",
   "int flags"
  ]
 },
 {
  "num": "345",
  "name": "getcpu",
  "r7": "159",
  "args": [
   "unsigned *cpu",
   "unsigned *node",
   "struct getcpu_cache *cache",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "346",
  "name": "epoll_pwait",
  "r7": "15A",
  "args": [
   "int epfd",
   "struct epoll_event *events",
   "int maxevents",
   "int timeout",
   "const sigset_t *sigmask",
   "size_t sigsetsize"
  ]
 },
 {
  "num": "347",
  "name": "kexec_load",
  "r7": "15B",
  "args": [
   "unsigned long entry",
   "unsigned long nr_segments",
   "struct kexec_segment *segments",
   "unsigned long flags",
   "-",
   "-"
  ]
 },
 {
  "num": "348",
  "name": "utimensat",
  "r7": "15C",
  "args": [
   "int dfd",
   "const char *filename",
   "struct __kernel_timespec *utimes",
   "int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "349",
  "name": "signalfd",
  "r7": "15D",
  "args": [
   "int ufd",
   "sigset_t *user_mask",
   "size_t sizemask",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "350",
  "name": "timerfd_create",
  "r7": "15E",
  "args": [
   "int clockid",
   "int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "351",
  "name": "eventfd",
  "r7": "15F",
  "args": [
   "unsigned int count",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "352",
  "name": "fallocate",
  "r7": "160",
  "args": [
   "int fd",
   "int mode",
   "loff_t offset",
   "loff_t len",
   "-",
   "-"
  ]
 },
 {
  "num": "353",
  "name": "timerfd_settime",
  "r7": "161",
  "args": [
   "int ufd",
   "int flags",
   "const struct __kernel_itimerspec *utmr",
   "struct __kernel_itimerspec *otmr",
   "-",
   "-"
  ]
 },
 {
  "num": "354",
  "name": "timerfd_gettime",
  "r7": "162",
  "args": [
   "int ufd",
   "struct __kernel_itimerspec *otmr",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "355",
  "name": "signalfd4",
  "r7": "163",
  "args": [
   "int ufd",
   "sigset_t *user_mask",
   "size_t sizemask",
   "int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "356",
  "name": "eventfd2",
  "r7": "164",
  "args": [
   "unsigned int count",
   "int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "357",
  "name": "epoll_create1",
  "r7": "165",
  "args": [
   "int flags",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "358",
  "name": "dup3",
  "r7": "166",
  "args": [
   "unsigned int oldfd",
   "unsigned int newfd",
   "int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "359",
  "name": "pipe2",
  "r7": "167",
  "args": [
   "int *fildes",
   "int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "360",
  "name": "inotify_init1",
  "r7": "168",
  "args": [
   "int flags",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "361",
  "name": "preadv",
  "r7": "169",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "unsigned long pos_l",
   "unsigned long pos_h",
   "-"
  ]
 },
 {
  "num": "362",
  "name": "pwritev",
  "r7": "16A",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "unsigned long pos_l",
   "unsigned long pos_h",
   "-"
  ]
 },
 {
  "num": "363",
  "name": "rt_tgsigqueueinfo",
  "r7": "16B",
  "args": [
   "pid_t tgid",
   "pid_t pid",
   "int sig",
   "siginfo_t *uinfo",
   "-",
   "-"
  ]
 },
 {
  "num": "364",
  "name": "perf_event_open",
  "r7": "16C",
  "args": [
   "struct perf_event_attr *attr_uptr",
   "pid_t pid",
   "int cpu",
   "int group_fd",
   "unsigned long flags",
   "-"
  ]
 },
 {
  "num": "365",
  "name": "recvmmsg",
  "r7": "16D",
  "args": [
   "int fd",
   "struct mmsghdr *msg",
   "unsigned int vlen",
   "unsigned flags",
   "struct __kernel_timespec *timeout",
   "-"
  ]
 },
 {
  "num": "366",
  "name": "accept4",
  "r7": "16E",
  "args": [
   "int",
   "struct sockaddr *",
   "int *",
   "int",
   "-",
   "-"
  ]
 },
 {
  "num": "367",
  "name": "fanotify_init",
  "r7": "16F",
  "args": [
   "unsigned int flags",
   "unsigned int event_f_flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "368",
  "name": "fanotify_mark",
  "r7": "170",
  "args": [
   "int fanotify_fd",
   "unsigned int flags",
   "u64 mask",
   "int fd",
   "const char *pathname",
   "-"
  ]
 },
 {
  "num": "369",
  "name": "prlimit64",
  "r7": "171",
  "args": [
   "pid_t pid",
   "unsigned int resource",
   "const struct rlimit64 *new_rlim",
   "struct rlimit64 *old_rlim",
   "-",
   "-"
  ]
 },
 {
  "num": "370",
  "name": "name_to_handle_at",
  "r7": "172",
  "args": [
   "int dfd",
   "const char *name",
   "struct file_handle *handle",
   "int *mnt_id",
   "int flag",
   "-"
  ]
 },
 {
  "num": "371",
  "name": "open_by_handle_at",
  "r7": "173",
  "args": [
   "int mountdirfd",
   "struct file_handle *handle",
   "int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "372",
  "name": "clock_adjtime",
  "r7": "174",
  "args": [
   "clockid_t which_clock",
   "struct __kernel_timex *tx",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "373",
  "name": "syncfs",
  "r7": "175",
  "args": [
   "int fd",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "374",
  "name": "sendmmsg",
  "r7": "176",
  "args": [
   "int fd",
   "struct mmsghdr *msg",
   "unsigned int vlen",
   "unsigned flags",
   "-",
   "-"
  ]
 },
 {
  "num": "375",
  "name": "setns",
  "r7": "177",
  "args": [
   "int fd",
   "int nstype",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "376",
  "name": "process_vm_readv",
  "r7": "178",
  "args": [
   "pid_t pid",
   "const struct iovec *lvec",
   "unsigned long liovcnt",
   "const struct iovec *rvec",
   "unsigned long riovcnt",
   "unsigned long flags"
  ]
 },
 {
  "num": "377",
  "name": "process_vm_writev",
  "r7": "179",
  "args": [
   "pid_t pid",
   "const struct iovec *lvec",
   "unsigned long liovcnt",
   "const struct iovec *rvec",
   "unsigned long riovcnt",
   "unsigned long flags"
  ]
 },
 {
  "num": "378",
  "name": "kcmp",
  "r7": "17A",
  "args": [
   "pid_t pid1",
   "pid_t pid2",
   "int type",
   "unsigned long idx1",
   "unsigned long idx2",
   "-"
  ]
 },
 {
  "num": "379",
  "name": "finit_module",
  "r7": "17B",
  "args": [
   "int fd",
   "const char *uargs",
   "int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "380",
  "name": "sched_setattr",
  "r7": "17C",
  "args": [
   "pid_t pid",
   "struct sched_attr *attr",
   "unsigned int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "381",
  "name": "sched_getattr",
  "r7": "17D",
  "args": [
   "pid_t pid",
   "struct sched_attr *attr",
   "unsigned int size",
   "unsigned int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "382",
  "name": "renameat2",
  "r7": "17E",
  "args": [
   "int olddfd",
   "const char *oldname",
   "int newdfd",
   "const char *newname",
   "unsigned int flags",
   "-"
  ]
 },
 {
  "num": "383",
  "name": "seccomp",
  "r7": "17F",
  "args": [
   "unsigned int op",
   "unsigned int flags",
   "void *uargs",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "384",
  "name": "getrandom",
  "r7": "180",
  "args": [
   "char *buf",
   "size_t count",
   "unsigned int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "385",
  "name": "memfd_create",
  "r7": "181",
  "args": [
   "const char *uname_ptr",
   "unsigned int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "386",
  "name": "bpf",
  "r7": "182",
  "args": [
   "int cmd",
   "union bpf_attr *attr",
   "unsigned int size",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "387",
  "name": "execveat",
  "r7": "183",
  "args": [
   "int dfd",
   "const char *filename",
   "const char *const *argv",
   "const char *const *envp",
   "int flags",
   "-"
  ]
 },
 {
  "num": "388",
  "name": "userfaultfd",
  "r7": "184",
  "args": [
   "int flags",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "389",
  "name": "membarrier",
  "r7": "185",
  "args": [
   "int cmd",
   "int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "390",
  "name": "mlock2",
  "r7": "186",
  "args": [
   "unsigned long start",
   "size_t len",
   "int flags",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "391",
  "name": "copy_file_range",
  "r7": "187",
  "args": [
   "int fd_in",
   "loff_t *off_in",
   "int fd_out",
   "loff_t *off_out",
   "size_t len",
   "unsigned int flags"
  ]
 },
 {
  "num": "392",
  "name": "preadv2",
  "r7": "188",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "unsigned long pos_l",
   "unsigned long pos_h",
   "rwf_t flags"
  ]
 },
 {
  "num": "393",
  "name": "pwritev2",
  "r7": "189",
  "args": [
   "unsigned long fd",
   "const struct iovec *vec",
   "unsigned long vlen",
   "unsigned long pos_l",
   "unsigned long pos_h",
   "rwf_t flags"
  ]
 },
 {
  "num": "394",
  "name": "pkey_mprotect",
  "r7": "18A",
  "args": [
   "unsigned long start",
   "size_t len",
   "unsigned long prot",
   "int pkey",
   "-",
   "-"
  ]
 },
 {
  "num": "395",
  "name": "pkey_alloc",
  "r7": "18B",
  "args": [
   "unsigned long flags",
   "unsigned long init_val",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "396",
  "name": "pkey_free",
  "r7": "18C",
  "args": [
   "int pkey",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "397",
  "name": "statx",
  "r7": "18D",
  "args": [
   "int dfd",
   "const char *path",
   "unsigned flags",
   "unsigned mask",
   "struct statx *buffer",
   "-"
  ]
 },
 {
  "num": "983041",
  "name": "ARM_breakpoint",
  "r7": "F0001",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "983042",
  "name": "ARM_cacheflush",
  "r7": "F0002",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "983043",
  "name": "ARM_usr26",
  "r7": "F0003",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "983044",
  "name": "ARM_usr32",
  "r7": "F0004",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 },
 {
  "num": "983045",
  "name": "ARM_set_tls",
  "r7": "F0005",
  "args": [
   "?",
   "?",
   "?",
   "?",
   "?",
   "?"
  ]
 }
];
