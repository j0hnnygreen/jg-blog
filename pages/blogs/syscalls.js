import Head from "next/head";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";

export default function LinuxSyscalls() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.binExp.syscalls}</title>
        </Head>

        <main className="main">
          <h1 className={blogStyles.title}>Linux Syscalls</h1>
          <p></p>

          <BlogCard heading="Call Convention">
            <div className={blogStyles.tableDiv}>
              <table className={blogStyles.dashedTable}>
                <thead>
                  <tr>
                    <th>Arch</th>
                    <th>Return Value</th>
                    <th>1st Arg</th>
                    <th>2nd Arg</th>
                    <th>3rd Arg</th>
                    <th>4th Arg</th>
                    <th>5th Arg</th>
                    <th>6th Arg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>x86</td>
                    <td>EAX</td>
                    <td>EBX</td>
                    <td>ECX</td>
                    <td>EDX</td>
                    <td>ESI</td>
                    <td>EDI</td>
                    <td>EBP</td>
                  </tr>
                  <tr>
                    <td>x64</td>
                    <td>RAX</td>
                    <td>RDI</td>
                    <td>RSI</td>
                    <td>RDX</td>
                    <td>R10</td>
                    <td>R8</td>
                    <td>R9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BlogCard>

          <BlogCard heading="x64 Syscalls Table">
            <div className={`${blogStyles.tableDiv} ${blogStyles.altTableDiv}`}>
              <table className={blogStyles.altTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>SYSCALL NAME</th>
                    <th>RAX</th>
                    <th>RDI</th>
                    <th>RSI</th>
                    <th>RDX</th>
                    <th>R10</th>
                    <th>R8</th>
                    <th>R9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>read</td>

                    <td>0</td>
                    <td>unsigned int fd</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>write</td>

                    <td>1</td>
                    <td>unsigned int fd</td>
                    <td>const char *buf</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>open</td>

                    <td>2</td>
                    <td>const char *filename</td>
                    <td>int flags</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>close</td>

                    <td>3</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>stat</td>

                    <td>4</td>
                    <td>const char *filename</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>fstat</td>

                    <td>5</td>
                    <td>unsigned int fd</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>lstat</td>

                    <td>6</td>
                    <td>const char *filename</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>poll</td>

                    <td>7</td>
                    <td>struct pollfd *ufds</td>
                    <td>unsigned int nfds</td>
                    <td>int timeout</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>lseek</td>

                    <td>8</td>
                    <td>unsigned int fd</td>
                    <td>off_t offset</td>
                    <td>unsigned int whence</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>mmap</td>

                    <td>9</td>
                    <td>unsigned long addr</td>
                    <td>size_t len</td>
                    <td>int protection</td>
                    <td>int flags</td>
                    <td>int fd</td>
                    <td>off_t offset</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>mprotect</td>

                    <td>A</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned long prot</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>munmap</td>

                    <td>B</td>
                    <td>unsigned long addr</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>brk</td>

                    <td>C</td>
                    <td>unsigned long brk</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>rt_sigaction</td>

                    <td>D</td>
                    <td>int</td>
                    <td>const struct sigaction *</td>
                    <td>struct sigaction *</td>
                    <td>size_t</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>rt_sigprocmask</td>

                    <td>E</td>
                    <td>int how</td>
                    <td>sigset_t *set</td>
                    <td>sigset_t *oset</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>rt_sigreturn</td>

                    <td>F</td>
                    <td>unsigned long __unused</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>ioctl</td>

                    <td>10</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>pread64</td>

                    <td>11</td>
                    <td>unsigned int fd</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>loff_t pos</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>pwrite64</td>

                    <td>12</td>
                    <td>unsigned int fd</td>
                    <td>const char *buf</td>
                    <td>size_t count</td>
                    <td>loff_t pos</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>readv</td>

                    <td>13</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>writev</td>

                    <td>14</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>access</td>

                    <td>15</td>
                    <td>const char *filename</td>
                    <td>int mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>pipe</td>

                    <td>16</td>
                    <td>int *fildes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>select</td>

                    <td>17</td>
                    <td>int n</td>
                    <td>fd_set *inp</td>
                    <td>fd_set *outp</td>
                    <td>fd_set *exp</td>
                    <td>struct timeval *tvp</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>sched_yield</td>

                    <td>18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>mremap</td>

                    <td>19</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long old_len</td>
                    <td>unsigned long new_len</td>
                    <td>unsigned long flags</td>
                    <td>unsigned long new_addr</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>msync</td>

                    <td>1A</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>mincore</td>

                    <td>1B</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned char * vec</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>madvise</td>

                    <td>1C</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int behavior</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>shmget</td>

                    <td>1D</td>
                    <td>key_t key</td>
                    <td>size_t size</td>
                    <td>int flag</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>shmat</td>

                    <td>1E</td>
                    <td>int shmid</td>
                    <td>char *shmaddr</td>
                    <td>int shmflg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>shmctl</td>

                    <td>1F</td>
                    <td>int shmid</td>
                    <td>int cmd</td>
                    <td>struct shmid_ds *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>dup</td>

                    <td>20</td>
                    <td>unsigned int fildes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>dup2</td>

                    <td>21</td>
                    <td>unsigned int oldfd</td>
                    <td>unsigned int newfd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>pause</td>

                    <td>22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>nanosleep</td>

                    <td>23</td>
                    <td>struct __kernel_timespec *rqtp</td>
                    <td>struct __kernel_timespec *rmtp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>getitimer</td>

                    <td>24</td>
                    <td>int which</td>
                    <td>struct itimerval *value</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>alarm</td>

                    <td>25</td>
                    <td>unsigned int seconds</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>setitimer</td>

                    <td>26</td>
                    <td>int which</td>
                    <td>struct itimerval *value</td>
                    <td>struct itimerval *ovalue</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>getpid</td>

                    <td>27</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>sendfile</td>

                    <td>28</td>
                    <td>int out_fd</td>
                    <td>int in_fd</td>
                    <td>off_t *offset</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>socket</td>

                    <td>29</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>connect</td>

                    <td>2A</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>accept</td>

                    <td>2B</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>sendto</td>

                    <td>2C</td>
                    <td>int</td>
                    <td>void *</td>
                    <td>size_t</td>
                    <td>unsigned</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>recvfrom</td>

                    <td>2D</td>
                    <td>int</td>
                    <td>void *</td>
                    <td>size_t</td>
                    <td>unsigned</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>sendmsg</td>

                    <td>2E</td>
                    <td>int fd</td>
                    <td>struct user_msghdr *msg</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>recvmsg</td>

                    <td>2F</td>
                    <td>int fd</td>
                    <td>struct user_msghdr *msg</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>shutdown</td>

                    <td>30</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>bind</td>

                    <td>31</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>listen</td>

                    <td>32</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>getsockname</td>

                    <td>33</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>getpeername</td>

                    <td>34</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>socketpair</td>

                    <td>35</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>setsockopt</td>

                    <td>36</td>
                    <td>int fd</td>
                    <td>int level</td>
                    <td>int optname</td>
                    <td>char *optval</td>
                    <td>int optlen</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>getsockopt</td>

                    <td>37</td>
                    <td>int fd</td>
                    <td>int level</td>
                    <td>int optname</td>
                    <td>char *optval</td>
                    <td>int *optlen</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>56</td>
                    <td>clone</td>

                    <td>38</td>
                    <td>unsigned long</td>
                    <td>unsigned long</td>
                    <td>int *</td>
                    <td>int *</td>
                    <td>unsigned long</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>fork</td>

                    <td>39</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>vfork</td>

                    <td>3A</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>execve</td>

                    <td>3B</td>
                    <td>const char *filename</td>
                    <td>const char *const *argv</td>
                    <td>const char *const *envp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>exit</td>

                    <td>3C</td>
                    <td>int error_code</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>61</td>
                    <td>wait4</td>

                    <td>3D</td>
                    <td>pid_t pid</td>
                    <td>int *stat_addr</td>
                    <td>int options</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>kill</td>

                    <td>3E</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>uname</td>

                    <td>3F</td>
                    <td>struct old_utsname *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>semget</td>

                    <td>40</td>
                    <td>key_t key</td>
                    <td>int nsems</td>
                    <td>int semflg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>semop</td>

                    <td>41</td>
                    <td>int semid</td>
                    <td>struct sembuf *sops</td>
                    <td>unsigned nsops</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>semctl</td>

                    <td>42</td>
                    <td>int semid</td>
                    <td>int semnum</td>
                    <td>int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>shmdt</td>

                    <td>43</td>
                    <td>char *shmaddr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>msgget</td>

                    <td>44</td>
                    <td>key_t key</td>
                    <td>int msgflg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>msgsnd</td>

                    <td>45</td>
                    <td>int msqid</td>
                    <td>struct msgbuf *msgp</td>
                    <td>size_t msgsz</td>
                    <td>int msgflg</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>msgrcv</td>

                    <td>46</td>
                    <td>int msqid</td>
                    <td>struct msgbuf *msgp</td>
                    <td>size_t msgsz</td>
                    <td>long msgtyp</td>
                    <td>int msgflg</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>msgctl</td>

                    <td>47</td>
                    <td>int msqid</td>
                    <td>int cmd</td>
                    <td>struct msqid_ds *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>fcntl</td>

                    <td>48</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>flock</td>

                    <td>49</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>74</td>
                    <td>fsync</td>

                    <td>4A</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>75</td>
                    <td>fdatasync</td>

                    <td>4B</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>76</td>
                    <td>truncate</td>

                    <td>4C</td>
                    <td>const char *path</td>
                    <td>long length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>77</td>
                    <td>ftruncate</td>

                    <td>4D</td>
                    <td>unsigned int fd</td>
                    <td>unsigned long length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>78</td>
                    <td>getdents</td>

                    <td>4E</td>
                    <td>unsigned int fd</td>
                    <td>struct linux_dirent *dirent</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>79</td>
                    <td>getcwd</td>

                    <td>4F</td>
                    <td>char *buf</td>
                    <td>unsigned long size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>chdir</td>

                    <td>50</td>
                    <td>const char *filename</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>81</td>
                    <td>fchdir</td>

                    <td>51</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>82</td>
                    <td>rename</td>

                    <td>52</td>
                    <td>const char *oldname</td>
                    <td>const char *newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>83</td>
                    <td>mkdir</td>

                    <td>53</td>
                    <td>const char *pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>84</td>
                    <td>rmdir</td>

                    <td>54</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>85</td>
                    <td>creat</td>

                    <td>55</td>
                    <td>const char *pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>86</td>
                    <td>link</td>

                    <td>56</td>
                    <td>const char *oldname</td>
                    <td>const char *newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>87</td>
                    <td>unlink</td>

                    <td>57</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>88</td>
                    <td>symlink</td>

                    <td>58</td>
                    <td>const char *old</td>
                    <td>const char *new</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>89</td>
                    <td>readlink</td>

                    <td>59</td>
                    <td>const char *path</td>
                    <td>char *buf</td>
                    <td>int bufsiz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>chmod</td>

                    <td>5A</td>
                    <td>const char *filename</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>91</td>
                    <td>fchmod</td>

                    <td>5B</td>
                    <td>unsigned int fd</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>92</td>
                    <td>chown</td>

                    <td>5C</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>93</td>
                    <td>fchown</td>

                    <td>5D</td>
                    <td>unsigned int fd</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>94</td>
                    <td>lchown</td>

                    <td>5E</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>95</td>
                    <td>umask</td>

                    <td>5F</td>
                    <td>int mask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>96</td>
                    <td>gettimeofday</td>

                    <td>60</td>
                    <td>struct timeval *tv</td>
                    <td>struct timezone *tz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>97</td>
                    <td>getrlimit</td>

                    <td>61</td>
                    <td>unsigned int resource</td>
                    <td>struct rlimit *rlim</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>98</td>
                    <td>getrusage</td>

                    <td>62</td>
                    <td>int who</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>99</td>
                    <td>sysinfo</td>

                    <td>63</td>
                    <td>struct sysinfo *info</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>times</td>

                    <td>64</td>
                    <td>struct tms *tbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>101</td>
                    <td>ptrace</td>

                    <td>65</td>
                    <td>long request</td>
                    <td>long pid</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long data</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>getuid</td>

                    <td>66</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>syslog</td>

                    <td>67</td>
                    <td>int type</td>
                    <td>char *buf</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>104</td>
                    <td>getgid</td>

                    <td>68</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>105</td>
                    <td>setuid</td>

                    <td>69</td>
                    <td>uid_t uid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>106</td>
                    <td>setgid</td>

                    <td>6A</td>
                    <td>gid_t gid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>107</td>
                    <td>geteuid</td>

                    <td>6B</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>108</td>
                    <td>getegid</td>

                    <td>6C</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>setpgid</td>

                    <td>6D</td>
                    <td>pid_t pid</td>
                    <td>pid_t pgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>110</td>
                    <td>getppid</td>

                    <td>6E</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>getpgrp</td>

                    <td>6F</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>112</td>
                    <td>setsid</td>

                    <td>70</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>113</td>
                    <td>setreuid</td>

                    <td>71</td>
                    <td>uid_t ruid</td>
                    <td>uid_t euid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>114</td>
                    <td>setregid</td>

                    <td>72</td>
                    <td>gid_t rgid</td>
                    <td>gid_t egid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>115</td>
                    <td>getgroups</td>

                    <td>73</td>
                    <td>int gidsetsize</td>
                    <td>gid_t *grouplist</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>116</td>
                    <td>setgroups</td>

                    <td>74</td>
                    <td>int gidsetsize</td>
                    <td>gid_t *grouplist</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>117</td>
                    <td>setresuid</td>

                    <td>75</td>
                    <td>uid_t ruid</td>
                    <td>uid_t euid</td>
                    <td>uid_t suid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>118</td>
                    <td>getresuid</td>

                    <td>76</td>
                    <td>uid_t *ruid</td>
                    <td>uid_t *euid</td>
                    <td>uid_t *suid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>119</td>
                    <td>setresgid</td>

                    <td>77</td>
                    <td>gid_t rgid</td>
                    <td>gid_t egid</td>
                    <td>gid_t sgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>120</td>
                    <td>getresgid</td>

                    <td>78</td>
                    <td>gid_t *rgid</td>
                    <td>gid_t *egid</td>
                    <td>gid_t *sgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>121</td>
                    <td>getpgid</td>

                    <td>79</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>122</td>
                    <td>setfsuid</td>

                    <td>7A</td>
                    <td>uid_t uid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>setfsgid</td>

                    <td>7B</td>
                    <td>gid_t gid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>124</td>
                    <td>getsid</td>

                    <td>7C</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>125</td>
                    <td>capget</td>

                    <td>7D</td>
                    <td>cap_user_header_t header</td>
                    <td>cap_user_data_t dataptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>126</td>
                    <td>capset</td>

                    <td>7E</td>
                    <td>cap_user_header_t header</td>
                    <td>const cap_user_data_t data</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>127</td>
                    <td>rt_sigpending</td>

                    <td>7F</td>
                    <td>sigset_t *set</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>128</td>
                    <td>rt_sigtimedwait</td>

                    <td>80</td>
                    <td>const sigset_t *uthese</td>
                    <td>siginfo_t *uinfo</td>
                    <td>const struct __kernel_timespec *uts</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>129</td>
                    <td>rt_sigqueueinfo</td>

                    <td>81</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>siginfo_t *uinfo</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>130</td>
                    <td>rt_sigsuspend</td>

                    <td>82</td>
                    <td>sigset_t *unewset</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>131</td>
                    <td>sigaltstack</td>

                    <td>83</td>
                    <td>const struct sigaltstack *uss</td>
                    <td>struct sigaltstack *uoss</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>132</td>
                    <td>utime</td>

                    <td>84</td>
                    <td>char *filename</td>
                    <td>struct utimbuf *times</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>133</td>
                    <td>mknod</td>

                    <td>85</td>
                    <td>const char *filename</td>
                    <td>umode_t mode</td>
                    <td>unsigned dev</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>134</td>
                    <td>uselib</td>

                    <td>86</td>
                    <td>const char *library</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>135</td>
                    <td>personality</td>

                    <td>87</td>
                    <td>unsigned int personality</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>136</td>
                    <td>ustat</td>

                    <td>88</td>
                    <td>unsigned dev</td>
                    <td>struct ustat *ubuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>137</td>
                    <td>statfs</td>

                    <td>89</td>
                    <td>const char * path</td>
                    <td>struct statfs *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>138</td>
                    <td>fstatfs</td>

                    <td>8A</td>
                    <td>unsigned int fd</td>
                    <td>struct statfs *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>139</td>
                    <td>sysfs</td>

                    <td>8B</td>
                    <td>int option</td>
                    <td>unsigned long arg1</td>
                    <td>unsigned long arg2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>140</td>
                    <td>getpriority</td>

                    <td>8C</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>141</td>
                    <td>setpriority</td>

                    <td>8D</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>int niceval</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>142</td>
                    <td>sched_setparam</td>

                    <td>8E</td>
                    <td>pid_t pid</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>143</td>
                    <td>sched_getparam</td>

                    <td>8F</td>
                    <td>pid_t pid</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>144</td>
                    <td>sched_setscheduler</td>

                    <td>90</td>
                    <td>pid_t pid</td>
                    <td>int policy</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>sched_getscheduler</td>

                    <td>91</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>146</td>
                    <td>sched_get_priority_max</td>

                    <td>92</td>
                    <td>int policy</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>147</td>
                    <td>sched_get_priority_min</td>

                    <td>93</td>
                    <td>int policy</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>148</td>
                    <td>sched_rr_get_interval</td>

                    <td>94</td>
                    <td>pid_t pid</td>
                    <td>struct __kernel_timespec *interval</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>149</td>
                    <td>mlock</td>

                    <td>95</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>150</td>
                    <td>munlock</td>

                    <td>96</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>151</td>
                    <td>mlockall</td>

                    <td>97</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>152</td>
                    <td>munlockall</td>

                    <td>98</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>153</td>
                    <td>vhangup</td>

                    <td>99</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>154</td>
                    <td>modify_ldt</td>

                    <td>9A</td>
                    <td>int func</td>
                    <td>void ptr</td>
                    <td>unsigned long bytecount</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>155</td>
                    <td>pivot_root</td>

                    <td>9B</td>
                    <td>const char *new_root</td>
                    <td>const char *put_old</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>157</td>
                    <td>prctl</td>

                    <td>9D</td>
                    <td>int option</td>
                    <td>unsigned long arg2</td>
                    <td>unsigned long arg3</td>
                    <td>unsigned long arg4</td>
                    <td>unsigned long arg5</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>158</td>
                    <td>arch_prctl</td>

                    <td>9E</td>
                    <td>int code</td>
                    <td>unsigned long addr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>159</td>
                    <td>adjtimex</td>

                    <td>9F</td>
                    <td>struct __kernel_timex *txc_p</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>160</td>
                    <td>setrlimit</td>

                    <td>A0</td>
                    <td>unsigned int resource</td>
                    <td>struct rlimit *rlim</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>161</td>
                    <td>chroot</td>

                    <td>A1</td>
                    <td>const char *filename</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>162</td>
                    <td>sync</td>

                    <td>A2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>163</td>
                    <td>acct</td>

                    <td>A3</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>164</td>
                    <td>settimeofday</td>

                    <td>A4</td>
                    <td>struct timeval *tv</td>
                    <td>struct timezone *tz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>165</td>
                    <td>mount</td>

                    <td>A5</td>
                    <td>char *dev_name</td>
                    <td>char *dir_name</td>
                    <td>char *type</td>
                    <td>unsigned long flags</td>
                    <td>void *data</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>166</td>
                    <td>umount2</td>

                    <td>A6</td>
                    <td>const char *target</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>167</td>
                    <td>swapon</td>

                    <td>A7</td>
                    <td>const char *specialfile</td>
                    <td>int swap_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>168</td>
                    <td>swapoff</td>

                    <td>A8</td>
                    <td>const char *specialfile</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>169</td>
                    <td>reboot</td>

                    <td>A9</td>
                    <td>int magic1</td>
                    <td>int magic2</td>
                    <td>unsigned int cmd</td>
                    <td>void *arg</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>170</td>
                    <td>sethostname</td>

                    <td>AA</td>
                    <td>char *name</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>171</td>
                    <td>setdomainname</td>

                    <td>AB</td>
                    <td>char *name</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>172</td>
                    <td>iopl</td>

                    <td>AC</td>
                    <td>int level</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>173</td>
                    <td>ioperm</td>

                    <td>AD</td>
                    <td>unsigned long from</td>
                    <td>unsigned long num</td>
                    <td>int on</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>init_module</td>

                    <td>AF</td>
                    <td>void *umod</td>
                    <td>unsigned long len</td>
                    <td>const char *uargs</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>176</td>
                    <td>delete_module</td>

                    <td>B0</td>
                    <td>const char *name_user</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>179</td>
                    <td>quotactl</td>

                    <td>B3</td>
                    <td>unsigned int cmd</td>
                    <td>const char *special</td>
                    <td>qid_t id</td>
                    <td>void *addr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>186</td>
                    <td>gettid</td>

                    <td>BA</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>187</td>
                    <td>readahead</td>

                    <td>BB</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>188</td>
                    <td>setxattr</td>

                    <td>BC</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>189</td>
                    <td>lsetxattr</td>

                    <td>BD</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>190</td>
                    <td>fsetxattr</td>

                    <td>BE</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>191</td>
                    <td>getxattr</td>

                    <td>BF</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>192</td>
                    <td>lgetxattr</td>

                    <td>C0</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>193</td>
                    <td>fgetxattr</td>

                    <td>C1</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>194</td>
                    <td>listxattr</td>

                    <td>C2</td>
                    <td>const char *path</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>195</td>
                    <td>llistxattr</td>

                    <td>C3</td>
                    <td>const char *path</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>196</td>
                    <td>flistxattr</td>

                    <td>C4</td>
                    <td>int fd</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>197</td>
                    <td>removexattr</td>

                    <td>C5</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>198</td>
                    <td>lremovexattr</td>

                    <td>C6</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>199</td>
                    <td>fremovexattr</td>

                    <td>C7</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>tkill</td>

                    <td>C8</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>201</td>
                    <td>time</td>

                    <td>C9</td>
                    <td>time_t *tloc</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>202</td>
                    <td>futex</td>

                    <td>CA</td>
                    <td>u32 *uaddr</td>
                    <td>int op</td>
                    <td>u32 val</td>
                    <td>struct __kernel_timespec *utime</td>
                    <td>u32 *uaddr2</td>
                    <td>u32 val3</td>
                  </tr>
                  <tr>
                    <td>203</td>
                    <td>sched_setaffinity</td>

                    <td>CB</td>
                    <td>pid_t pid</td>
                    <td>unsigned int len</td>
                    <td>unsigned long *user_mask_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>204</td>
                    <td>sched_getaffinity</td>

                    <td>CC</td>
                    <td>pid_t pid</td>
                    <td>unsigned int len</td>
                    <td>unsigned long *user_mask_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>205</td>
                    <td>set_thread_area</td>

                    <td>CD</td>
                    <td>struct user_desc *u_info</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>206</td>
                    <td>io_setup</td>

                    <td>CE</td>
                    <td>unsigned nr_reqs</td>
                    <td>aio_context_t *ctx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>207</td>
                    <td>io_destroy</td>

                    <td>CF</td>
                    <td>aio_context_t ctx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>208</td>
                    <td>io_getevents</td>

                    <td>D0</td>
                    <td>aio_context_t ctx_id</td>
                    <td>long min_nr</td>
                    <td>long nr</td>
                    <td>struct io_event *events</td>
                    <td>struct __kernel_timespec *timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>209</td>
                    <td>io_submit</td>

                    <td>D1</td>
                    <td>aio_context_t</td>
                    <td>long</td>
                    <td>struct iocb * *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>io_cancel</td>

                    <td>D2</td>
                    <td>aio_context_t ctx_id</td>
                    <td>struct iocb *iocb</td>
                    <td>struct io_event *result</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>211</td>
                    <td>get_thread_area</td>

                    <td>D3</td>
                    <td>struct user_desc *u_info</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>212</td>
                    <td>lookup_dcookie</td>

                    <td>D4</td>
                    <td>u64 cookie64</td>
                    <td>char *buf</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>213</td>
                    <td>epoll_create</td>

                    <td>D5</td>
                    <td>int size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>216</td>
                    <td>remap_file_pages</td>

                    <td>D8</td>
                    <td>unsigned long start</td>
                    <td>unsigned long size</td>
                    <td>unsigned long prot</td>
                    <td>unsigned long pgoff</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>217</td>
                    <td>getdents64</td>

                    <td>D9</td>
                    <td>unsigned int fd</td>
                    <td>struct linux_dirent64 *dirent</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>218</td>
                    <td>set_tid_address</td>

                    <td>DA</td>
                    <td>int *tidptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>restart_syscall</td>

                    <td>DB</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>220</td>
                    <td>semtimedop</td>

                    <td>DC</td>
                    <td>int semid</td>
                    <td>struct sembuf *sops</td>
                    <td>unsigned nsops</td>
                    <td>const struct __kernel_timespec *timeout</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>221</td>
                    <td>fadvise64</td>

                    <td>DD</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>size_t len</td>
                    <td>int advice</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>222</td>
                    <td>timer_create</td>

                    <td>DE</td>
                    <td>clockid_t which_clock</td>
                    <td>struct sigevent *timer_event_spec</td>
                    <td>timer_t * created_timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>223</td>
                    <td>timer_settime</td>

                    <td>DF</td>
                    <td>timer_t timer_id</td>
                    <td>int flags</td>
                    <td>const struct __kernel_itimerspec *new_setting</td>
                    <td>struct __kernel_itimerspec *old_setting</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>224</td>
                    <td>timer_gettime</td>

                    <td>E0</td>
                    <td>timer_t timer_id</td>
                    <td>struct __kernel_itimerspec *setting</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>225</td>
                    <td>timer_getoverrun</td>

                    <td>E1</td>
                    <td>timer_t timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>226</td>
                    <td>timer_delete</td>

                    <td>E2</td>
                    <td>timer_t timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>227</td>
                    <td>clock_settime</td>

                    <td>E3</td>
                    <td>clockid_t which_clock</td>
                    <td>const struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>228</td>
                    <td>clock_gettime</td>

                    <td>E4</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>229</td>
                    <td>clock_getres</td>

                    <td>E5</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>230</td>
                    <td>clock_nanosleep</td>

                    <td>E6</td>
                    <td>clockid_t which_clock</td>
                    <td>int flags</td>
                    <td>const struct __kernel_timespec *rqtp</td>
                    <td>struct __kernel_timespec *rmtp</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>231</td>
                    <td>exit_group</td>

                    <td>E7</td>
                    <td>int error_code</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>232</td>
                    <td>epoll_wait</td>

                    <td>E8</td>
                    <td>int epfd</td>
                    <td>struct epoll_event *events</td>
                    <td>int maxevents</td>
                    <td>int timeout</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>233</td>
                    <td>epoll_ctl</td>

                    <td>E9</td>
                    <td>int epfd</td>
                    <td>int op</td>
                    <td>int fd</td>
                    <td>struct epoll_event *event</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>tgkill</td>

                    <td>EA</td>
                    <td>pid_t tgid</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>235</td>
                    <td>utimes</td>

                    <td>EB</td>
                    <td>char *filename</td>
                    <td>struct timeval *utimes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>237</td>
                    <td>mbind</td>

                    <td>ED</td>
                    <td>unsigned long start</td>
                    <td>unsigned long len</td>
                    <td>unsigned long mode</td>
                    <td>const unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>unsigned flags</td>
                  </tr>
                  <tr>
                    <td>238</td>
                    <td>set_mempolicy</td>

                    <td>EE</td>
                    <td>int mode</td>
                    <td>const unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>239</td>
                    <td>get_mempolicy</td>

                    <td>EF</td>
                    <td>int *policy</td>
                    <td>unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>240</td>
                    <td>mq_open</td>

                    <td>F0</td>
                    <td>const char *name</td>
                    <td>int oflag</td>
                    <td>umode_t mode</td>
                    <td>struct mq_attr *attr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>241</td>
                    <td>mq_unlink</td>

                    <td>F1</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>242</td>
                    <td>mq_timedsend</td>

                    <td>F2</td>
                    <td>mqd_t mqdes</td>
                    <td>const char *msg_ptr</td>
                    <td>size_t msg_len</td>
                    <td>unsigned int msg_prio</td>
                    <td>const struct __kernel_timespec *abs_timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>243</td>
                    <td>mq_timedreceive</td>

                    <td>F3</td>
                    <td>mqd_t mqdes</td>
                    <td>char *msg_ptr</td>
                    <td>size_t msg_len</td>
                    <td>unsigned int *msg_prio</td>
                    <td>const struct __kernel_timespec *abs_timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>244</td>
                    <td>mq_notify</td>

                    <td>F4</td>
                    <td>mqd_t mqdes</td>
                    <td>const struct sigevent *notification</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>245</td>
                    <td>mq_getsetattr</td>

                    <td>F5</td>
                    <td>mqd_t mqdes</td>
                    <td>const struct mq_attr *mqstat</td>
                    <td>struct mq_attr *omqstat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>246</td>
                    <td>kexec_load</td>

                    <td>F6</td>
                    <td>unsigned long entry</td>
                    <td>unsigned long nr_segments</td>
                    <td>struct kexec_segment *segments</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>247</td>
                    <td>waitid</td>

                    <td>F7</td>
                    <td>int which</td>
                    <td>pid_t pid</td>
                    <td>struct siginfo *infop</td>
                    <td>int options</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>248</td>
                    <td>add_key</td>

                    <td>F8</td>
                    <td>const char *_type</td>
                    <td>const char *_description</td>
                    <td>const void *_payload</td>
                    <td>size_t plen</td>
                    <td>key_serial_t destringid</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>249</td>
                    <td>request_key</td>

                    <td>F9</td>
                    <td>const char *_type</td>
                    <td>const char *_description</td>
                    <td>const char *_callout_info</td>
                    <td>key_serial_t destringid</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>250</td>
                    <td>keyctl</td>

                    <td>FA</td>
                    <td>int cmd</td>
                    <td>unsigned long arg2</td>
                    <td>unsigned long arg3</td>
                    <td>unsigned long arg4</td>
                    <td>unsigned long arg5</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>251</td>
                    <td>ioprio_set</td>

                    <td>FB</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>int ioprio</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>252</td>
                    <td>ioprio_get</td>

                    <td>FC</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>253</td>
                    <td>inotify_init</td>

                    <td>FD</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>254</td>
                    <td>inotify_add_watch</td>

                    <td>FE</td>
                    <td>int fd</td>
                    <td>const char *path</td>
                    <td>u32 mask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>255</td>
                    <td>inotify_rm_watch</td>

                    <td>FF</td>
                    <td>int fd</td>
                    <td>__s32 wd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>256</td>
                    <td>migrate_pages</td>

                    <td>100</td>
                    <td>pid_t pid</td>
                    <td>unsigned long maxnode</td>
                    <td>const unsigned long *from</td>
                    <td>const unsigned long *to</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>257</td>
                    <td>openat</td>

                    <td>101</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>int flags</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>258</td>
                    <td>mkdirat</td>

                    <td>102</td>
                    <td>int dfd</td>
                    <td>const char * pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>259</td>
                    <td>mknodat</td>

                    <td>103</td>
                    <td>int dfd</td>
                    <td>const char * filename</td>
                    <td>umode_t mode</td>
                    <td>unsigned dev</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>260</td>
                    <td>fchownat</td>

                    <td>104</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>int flag</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>261</td>
                    <td>futimesat</td>

                    <td>105</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct timeval *utimes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>262</td>
                    <td>newfstatat</td>

                    <td>106</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct stat *statbuf</td>
                    <td>int flag</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>263</td>
                    <td>unlinkat</td>

                    <td>107</td>
                    <td>int dfd</td>
                    <td>const char * pathname</td>
                    <td>int flag</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>264</td>
                    <td>renameat</td>

                    <td>108</td>
                    <td>int olddfd</td>
                    <td>const char * oldname</td>
                    <td>int newdfd</td>
                    <td>const char * newname</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>265</td>
                    <td>linkat</td>

                    <td>109</td>
                    <td>int olddfd</td>
                    <td>const char *oldname</td>
                    <td>int newdfd</td>
                    <td>const char *newname</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>266</td>
                    <td>symlinkat</td>

                    <td>10A</td>
                    <td>const char * oldname</td>
                    <td>int newdfd</td>
                    <td>const char * newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>267</td>
                    <td>readlinkat</td>

                    <td>10B</td>
                    <td>int dfd</td>
                    <td>const char *path</td>
                    <td>char *buf</td>
                    <td>int bufsiz</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>268</td>
                    <td>fchmodat</td>

                    <td>10C</td>
                    <td>int dfd</td>
                    <td>const char * filename</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>269</td>
                    <td>faccessat</td>

                    <td>10D</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>int mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>270</td>
                    <td>pselect6</td>

                    <td>10E</td>
                    <td>int</td>
                    <td>fd_set *</td>
                    <td>fd_set *</td>
                    <td>fd_set *</td>
                    <td>struct __kernel_timespec *</td>
                    <td>void *</td>
                  </tr>
                  <tr>
                    <td>271</td>
                    <td>ppoll</td>

                    <td>10F</td>
                    <td>struct pollfd *</td>
                    <td>unsigned int</td>
                    <td>struct __kernel_timespec *</td>
                    <td>const sigset_t *</td>
                    <td>size_t</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>272</td>
                    <td>unshare</td>

                    <td>110</td>
                    <td>unsigned long unshare_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>273</td>
                    <td>set_robust_list</td>

                    <td>111</td>
                    <td>struct robust_list_head *head</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>274</td>
                    <td>get_robust_list</td>

                    <td>112</td>
                    <td>int pid</td>
                    <td>struct robust_list_head * *head_ptr</td>
                    <td>size_t *len_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>275</td>
                    <td>splice</td>

                    <td>113</td>
                    <td>int fd_in</td>
                    <td>loff_t *off_in</td>
                    <td>int fd_out</td>
                    <td>loff_t *off_out</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                  </tr>
                  <tr>
                    <td>276</td>
                    <td>tee</td>

                    <td>114</td>
                    <td>int fdin</td>
                    <td>int fdout</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>277</td>
                    <td>sync_file_range</td>

                    <td>115</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>loff_t nbytes</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>278</td>
                    <td>vmsplice</td>

                    <td>116</td>
                    <td>int fd</td>
                    <td>const struct iovec *iov</td>
                    <td>unsigned long nr_segs</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>279</td>
                    <td>move_pages</td>

                    <td>117</td>
                    <td>pid_t pid</td>
                    <td>unsigned long nr_pages</td>
                    <td>const void * *pages</td>
                    <td>const int *nodes</td>
                    <td>int *status</td>
                    <td>int flags</td>
                  </tr>
                  <tr>
                    <td>280</td>
                    <td>utimensat</td>

                    <td>118</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct __kernel_timespec *utimes</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>281</td>
                    <td>epoll_pwait</td>

                    <td>119</td>
                    <td>int epfd</td>
                    <td>struct epoll_event *events</td>
                    <td>int maxevents</td>
                    <td>int timeout</td>
                    <td>const sigset_t *sigmask</td>
                    <td>size_t sigsetsize</td>
                  </tr>
                  <tr>
                    <td>282</td>
                    <td>signalfd</td>

                    <td>11A</td>
                    <td>int ufd</td>
                    <td>sigset_t *user_mask</td>
                    <td>size_t sizemask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>283</td>
                    <td>timerfd_create</td>

                    <td>11B</td>
                    <td>int clockid</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>284</td>
                    <td>eventfd</td>

                    <td>11C</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>285</td>
                    <td>fallocate</td>

                    <td>11D</td>
                    <td>int fd</td>
                    <td>int mode</td>
                    <td>loff_t offset</td>
                    <td>loff_t len</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>286</td>
                    <td>timerfd_settime</td>

                    <td>11E</td>
                    <td>int ufd</td>
                    <td>int flags</td>
                    <td>const struct __kernel_itimerspec *utmr</td>
                    <td>struct __kernel_itimerspec *otmr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>287</td>
                    <td>timerfd_gettime</td>

                    <td>11F</td>
                    <td>int ufd</td>
                    <td>struct __kernel_itimerspec *otmr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>288</td>
                    <td>accept4</td>

                    <td>120</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>289</td>
                    <td>signalfd4</td>

                    <td>121</td>
                    <td>int ufd</td>
                    <td>sigset_t *user_mask</td>
                    <td>size_t sizemask</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>290</td>
                    <td>eventfd2</td>

                    <td>122</td>
                    <td>unsigned int count</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>291</td>
                    <td>epoll_create1</td>

                    <td>123</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>292</td>
                    <td>dup3</td>

                    <td>124</td>
                    <td>unsigned int oldfd</td>
                    <td>unsigned int newfd</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>293</td>
                    <td>pipe2</td>

                    <td>125</td>
                    <td>int *fildes</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>294</td>
                    <td>inotify_init1</td>

                    <td>126</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>295</td>
                    <td>preadv</td>

                    <td>127</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>296</td>
                    <td>pwritev</td>

                    <td>128</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>297</td>
                    <td>rt_tgsigqueueinfo</td>

                    <td>129</td>
                    <td>pid_t tgid</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>siginfo_t *uinfo</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>298</td>
                    <td>perf_event_open</td>

                    <td>12A</td>
                    <td>struct perf_event_attr *attr_uptr</td>
                    <td>pid_t pid</td>
                    <td>int cpu</td>
                    <td>int group_fd</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>299</td>
                    <td>recvmmsg</td>

                    <td>12B</td>
                    <td>int fd</td>
                    <td>struct mmsghdr *msg</td>
                    <td>unsigned int vlen</td>
                    <td>unsigned flags</td>
                    <td>struct __kernel_timespec *timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>fanotify_init</td>

                    <td>12C</td>
                    <td>unsigned int flags</td>
                    <td>unsigned int event_f_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>301</td>
                    <td>fanotify_mark</td>

                    <td>12D</td>
                    <td>int fanotify_fd</td>
                    <td>unsigned int flags</td>
                    <td>u64 mask</td>
                    <td>int fd</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>302</td>
                    <td>prlimit64</td>

                    <td>12E</td>
                    <td>pid_t pid</td>
                    <td>unsigned int resource</td>
                    <td>const struct rlimit64 *new_rlim</td>
                    <td>struct rlimit64 *old_rlim</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>303</td>
                    <td>name_to_handle_at</td>

                    <td>12F</td>
                    <td>int dfd</td>
                    <td>const char *name</td>
                    <td>struct file_handle *handle</td>
                    <td>int *mnt_id</td>
                    <td>int flag</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>304</td>
                    <td>open_by_handle_at</td>

                    <td>130</td>
                    <td>int mountdirfd</td>
                    <td>struct file_handle *handle</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>305</td>
                    <td>clock_adjtime</td>

                    <td>131</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timex *tx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>306</td>
                    <td>syncfs</td>

                    <td>132</td>
                    <td>int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>307</td>
                    <td>sendmmsg</td>

                    <td>133</td>
                    <td>int fd</td>
                    <td>struct mmsghdr *msg</td>
                    <td>unsigned int vlen</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>308</td>
                    <td>setns</td>

                    <td>134</td>
                    <td>int fd</td>
                    <td>int nstype</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>309</td>
                    <td>getcpu</td>

                    <td>135</td>
                    <td>unsigned *cpu</td>
                    <td>unsigned *node</td>
                    <td>struct getcpu_cache *cache</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>310</td>
                    <td>process_vm_readv</td>

                    <td>136</td>
                    <td>pid_t pid</td>
                    <td>const struct iovec *lvec</td>
                    <td>unsigned long liovcnt</td>
                    <td>const struct iovec *rvec</td>
                    <td>unsigned long riovcnt</td>
                    <td>unsigned long flags</td>
                  </tr>
                  <tr>
                    <td>311</td>
                    <td>process_vm_writev</td>

                    <td>137</td>
                    <td>pid_t pid</td>
                    <td>const struct iovec *lvec</td>
                    <td>unsigned long liovcnt</td>
                    <td>const struct iovec *rvec</td>
                    <td>unsigned long riovcnt</td>
                    <td>unsigned long flags</td>
                  </tr>
                  <tr>
                    <td>312</td>
                    <td>kcmp</td>

                    <td>138</td>
                    <td>pid_t pid1</td>
                    <td>pid_t pid2</td>
                    <td>int type</td>
                    <td>unsigned long idx1</td>
                    <td>unsigned long idx2</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>313</td>
                    <td>finit_module</td>

                    <td>139</td>
                    <td>int fd</td>
                    <td>const char *uargs</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>314</td>
                    <td>sched_setattr</td>

                    <td>13A</td>
                    <td>pid_t pid</td>
                    <td>struct sched_attr *attr</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>315</td>
                    <td>sched_getattr</td>

                    <td>13B</td>
                    <td>pid_t pid</td>
                    <td>struct sched_attr *attr</td>
                    <td>unsigned int size</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>316</td>
                    <td>renameat2</td>

                    <td>13C</td>
                    <td>int olddfd</td>
                    <td>const char *oldname</td>
                    <td>int newdfd</td>
                    <td>const char *newname</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>317</td>
                    <td>seccomp</td>

                    <td>13D</td>
                    <td>unsigned int op</td>
                    <td>unsigned int flags</td>
                    <td>void *uargs</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>318</td>
                    <td>getrandom</td>

                    <td>13E</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>319</td>
                    <td>memfd_create</td>

                    <td>13F</td>
                    <td>const char *uname_ptr</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>320</td>
                    <td>kexec_file_load</td>

                    <td>140</td>
                    <td>int kernel_fd</td>
                    <td>int initrd_fd</td>
                    <td>unsigned long cmdline_len</td>
                    <td>const char *cmdline_ptr</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>321</td>
                    <td>bpf</td>

                    <td>141</td>
                    <td>int cmd</td>
                    <td>union bpf_attr *attr</td>
                    <td>unsigned int size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>322</td>
                    <td>execveat</td>

                    <td>142</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>const char *const *argv</td>
                    <td>const char *const *envp</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>323</td>
                    <td>userfaultfd</td>

                    <td>143</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>324</td>
                    <td>membarrier</td>

                    <td>144</td>
                    <td>int cmd</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>325</td>
                    <td>mlock2</td>

                    <td>145</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>326</td>
                    <td>copy_file_range</td>

                    <td>146</td>
                    <td>int fd_in</td>
                    <td>loff_t *off_in</td>
                    <td>int fd_out</td>
                    <td>loff_t *off_out</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                  </tr>
                  <tr>
                    <td>327</td>
                    <td>preadv2</td>

                    <td>147</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>rwf_t flags</td>
                  </tr>
                  <tr>
                    <td>328</td>
                    <td>pwritev2</td>

                    <td>148</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>rwf_t flags</td>
                  </tr>
                  <tr>
                    <td>329</td>
                    <td>pkey_mprotect</td>

                    <td>149</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned long prot</td>
                    <td>int pkey</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>330</td>
                    <td>pkey_alloc</td>

                    <td>14A</td>
                    <td>unsigned long flags</td>
                    <td>unsigned long init_val</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>331</td>
                    <td>pkey_free</td>

                    <td>14B</td>
                    <td>int pkey</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>332</td>
                    <td>statx</td>

                    <td>14C</td>
                    <td>int dfd</td>
                    <td>const char *path</td>
                    <td>unsigned flags</td>
                    <td>unsigned mask</td>
                    <td>struct statx *buffer</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BlogCard>

          <BlogCard heading="x86 Syscalls Table">
            <div className={`${blogStyles.tableDiv} ${blogStyles.altTableDiv}`}>
              <table className={blogStyles.altTable}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>SYSCALL NAME</th>
                    <th>EAX</th>
                    <th>EBX</th>
                    <th>ECX</th>
                    <th>EDX</th>
                    <th>ESI</th>
                    <th>EDI</th>
                    <th>EBP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>restart_syscall</td>

                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>exit</td>

                    <td>1</td>
                    <td>int error_code</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>fork</td>

                    <td>2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>read</td>

                    <td>3</td>
                    <td>unsigned int fd</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>write</td>

                    <td>4</td>
                    <td>unsigned int fd</td>
                    <td>const char *buf</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>open</td>

                    <td>5</td>
                    <td>const char *filename</td>
                    <td>int flags</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>close</td>

                    <td>6</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>waitpid</td>

                    <td>7</td>
                    <td>pid_t pid</td>
                    <td>int *stat_addr</td>
                    <td>int options</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>creat</td>

                    <td>8</td>
                    <td>const char *pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>link</td>

                    <td>9</td>
                    <td>const char *oldname</td>
                    <td>const char *newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>unlink</td>

                    <td>A</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>execve</td>

                    <td>B</td>
                    <td>const char *filename</td>
                    <td>const char *const *argv</td>
                    <td>const char *const *envp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>chdir</td>

                    <td>C</td>
                    <td>const char *filename</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>time</td>

                    <td>D</td>
                    <td>time_t *tloc</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>mknod</td>

                    <td>E</td>
                    <td>const char *filename</td>
                    <td>umode_t mode</td>
                    <td>unsigned dev</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>chmod</td>

                    <td>F</td>
                    <td>const char *filename</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>lchown</td>

                    <td>10</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>break</td>

                    <td>11</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>oldstat</td>

                    <td>12</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>lseek</td>

                    <td>13</td>
                    <td>unsigned int fd</td>
                    <td>off_t offset</td>
                    <td>unsigned int whence</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>getpid</td>

                    <td>14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>mount</td>

                    <td>15</td>
                    <td>char *dev_name</td>
                    <td>char *dir_name</td>
                    <td>char *type</td>
                    <td>unsigned long flags</td>
                    <td>void *data</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>umount</td>

                    <td>16</td>
                    <td>char *name</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>setuid</td>

                    <td>17</td>
                    <td>uid_t uid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>getuid</td>

                    <td>18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>stime</td>

                    <td>19</td>
                    <td>time_t *tptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>ptrace</td>

                    <td>1A</td>
                    <td>long request</td>
                    <td>long pid</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long data</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>alarm</td>

                    <td>1B</td>
                    <td>unsigned int seconds</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>oldfstat</td>

                    <td>1C</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>pause</td>

                    <td>1D</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>utime</td>

                    <td>1E</td>
                    <td>char *filename</td>
                    <td>struct utimbuf *times</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>stty</td>

                    <td>1F</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>gtty</td>

                    <td>20</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>access</td>

                    <td>21</td>
                    <td>const char *filename</td>
                    <td>int mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>nice</td>

                    <td>22</td>
                    <td>int increment</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>ftime</td>

                    <td>23</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>sync</td>

                    <td>24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>kill</td>

                    <td>25</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>rename</td>

                    <td>26</td>
                    <td>const char *oldname</td>
                    <td>const char *newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>mkdir</td>

                    <td>27</td>
                    <td>const char *pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>rmdir</td>

                    <td>28</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>dup</td>

                    <td>29</td>
                    <td>unsigned int fildes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>pipe</td>

                    <td>2A</td>
                    <td>int *fildes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>times</td>

                    <td>2B</td>
                    <td>struct tms *tbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>prof</td>

                    <td>2C</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>brk</td>

                    <td>2D</td>
                    <td>unsigned long brk</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>setgid</td>

                    <td>2E</td>
                    <td>gid_t gid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>getgid</td>

                    <td>2F</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>signal</td>

                    <td>30</td>
                    <td>int sig</td>
                    <td>__sighandler_t handler</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>geteuid</td>

                    <td>31</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>getegid</td>

                    <td>32</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>acct</td>

                    <td>33</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>umount2</td>

                    <td>34</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>lock</td>

                    <td>35</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>ioctl</td>

                    <td>36</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>fcntl</td>

                    <td>37</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>56</td>
                    <td>mpx</td>

                    <td>38</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>setpgid</td>

                    <td>39</td>
                    <td>pid_t pid</td>
                    <td>pid_t pgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>ulimit</td>

                    <td>3A</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>oldolduname</td>

                    <td>3B</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>umask</td>

                    <td>3C</td>
                    <td>int mask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>61</td>
                    <td>chroot</td>

                    <td>3D</td>
                    <td>const char *filename</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>ustat</td>

                    <td>3E</td>
                    <td>unsigned dev</td>
                    <td>struct ustat *ubuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>dup2</td>

                    <td>3F</td>
                    <td>unsigned int oldfd</td>
                    <td>unsigned int newfd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>getppid</td>

                    <td>40</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>getpgrp</td>

                    <td>41</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>setsid</td>

                    <td>42</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>sigaction</td>

                    <td>43</td>
                    <td>int</td>
                    <td>const struct old_sigaction *</td>
                    <td>struct old_sigaction *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>sgetmask</td>

                    <td>44</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>ssetmask</td>

                    <td>45</td>
                    <td>int newmask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>setreuid</td>

                    <td>46</td>
                    <td>uid_t ruid</td>
                    <td>uid_t euid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>setregid</td>

                    <td>47</td>
                    <td>gid_t rgid</td>
                    <td>gid_t egid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>sigsuspend</td>

                    <td>48</td>
                    <td>int unused1</td>
                    <td>int unused2</td>
                    <td>old_sigset_t mask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>sigpending</td>

                    <td>49</td>
                    <td>old_sigset_t *uset</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>74</td>
                    <td>sethostname</td>

                    <td>4A</td>
                    <td>char *name</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>75</td>
                    <td>setrlimit</td>

                    <td>4B</td>
                    <td>unsigned int resource</td>
                    <td>struct rlimit *rlim</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>76</td>
                    <td>getrlimit</td>

                    <td>4C</td>
                    <td>unsigned int resource</td>
                    <td>struct rlimit *rlim</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>77</td>
                    <td>getrusage</td>

                    <td>4D</td>
                    <td>int who</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>78</td>
                    <td>gettimeofday</td>

                    <td>4E</td>
                    <td>struct timeval *tv</td>
                    <td>struct timezone *tz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>79</td>
                    <td>settimeofday</td>

                    <td>4F</td>
                    <td>struct timeval *tv</td>
                    <td>struct timezone *tz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>getgroups</td>

                    <td>50</td>
                    <td>int gidsetsize</td>
                    <td>gid_t *grouplist</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>81</td>
                    <td>setgroups</td>

                    <td>51</td>
                    <td>int gidsetsize</td>
                    <td>gid_t *grouplist</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>82</td>
                    <td>select</td>

                    <td>52</td>
                    <td>int n</td>
                    <td>fd_set *inp</td>
                    <td>fd_set *outp</td>
                    <td>fd_set *exp</td>
                    <td>struct timeval *tvp</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>83</td>
                    <td>symlink</td>

                    <td>53</td>
                    <td>const char *old</td>
                    <td>const char *new</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>84</td>
                    <td>oldlstat</td>

                    <td>54</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>85</td>
                    <td>readlink</td>

                    <td>55</td>
                    <td>const char *path</td>
                    <td>char *buf</td>
                    <td>int bufsiz</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>86</td>
                    <td>uselib</td>

                    <td>56</td>
                    <td>const char *library</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>87</td>
                    <td>swapon</td>

                    <td>57</td>
                    <td>const char *specialfile</td>
                    <td>int swap_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>88</td>
                    <td>reboot</td>

                    <td>58</td>
                    <td>int magic1</td>
                    <td>int magic2</td>
                    <td>unsigned int cmd</td>
                    <td>void *arg</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>89</td>
                    <td>readdir</td>

                    <td>59</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>mmap</td>

                    <td>5A</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>91</td>
                    <td>munmap</td>

                    <td>5B</td>
                    <td>unsigned long addr</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>92</td>
                    <td>truncate</td>

                    <td>5C</td>
                    <td>const char *path</td>
                    <td>long length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>93</td>
                    <td>ftruncate</td>

                    <td>5D</td>
                    <td>unsigned int fd</td>
                    <td>unsigned long length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>94</td>
                    <td>fchmod</td>

                    <td>5E</td>
                    <td>unsigned int fd</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>95</td>
                    <td>fchown</td>

                    <td>5F</td>
                    <td>unsigned int fd</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>96</td>
                    <td>getpriority</td>

                    <td>60</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>97</td>
                    <td>setpriority</td>

                    <td>61</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>int niceval</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>98</td>
                    <td>profil</td>

                    <td>62</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>99</td>
                    <td>statfs</td>

                    <td>63</td>
                    <td>const char * path</td>
                    <td>struct statfs *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>fstatfs</td>

                    <td>64</td>
                    <td>unsigned int fd</td>
                    <td>struct statfs *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>101</td>
                    <td>ioperm</td>

                    <td>65</td>
                    <td>unsigned long from</td>
                    <td>unsigned long num</td>
                    <td>int on</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>socketcall</td>

                    <td>66</td>
                    <td>int call</td>
                    <td>unsigned long *args</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>syslog</td>

                    <td>67</td>
                    <td>int type</td>
                    <td>char *buf</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>104</td>
                    <td>setitimer</td>

                    <td>68</td>
                    <td>int which</td>
                    <td>struct itimerval *value</td>
                    <td>struct itimerval *ovalue</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>105</td>
                    <td>getitimer</td>

                    <td>69</td>
                    <td>int which</td>
                    <td>struct itimerval *value</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>106</td>
                    <td>stat</td>

                    <td>6A</td>
                    <td>const char *filename</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>107</td>
                    <td>lstat</td>

                    <td>6B</td>
                    <td>const char *filename</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>108</td>
                    <td>fstat</td>

                    <td>6C</td>
                    <td>unsigned int fd</td>
                    <td>struct __old_kernel_stat *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>olduname</td>

                    <td>6D</td>
                    <td>struct oldold_utsname *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>110</td>
                    <td>iopl</td>

                    <td>6E</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>vhangup</td>

                    <td>6F</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>112</td>
                    <td>idle</td>

                    <td>70</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>113</td>
                    <td>vm86old</td>

                    <td>71</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>114</td>
                    <td>wait4</td>

                    <td>72</td>
                    <td>pid_t pid</td>
                    <td>int *stat_addr</td>
                    <td>int options</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>115</td>
                    <td>swapoff</td>

                    <td>73</td>
                    <td>const char *specialfile</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>116</td>
                    <td>sysinfo</td>

                    <td>74</td>
                    <td>struct sysinfo *info</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>117</td>
                    <td>ipc</td>

                    <td>75</td>
                    <td>unsigned int call</td>
                    <td>int first</td>
                    <td>unsigned long second</td>
                    <td>unsigned long third</td>
                    <td>void *ptr</td>
                    <td>long fifth</td>
                  </tr>
                  <tr>
                    <td>118</td>
                    <td>fsync</td>

                    <td>76</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>119</td>
                    <td>sigreturn</td>

                    <td>77</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>120</td>
                    <td>clone</td>

                    <td>78</td>
                    <td>unsigned long</td>
                    <td>unsigned long</td>
                    <td>int *</td>
                    <td>int *</td>
                    <td>unsigned long</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>121</td>
                    <td>setdomainname</td>

                    <td>79</td>
                    <td>char *name</td>
                    <td>int len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>122</td>
                    <td>uname</td>

                    <td>7A</td>
                    <td>struct old_utsname *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>modify_ldt</td>

                    <td>7B</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>124</td>
                    <td>adjtimex</td>

                    <td>7C</td>
                    <td>struct __kernel_timex *txc_p</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>125</td>
                    <td>mprotect</td>

                    <td>7D</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned long prot</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>126</td>
                    <td>sigprocmask</td>

                    <td>7E</td>
                    <td>int how</td>
                    <td>old_sigset_t *set</td>
                    <td>old_sigset_t *oset</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>127</td>
                    <td>create_module</td>

                    <td>7F</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>128</td>
                    <td>init_module</td>

                    <td>80</td>
                    <td>void *umod</td>
                    <td>unsigned long len</td>
                    <td>const char *uargs</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>129</td>
                    <td>delete_module</td>

                    <td>81</td>
                    <td>const char *name_user</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>130</td>
                    <td>get_kernel_syms</td>

                    <td>82</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>131</td>
                    <td>quotactl</td>

                    <td>83</td>
                    <td>unsigned int cmd</td>
                    <td>const char *special</td>
                    <td>qid_t id</td>
                    <td>void *addr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>132</td>
                    <td>getpgid</td>

                    <td>84</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>133</td>
                    <td>fchdir</td>

                    <td>85</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>134</td>
                    <td>bdflush</td>

                    <td>86</td>
                    <td>int func</td>
                    <td>long data</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>135</td>
                    <td>sysfs</td>

                    <td>87</td>
                    <td>int option</td>
                    <td>unsigned long arg1</td>
                    <td>unsigned long arg2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>136</td>
                    <td>personality</td>

                    <td>88</td>
                    <td>unsigned int personality</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>137</td>
                    <td>afs_syscall</td>

                    <td>89</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>138</td>
                    <td>setfsuid</td>

                    <td>8A</td>
                    <td>uid_t uid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>139</td>
                    <td>setfsgid</td>

                    <td>8B</td>
                    <td>gid_t gid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>140</td>
                    <td>_llseek</td>

                    <td>8C</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>141</td>
                    <td>getdents</td>

                    <td>8D</td>
                    <td>unsigned int fd</td>
                    <td>struct linux_dirent *dirent</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>142</td>
                    <td>_newselect</td>

                    <td>8E</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>143</td>
                    <td>flock</td>

                    <td>8F</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>144</td>
                    <td>msync</td>

                    <td>90</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>145</td>
                    <td>readv</td>

                    <td>91</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>146</td>
                    <td>writev</td>

                    <td>92</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>147</td>
                    <td>getsid</td>

                    <td>93</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>148</td>
                    <td>fdatasync</td>

                    <td>94</td>
                    <td>unsigned int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>149</td>
                    <td>_sysctl</td>

                    <td>95</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>150</td>
                    <td>mlock</td>

                    <td>96</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>151</td>
                    <td>munlock</td>

                    <td>97</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>152</td>
                    <td>mlockall</td>

                    <td>98</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>153</td>
                    <td>munlockall</td>

                    <td>99</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>154</td>
                    <td>sched_setparam</td>

                    <td>9A</td>
                    <td>pid_t pid</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>155</td>
                    <td>sched_getparam</td>

                    <td>9B</td>
                    <td>pid_t pid</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>156</td>
                    <td>sched_setscheduler</td>

                    <td>9C</td>
                    <td>pid_t pid</td>
                    <td>int policy</td>
                    <td>struct sched_param *param</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>157</td>
                    <td>sched_getscheduler</td>

                    <td>9D</td>
                    <td>pid_t pid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>158</td>
                    <td>sched_yield</td>

                    <td>9E</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>159</td>
                    <td>sched_get_priority_max</td>

                    <td>9F</td>
                    <td>int policy</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>160</td>
                    <td>sched_get_priority_min</td>

                    <td>A0</td>
                    <td>int policy</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>161</td>
                    <td>sched_rr_get_interval</td>

                    <td>A1</td>
                    <td>pid_t pid</td>
                    <td>struct __kernel_timespec *interval</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>162</td>
                    <td>nanosleep</td>

                    <td>A2</td>
                    <td>struct __kernel_timespec *rqtp</td>
                    <td>struct __kernel_timespec *rmtp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>163</td>
                    <td>mremap</td>

                    <td>A3</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long old_len</td>
                    <td>unsigned long new_len</td>
                    <td>unsigned long flags</td>
                    <td>unsigned long new_addr</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>164</td>
                    <td>setresuid</td>

                    <td>A4</td>
                    <td>uid_t ruid</td>
                    <td>uid_t euid</td>
                    <td>uid_t suid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>165</td>
                    <td>getresuid</td>

                    <td>A5</td>
                    <td>uid_t *ruid</td>
                    <td>uid_t *euid</td>
                    <td>uid_t *suid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>166</td>
                    <td>vm86</td>

                    <td>A6</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>167</td>
                    <td>query_module</td>

                    <td>A7</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>168</td>
                    <td>poll</td>

                    <td>A8</td>
                    <td>struct pollfd *ufds</td>
                    <td>unsigned int nfds</td>
                    <td>int timeout</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>169</td>
                    <td>nfsservctl</td>

                    <td>A9</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>170</td>
                    <td>setresgid</td>

                    <td>AA</td>
                    <td>gid_t rgid</td>
                    <td>gid_t egid</td>
                    <td>gid_t sgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>171</td>
                    <td>getresgid</td>

                    <td>AB</td>
                    <td>gid_t *rgid</td>
                    <td>gid_t *egid</td>
                    <td>gid_t *sgid</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>172</td>
                    <td>prctl</td>

                    <td>AC</td>
                    <td>int option</td>
                    <td>unsigned long arg2</td>
                    <td>unsigned long arg3</td>
                    <td>unsigned long arg4</td>
                    <td>unsigned long arg5</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>173</td>
                    <td>rt_sigreturn</td>

                    <td>AD</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>174</td>
                    <td>rt_sigaction</td>

                    <td>AE</td>
                    <td>int</td>
                    <td>const struct sigaction *</td>
                    <td>struct sigaction *</td>
                    <td>size_t</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>rt_sigprocmask</td>

                    <td>AF</td>
                    <td>int how</td>
                    <td>sigset_t *set</td>
                    <td>sigset_t *oset</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>176</td>
                    <td>rt_sigpending</td>

                    <td>B0</td>
                    <td>sigset_t *set</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>177</td>
                    <td>rt_sigtimedwait</td>

                    <td>B1</td>
                    <td>const sigset_t *uthese</td>
                    <td>siginfo_t *uinfo</td>
                    <td>const struct __kernel_timespec *uts</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>178</td>
                    <td>rt_sigqueueinfo</td>

                    <td>B2</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>siginfo_t *uinfo</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>179</td>
                    <td>rt_sigsuspend</td>

                    <td>B3</td>
                    <td>sigset_t *unewset</td>
                    <td>size_t sigsetsize</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>180</td>
                    <td>pread64</td>

                    <td>B4</td>
                    <td>unsigned int fd</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>loff_t pos</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>181</td>
                    <td>pwrite64</td>

                    <td>B5</td>
                    <td>unsigned int fd</td>
                    <td>const char *buf</td>
                    <td>size_t count</td>
                    <td>loff_t pos</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>182</td>
                    <td>chown</td>

                    <td>B6</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>183</td>
                    <td>getcwd</td>

                    <td>B7</td>
                    <td>char *buf</td>
                    <td>unsigned long size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>184</td>
                    <td>capget</td>

                    <td>B8</td>
                    <td>cap_user_header_t header</td>
                    <td>cap_user_data_t dataptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>185</td>
                    <td>capset</td>

                    <td>B9</td>
                    <td>cap_user_header_t header</td>
                    <td>const cap_user_data_t data</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>186</td>
                    <td>sigaltstack</td>

                    <td>BA</td>
                    <td>const struct sigaltstack *uss</td>
                    <td>struct sigaltstack *uoss</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>187</td>
                    <td>sendfile</td>

                    <td>BB</td>
                    <td>int out_fd</td>
                    <td>int in_fd</td>
                    <td>off_t *offset</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>188</td>
                    <td>getpmsg</td>

                    <td>BC</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>189</td>
                    <td>putpmsg</td>

                    <td>BD</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>190</td>
                    <td>vfork</td>

                    <td>BE</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>191</td>
                    <td>ugetrlimit</td>

                    <td>BF</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>192</td>
                    <td>mmap2</td>

                    <td>C0</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>193</td>
                    <td>truncate64</td>

                    <td>C1</td>
                    <td>const char *path</td>
                    <td>loff_t length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>194</td>
                    <td>ftruncate64</td>

                    <td>C2</td>
                    <td>unsigned int fd</td>
                    <td>loff_t length</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>195</td>
                    <td>stat64</td>

                    <td>C3</td>
                    <td>const char *filename</td>
                    <td>struct stat64 *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>196</td>
                    <td>lstat64</td>

                    <td>C4</td>
                    <td>const char *filename</td>
                    <td>struct stat64 *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>197</td>
                    <td>fstat64</td>

                    <td>C5</td>
                    <td>unsigned long fd</td>
                    <td>struct stat64 *statbuf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>198</td>
                    <td>lchown32</td>

                    <td>C6</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>199</td>
                    <td>getuid32</td>

                    <td>C7</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>200</td>
                    <td>getgid32</td>

                    <td>C8</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>201</td>
                    <td>geteuid32</td>

                    <td>C9</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>202</td>
                    <td>getegid32</td>

                    <td>CA</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>203</td>
                    <td>setreuid32</td>

                    <td>CB</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>204</td>
                    <td>setregid32</td>

                    <td>CC</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>205</td>
                    <td>getgroups32</td>

                    <td>CD</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>206</td>
                    <td>setgroups32</td>

                    <td>CE</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>207</td>
                    <td>fchown32</td>

                    <td>CF</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>208</td>
                    <td>setresuid32</td>

                    <td>D0</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>209</td>
                    <td>getresuid32</td>

                    <td>D1</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>210</td>
                    <td>setresgid32</td>

                    <td>D2</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>211</td>
                    <td>getresgid32</td>

                    <td>D3</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>212</td>
                    <td>chown32</td>

                    <td>D4</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>213</td>
                    <td>setuid32</td>

                    <td>D5</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>214</td>
                    <td>setgid32</td>

                    <td>D6</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>215</td>
                    <td>setfsuid32</td>

                    <td>D7</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>216</td>
                    <td>setfsgid32</td>

                    <td>D8</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>217</td>
                    <td>pivot_root</td>

                    <td>D9</td>
                    <td>const char *new_root</td>
                    <td>const char *put_old</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>218</td>
                    <td>mincore</td>

                    <td>DA</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned char * vec</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>madvise</td>

                    <td>DB</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int behavior</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>220</td>
                    <td>getdents64</td>

                    <td>DC</td>
                    <td>unsigned int fd</td>
                    <td>struct linux_dirent64 *dirent</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>221</td>
                    <td>fcntl64</td>

                    <td>DD</td>
                    <td>unsigned int fd</td>
                    <td>unsigned int cmd</td>
                    <td>unsigned long arg</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>222</td>
                    <td>not implemented</td>
                    <td></td>
                    <td>DE</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>223</td>
                    <td>not implemented</td>
                    <td></td>
                    <td>DF</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>224</td>
                    <td>gettid</td>

                    <td>E0</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>225</td>
                    <td>readahead</td>

                    <td>E1</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>226</td>
                    <td>setxattr</td>

                    <td>E2</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>227</td>
                    <td>lsetxattr</td>

                    <td>E3</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>228</td>
                    <td>fsetxattr</td>

                    <td>E4</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>const void *value</td>
                    <td>size_t size</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>229</td>
                    <td>getxattr</td>

                    <td>E5</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>230</td>
                    <td>lgetxattr</td>

                    <td>E6</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>231</td>
                    <td>fgetxattr</td>

                    <td>E7</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>void *value</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>232</td>
                    <td>listxattr</td>

                    <td>E8</td>
                    <td>const char *path</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>233</td>
                    <td>llistxattr</td>

                    <td>E9</td>
                    <td>const char *path</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>234</td>
                    <td>flistxattr</td>

                    <td>EA</td>
                    <td>int fd</td>
                    <td>char *list</td>
                    <td>size_t size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>235</td>
                    <td>removexattr</td>

                    <td>EB</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>236</td>
                    <td>lremovexattr</td>

                    <td>EC</td>
                    <td>const char *path</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>237</td>
                    <td>fremovexattr</td>

                    <td>ED</td>
                    <td>int fd</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>238</td>
                    <td>tkill</td>

                    <td>EE</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>239</td>
                    <td>sendfile64</td>

                    <td>EF</td>
                    <td>int out_fd</td>
                    <td>int in_fd</td>
                    <td>loff_t *offset</td>
                    <td>size_t count</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>240</td>
                    <td>futex</td>

                    <td>F0</td>
                    <td>u32 *uaddr</td>
                    <td>int op</td>
                    <td>u32 val</td>
                    <td>struct __kernel_timespec *utime</td>
                    <td>u32 *uaddr2</td>
                    <td>u32 val3</td>
                  </tr>
                  <tr>
                    <td>241</td>
                    <td>sched_setaffinity</td>

                    <td>F1</td>
                    <td>pid_t pid</td>
                    <td>unsigned int len</td>
                    <td>unsigned long *user_mask_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>242</td>
                    <td>sched_getaffinity</td>

                    <td>F2</td>
                    <td>pid_t pid</td>
                    <td>unsigned int len</td>
                    <td>unsigned long *user_mask_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>243</td>
                    <td>set_thread_area</td>

                    <td>F3</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>244</td>
                    <td>get_thread_area</td>

                    <td>F4</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>245</td>
                    <td>io_setup</td>

                    <td>F5</td>
                    <td>unsigned nr_reqs</td>
                    <td>aio_context_t *ctx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>246</td>
                    <td>io_destroy</td>

                    <td>F6</td>
                    <td>aio_context_t ctx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>247</td>
                    <td>io_getevents</td>

                    <td>F7</td>
                    <td>aio_context_t ctx_id</td>
                    <td>long min_nr</td>
                    <td>long nr</td>
                    <td>struct io_event *events</td>
                    <td>struct __kernel_timespec *timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>248</td>
                    <td>io_submit</td>

                    <td>F8</td>
                    <td>aio_context_t</td>
                    <td>long</td>
                    <td>struct iocb * *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>249</td>
                    <td>io_cancel</td>

                    <td>F9</td>
                    <td>aio_context_t ctx_id</td>
                    <td>struct iocb *iocb</td>
                    <td>struct io_event *result</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>250</td>
                    <td>fadvise64</td>

                    <td>FA</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>size_t len</td>
                    <td>int advice</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>251</td>
                    <td>not implemented</td>
                    <td></td>
                    <td>FB</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>252</td>
                    <td>exit_group</td>

                    <td>FC</td>
                    <td>int error_code</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>253</td>
                    <td>lookup_dcookie</td>

                    <td>FD</td>
                    <td>u64 cookie64</td>
                    <td>char *buf</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>254</td>
                    <td>epoll_create</td>

                    <td>FE</td>
                    <td>int size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>255</td>
                    <td>epoll_ctl</td>

                    <td>FF</td>
                    <td>int epfd</td>
                    <td>int op</td>
                    <td>int fd</td>
                    <td>struct epoll_event *event</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>256</td>
                    <td>epoll_wait</td>

                    <td>100</td>
                    <td>int epfd</td>
                    <td>struct epoll_event *events</td>
                    <td>int maxevents</td>
                    <td>int timeout</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>257</td>
                    <td>remap_file_pages</td>

                    <td>101</td>
                    <td>unsigned long start</td>
                    <td>unsigned long size</td>
                    <td>unsigned long prot</td>
                    <td>unsigned long pgoff</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>258</td>
                    <td>set_tid_address</td>

                    <td>102</td>
                    <td>int *tidptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>259</td>
                    <td>timer_create</td>

                    <td>103</td>
                    <td>clockid_t which_clock</td>
                    <td>struct sigevent *timer_event_spec</td>
                    <td>timer_t * created_timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>260</td>
                    <td>timer_settime</td>

                    <td>104</td>
                    <td>timer_t timer_id</td>
                    <td>int flags</td>
                    <td>const struct __kernel_itimerspec *new_setting</td>
                    <td>struct __kernel_itimerspec *old_setting</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>261</td>
                    <td>timer_gettime</td>

                    <td>105</td>
                    <td>timer_t timer_id</td>
                    <td>struct __kernel_itimerspec *setting</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>262</td>
                    <td>timer_getoverrun</td>

                    <td>106</td>
                    <td>timer_t timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>263</td>
                    <td>timer_delete</td>

                    <td>107</td>
                    <td>timer_t timer_id</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>264</td>
                    <td>clock_settime</td>

                    <td>108</td>
                    <td>clockid_t which_clock</td>
                    <td>const struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>265</td>
                    <td>clock_gettime</td>

                    <td>109</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>266</td>
                    <td>clock_getres</td>

                    <td>10A</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timespec *tp</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>267</td>
                    <td>clock_nanosleep</td>

                    <td>10B</td>
                    <td>clockid_t which_clock</td>
                    <td>int flags</td>
                    <td>const struct __kernel_timespec *rqtp</td>
                    <td>struct __kernel_timespec *rmtp</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>268</td>
                    <td>statfs64</td>

                    <td>10C</td>
                    <td>const char *path</td>
                    <td>size_t sz</td>
                    <td>struct statfs64 *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>269</td>
                    <td>fstatfs64</td>

                    <td>10D</td>
                    <td>unsigned int fd</td>
                    <td>size_t sz</td>
                    <td>struct statfs64 *buf</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>270</td>
                    <td>tgkill</td>

                    <td>10E</td>
                    <td>pid_t tgid</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>271</td>
                    <td>utimes</td>

                    <td>10F</td>
                    <td>char *filename</td>
                    <td>struct timeval *utimes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>272</td>
                    <td>fadvise64_64</td>

                    <td>110</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>loff_t len</td>
                    <td>int advice</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>273</td>
                    <td>vserver</td>

                    <td>111</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>274</td>
                    <td>mbind</td>

                    <td>112</td>
                    <td>unsigned long start</td>
                    <td>unsigned long len</td>
                    <td>unsigned long mode</td>
                    <td>const unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>unsigned flags</td>
                  </tr>
                  <tr>
                    <td>275</td>
                    <td>get_mempolicy</td>

                    <td>113</td>
                    <td>int *policy</td>
                    <td>unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>unsigned long addr</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>276</td>
                    <td>set_mempolicy</td>

                    <td>114</td>
                    <td>int mode</td>
                    <td>const unsigned long *nmask</td>
                    <td>unsigned long maxnode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>277</td>
                    <td>mq_open</td>

                    <td>115</td>
                    <td>const char *name</td>
                    <td>int oflag</td>
                    <td>umode_t mode</td>
                    <td>struct mq_attr *attr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>278</td>
                    <td>mq_unlink</td>

                    <td>116</td>
                    <td>const char *name</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>279</td>
                    <td>mq_timedsend</td>

                    <td>117</td>
                    <td>mqd_t mqdes</td>
                    <td>const char *msg_ptr</td>
                    <td>size_t msg_len</td>
                    <td>unsigned int msg_prio</td>
                    <td>const struct __kernel_timespec *abs_timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>280</td>
                    <td>mq_timedreceive</td>

                    <td>118</td>
                    <td>mqd_t mqdes</td>
                    <td>char *msg_ptr</td>
                    <td>size_t msg_len</td>
                    <td>unsigned int *msg_prio</td>
                    <td>const struct __kernel_timespec *abs_timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>281</td>
                    <td>mq_notify</td>

                    <td>119</td>
                    <td>mqd_t mqdes</td>
                    <td>const struct sigevent *notification</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>282</td>
                    <td>mq_getsetattr</td>

                    <td>11A</td>
                    <td>mqd_t mqdes</td>
                    <td>const struct mq_attr *mqstat</td>
                    <td>struct mq_attr *omqstat</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>283</td>
                    <td>kexec_load</td>

                    <td>11B</td>
                    <td>unsigned long entry</td>
                    <td>unsigned long nr_segments</td>
                    <td>struct kexec_segment *segments</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>284</td>
                    <td>waitid</td>

                    <td>11C</td>
                    <td>int which</td>
                    <td>pid_t pid</td>
                    <td>struct siginfo *infop</td>
                    <td>int options</td>
                    <td>struct rusage *ru</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>285</td>
                    <td>not implemented</td>
                    <td></td>
                    <td>11D</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>286</td>
                    <td>add_key</td>

                    <td>11E</td>
                    <td>const char *_type</td>
                    <td>const char *_description</td>
                    <td>const void *_payload</td>
                    <td>size_t plen</td>
                    <td>key_serial_t destringid</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>287</td>
                    <td>request_key</td>

                    <td>11F</td>
                    <td>const char *_type</td>
                    <td>const char *_description</td>
                    <td>const char *_callout_info</td>
                    <td>key_serial_t destringid</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>288</td>
                    <td>keyctl</td>

                    <td>120</td>
                    <td>int cmd</td>
                    <td>unsigned long arg2</td>
                    <td>unsigned long arg3</td>
                    <td>unsigned long arg4</td>
                    <td>unsigned long arg5</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>289</td>
                    <td>ioprio_set</td>

                    <td>121</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>int ioprio</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>290</td>
                    <td>ioprio_get</td>

                    <td>122</td>
                    <td>int which</td>
                    <td>int who</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>291</td>
                    <td>inotify_init</td>

                    <td>123</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>292</td>
                    <td>inotify_add_watch</td>

                    <td>124</td>
                    <td>int fd</td>
                    <td>const char *path</td>
                    <td>u32 mask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>293</td>
                    <td>inotify_rm_watch</td>

                    <td>125</td>
                    <td>int fd</td>
                    <td>__s32 wd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>294</td>
                    <td>migrate_pages</td>

                    <td>126</td>
                    <td>pid_t pid</td>
                    <td>unsigned long maxnode</td>
                    <td>const unsigned long *from</td>
                    <td>const unsigned long *to</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>295</td>
                    <td>openat</td>

                    <td>127</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>int flags</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>296</td>
                    <td>mkdirat</td>

                    <td>128</td>
                    <td>int dfd</td>
                    <td>const char * pathname</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>297</td>
                    <td>mknodat</td>

                    <td>129</td>
                    <td>int dfd</td>
                    <td>const char * filename</td>
                    <td>umode_t mode</td>
                    <td>unsigned dev</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>298</td>
                    <td>fchownat</td>

                    <td>12A</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>uid_t user</td>
                    <td>gid_t group</td>
                    <td>int flag</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>299</td>
                    <td>futimesat</td>

                    <td>12B</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct timeval *utimes</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>300</td>
                    <td>fstatat64</td>

                    <td>12C</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct stat64 *statbuf</td>
                    <td>int flag</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>301</td>
                    <td>unlinkat</td>

                    <td>12D</td>
                    <td>int dfd</td>
                    <td>const char * pathname</td>
                    <td>int flag</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>302</td>
                    <td>renameat</td>

                    <td>12E</td>
                    <td>int olddfd</td>
                    <td>const char * oldname</td>
                    <td>int newdfd</td>
                    <td>const char * newname</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>303</td>
                    <td>linkat</td>

                    <td>12F</td>
                    <td>int olddfd</td>
                    <td>const char *oldname</td>
                    <td>int newdfd</td>
                    <td>const char *newname</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>304</td>
                    <td>symlinkat</td>

                    <td>130</td>
                    <td>const char * oldname</td>
                    <td>int newdfd</td>
                    <td>const char * newname</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>305</td>
                    <td>readlinkat</td>

                    <td>131</td>
                    <td>int dfd</td>
                    <td>const char *path</td>
                    <td>char *buf</td>
                    <td>int bufsiz</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>306</td>
                    <td>fchmodat</td>

                    <td>132</td>
                    <td>int dfd</td>
                    <td>const char * filename</td>
                    <td>umode_t mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>307</td>
                    <td>faccessat</td>

                    <td>133</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>int mode</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>308</td>
                    <td>pselect6</td>

                    <td>134</td>
                    <td>int</td>
                    <td>fd_set *</td>
                    <td>fd_set *</td>
                    <td>fd_set *</td>
                    <td>struct __kernel_timespec *</td>
                    <td>void *</td>
                  </tr>
                  <tr>
                    <td>309</td>
                    <td>ppoll</td>

                    <td>135</td>
                    <td>struct pollfd *</td>
                    <td>unsigned int</td>
                    <td>struct __kernel_timespec *</td>
                    <td>const sigset_t *</td>
                    <td>size_t</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>310</td>
                    <td>unshare</td>

                    <td>136</td>
                    <td>unsigned long unshare_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>311</td>
                    <td>set_robust_list</td>

                    <td>137</td>
                    <td>struct robust_list_head *head</td>
                    <td>size_t len</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>312</td>
                    <td>get_robust_list</td>

                    <td>138</td>
                    <td>int pid</td>
                    <td>struct robust_list_head * *head_ptr</td>
                    <td>size_t *len_ptr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>313</td>
                    <td>splice</td>

                    <td>139</td>
                    <td>int fd_in</td>
                    <td>loff_t *off_in</td>
                    <td>int fd_out</td>
                    <td>loff_t *off_out</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                  </tr>
                  <tr>
                    <td>314</td>
                    <td>sync_file_range</td>

                    <td>13A</td>
                    <td>int fd</td>
                    <td>loff_t offset</td>
                    <td>loff_t nbytes</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>315</td>
                    <td>tee</td>

                    <td>13B</td>
                    <td>int fdin</td>
                    <td>int fdout</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>316</td>
                    <td>vmsplice</td>

                    <td>13C</td>
                    <td>int fd</td>
                    <td>const struct iovec *iov</td>
                    <td>unsigned long nr_segs</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>317</td>
                    <td>move_pages</td>

                    <td>13D</td>
                    <td>pid_t pid</td>
                    <td>unsigned long nr_pages</td>
                    <td>const void * *pages</td>
                    <td>const int *nodes</td>
                    <td>int *status</td>
                    <td>int flags</td>
                  </tr>
                  <tr>
                    <td>318</td>
                    <td>getcpu</td>

                    <td>13E</td>
                    <td>unsigned *cpu</td>
                    <td>unsigned *node</td>
                    <td>struct getcpu_cache *cache</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>319</td>
                    <td>epoll_pwait</td>

                    <td>13F</td>
                    <td>int epfd</td>
                    <td>struct epoll_event *events</td>
                    <td>int maxevents</td>
                    <td>int timeout</td>
                    <td>const sigset_t *sigmask</td>
                    <td>size_t sigsetsize</td>
                  </tr>
                  <tr>
                    <td>320</td>
                    <td>utimensat</td>

                    <td>140</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>struct __kernel_timespec *utimes</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>321</td>
                    <td>signalfd</td>

                    <td>141</td>
                    <td>int ufd</td>
                    <td>sigset_t *user_mask</td>
                    <td>size_t sizemask</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>322</td>
                    <td>timerfd_create</td>

                    <td>142</td>
                    <td>int clockid</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>323</td>
                    <td>eventfd</td>

                    <td>143</td>
                    <td>unsigned int count</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>324</td>
                    <td>fallocate</td>

                    <td>144</td>
                    <td>int fd</td>
                    <td>int mode</td>
                    <td>loff_t offset</td>
                    <td>loff_t len</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>325</td>
                    <td>timerfd_settime</td>

                    <td>145</td>
                    <td>int ufd</td>
                    <td>int flags</td>
                    <td>const struct __kernel_itimerspec *utmr</td>
                    <td>struct __kernel_itimerspec *otmr</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>326</td>
                    <td>timerfd_gettime</td>

                    <td>146</td>
                    <td>int ufd</td>
                    <td>struct __kernel_itimerspec *otmr</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>327</td>
                    <td>signalfd4</td>

                    <td>147</td>
                    <td>int ufd</td>
                    <td>sigset_t *user_mask</td>
                    <td>size_t sizemask</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>328</td>
                    <td>eventfd2</td>

                    <td>148</td>
                    <td>unsigned int count</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>329</td>
                    <td>epoll_create1</td>

                    <td>149</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>330</td>
                    <td>dup3</td>

                    <td>14A</td>
                    <td>unsigned int oldfd</td>
                    <td>unsigned int newfd</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>331</td>
                    <td>pipe2</td>

                    <td>14B</td>
                    <td>int *fildes</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>332</td>
                    <td>inotify_init1</td>

                    <td>14C</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>333</td>
                    <td>preadv</td>

                    <td>14D</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>334</td>
                    <td>pwritev</td>

                    <td>14E</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>335</td>
                    <td>rt_tgsigqueueinfo</td>

                    <td>14F</td>
                    <td>pid_t tgid</td>
                    <td>pid_t pid</td>
                    <td>int sig</td>
                    <td>siginfo_t *uinfo</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>336</td>
                    <td>perf_event_open</td>

                    <td>150</td>
                    <td>struct perf_event_attr *attr_uptr</td>
                    <td>pid_t pid</td>
                    <td>int cpu</td>
                    <td>int group_fd</td>
                    <td>unsigned long flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>337</td>
                    <td>recvmmsg</td>

                    <td>151</td>
                    <td>int fd</td>
                    <td>struct mmsghdr *msg</td>
                    <td>unsigned int vlen</td>
                    <td>unsigned flags</td>
                    <td>struct __kernel_timespec *timeout</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>338</td>
                    <td>fanotify_init</td>

                    <td>152</td>
                    <td>unsigned int flags</td>
                    <td>unsigned int event_f_flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>339</td>
                    <td>fanotify_mark</td>

                    <td>153</td>
                    <td>int fanotify_fd</td>
                    <td>unsigned int flags</td>
                    <td>u64 mask</td>
                    <td>int fd</td>
                    <td>const char *pathname</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>340</td>
                    <td>prlimit64</td>

                    <td>154</td>
                    <td>pid_t pid</td>
                    <td>unsigned int resource</td>
                    <td>const struct rlimit64 *new_rlim</td>
                    <td>struct rlimit64 *old_rlim</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>341</td>
                    <td>name_to_handle_at</td>

                    <td>155</td>
                    <td>int dfd</td>
                    <td>const char *name</td>
                    <td>struct file_handle *handle</td>
                    <td>int *mnt_id</td>
                    <td>int flag</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>342</td>
                    <td>open_by_handle_at</td>

                    <td>156</td>
                    <td>int mountdirfd</td>
                    <td>struct file_handle *handle</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>343</td>
                    <td>clock_adjtime</td>

                    <td>157</td>
                    <td>clockid_t which_clock</td>
                    <td>struct __kernel_timex *tx</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>344</td>
                    <td>syncfs</td>

                    <td>158</td>
                    <td>int fd</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>345</td>
                    <td>sendmmsg</td>

                    <td>159</td>
                    <td>int fd</td>
                    <td>struct mmsghdr *msg</td>
                    <td>unsigned int vlen</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>346</td>
                    <td>setns</td>

                    <td>15A</td>
                    <td>int fd</td>
                    <td>int nstype</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>347</td>
                    <td>process_vm_readv</td>

                    <td>15B</td>
                    <td>pid_t pid</td>
                    <td>const struct iovec *lvec</td>
                    <td>unsigned long liovcnt</td>
                    <td>const struct iovec *rvec</td>
                    <td>unsigned long riovcnt</td>
                    <td>unsigned long flags</td>
                  </tr>
                  <tr>
                    <td>348</td>
                    <td>process_vm_writev</td>

                    <td>15C</td>
                    <td>pid_t pid</td>
                    <td>const struct iovec *lvec</td>
                    <td>unsigned long liovcnt</td>
                    <td>const struct iovec *rvec</td>
                    <td>unsigned long riovcnt</td>
                    <td>unsigned long flags</td>
                  </tr>
                  <tr>
                    <td>349</td>
                    <td>kcmp</td>

                    <td>15D</td>
                    <td>pid_t pid1</td>
                    <td>pid_t pid2</td>
                    <td>int type</td>
                    <td>unsigned long idx1</td>
                    <td>unsigned long idx2</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>350</td>
                    <td>finit_module</td>

                    <td>15E</td>
                    <td>int fd</td>
                    <td>const char *uargs</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>351</td>
                    <td>sched_setattr</td>

                    <td>15F</td>
                    <td>pid_t pid</td>
                    <td>struct sched_attr *attr</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>352</td>
                    <td>sched_getattr</td>

                    <td>160</td>
                    <td>pid_t pid</td>
                    <td>struct sched_attr *attr</td>
                    <td>unsigned int size</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>353</td>
                    <td>renameat2</td>

                    <td>161</td>
                    <td>int olddfd</td>
                    <td>const char *oldname</td>
                    <td>int newdfd</td>
                    <td>const char *newname</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>354</td>
                    <td>seccomp</td>

                    <td>162</td>
                    <td>unsigned int op</td>
                    <td>unsigned int flags</td>
                    <td>void *uargs</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>355</td>
                    <td>getrandom</td>

                    <td>163</td>
                    <td>char *buf</td>
                    <td>size_t count</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>356</td>
                    <td>memfd_create</td>

                    <td>164</td>
                    <td>const char *uname_ptr</td>
                    <td>unsigned int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>357</td>
                    <td>bpf</td>

                    <td>165</td>
                    <td>int cmd</td>
                    <td>union bpf_attr *attr</td>
                    <td>unsigned int size</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>358</td>
                    <td>execveat</td>

                    <td>166</td>
                    <td>int dfd</td>
                    <td>const char *filename</td>
                    <td>const char *const *argv</td>
                    <td>const char *const *envp</td>
                    <td>int flags</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>359</td>
                    <td>socket</td>

                    <td>167</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>360</td>
                    <td>socketpair</td>

                    <td>168</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>361</td>
                    <td>bind</td>

                    <td>169</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>362</td>
                    <td>connect</td>

                    <td>16A</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>363</td>
                    <td>listen</td>

                    <td>16B</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>364</td>
                    <td>accept4</td>

                    <td>16C</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>365</td>
                    <td>getsockopt</td>

                    <td>16D</td>
                    <td>int fd</td>
                    <td>int level</td>
                    <td>int optname</td>
                    <td>char *optval</td>
                    <td>int *optlen</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>366</td>
                    <td>setsockopt</td>

                    <td>16E</td>
                    <td>int fd</td>
                    <td>int level</td>
                    <td>int optname</td>
                    <td>char *optval</td>
                    <td>int optlen</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>367</td>
                    <td>getsockname</td>

                    <td>16F</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>368</td>
                    <td>getpeername</td>

                    <td>170</td>
                    <td>int</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>369</td>
                    <td>sendto</td>

                    <td>171</td>
                    <td>int</td>
                    <td>void *</td>
                    <td>size_t</td>
                    <td>unsigned</td>
                    <td>struct sockaddr *</td>
                    <td>int</td>
                  </tr>
                  <tr>
                    <td>370</td>
                    <td>sendmsg</td>

                    <td>172</td>
                    <td>int fd</td>
                    <td>struct user_msghdr *msg</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>371</td>
                    <td>recvfrom</td>

                    <td>173</td>
                    <td>int</td>
                    <td>void *</td>
                    <td>size_t</td>
                    <td>unsigned</td>
                    <td>struct sockaddr *</td>
                    <td>int *</td>
                  </tr>
                  <tr>
                    <td>372</td>
                    <td>recvmsg</td>

                    <td>174</td>
                    <td>int fd</td>
                    <td>struct user_msghdr *msg</td>
                    <td>unsigned flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>373</td>
                    <td>shutdown</td>

                    <td>175</td>
                    <td>int</td>
                    <td>int</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>374</td>
                    <td>userfaultfd</td>

                    <td>176</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>375</td>
                    <td>membarrier</td>

                    <td>177</td>
                    <td>int cmd</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>376</td>
                    <td>mlock2</td>

                    <td>178</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>int flags</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>377</td>
                    <td>copy_file_range</td>

                    <td>179</td>
                    <td>int fd_in</td>
                    <td>loff_t *off_in</td>
                    <td>int fd_out</td>
                    <td>loff_t *off_out</td>
                    <td>size_t len</td>
                    <td>unsigned int flags</td>
                  </tr>
                  <tr>
                    <td>378</td>
                    <td>preadv2</td>

                    <td>17A</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>rwf_t flags</td>
                  </tr>
                  <tr>
                    <td>379</td>
                    <td>pwritev2</td>

                    <td>17B</td>
                    <td>unsigned long fd</td>
                    <td>const struct iovec *vec</td>
                    <td>unsigned long vlen</td>
                    <td>unsigned long pos_l</td>
                    <td>unsigned long pos_h</td>
                    <td>rwf_t flags</td>
                  </tr>
                  <tr>
                    <td>380</td>
                    <td>pkey_mprotect</td>

                    <td>17C</td>
                    <td>unsigned long start</td>
                    <td>size_t len</td>
                    <td>unsigned long prot</td>
                    <td>int pkey</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>381</td>
                    <td>pkey_alloc</td>

                    <td>17D</td>
                    <td>unsigned long flags</td>
                    <td>unsigned long init_val</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>382</td>
                    <td>pkey_free</td>

                    <td>17E</td>
                    <td>int pkey</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>383</td>
                    <td>statx</td>

                    <td>17F</td>
                    <td>int dfd</td>
                    <td>const char *path</td>
                    <td>unsigned flags</td>
                    <td>unsigned mask</td>
                    <td>struct statx *buffer</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>384</td>
                    <td>arch_prctl</td>

                    <td>180</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}
