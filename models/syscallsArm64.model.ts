// Source: https://arm64.syscall.sh (AArch64 syscall table, extracted verbatim)
export interface SyscallArm64 {
  num: string;
  name: string;
  /** Syscall number in hexadecimal, as loaded into the X8 register. */
  x8: string;
  args: string[];
}

export const SYSCALLS_ARM64: SyscallArm64[] = [
 {
  "num": "0",
  "name": "io_setup",
  "x8": "0",
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
  "num": "1",
  "name": "io_destroy",
  "x8": "1",
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
  "num": "2",
  "name": "io_submit",
  "x8": "2",
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
  "num": "3",
  "name": "io_cancel",
  "x8": "3",
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
  "num": "4",
  "name": "io_getevents",
  "x8": "4",
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
  "num": "5",
  "name": "setxattr",
  "x8": "5",
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
  "num": "6",
  "name": "lsetxattr",
  "x8": "6",
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
  "num": "7",
  "name": "fsetxattr",
  "x8": "7",
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
  "num": "8",
  "name": "getxattr",
  "x8": "8",
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
  "num": "9",
  "name": "lgetxattr",
  "x8": "9",
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
  "num": "10",
  "name": "fgetxattr",
  "x8": "A",
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
  "num": "11",
  "name": "listxattr",
  "x8": "B",
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
  "num": "12",
  "name": "llistxattr",
  "x8": "C",
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
  "num": "13",
  "name": "flistxattr",
  "x8": "D",
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
  "num": "14",
  "name": "removexattr",
  "x8": "E",
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
  "num": "15",
  "name": "lremovexattr",
  "x8": "F",
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
  "num": "16",
  "name": "fremovexattr",
  "x8": "10",
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
  "num": "17",
  "name": "getcwd",
  "x8": "11",
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
  "num": "18",
  "name": "lookup_dcookie",
  "x8": "12",
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
  "num": "19",
  "name": "eventfd2",
  "x8": "13",
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
  "num": "20",
  "name": "epoll_create1",
  "x8": "14",
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
  "num": "21",
  "name": "epoll_ctl",
  "x8": "15",
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
  "num": "22",
  "name": "epoll_pwait",
  "x8": "16",
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
  "num": "23",
  "name": "dup",
  "x8": "17",
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
  "num": "24",
  "name": "dup3",
  "x8": "18",
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
  "num": "25",
  "name": "fcntl",
  "x8": "19",
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
  "num": "26",
  "name": "inotify_init1",
  "x8": "1A",
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
  "num": "27",
  "name": "inotify_add_watch",
  "x8": "1B",
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
  "num": "28",
  "name": "inotify_rm_watch",
  "x8": "1C",
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
  "num": "29",
  "name": "ioctl",
  "x8": "1D",
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
  "num": "30",
  "name": "ioprio_set",
  "x8": "1E",
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
  "num": "31",
  "name": "ioprio_get",
  "x8": "1F",
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
  "num": "32",
  "name": "flock",
  "x8": "20",
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
  "num": "33",
  "name": "mknodat",
  "x8": "21",
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
  "num": "34",
  "name": "mkdirat",
  "x8": "22",
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
  "num": "35",
  "name": "unlinkat",
  "x8": "23",
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
  "num": "36",
  "name": "symlinkat",
  "x8": "24",
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
  "num": "37",
  "name": "linkat",
  "x8": "25",
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
  "num": "38",
  "name": "renameat",
  "x8": "26",
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
  "num": "39",
  "name": "umount2",
  "x8": "27",
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
  "num": "40",
  "name": "mount",
  "x8": "28",
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
  "num": "41",
  "name": "pivot_root",
  "x8": "29",
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
  "num": "42",
  "name": "nfsservctl",
  "x8": "2A",
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
  "num": "43",
  "name": "statfs",
  "x8": "2B",
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
  "num": "44",
  "name": "fstatfs",
  "x8": "2C",
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
  "num": "45",
  "name": "truncate",
  "x8": "2D",
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
  "num": "46",
  "name": "ftruncate",
  "x8": "2E",
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
  "num": "47",
  "name": "fallocate",
  "x8": "2F",
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
  "num": "48",
  "name": "faccessat",
  "x8": "30",
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
  "num": "49",
  "name": "chdir",
  "x8": "31",
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
  "num": "50",
  "name": "fchdir",
  "x8": "32",
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
  "num": "51",
  "name": "chroot",
  "x8": "33",
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
  "num": "52",
  "name": "fchmod",
  "x8": "34",
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
  "num": "53",
  "name": "fchmodat",
  "x8": "35",
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
  "num": "54",
  "name": "fchownat",
  "x8": "36",
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
  "num": "55",
  "name": "fchown",
  "x8": "37",
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
  "num": "56",
  "name": "openat",
  "x8": "38",
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
  "num": "57",
  "name": "close",
  "x8": "39",
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
  "num": "58",
  "name": "vhangup",
  "x8": "3A",
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
  "name": "pipe2",
  "x8": "3B",
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
  "num": "60",
  "name": "quotactl",
  "x8": "3C",
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
  "num": "61",
  "name": "getdents64",
  "x8": "3D",
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
  "num": "62",
  "name": "lseek",
  "x8": "3E",
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
  "num": "63",
  "name": "read",
  "x8": "3F",
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
  "num": "64",
  "name": "write",
  "x8": "40",
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
  "num": "65",
  "name": "readv",
  "x8": "41",
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
  "num": "66",
  "name": "writev",
  "x8": "42",
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
  "num": "67",
  "name": "pread64",
  "x8": "43",
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
  "num": "68",
  "name": "pwrite64",
  "x8": "44",
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
  "num": "69",
  "name": "preadv",
  "x8": "45",
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
  "num": "70",
  "name": "pwritev",
  "x8": "46",
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
  "num": "71",
  "name": "sendfile",
  "x8": "47",
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
  "num": "72",
  "name": "pselect6",
  "x8": "48",
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
  "num": "73",
  "name": "ppoll",
  "x8": "49",
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
  "num": "74",
  "name": "signalfd4",
  "x8": "4A",
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
  "num": "75",
  "name": "vmsplice",
  "x8": "4B",
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
  "num": "76",
  "name": "splice",
  "x8": "4C",
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
  "num": "77",
  "name": "tee",
  "x8": "4D",
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
  "num": "78",
  "name": "readlinkat",
  "x8": "4E",
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
  "num": "79",
  "name": "newfstatat",
  "x8": "4F",
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
  "num": "80",
  "name": "fstat",
  "x8": "50",
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
  "num": "81",
  "name": "sync",
  "x8": "51",
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
  "num": "82",
  "name": "fsync",
  "x8": "52",
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
  "num": "83",
  "name": "fdatasync",
  "x8": "53",
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
  "num": "84",
  "name": "sync_file_range",
  "x8": "54",
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
  "num": "85",
  "name": "timerfd_create",
  "x8": "55",
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
  "num": "86",
  "name": "timerfd_settime",
  "x8": "56",
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
  "num": "87",
  "name": "timerfd_gettime",
  "x8": "57",
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
  "num": "88",
  "name": "utimensat",
  "x8": "58",
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
  "num": "89",
  "name": "acct",
  "x8": "59",
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
  "num": "90",
  "name": "capget",
  "x8": "5A",
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
  "num": "91",
  "name": "capset",
  "x8": "5B",
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
  "num": "92",
  "name": "personality",
  "x8": "5C",
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
  "num": "93",
  "name": "exit",
  "x8": "5D",
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
  "num": "94",
  "name": "exit_group",
  "x8": "5E",
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
  "num": "95",
  "name": "waitid",
  "x8": "5F",
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
  "num": "96",
  "name": "set_tid_address",
  "x8": "60",
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
  "num": "97",
  "name": "unshare",
  "x8": "61",
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
  "num": "98",
  "name": "futex",
  "x8": "62",
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
  "num": "99",
  "name": "set_robust_list",
  "x8": "63",
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
  "num": "100",
  "name": "get_robust_list",
  "x8": "64",
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
  "num": "101",
  "name": "nanosleep",
  "x8": "65",
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
  "num": "102",
  "name": "getitimer",
  "x8": "66",
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
  "num": "103",
  "name": "setitimer",
  "x8": "67",
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
  "num": "104",
  "name": "kexec_load",
  "x8": "68",
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
  "num": "105",
  "name": "init_module",
  "x8": "69",
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
  "num": "106",
  "name": "delete_module",
  "x8": "6A",
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
  "num": "107",
  "name": "timer_create",
  "x8": "6B",
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
  "num": "108",
  "name": "timer_gettime",
  "x8": "6C",
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
  "num": "109",
  "name": "timer_getoverrun",
  "x8": "6D",
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
  "num": "110",
  "name": "timer_settime",
  "x8": "6E",
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
  "num": "111",
  "name": "timer_delete",
  "x8": "6F",
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
  "num": "112",
  "name": "clock_settime",
  "x8": "70",
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
  "num": "113",
  "name": "clock_gettime",
  "x8": "71",
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
  "num": "114",
  "name": "clock_getres",
  "x8": "72",
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
  "num": "115",
  "name": "clock_nanosleep",
  "x8": "73",
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
  "num": "116",
  "name": "syslog",
  "x8": "74",
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
  "num": "117",
  "name": "ptrace",
  "x8": "75",
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
  "num": "118",
  "name": "sched_setparam",
  "x8": "76",
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
  "num": "119",
  "name": "sched_setscheduler",
  "x8": "77",
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
  "num": "120",
  "name": "sched_getscheduler",
  "x8": "78",
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
  "num": "121",
  "name": "sched_getparam",
  "x8": "79",
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
  "num": "122",
  "name": "sched_setaffinity",
  "x8": "7A",
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
  "num": "123",
  "name": "sched_getaffinity",
  "x8": "7B",
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
  "num": "124",
  "name": "sched_yield",
  "x8": "7C",
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
  "num": "125",
  "name": "sched_get_priority_max",
  "x8": "7D",
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
  "num": "126",
  "name": "sched_get_priority_min",
  "x8": "7E",
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
  "num": "127",
  "name": "sched_rr_get_interval",
  "x8": "7F",
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
  "num": "128",
  "name": "restart_syscall",
  "x8": "80",
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
  "num": "129",
  "name": "kill",
  "x8": "81",
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
  "num": "130",
  "name": "tkill",
  "x8": "82",
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
  "num": "131",
  "name": "tgkill",
  "x8": "83",
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
  "num": "132",
  "name": "sigaltstack",
  "x8": "84",
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
  "num": "133",
  "name": "rt_sigsuspend",
  "x8": "85",
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
  "num": "134",
  "name": "rt_sigaction",
  "x8": "86",
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
  "num": "135",
  "name": "rt_sigprocmask",
  "x8": "87",
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
  "num": "136",
  "name": "rt_sigpending",
  "x8": "88",
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
  "num": "137",
  "name": "rt_sigtimedwait",
  "x8": "89",
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
  "num": "138",
  "name": "rt_sigqueueinfo",
  "x8": "8A",
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
  "num": "139",
  "name": "rt_sigreturn",
  "x8": "8B",
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
  "num": "140",
  "name": "setpriority",
  "x8": "8C",
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
  "num": "141",
  "name": "getpriority",
  "x8": "8D",
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
  "num": "142",
  "name": "reboot",
  "x8": "8E",
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
  "num": "143",
  "name": "setregid",
  "x8": "8F",
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
  "num": "144",
  "name": "setgid",
  "x8": "90",
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
  "num": "145",
  "name": "setreuid",
  "x8": "91",
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
  "num": "146",
  "name": "setuid",
  "x8": "92",
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
  "num": "147",
  "name": "setresuid",
  "x8": "93",
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
  "num": "148",
  "name": "getresuid",
  "x8": "94",
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
  "num": "149",
  "name": "setresgid",
  "x8": "95",
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
  "num": "150",
  "name": "getresgid",
  "x8": "96",
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
  "num": "151",
  "name": "setfsuid",
  "x8": "97",
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
  "num": "152",
  "name": "setfsgid",
  "x8": "98",
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
  "num": "153",
  "name": "times",
  "x8": "99",
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
  "num": "154",
  "name": "setpgid",
  "x8": "9A",
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
  "num": "155",
  "name": "getpgid",
  "x8": "9B",
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
  "num": "156",
  "name": "getsid",
  "x8": "9C",
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
  "num": "157",
  "name": "setsid",
  "x8": "9D",
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
  "num": "158",
  "name": "getgroups",
  "x8": "9E",
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
  "num": "159",
  "name": "setgroups",
  "x8": "9F",
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
  "num": "160",
  "name": "uname",
  "x8": "A0",
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
  "num": "161",
  "name": "sethostname",
  "x8": "A1",
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
  "num": "162",
  "name": "setdomainname",
  "x8": "A2",
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
  "num": "163",
  "name": "getrlimit",
  "x8": "A3",
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
  "num": "164",
  "name": "setrlimit",
  "x8": "A4",
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
  "num": "165",
  "name": "getrusage",
  "x8": "A5",
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
  "num": "166",
  "name": "umask",
  "x8": "A6",
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
  "num": "167",
  "name": "prctl",
  "x8": "A7",
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
  "num": "168",
  "name": "getcpu",
  "x8": "A8",
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
  "num": "169",
  "name": "gettimeofday",
  "x8": "A9",
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
  "num": "170",
  "name": "settimeofday",
  "x8": "AA",
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
  "num": "171",
  "name": "adjtimex",
  "x8": "AB",
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
  "num": "172",
  "name": "getpid",
  "x8": "AC",
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
  "num": "173",
  "name": "getppid",
  "x8": "AD",
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
  "num": "174",
  "name": "getuid",
  "x8": "AE",
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
  "num": "175",
  "name": "geteuid",
  "x8": "AF",
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
  "num": "176",
  "name": "getgid",
  "x8": "B0",
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
  "num": "177",
  "name": "getegid",
  "x8": "B1",
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
  "num": "178",
  "name": "gettid",
  "x8": "B2",
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
  "num": "179",
  "name": "sysinfo",
  "x8": "B3",
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
  "num": "180",
  "name": "mq_open",
  "x8": "B4",
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
  "num": "181",
  "name": "mq_unlink",
  "x8": "B5",
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
  "num": "182",
  "name": "mq_timedsend",
  "x8": "B6",
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
  "num": "183",
  "name": "mq_timedreceive",
  "x8": "B7",
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
  "num": "184",
  "name": "mq_notify",
  "x8": "B8",
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
  "num": "185",
  "name": "mq_getsetattr",
  "x8": "B9",
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
  "num": "186",
  "name": "msgget",
  "x8": "BA",
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
  "num": "187",
  "name": "msgctl",
  "x8": "BB",
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
  "num": "188",
  "name": "msgrcv",
  "x8": "BC",
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
  "num": "189",
  "name": "msgsnd",
  "x8": "BD",
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
  "num": "190",
  "name": "semget",
  "x8": "BE",
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
  "num": "191",
  "name": "semctl",
  "x8": "BF",
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
  "num": "192",
  "name": "semtimedop",
  "x8": "C0",
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
  "num": "193",
  "name": "semop",
  "x8": "C1",
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
  "num": "194",
  "name": "shmget",
  "x8": "C2",
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
  "num": "195",
  "name": "shmctl",
  "x8": "C3",
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
  "num": "196",
  "name": "shmat",
  "x8": "C4",
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
  "num": "197",
  "name": "shmdt",
  "x8": "C5",
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
  "num": "198",
  "name": "socket",
  "x8": "C6",
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
  "num": "199",
  "name": "socketpair",
  "x8": "C7",
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
  "num": "200",
  "name": "bind",
  "x8": "C8",
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
  "num": "201",
  "name": "listen",
  "x8": "C9",
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
  "num": "202",
  "name": "accept",
  "x8": "CA",
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
  "num": "203",
  "name": "connect",
  "x8": "CB",
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
  "num": "204",
  "name": "getsockname",
  "x8": "CC",
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
  "num": "205",
  "name": "getpeername",
  "x8": "CD",
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
  "num": "206",
  "name": "sendto",
  "x8": "CE",
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
  "num": "207",
  "name": "recvfrom",
  "x8": "CF",
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
  "num": "208",
  "name": "setsockopt",
  "x8": "D0",
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
  "num": "209",
  "name": "getsockopt",
  "x8": "D1",
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
  "num": "210",
  "name": "shutdown",
  "x8": "D2",
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
  "num": "211",
  "name": "sendmsg",
  "x8": "D3",
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
  "num": "212",
  "name": "recvmsg",
  "x8": "D4",
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
  "num": "213",
  "name": "readahead",
  "x8": "D5",
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
  "num": "214",
  "name": "brk",
  "x8": "D6",
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
  "num": "215",
  "name": "munmap",
  "x8": "D7",
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
  "num": "216",
  "name": "mremap",
  "x8": "D8",
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
  "num": "217",
  "name": "add_key",
  "x8": "D9",
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
  "num": "218",
  "name": "request_key",
  "x8": "DA",
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
  "num": "219",
  "name": "keyctl",
  "x8": "DB",
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
  "num": "220",
  "name": "clone",
  "x8": "DC",
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
  "num": "221",
  "name": "execve",
  "x8": "DD",
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
  "num": "222",
  "name": "mmap",
  "x8": "DE",
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
  "num": "223",
  "name": "fadvise64",
  "x8": "DF",
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
  "num": "224",
  "name": "swapon",
  "x8": "E0",
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
  "num": "225",
  "name": "swapoff",
  "x8": "E1",
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
  "num": "226",
  "name": "mprotect",
  "x8": "E2",
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
  "num": "227",
  "name": "msync",
  "x8": "E3",
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
  "num": "228",
  "name": "mlock",
  "x8": "E4",
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
  "num": "229",
  "name": "munlock",
  "x8": "E5",
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
  "num": "230",
  "name": "mlockall",
  "x8": "E6",
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
  "num": "231",
  "name": "munlockall",
  "x8": "E7",
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
  "num": "232",
  "name": "mincore",
  "x8": "E8",
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
  "num": "233",
  "name": "madvise",
  "x8": "E9",
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
  "num": "234",
  "name": "remap_file_pages",
  "x8": "EA",
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
  "num": "235",
  "name": "mbind",
  "x8": "EB",
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
  "num": "236",
  "name": "get_mempolicy",
  "x8": "EC",
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
  "num": "237",
  "name": "set_mempolicy",
  "x8": "ED",
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
  "num": "238",
  "name": "migrate_pages",
  "x8": "EE",
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
  "num": "239",
  "name": "move_pages",
  "x8": "EF",
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
  "num": "240",
  "name": "rt_tgsigqueueinfo",
  "x8": "F0",
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
  "num": "241",
  "name": "perf_event_open",
  "x8": "F1",
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
  "num": "242",
  "name": "accept4",
  "x8": "F2",
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
  "num": "243",
  "name": "recvmmsg",
  "x8": "F3",
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
  "num": "244",
  "name": "not implemented",
  "x8": "F4",
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
  "num": "245",
  "name": "not implemented",
  "x8": "F5",
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
  "num": "246",
  "name": "not implemented",
  "x8": "F6",
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
  "num": "247",
  "name": "not implemented",
  "x8": "F7",
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
  "num": "248",
  "name": "not implemented",
  "x8": "F8",
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
  "num": "249",
  "name": "not implemented",
  "x8": "F9",
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
  "num": "250",
  "name": "not implemented",
  "x8": "FA",
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
  "num": "251",
  "name": "not implemented",
  "x8": "FB",
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
  "num": "252",
  "name": "not implemented",
  "x8": "FC",
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
  "num": "253",
  "name": "not implemented",
  "x8": "FD",
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
  "name": "not implemented",
  "x8": "FE",
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
  "x8": "FF",
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
  "name": "not implemented",
  "x8": "100",
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
  "num": "257",
  "name": "not implemented",
  "x8": "101",
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
  "num": "258",
  "name": "not implemented",
  "x8": "102",
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
  "num": "259",
  "name": "not implemented",
  "x8": "103",
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
  "num": "260",
  "name": "wait4",
  "x8": "104",
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
  "num": "261",
  "name": "prlimit64",
  "x8": "105",
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
  "num": "262",
  "name": "fanotify_init",
  "x8": "106",
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
  "num": "263",
  "name": "fanotify_mark",
  "x8": "107",
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
  "num": "264",
  "name": "name_to_handle_at",
  "x8": "108",
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
  "num": "265",
  "name": "open_by_handle_at",
  "x8": "109",
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
  "num": "266",
  "name": "clock_adjtime",
  "x8": "10A",
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
  "num": "267",
  "name": "syncfs",
  "x8": "10B",
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
  "num": "268",
  "name": "setns",
  "x8": "10C",
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
  "num": "269",
  "name": "sendmmsg",
  "x8": "10D",
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
  "num": "270",
  "name": "process_vm_readv",
  "x8": "10E",
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
  "num": "271",
  "name": "process_vm_writev",
  "x8": "10F",
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
  "num": "272",
  "name": "kcmp",
  "x8": "110",
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
  "num": "273",
  "name": "finit_module",
  "x8": "111",
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
  "num": "274",
  "name": "sched_setattr",
  "x8": "112",
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
  "num": "275",
  "name": "sched_getattr",
  "x8": "113",
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
  "num": "276",
  "name": "renameat2",
  "x8": "114",
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
  "num": "277",
  "name": "seccomp",
  "x8": "115",
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
  "num": "278",
  "name": "getrandom",
  "x8": "116",
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
  "num": "279",
  "name": "memfd_create",
  "x8": "117",
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
  "num": "280",
  "name": "bpf",
  "x8": "118",
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
  "num": "281",
  "name": "execveat",
  "x8": "119",
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
  "num": "282",
  "name": "userfaultfd",
  "x8": "11A",
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
  "num": "283",
  "name": "membarrier",
  "x8": "11B",
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
  "num": "284",
  "name": "mlock2",
  "x8": "11C",
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
  "num": "285",
  "name": "copy_file_range",
  "x8": "11D",
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
  "num": "286",
  "name": "preadv2",
  "x8": "11E",
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
  "num": "287",
  "name": "pwritev2",
  "x8": "11F",
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
  "num": "288",
  "name": "pkey_mprotect",
  "x8": "120",
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
  "num": "289",
  "name": "pkey_alloc",
  "x8": "121",
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
  "num": "290",
  "name": "pkey_free",
  "x8": "122",
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
  "num": "291",
  "name": "statx",
  "x8": "123",
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
