// Generated from pages/blogs/syscalls.js (syscall table data extracted verbatim)
export interface Syscall {
  num: string;
  name: string;
  rax: string;
  args: string[];
}

export const SYSCALLS: Syscall[] = [
 {
  "num": "0",
  "name": "read",
  "rax": "0",
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
  "num": "1",
  "name": "write",
  "rax": "1",
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
  "num": "2",
  "name": "open",
  "rax": "2",
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
  "num": "3",
  "name": "close",
  "rax": "3",
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
  "num": "4",
  "name": "stat",
  "rax": "4",
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
  "num": "5",
  "name": "fstat",
  "rax": "5",
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
  "num": "6",
  "name": "lstat",
  "rax": "6",
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
  "num": "7",
  "name": "poll",
  "rax": "7",
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
  "num": "8",
  "name": "lseek",
  "rax": "8",
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
  "num": "9",
  "name": "mmap",
  "rax": "9",
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
  "num": "10",
  "name": "mprotect",
  "rax": "A",
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
  "num": "11",
  "name": "munmap",
  "rax": "B",
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
  "num": "12",
  "name": "brk",
  "rax": "C",
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
  "num": "13",
  "name": "rt_sigaction",
  "rax": "D",
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
  "num": "14",
  "name": "rt_sigprocmask",
  "rax": "E",
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
  "num": "15",
  "name": "rt_sigreturn",
  "rax": "F",
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
  "num": "16",
  "name": "ioctl",
  "rax": "10",
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
  "num": "17",
  "name": "pread64",
  "rax": "11",
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
  "num": "18",
  "name": "pwrite64",
  "rax": "12",
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
  "num": "19",
  "name": "readv",
  "rax": "13",
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
  "num": "20",
  "name": "writev",
  "rax": "14",
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
  "num": "21",
  "name": "access",
  "rax": "15",
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
  "num": "22",
  "name": "pipe",
  "rax": "16",
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
  "num": "23",
  "name": "select",
  "rax": "17",
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
  "num": "24",
  "name": "sched_yield",
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
  "name": "mremap",
  "rax": "19",
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
  "num": "26",
  "name": "msync",
  "rax": "1A",
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
  "num": "27",
  "name": "mincore",
  "rax": "1B",
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
  "num": "28",
  "name": "madvise",
  "rax": "1C",
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
  "num": "29",
  "name": "shmget",
  "rax": "1D",
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
  "num": "30",
  "name": "shmat",
  "rax": "1E",
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
  "num": "31",
  "name": "shmctl",
  "rax": "1F",
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
  "num": "32",
  "name": "dup",
  "rax": "20",
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
  "num": "33",
  "name": "dup2",
  "rax": "21",
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
  "num": "34",
  "name": "pause",
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
  "name": "nanosleep",
  "rax": "23",
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
  "num": "36",
  "name": "getitimer",
  "rax": "24",
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
  "num": "37",
  "name": "alarm",
  "rax": "25",
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
  "num": "38",
  "name": "setitimer",
  "rax": "26",
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
  "num": "39",
  "name": "getpid",
  "rax": "27",
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
  "num": "40",
  "name": "sendfile",
  "rax": "28",
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
  "num": "41",
  "name": "socket",
  "rax": "29",
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
  "num": "42",
  "name": "connect",
  "rax": "2A",
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
  "num": "43",
  "name": "accept",
  "rax": "2B",
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
  "num": "44",
  "name": "sendto",
  "rax": "2C",
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
  "num": "45",
  "name": "recvfrom",
  "rax": "2D",
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
  "num": "46",
  "name": "sendmsg",
  "rax": "2E",
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
  "num": "47",
  "name": "recvmsg",
  "rax": "2F",
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
  "num": "48",
  "name": "shutdown",
  "rax": "30",
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
  "num": "49",
  "name": "bind",
  "rax": "31",
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
  "num": "50",
  "name": "listen",
  "rax": "32",
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
  "num": "51",
  "name": "getsockname",
  "rax": "33",
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
  "num": "52",
  "name": "getpeername",
  "rax": "34",
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
  "num": "53",
  "name": "socketpair",
  "rax": "35",
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
  "num": "54",
  "name": "setsockopt",
  "rax": "36",
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
  "num": "55",
  "name": "getsockopt",
  "rax": "37",
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
  "num": "56",
  "name": "clone",
  "rax": "38",
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
  "num": "57",
  "name": "fork",
  "rax": "39",
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
  "num": "58",
  "name": "vfork",
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
  "name": "execve",
  "rax": "3B",
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
  "num": "60",
  "name": "exit",
  "rax": "3C",
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
  "num": "61",
  "name": "wait4",
  "rax": "3D",
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
  "num": "62",
  "name": "kill",
  "rax": "3E",
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
  "num": "63",
  "name": "uname",
  "rax": "3F",
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
  "num": "64",
  "name": "semget",
  "rax": "40",
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
  "num": "65",
  "name": "semop",
  "rax": "41",
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
  "num": "66",
  "name": "semctl",
  "rax": "42",
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
  "num": "67",
  "name": "shmdt",
  "rax": "43",
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
  "num": "68",
  "name": "msgget",
  "rax": "44",
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
  "num": "69",
  "name": "msgsnd",
  "rax": "45",
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
  "num": "70",
  "name": "msgrcv",
  "rax": "46",
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
  "num": "71",
  "name": "msgctl",
  "rax": "47",
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
  "num": "72",
  "name": "fcntl",
  "rax": "48",
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
  "num": "73",
  "name": "flock",
  "rax": "49",
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
  "num": "74",
  "name": "fsync",
  "rax": "4A",
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
  "num": "75",
  "name": "fdatasync",
  "rax": "4B",
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
  "num": "76",
  "name": "truncate",
  "rax": "4C",
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
  "num": "77",
  "name": "ftruncate",
  "rax": "4D",
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
  "num": "78",
  "name": "getdents",
  "rax": "4E",
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
  "num": "79",
  "name": "getcwd",
  "rax": "4F",
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
  "num": "80",
  "name": "chdir",
  "rax": "50",
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
  "num": "81",
  "name": "fchdir",
  "rax": "51",
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
  "num": "82",
  "name": "rename",
  "rax": "52",
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
  "num": "83",
  "name": "mkdir",
  "rax": "53",
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
  "num": "84",
  "name": "rmdir",
  "rax": "54",
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
  "num": "85",
  "name": "creat",
  "rax": "55",
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
  "num": "86",
  "name": "link",
  "rax": "56",
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
  "num": "87",
  "name": "unlink",
  "rax": "57",
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
  "num": "88",
  "name": "symlink",
  "rax": "58",
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
  "num": "89",
  "name": "readlink",
  "rax": "59",
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
  "num": "90",
  "name": "chmod",
  "rax": "5A",
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
  "num": "91",
  "name": "fchmod",
  "rax": "5B",
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
  "num": "92",
  "name": "chown",
  "rax": "5C",
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
  "num": "93",
  "name": "fchown",
  "rax": "5D",
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
  "num": "94",
  "name": "lchown",
  "rax": "5E",
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
  "num": "95",
  "name": "umask",
  "rax": "5F",
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
  "num": "96",
  "name": "gettimeofday",
  "rax": "60",
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
  "num": "97",
  "name": "getrlimit",
  "rax": "61",
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
  "num": "98",
  "name": "getrusage",
  "rax": "62",
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
  "num": "99",
  "name": "sysinfo",
  "rax": "63",
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
  "num": "100",
  "name": "times",
  "rax": "64",
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
  "num": "101",
  "name": "ptrace",
  "rax": "65",
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
  "num": "102",
  "name": "getuid",
  "rax": "66",
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
  "name": "getgid",
  "rax": "68",
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
  "num": "105",
  "name": "setuid",
  "rax": "69",
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
  "num": "106",
  "name": "setgid",
  "rax": "6A",
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
  "num": "107",
  "name": "geteuid",
  "rax": "6B",
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
  "num": "108",
  "name": "getegid",
  "rax": "6C",
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
  "num": "109",
  "name": "setpgid",
  "rax": "6D",
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
  "num": "110",
  "name": "getppid",
  "rax": "6E",
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
  "name": "getpgrp",
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
  "name": "setsid",
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
  "name": "setreuid",
  "rax": "71",
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
  "num": "114",
  "name": "setregid",
  "rax": "72",
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
  "num": "115",
  "name": "getgroups",
  "rax": "73",
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
  "num": "116",
  "name": "setgroups",
  "rax": "74",
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
  "num": "117",
  "name": "setresuid",
  "rax": "75",
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
  "num": "118",
  "name": "getresuid",
  "rax": "76",
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
  "num": "119",
  "name": "setresgid",
  "rax": "77",
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
  "num": "120",
  "name": "getresgid",
  "rax": "78",
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
  "num": "121",
  "name": "getpgid",
  "rax": "79",
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
  "num": "122",
  "name": "setfsuid",
  "rax": "7A",
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
  "num": "123",
  "name": "setfsgid",
  "rax": "7B",
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
  "num": "124",
  "name": "getsid",
  "rax": "7C",
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
  "num": "125",
  "name": "capget",
  "rax": "7D",
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
  "num": "126",
  "name": "capset",
  "rax": "7E",
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
  "num": "127",
  "name": "rt_sigpending",
  "rax": "7F",
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
  "num": "128",
  "name": "rt_sigtimedwait",
  "rax": "80",
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
  "num": "129",
  "name": "rt_sigqueueinfo",
  "rax": "81",
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
  "num": "130",
  "name": "rt_sigsuspend",
  "rax": "82",
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
  "num": "131",
  "name": "sigaltstack",
  "rax": "83",
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
  "num": "132",
  "name": "utime",
  "rax": "84",
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
  "num": "133",
  "name": "mknod",
  "rax": "85",
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
  "num": "134",
  "name": "uselib",
  "rax": "86",
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
  "num": "135",
  "name": "personality",
  "rax": "87",
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
  "num": "136",
  "name": "ustat",
  "rax": "88",
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
  "num": "137",
  "name": "statfs",
  "rax": "89",
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
  "num": "138",
  "name": "fstatfs",
  "rax": "8A",
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
  "num": "139",
  "name": "sysfs",
  "rax": "8B",
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
  "num": "140",
  "name": "getpriority",
  "rax": "8C",
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
  "num": "141",
  "name": "setpriority",
  "rax": "8D",
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
  "num": "142",
  "name": "sched_setparam",
  "rax": "8E",
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
  "num": "143",
  "name": "sched_getparam",
  "rax": "8F",
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
  "num": "144",
  "name": "sched_setscheduler",
  "rax": "90",
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
  "num": "145",
  "name": "sched_getscheduler",
  "rax": "91",
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
  "num": "146",
  "name": "sched_get_priority_max",
  "rax": "92",
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
  "num": "147",
  "name": "sched_get_priority_min",
  "rax": "93",
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
  "num": "148",
  "name": "sched_rr_get_interval",
  "rax": "94",
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
  "num": "149",
  "name": "mlock",
  "rax": "95",
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
  "num": "150",
  "name": "munlock",
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
  "name": "mlockall",
  "rax": "97",
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
  "num": "152",
  "name": "munlockall",
  "rax": "98",
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
  "num": "153",
  "name": "vhangup",
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
  "name": "modify_ldt",
  "rax": "9A",
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
  "num": "155",
  "name": "pivot_root",
  "rax": "9B",
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
  "num": "157",
  "name": "prctl",
  "rax": "9D",
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
  "num": "158",
  "name": "arch_prctl",
  "rax": "9E",
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
  "num": "159",
  "name": "adjtimex",
  "rax": "9F",
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
  "num": "160",
  "name": "setrlimit",
  "rax": "A0",
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
  "num": "161",
  "name": "chroot",
  "rax": "A1",
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
  "num": "162",
  "name": "sync",
  "rax": "A2",
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
  "num": "163",
  "name": "acct",
  "rax": "A3",
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
  "num": "164",
  "name": "settimeofday",
  "rax": "A4",
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
  "num": "165",
  "name": "mount",
  "rax": "A5",
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
  "num": "166",
  "name": "umount2",
  "rax": "A6",
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
  "num": "167",
  "name": "swapon",
  "rax": "A7",
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
  "num": "168",
  "name": "swapoff",
  "rax": "A8",
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
  "num": "169",
  "name": "reboot",
  "rax": "A9",
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
  "num": "170",
  "name": "sethostname",
  "rax": "AA",
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
  "num": "171",
  "name": "setdomainname",
  "rax": "AB",
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
  "num": "172",
  "name": "iopl",
  "rax": "AC",
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
  "num": "173",
  "name": "ioperm",
  "rax": "AD",
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
  "num": "175",
  "name": "init_module",
  "rax": "AF",
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
  "num": "176",
  "name": "delete_module",
  "rax": "B0",
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
  "num": "179",
  "name": "quotactl",
  "rax": "B3",
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
  "num": "186",
  "name": "gettid",
  "rax": "BA",
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
  "num": "187",
  "name": "readahead",
  "rax": "BB",
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
  "num": "188",
  "name": "setxattr",
  "rax": "BC",
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
  "num": "189",
  "name": "lsetxattr",
  "rax": "BD",
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
  "num": "190",
  "name": "fsetxattr",
  "rax": "BE",
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
  "num": "191",
  "name": "getxattr",
  "rax": "BF",
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
  "num": "192",
  "name": "lgetxattr",
  "rax": "C0",
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
  "num": "193",
  "name": "fgetxattr",
  "rax": "C1",
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
  "num": "194",
  "name": "listxattr",
  "rax": "C2",
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
  "num": "195",
  "name": "llistxattr",
  "rax": "C3",
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
  "num": "196",
  "name": "flistxattr",
  "rax": "C4",
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
  "num": "197",
  "name": "removexattr",
  "rax": "C5",
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
  "num": "198",
  "name": "lremovexattr",
  "rax": "C6",
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
  "num": "199",
  "name": "fremovexattr",
  "rax": "C7",
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
  "num": "200",
  "name": "tkill",
  "rax": "C8",
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
  "num": "201",
  "name": "time",
  "rax": "C9",
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
  "num": "202",
  "name": "futex",
  "rax": "CA",
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
  "num": "203",
  "name": "sched_setaffinity",
  "rax": "CB",
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
  "num": "204",
  "name": "sched_getaffinity",
  "rax": "CC",
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
  "num": "205",
  "name": "set_thread_area",
  "rax": "CD",
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
  "num": "206",
  "name": "io_setup",
  "rax": "CE",
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
  "num": "207",
  "name": "io_destroy",
  "rax": "CF",
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
  "num": "208",
  "name": "io_getevents",
  "rax": "D0",
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
  "num": "209",
  "name": "io_submit",
  "rax": "D1",
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
  "num": "210",
  "name": "io_cancel",
  "rax": "D2",
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
  "num": "211",
  "name": "get_thread_area",
  "rax": "D3",
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
  "num": "212",
  "name": "lookup_dcookie",
  "rax": "D4",
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
  "num": "213",
  "name": "epoll_create",
  "rax": "D5",
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
  "num": "216",
  "name": "remap_file_pages",
  "rax": "D8",
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
  "num": "217",
  "name": "getdents64",
  "rax": "D9",
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
  "name": "set_tid_address",
  "rax": "DA",
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
  "num": "219",
  "name": "restart_syscall",
  "rax": "DB",
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
  "num": "220",
  "name": "semtimedop",
  "rax": "DC",
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
  "num": "221",
  "name": "fadvise64",
  "rax": "DD",
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
  "num": "222",
  "name": "timer_create",
  "rax": "DE",
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
  "num": "223",
  "name": "timer_settime",
  "rax": "DF",
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
  "num": "224",
  "name": "timer_gettime",
  "rax": "E0",
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
  "num": "225",
  "name": "timer_getoverrun",
  "rax": "E1",
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
  "num": "226",
  "name": "timer_delete",
  "rax": "E2",
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
  "num": "227",
  "name": "clock_settime",
  "rax": "E3",
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
  "num": "228",
  "name": "clock_gettime",
  "rax": "E4",
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
  "num": "229",
  "name": "clock_getres",
  "rax": "E5",
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
  "num": "230",
  "name": "clock_nanosleep",
  "rax": "E6",
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
  "num": "231",
  "name": "exit_group",
  "rax": "E7",
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
  "num": "232",
  "name": "epoll_wait",
  "rax": "E8",
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
  "num": "233",
  "name": "epoll_ctl",
  "rax": "E9",
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
  "num": "234",
  "name": "tgkill",
  "rax": "EA",
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
  "num": "235",
  "name": "utimes",
  "rax": "EB",
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
  "num": "237",
  "name": "mbind",
  "rax": "ED",
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
  "num": "238",
  "name": "set_mempolicy",
  "rax": "EE",
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
  "num": "239",
  "name": "get_mempolicy",
  "rax": "EF",
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
  "num": "240",
  "name": "mq_open",
  "rax": "F0",
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
  "num": "241",
  "name": "mq_unlink",
  "rax": "F1",
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
  "num": "242",
  "name": "mq_timedsend",
  "rax": "F2",
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
  "num": "243",
  "name": "mq_timedreceive",
  "rax": "F3",
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
  "num": "244",
  "name": "mq_notify",
  "rax": "F4",
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
  "num": "245",
  "name": "mq_getsetattr",
  "rax": "F5",
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
  "num": "246",
  "name": "kexec_load",
  "rax": "F6",
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
  "num": "247",
  "name": "waitid",
  "rax": "F7",
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
  "num": "248",
  "name": "add_key",
  "rax": "F8",
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
  "num": "249",
  "name": "request_key",
  "rax": "F9",
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
  "num": "250",
  "name": "keyctl",
  "rax": "FA",
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
  "num": "251",
  "name": "ioprio_set",
  "rax": "FB",
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
  "num": "252",
  "name": "ioprio_get",
  "rax": "FC",
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
  "num": "253",
  "name": "inotify_init",
  "rax": "FD",
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
  "num": "254",
  "name": "inotify_add_watch",
  "rax": "FE",
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
  "num": "255",
  "name": "inotify_rm_watch",
  "rax": "FF",
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
  "num": "256",
  "name": "migrate_pages",
  "rax": "100",
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
  "num": "257",
  "name": "openat",
  "rax": "101",
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
  "num": "258",
  "name": "mkdirat",
  "rax": "102",
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
  "num": "259",
  "name": "mknodat",
  "rax": "103",
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
  "num": "260",
  "name": "fchownat",
  "rax": "104",
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
  "num": "261",
  "name": "futimesat",
  "rax": "105",
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
  "num": "262",
  "name": "newfstatat",
  "rax": "106",
  "args": [
   "int dfd",
   "const char *filename",
   "struct stat *statbuf",
   "int flag",
   "-",
   "-"
  ]
 },
 {
  "num": "263",
  "name": "unlinkat",
  "rax": "107",
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
  "num": "264",
  "name": "renameat",
  "rax": "108",
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
  "num": "265",
  "name": "linkat",
  "rax": "109",
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
  "num": "266",
  "name": "symlinkat",
  "rax": "10A",
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
  "num": "267",
  "name": "readlinkat",
  "rax": "10B",
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
  "num": "268",
  "name": "fchmodat",
  "rax": "10C",
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
  "num": "269",
  "name": "faccessat",
  "rax": "10D",
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
  "num": "270",
  "name": "pselect6",
  "rax": "10E",
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
  "num": "271",
  "name": "ppoll",
  "rax": "10F",
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
  "num": "272",
  "name": "unshare",
  "rax": "110",
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
  "num": "273",
  "name": "set_robust_list",
  "rax": "111",
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
  "num": "274",
  "name": "get_robust_list",
  "rax": "112",
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
  "num": "275",
  "name": "splice",
  "rax": "113",
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
  "num": "276",
  "name": "tee",
  "rax": "114",
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
  "num": "277",
  "name": "sync_file_range",
  "rax": "115",
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
  "num": "278",
  "name": "vmsplice",
  "rax": "116",
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
  "num": "279",
  "name": "move_pages",
  "rax": "117",
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
  "num": "280",
  "name": "utimensat",
  "rax": "118",
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
  "num": "281",
  "name": "epoll_pwait",
  "rax": "119",
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
  "num": "282",
  "name": "signalfd",
  "rax": "11A",
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
  "num": "283",
  "name": "timerfd_create",
  "rax": "11B",
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
  "num": "284",
  "name": "eventfd",
  "rax": "11C",
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
  "num": "285",
  "name": "fallocate",
  "rax": "11D",
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
  "num": "286",
  "name": "timerfd_settime",
  "rax": "11E",
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
  "num": "287",
  "name": "timerfd_gettime",
  "rax": "11F",
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
  "num": "288",
  "name": "accept4",
  "rax": "120",
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
  "num": "289",
  "name": "signalfd4",
  "rax": "121",
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
  "num": "290",
  "name": "eventfd2",
  "rax": "122",
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
  "num": "291",
  "name": "epoll_create1",
  "rax": "123",
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
  "num": "292",
  "name": "dup3",
  "rax": "124",
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
  "num": "293",
  "name": "pipe2",
  "rax": "125",
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
  "num": "294",
  "name": "inotify_init1",
  "rax": "126",
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
  "num": "295",
  "name": "preadv",
  "rax": "127",
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
  "num": "296",
  "name": "pwritev",
  "rax": "128",
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
  "num": "297",
  "name": "rt_tgsigqueueinfo",
  "rax": "129",
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
  "num": "298",
  "name": "perf_event_open",
  "rax": "12A",
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
  "num": "299",
  "name": "recvmmsg",
  "rax": "12B",
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
  "num": "300",
  "name": "fanotify_init",
  "rax": "12C",
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
  "num": "301",
  "name": "fanotify_mark",
  "rax": "12D",
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
  "num": "302",
  "name": "prlimit64",
  "rax": "12E",
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
  "num": "303",
  "name": "name_to_handle_at",
  "rax": "12F",
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
  "num": "304",
  "name": "open_by_handle_at",
  "rax": "130",
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
  "num": "305",
  "name": "clock_adjtime",
  "rax": "131",
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
  "num": "306",
  "name": "syncfs",
  "rax": "132",
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
  "num": "307",
  "name": "sendmmsg",
  "rax": "133",
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
  "num": "308",
  "name": "setns",
  "rax": "134",
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
  "num": "309",
  "name": "getcpu",
  "rax": "135",
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
  "num": "310",
  "name": "process_vm_readv",
  "rax": "136",
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
  "num": "311",
  "name": "process_vm_writev",
  "rax": "137",
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
  "num": "312",
  "name": "kcmp",
  "rax": "138",
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
  "num": "313",
  "name": "finit_module",
  "rax": "139",
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
  "num": "314",
  "name": "sched_setattr",
  "rax": "13A",
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
  "num": "315",
  "name": "sched_getattr",
  "rax": "13B",
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
  "num": "316",
  "name": "renameat2",
  "rax": "13C",
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
  "num": "317",
  "name": "seccomp",
  "rax": "13D",
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
  "num": "318",
  "name": "getrandom",
  "rax": "13E",
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
  "num": "319",
  "name": "memfd_create",
  "rax": "13F",
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
  "num": "320",
  "name": "kexec_file_load",
  "rax": "140",
  "args": [
   "int kernel_fd",
   "int initrd_fd",
   "unsigned long cmdline_len",
   "const char *cmdline_ptr",
   "unsigned long flags",
   "-"
  ]
 },
 {
  "num": "321",
  "name": "bpf",
  "rax": "141",
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
  "num": "322",
  "name": "execveat",
  "rax": "142",
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
  "num": "323",
  "name": "userfaultfd",
  "rax": "143",
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
  "num": "324",
  "name": "membarrier",
  "rax": "144",
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
  "num": "325",
  "name": "mlock2",
  "rax": "145",
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
  "num": "326",
  "name": "copy_file_range",
  "rax": "146",
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
  "num": "327",
  "name": "preadv2",
  "rax": "147",
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
  "num": "328",
  "name": "pwritev2",
  "rax": "148",
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
  "num": "329",
  "name": "pkey_mprotect",
  "rax": "149",
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
  "num": "330",
  "name": "pkey_alloc",
  "rax": "14A",
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
  "num": "331",
  "name": "pkey_free",
  "rax": "14B",
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
  "num": "332",
  "name": "statx",
  "rax": "14C",
  "args": [
   "int dfd",
   "const char *path",
   "unsigned flags",
   "unsigned mask",
   "struct statx *buffer",
   "-"
  ]
 }
];
