// Generated from the Linux kernel's arch/x86/entry/syscalls/syscall_32.tbl
// (numbers current as of Oct 2026). Prototypes are joined by syscall name
// from the site's x86_64 table; the "rax" column is the EAX value in hex,
// matching the convention of the x86_64 table. A dash argument means the
// syscall takes no arguments or no prototype is recorded here.
export interface SyscallX86 {
  num: string;
  name: string;
  rax: string;
  args: string[];
}

export const SYSCALLS_X86: SyscallX86[] = [
 {
  "num": "0",
  "name": "restart_syscall",
  "rax": "0",
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
  "rax": "1",
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
  "rax": "2",
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
  "rax": "3",
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
  "rax": "4",
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
  "rax": "5",
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
  "rax": "6",
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
  "name": "waitpid",
  "rax": "7",
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
  "rax": "8",
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
  "rax": "9",
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
  "rax": "A",
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
  "rax": "B",
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
  "rax": "C",
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
  "name": "time",
  "rax": "D",
  "args": [
   "time_t *tloc",
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
  "rax": "E",
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
  "rax": "F",
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
  "rax": "10",
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
  "name": "break",
  "rax": "11",
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
  "name": "oldstat",
  "rax": "12",
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
  "rax": "13",
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
  "rax": "14",
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
  "rax": "15",
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
  "name": "umount",
  "rax": "16",
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
  "rax": "17",
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
  "rax": "18",
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
  "name": "stime",
  "rax": "19",
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
  "rax": "1A",
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
  "name": "alarm",
  "rax": "1B",
  "args": [
   "unsigned int seconds",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "28",
  "name": "oldfstat",
  "rax": "1C",
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
  "rax": "1D",
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
  "name": "utime",
  "rax": "1E",
  "args": [
   "char *filename",
   "struct utimbuf *times",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "31",
  "name": "stty",
  "rax": "1F",
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
  "name": "gtty",
  "rax": "20",
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
  "rax": "21",
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
  "rax": "22",
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
  "num": "35",
  "name": "ftime",
  "rax": "23",
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
  "rax": "24",
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
  "rax": "25",
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
  "rax": "26",
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
  "rax": "27",
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
  "rax": "28",
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
  "rax": "29",
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
  "rax": "2A",
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
  "rax": "2B",
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
  "name": "prof",
  "rax": "2C",
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
  "rax": "2D",
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
  "rax": "2E",
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
  "rax": "2F",
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
  "name": "signal",
  "rax": "30",
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
  "rax": "31",
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
  "rax": "32",
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
  "rax": "33",
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
  "rax": "34",
  "args": [
   "const char *target",
   "int flags",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "53",
  "name": "lock",
  "rax": "35",
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
  "rax": "36",
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
  "rax": "37",
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
  "name": "mpx",
  "rax": "38",
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
  "rax": "39",
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
  "name": "ulimit",
  "rax": "3A",
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
  "name": "oldolduname",
  "rax": "3B",
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
  "rax": "3C",
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
  "rax": "3D",
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
  "rax": "3E",
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
  "rax": "3F",
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
  "rax": "40",
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
  "rax": "41",
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
  "rax": "42",
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
  "rax": "43",
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
  "num": "68",
  "name": "sgetmask",
  "rax": "44",
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
  "name": "ssetmask",
  "rax": "45",
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
  "rax": "46",
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
  "rax": "47",
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
  "rax": "48",
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
  "num": "73",
  "name": "sigpending",
  "rax": "49",
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
  "num": "74",
  "name": "sethostname",
  "rax": "4A",
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
  "rax": "4B",
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
  "name": "getrlimit",
  "rax": "4C",
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
  "num": "77",
  "name": "getrusage",
  "rax": "4D",
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
  "rax": "4E",
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
  "rax": "4F",
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
  "rax": "50",
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
  "rax": "51",
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
  "name": "select",
  "rax": "52",
  "args": [
   "int n",
   "fd_set *inp",
   "fd_set *outp",
   "fd_set *exp",
   "struct timeval *tvp",
   "-"
  ]
 },
 {
  "num": "83",
  "name": "symlink",
  "rax": "53",
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
  "name": "oldlstat",
  "rax": "54",
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
  "rax": "55",
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
  "rax": "56",
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
  "rax": "57",
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
  "rax": "58",
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
  "name": "readdir",
  "rax": "59",
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
  "name": "mmap",
  "rax": "5A",
  "args": [
   "unsigned long addr",
   "size_t len",
   "int protection",
   "int flags",
   "int fd",
   "off_t offset"
  ]
 },
 {
  "num": "91",
  "name": "munmap",
  "rax": "5B",
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
  "rax": "5C",
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
  "rax": "5D",
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
  "rax": "5E",
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
  "rax": "5F",
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
  "rax": "60",
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
  "rax": "61",
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
  "name": "profil",
  "rax": "62",
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
  "rax": "63",
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
  "rax": "64",
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
  "name": "ioperm",
  "rax": "65",
  "args": [
   "unsigned long from",
   "unsigned long num",
   "int on",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "102",
  "name": "socketcall",
  "rax": "66",
  "args": [
   "int call",
   "unsigned long *args",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "103",
  "name": "syslog",
  "rax": "67",
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
  "rax": "68",
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
  "rax": "69",
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
  "rax": "6A",
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
  "rax": "6B",
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
  "rax": "6C",
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
  "name": "olduname",
  "rax": "6D",
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
  "name": "iopl",
  "rax": "6E",
  "args": [
   "int level",
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
  "rax": "6F",
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
  "name": "idle",
  "rax": "70",
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
  "name": "vm86old",
  "rax": "71",
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
  "rax": "72",
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
  "rax": "73",
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
  "rax": "74",
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
  "name": "ipc",
  "rax": "75",
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
  "rax": "76",
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
  "rax": "77",
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
  "num": "120",
  "name": "clone",
  "rax": "78",
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
  "rax": "79",
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
  "rax": "7A",
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
  "name": "modify_ldt",
  "rax": "7B",
  "args": [
   "int func",
   "void ptr",
   "unsigned long bytecount",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "124",
  "name": "adjtimex",
  "rax": "7C",
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
  "rax": "7D",
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
  "rax": "7E",
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
  "num": "127",
  "name": "create_module",
  "rax": "7F",
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
  "rax": "80",
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
  "rax": "81",
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
  "name": "get_kernel_syms",
  "rax": "82",
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
  "rax": "83",
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
  "rax": "84",
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
  "rax": "85",
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
  "rax": "86",
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
  "num": "135",
  "name": "sysfs",
  "rax": "87",
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
  "rax": "88",
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
  "name": "afs_syscall",
  "rax": "89",
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
  "rax": "8A",
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
  "rax": "8B",
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
  "rax": "8C",
  "args": [
   "unsigned int fd",
   "unsigned long offset_high",
   "unsigned long offset_low",
   "loff_t **result",
   "unsigned int whence",
   "-"
  ]
 },
 {
  "num": "141",
  "name": "getdents",
  "rax": "8D",
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
  "rax": "8E",
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
  "num": "143",
  "name": "flock",
  "rax": "8F",
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
  "rax": "90",
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
  "rax": "91",
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
  "rax": "92",
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
  "rax": "93",
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
  "rax": "94",
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
  "rax": "95",
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
  "num": "150",
  "name": "mlock",
  "rax": "96",
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
  "rax": "97",
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
  "rax": "98",
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
  "rax": "99",
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
  "rax": "9A",
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
  "rax": "9B",
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
  "rax": "9C",
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
  "rax": "9D",
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
  "rax": "9E",
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
  "rax": "9F",
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
  "rax": "A0",
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
  "rax": "A1",
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
  "rax": "A2",
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
  "rax": "A3",
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
  "rax": "A4",
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
  "rax": "A5",
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
  "name": "vm86",
  "rax": "A6",
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
  "name": "query_module",
  "rax": "A7",
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
  "rax": "A8",
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
  "rax": "A9",
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
  "num": "170",
  "name": "setresgid",
  "rax": "AA",
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
  "rax": "AB",
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
  "rax": "AC",
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
  "rax": "AD",
  "args": [
   "unsigned long __unused",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "174",
  "name": "rt_sigaction",
  "rax": "AE",
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
  "rax": "AF",
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
  "rax": "B0",
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
  "rax": "B1",
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
  "rax": "B2",
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
  "rax": "B3",
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
  "rax": "B4",
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
  "rax": "B5",
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
  "rax": "B6",
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
  "rax": "B7",
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
  "rax": "B8",
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
  "rax": "B9",
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
  "rax": "BA",
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
  "rax": "BB",
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
  "name": "getpmsg",
  "rax": "BC",
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
  "name": "putpmsg",
  "rax": "BD",
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
  "rax": "BE",
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
  "rax": "BF",
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
  "num": "192",
  "name": "mmap2",
  "rax": "C0",
  "args": [
   "unsigned long addr",
   "unsigned long len",
   "unsigned long prot",
   "unsigned long flags",
   "unsigned long fd",
   "unsigned long pgoff"
  ]
 },
 {
  "num": "193",
  "name": "truncate64",
  "rax": "C1",
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
  "num": "194",
  "name": "ftruncate64",
  "rax": "C2",
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
  "num": "195",
  "name": "stat64",
  "rax": "C3",
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
  "num": "196",
  "name": "lstat64",
  "rax": "C4",
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
  "num": "197",
  "name": "fstat64",
  "rax": "C5",
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
  "num": "198",
  "name": "lchown32",
  "rax": "C6",
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
  "num": "199",
  "name": "getuid32",
  "rax": "C7",
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
  "num": "200",
  "name": "getgid32",
  "rax": "C8",
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
  "num": "201",
  "name": "geteuid32",
  "rax": "C9",
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
  "num": "202",
  "name": "getegid32",
  "rax": "CA",
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
  "num": "203",
  "name": "setreuid32",
  "rax": "CB",
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
  "num": "204",
  "name": "setregid32",
  "rax": "CC",
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
  "num": "205",
  "name": "getgroups32",
  "rax": "CD",
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
  "num": "206",
  "name": "setgroups32",
  "rax": "CE",
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
  "num": "207",
  "name": "fchown32",
  "rax": "CF",
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
  "num": "208",
  "name": "setresuid32",
  "rax": "D0",
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
  "num": "209",
  "name": "getresuid32",
  "rax": "D1",
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
  "num": "210",
  "name": "setresgid32",
  "rax": "D2",
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
  "num": "211",
  "name": "getresgid32",
  "rax": "D3",
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
  "num": "212",
  "name": "chown32",
  "rax": "D4",
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
  "num": "213",
  "name": "setuid32",
  "rax": "D5",
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
  "num": "214",
  "name": "setgid32",
  "rax": "D6",
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
  "num": "215",
  "name": "setfsuid32",
  "rax": "D7",
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
  "num": "216",
  "name": "setfsgid32",
  "rax": "D8",
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
  "num": "217",
  "name": "pivot_root",
  "rax": "D9",
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
  "num": "218",
  "name": "mincore",
  "rax": "DA",
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
  "num": "219",
  "name": "madvise",
  "rax": "DB",
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
  "num": "220",
  "name": "getdents64",
  "rax": "DC",
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
  "num": "221",
  "name": "fcntl64",
  "rax": "DD",
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
  "rax": "E0",
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
  "rax": "E1",
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
  "rax": "E2",
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
  "rax": "E3",
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
  "rax": "E4",
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
  "rax": "E5",
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
  "rax": "E6",
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
  "rax": "E7",
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
  "rax": "E8",
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
  "rax": "E9",
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
  "rax": "EA",
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
  "rax": "EB",
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
  "rax": "EC",
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
  "rax": "ED",
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
  "rax": "EE",
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
  "rax": "EF",
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
  "num": "240",
  "name": "futex",
  "rax": "F0",
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
  "rax": "F1",
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
  "rax": "F2",
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
  "name": "set_thread_area",
  "rax": "F3",
  "args": [
   "struct user_desc *u_info",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "244",
  "name": "get_thread_area",
  "rax": "F4",
  "args": [
   "struct user_desc *u_info",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "245",
  "name": "io_setup",
  "rax": "F5",
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
  "num": "246",
  "name": "io_destroy",
  "rax": "F6",
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
  "num": "247",
  "name": "io_getevents",
  "rax": "F7",
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
  "num": "248",
  "name": "io_submit",
  "rax": "F8",
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
  "num": "249",
  "name": "io_cancel",
  "rax": "F9",
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
  "num": "250",
  "name": "fadvise64",
  "rax": "FA",
  "args": [
   "int fd",
   "loff_t offset",
   "size_t len",
   "int advice",
   "-",
   "-"
  ]
 },
 {
  "num": "252",
  "name": "exit_group",
  "rax": "FC",
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
  "num": "253",
  "name": "lookup_dcookie",
  "rax": "FD",
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
  "num": "254",
  "name": "epoll_create",
  "rax": "FE",
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
  "num": "255",
  "name": "epoll_ctl",
  "rax": "FF",
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
  "num": "256",
  "name": "epoll_wait",
  "rax": "100",
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
  "num": "257",
  "name": "remap_file_pages",
  "rax": "101",
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
  "num": "258",
  "name": "set_tid_address",
  "rax": "102",
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
  "num": "259",
  "name": "timer_create",
  "rax": "103",
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
  "num": "260",
  "name": "timer_settime",
  "rax": "104",
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
  "num": "261",
  "name": "timer_gettime",
  "rax": "105",
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
  "num": "262",
  "name": "timer_getoverrun",
  "rax": "106",
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
  "num": "263",
  "name": "timer_delete",
  "rax": "107",
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
  "num": "264",
  "name": "clock_settime",
  "rax": "108",
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
  "num": "265",
  "name": "clock_gettime",
  "rax": "109",
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
  "num": "266",
  "name": "clock_getres",
  "rax": "10A",
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
  "num": "267",
  "name": "clock_nanosleep",
  "rax": "10B",
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
  "num": "268",
  "name": "statfs64",
  "rax": "10C",
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
  "num": "269",
  "name": "fstatfs64",
  "rax": "10D",
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
  "num": "270",
  "name": "tgkill",
  "rax": "10E",
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
  "num": "271",
  "name": "utimes",
  "rax": "10F",
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
  "num": "272",
  "name": "fadvise64_64",
  "rax": "110",
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
  "num": "273",
  "name": "vserver",
  "rax": "111",
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
  "num": "274",
  "name": "mbind",
  "rax": "112",
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
  "num": "275",
  "name": "get_mempolicy",
  "rax": "113",
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
  "num": "276",
  "name": "set_mempolicy",
  "rax": "114",
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
  "num": "277",
  "name": "mq_open",
  "rax": "115",
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
  "num": "278",
  "name": "mq_unlink",
  "rax": "116",
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
  "num": "279",
  "name": "mq_timedsend",
  "rax": "117",
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
  "num": "280",
  "name": "mq_timedreceive",
  "rax": "118",
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
  "num": "281",
  "name": "mq_notify",
  "rax": "119",
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
  "num": "282",
  "name": "mq_getsetattr",
  "rax": "11A",
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
  "num": "283",
  "name": "kexec_load",
  "rax": "11B",
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
  "num": "284",
  "name": "waitid",
  "rax": "11C",
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
  "num": "286",
  "name": "add_key",
  "rax": "11E",
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
  "num": "287",
  "name": "request_key",
  "rax": "11F",
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
  "num": "288",
  "name": "keyctl",
  "rax": "120",
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
  "num": "289",
  "name": "ioprio_set",
  "rax": "121",
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
  "num": "290",
  "name": "ioprio_get",
  "rax": "122",
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
  "num": "291",
  "name": "inotify_init",
  "rax": "123",
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
  "num": "292",
  "name": "inotify_add_watch",
  "rax": "124",
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
  "num": "293",
  "name": "inotify_rm_watch",
  "rax": "125",
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
  "num": "294",
  "name": "migrate_pages",
  "rax": "126",
  "args": [
   "pid_t pid",
   "unsigned long maxnode",
   "const unsigned long *from",
   "const unsigned long *to",
   "-",
   "-"
  ]
 },
 {
  "num": "295",
  "name": "openat",
  "rax": "127",
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
  "num": "296",
  "name": "mkdirat",
  "rax": "128",
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
  "num": "297",
  "name": "mknodat",
  "rax": "129",
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
  "num": "298",
  "name": "fchownat",
  "rax": "12A",
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
  "num": "299",
  "name": "futimesat",
  "rax": "12B",
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
  "num": "300",
  "name": "fstatat64",
  "rax": "12C",
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
  "num": "301",
  "name": "unlinkat",
  "rax": "12D",
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
  "num": "302",
  "name": "renameat",
  "rax": "12E",
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
  "num": "303",
  "name": "linkat",
  "rax": "12F",
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
  "num": "304",
  "name": "symlinkat",
  "rax": "130",
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
  "num": "305",
  "name": "readlinkat",
  "rax": "131",
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
  "num": "306",
  "name": "fchmodat",
  "rax": "132",
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
  "num": "307",
  "name": "faccessat",
  "rax": "133",
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
  "num": "308",
  "name": "pselect6",
  "rax": "134",
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
  "num": "309",
  "name": "ppoll",
  "rax": "135",
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
  "num": "310",
  "name": "unshare",
  "rax": "136",
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
  "num": "311",
  "name": "set_robust_list",
  "rax": "137",
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
  "num": "312",
  "name": "get_robust_list",
  "rax": "138",
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
  "num": "313",
  "name": "splice",
  "rax": "139",
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
  "num": "314",
  "name": "sync_file_range",
  "rax": "13A",
  "args": [
   "int fd",
   "loff_t offset",
   "loff_t nbytes",
   "unsigned int flags",
   "-",
   "-"
  ]
 },
 {
  "num": "315",
  "name": "tee",
  "rax": "13B",
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
  "num": "316",
  "name": "vmsplice",
  "rax": "13C",
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
  "num": "317",
  "name": "move_pages",
  "rax": "13D",
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
  "num": "318",
  "name": "getcpu",
  "rax": "13E",
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
  "num": "319",
  "name": "epoll_pwait",
  "rax": "13F",
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
  "num": "320",
  "name": "utimensat",
  "rax": "140",
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
  "num": "321",
  "name": "signalfd",
  "rax": "141",
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
  "num": "322",
  "name": "timerfd_create",
  "rax": "142",
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
  "num": "323",
  "name": "eventfd",
  "rax": "143",
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
  "num": "324",
  "name": "fallocate",
  "rax": "144",
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
  "num": "325",
  "name": "timerfd_settime",
  "rax": "145",
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
  "num": "326",
  "name": "timerfd_gettime",
  "rax": "146",
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
  "num": "327",
  "name": "signalfd4",
  "rax": "147",
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
  "num": "328",
  "name": "eventfd2",
  "rax": "148",
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
  "num": "329",
  "name": "epoll_create1",
  "rax": "149",
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
  "num": "330",
  "name": "dup3",
  "rax": "14A",
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
  "num": "331",
  "name": "pipe2",
  "rax": "14B",
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
  "num": "332",
  "name": "inotify_init1",
  "rax": "14C",
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
  "num": "333",
  "name": "preadv",
  "rax": "14D",
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
  "num": "334",
  "name": "pwritev",
  "rax": "14E",
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
  "num": "335",
  "name": "rt_tgsigqueueinfo",
  "rax": "14F",
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
  "num": "336",
  "name": "perf_event_open",
  "rax": "150",
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
  "num": "337",
  "name": "recvmmsg",
  "rax": "151",
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
  "num": "338",
  "name": "fanotify_init",
  "rax": "152",
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
  "num": "339",
  "name": "fanotify_mark",
  "rax": "153",
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
  "num": "340",
  "name": "prlimit64",
  "rax": "154",
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
  "num": "341",
  "name": "name_to_handle_at",
  "rax": "155",
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
  "num": "342",
  "name": "open_by_handle_at",
  "rax": "156",
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
  "num": "343",
  "name": "clock_adjtime",
  "rax": "157",
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
  "num": "344",
  "name": "syncfs",
  "rax": "158",
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
  "num": "345",
  "name": "sendmmsg",
  "rax": "159",
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
  "num": "346",
  "name": "setns",
  "rax": "15A",
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
  "num": "347",
  "name": "process_vm_readv",
  "rax": "15B",
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
  "num": "348",
  "name": "process_vm_writev",
  "rax": "15C",
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
  "num": "349",
  "name": "kcmp",
  "rax": "15D",
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
  "num": "350",
  "name": "finit_module",
  "rax": "15E",
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
  "num": "351",
  "name": "sched_setattr",
  "rax": "15F",
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
  "num": "352",
  "name": "sched_getattr",
  "rax": "160",
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
  "num": "353",
  "name": "renameat2",
  "rax": "161",
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
  "num": "354",
  "name": "seccomp",
  "rax": "162",
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
  "num": "355",
  "name": "getrandom",
  "rax": "163",
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
  "num": "356",
  "name": "memfd_create",
  "rax": "164",
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
  "num": "357",
  "name": "bpf",
  "rax": "165",
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
  "num": "358",
  "name": "execveat",
  "rax": "166",
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
  "num": "359",
  "name": "socket",
  "rax": "167",
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
  "num": "360",
  "name": "socketpair",
  "rax": "168",
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
  "num": "361",
  "name": "bind",
  "rax": "169",
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
  "num": "362",
  "name": "connect",
  "rax": "16A",
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
  "num": "363",
  "name": "listen",
  "rax": "16B",
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
  "num": "364",
  "name": "accept4",
  "rax": "16C",
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
  "num": "365",
  "name": "getsockopt",
  "rax": "16D",
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
  "num": "366",
  "name": "setsockopt",
  "rax": "16E",
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
  "num": "367",
  "name": "getsockname",
  "rax": "16F",
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
  "num": "368",
  "name": "getpeername",
  "rax": "170",
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
  "num": "369",
  "name": "sendto",
  "rax": "171",
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
  "num": "370",
  "name": "sendmsg",
  "rax": "172",
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
  "num": "371",
  "name": "recvfrom",
  "rax": "173",
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
  "num": "372",
  "name": "recvmsg",
  "rax": "174",
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
  "num": "373",
  "name": "shutdown",
  "rax": "175",
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
  "num": "374",
  "name": "userfaultfd",
  "rax": "176",
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
  "num": "375",
  "name": "membarrier",
  "rax": "177",
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
  "num": "376",
  "name": "mlock2",
  "rax": "178",
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
  "num": "377",
  "name": "copy_file_range",
  "rax": "179",
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
  "num": "378",
  "name": "preadv2",
  "rax": "17A",
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
  "num": "379",
  "name": "pwritev2",
  "rax": "17B",
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
  "num": "380",
  "name": "pkey_mprotect",
  "rax": "17C",
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
  "num": "381",
  "name": "pkey_alloc",
  "rax": "17D",
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
  "num": "382",
  "name": "pkey_free",
  "rax": "17E",
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
  "num": "383",
  "name": "statx",
  "rax": "17F",
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
  "num": "384",
  "name": "arch_prctl",
  "rax": "180",
  "args": [
   "int code",
   "unsigned long addr",
   "-",
   "-",
   "-",
   "-"
  ]
 },
 {
  "num": "385",
  "name": "io_pgetevents",
  "rax": "181",
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
  "num": "386",
  "name": "rseq",
  "rax": "182",
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
  "num": "393",
  "name": "semget",
  "rax": "189",
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
  "num": "394",
  "name": "semctl",
  "rax": "18A",
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
  "num": "395",
  "name": "shmget",
  "rax": "18B",
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
  "num": "396",
  "name": "shmctl",
  "rax": "18C",
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
  "num": "397",
  "name": "shmat",
  "rax": "18D",
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
  "num": "398",
  "name": "shmdt",
  "rax": "18E",
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
  "num": "399",
  "name": "msgget",
  "rax": "18F",
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
  "num": "400",
  "name": "msgsnd",
  "rax": "190",
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
  "num": "401",
  "name": "msgrcv",
  "rax": "191",
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
  "num": "402",
  "name": "msgctl",
  "rax": "192",
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
  "num": "403",
  "name": "clock_gettime64",
  "rax": "193",
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
  "num": "404",
  "name": "clock_settime64",
  "rax": "194",
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
  "num": "405",
  "name": "clock_adjtime64",
  "rax": "195",
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
  "num": "406",
  "name": "clock_getres_time64",
  "rax": "196",
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
  "num": "407",
  "name": "clock_nanosleep_time64",
  "rax": "197",
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
  "num": "408",
  "name": "timer_gettime64",
  "rax": "198",
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
  "num": "409",
  "name": "timer_settime64",
  "rax": "199",
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
  "num": "410",
  "name": "timerfd_gettime64",
  "rax": "19A",
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
  "num": "411",
  "name": "timerfd_settime64",
  "rax": "19B",
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
  "num": "412",
  "name": "utimensat_time64",
  "rax": "19C",
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
  "num": "413",
  "name": "pselect6_time64",
  "rax": "19D",
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
  "num": "414",
  "name": "ppoll_time64",
  "rax": "19E",
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
  "num": "416",
  "name": "io_pgetevents_time64",
  "rax": "1A0",
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
  "num": "417",
  "name": "recvmmsg_time64",
  "rax": "1A1",
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
  "num": "418",
  "name": "mq_timedsend_time64",
  "rax": "1A2",
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
  "num": "419",
  "name": "mq_timedreceive_time64",
  "rax": "1A3",
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
  "num": "420",
  "name": "semtimedop_time64",
  "rax": "1A4",
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
  "num": "421",
  "name": "rt_sigtimedwait_time64",
  "rax": "1A5",
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
  "num": "422",
  "name": "futex_time64",
  "rax": "1A6",
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
  "num": "423",
  "name": "sched_rr_get_interval_time64",
  "rax": "1A7",
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
  "num": "424",
  "name": "pidfd_send_signal",
  "rax": "1A8",
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
  "num": "425",
  "name": "io_uring_setup",
  "rax": "1A9",
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
  "num": "426",
  "name": "io_uring_enter",
  "rax": "1AA",
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
  "num": "427",
  "name": "io_uring_register",
  "rax": "1AB",
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
  "num": "428",
  "name": "open_tree",
  "rax": "1AC",
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
  "num": "429",
  "name": "move_mount",
  "rax": "1AD",
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
  "num": "430",
  "name": "fsopen",
  "rax": "1AE",
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
  "num": "431",
  "name": "fsconfig",
  "rax": "1AF",
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
  "num": "432",
  "name": "fsmount",
  "rax": "1B0",
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
  "num": "433",
  "name": "fspick",
  "rax": "1B1",
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
  "num": "434",
  "name": "pidfd_open",
  "rax": "1B2",
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
  "num": "435",
  "name": "clone3",
  "rax": "1B3",
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
  "num": "436",
  "name": "close_range",
  "rax": "1B4",
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
  "num": "437",
  "name": "openat2",
  "rax": "1B5",
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
  "num": "438",
  "name": "pidfd_getfd",
  "rax": "1B6",
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
  "num": "439",
  "name": "faccessat2",
  "rax": "1B7",
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
  "num": "440",
  "name": "process_madvise",
  "rax": "1B8",
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
  "num": "441",
  "name": "epoll_pwait2",
  "rax": "1B9",
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
  "num": "442",
  "name": "mount_setattr",
  "rax": "1BA",
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
  "num": "443",
  "name": "quotactl_fd",
  "rax": "1BB",
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
  "num": "444",
  "name": "landlock_create_ruleset",
  "rax": "1BC",
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
  "num": "445",
  "name": "landlock_add_rule",
  "rax": "1BD",
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
  "num": "446",
  "name": "landlock_restrict_self",
  "rax": "1BE",
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
  "num": "447",
  "name": "memfd_secret",
  "rax": "1BF",
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
  "num": "448",
  "name": "process_mrelease",
  "rax": "1C0",
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
  "num": "449",
  "name": "futex_waitv",
  "rax": "1C1",
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
  "num": "450",
  "name": "set_mempolicy_home_node",
  "rax": "1C2",
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
  "num": "451",
  "name": "cachestat",
  "rax": "1C3",
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
  "num": "452",
  "name": "fchmodat2",
  "rax": "1C4",
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
  "num": "453",
  "name": "map_shadow_stack",
  "rax": "1C5",
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
  "num": "454",
  "name": "futex_wake",
  "rax": "1C6",
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
  "num": "455",
  "name": "futex_wait",
  "rax": "1C7",
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
  "num": "456",
  "name": "futex_requeue",
  "rax": "1C8",
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
  "num": "457",
  "name": "statmount",
  "rax": "1C9",
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
  "num": "458",
  "name": "listmount",
  "rax": "1CA",
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
  "num": "459",
  "name": "lsm_get_self_attr",
  "rax": "1CB",
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
  "num": "460",
  "name": "lsm_set_self_attr",
  "rax": "1CC",
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
  "num": "461",
  "name": "lsm_list_modules",
  "rax": "1CD",
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
  "num": "462",
  "name": "mseal",
  "rax": "1CE",
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
  "num": "463",
  "name": "setxattrat",
  "rax": "1CF",
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
  "num": "464",
  "name": "getxattrat",
  "rax": "1D0",
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
  "num": "465",
  "name": "listxattrat",
  "rax": "1D1",
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
  "num": "466",
  "name": "removexattrat",
  "rax": "1D2",
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
  "num": "467",
  "name": "open_tree_attr",
  "rax": "1D3",
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
  "num": "468",
  "name": "file_getattr",
  "rax": "1D4",
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
  "num": "469",
  "name": "file_setattr",
  "rax": "1D5",
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
  "num": "470",
  "name": "listns",
  "rax": "1D6",
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
  "num": "471",
  "name": "rseq_slice_yield",
  "rax": "1D7",
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
  "num": "472",
  "name": "fchroot",
  "rax": "1D8",
  "args": [
   "-",
   "-",
   "-",
   "-",
   "-",
   "-"
  ]
 }
];
