import Head from "next/head";
import Link from "next/link";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";

export default function GDBIntro() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.reversing.gdbintro}</title>
        </Head>
        <main className="main">
          <h1 className={blogStyles.title}>Introduction to GDB</h1>
          <p></p>

          <BlogCard heading="GNU Debugger (GDB)">
            <p>
              The online documentation for gdb can be found{" "}
              <Link
                className={blogStyles.extLink}
                href="https://sourceware.org/gdb/current/onlinedocs/gdb.pdf"
                target="_blank"
              >
                here
              </Link>
              .
            </p>

            <h3>Plugins</h3>
            <p>
              You can install any one of the following plugins to make your
              debugging life easy.
            </p>
            <ul>
              <li>
                GEF (GDB Enhanced Features) -{" "}
                <Link
                  className={blogStyles.extLink}
                  href="https://github.com/hugsy/gef"
                  target="_blank"
                >
                  website
                </Link>
              </li>
              <li>
                PWNDBG -{" "}
                <Link
                  className={blogStyles.extLink}
                  href="https://github.com/pwndbg/pwndbg"
                  target="_blank"
                >
                  website
                </Link>
              </li>
            </ul>

            <p>
              If you've installed GDB with pwndbg plugin then it should look
              something like this.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>$ gdb -q</span>
                <br />
                pwndbg: loaded 199 commands. Type pwndbg [filter] for a list.
                <br />
                pwndbg: created $rebase, $ida gdb functions (can be used with
                print/break)
                <br />
                pwndbg&gt;
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Loading binary from filesystem.">
            <p>
              You can use <b>--quiet</b> or <b>-q</b> for loading the binary
              quiet mode.
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`$ gdb --quiet ./hello_bin`}</span>
                <br />
                {`Reading symbols from ./hello_bin...
(No debugging symbols found in ./hello_bin)
(gdb)`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Run or Re-run a Program">
            <p>
              The <b>run</b> or <b>r</b> command will run the program.
            </p>
            <CardTerminal>
              <pre>
                {`$ gdb -q ./hello_bin
Reading symbols from ./hello_bin...
(No debugging symbols found in ./hello_bin)`}
                <br />
                <span className={blogStyles.promptLine}>{`(gdb) r`}</span>
                <br />
                {`Starting program: /home/user/hello_bin 
Hello, world! [Inferior 1 (process 14389) exited normally]
(gdb)`}
              </pre>
            </CardTerminal>

            <h3>Running a program with arguments</h3>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) r arg1 arg2`}</span>
              </pre>
            </CardTerminal>

            <p>
              If you want use the output of other linux command as an argument.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>
                  {`(gdb) r <<< $(python3 -c 'import sys;sys.stdout.buffer.write(b"A"*32 + b"\\x06\\xe3\\x07\\x44")')`}
                </span>
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Starting a program and breaking at it's entry point">
            <p>
              The <b>start</b> command is similar to <em>run</em> except it
              breaks at the entrypoint of the program.
              <br />
              Additionally arguments can also be used with <em>start</em>.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>{`(gdb) start`}</span>
                <br />
                {`Temporary breakpoint 1 at 0x1139`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Continuing execution of a program stopped at a breakpoint">
            <p>
              The <b>continue</b> or <b>c</b> command continues the execution
              from a breakpoint till it hits another breakpoint or completion of
              the execution of the program.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>{`(gdb) c`}</span>
                <br />
                {`Continuing.`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Breakpoints">
            <h3>Setting breakpoints</h3>
            <p>
              Breakpoints can be set with the <b>break</b> or <b>b</b> command.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>{`(gdb) b main`}</span>
                <br />
                {`Breakpoint 1 at 0x0x555555555139`}
                <br />
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) b *0x0000555555555140`}</span>
                <br />
                {`Breakpoint 2 at 0x555555555140`}
                <br />
              </pre>
            </CardTerminal>

            <h3>Listing breakpoints</h3>
            <p>
              The <b>info</b> or <i>i</i> command i.e{" "}
              <em>"info breakpoints"</em> or <em>"i b"</em> is used to list the
              breakpoints.
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) info breakpoints`}</span>
                <br />
                {`Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x0000555555555139 <main+4>
	breakpoint already hit 1 time
2       breakpoint     keep y   0x0000555555555140 <main+11>`}
              </pre>
            </CardTerminal>

            <h3>Disabling Breakpoints</h3>
            <p>
              After getting a breakpoint number from <em>"info b"</em>, a
              breakpoint can be disabled with{" "}
              <b>disable &lt;breakpoint number&gt;</b>
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) disable 1`}</span>
                <br />
                {`(gdb) i b
Num     Type           Disp Enb Address            What
1       breakpoint     keep n   0x0000555555555139 <main+4>
	breakpoint already hit 1 time
2       breakpoint     keep y   0x0000555555555140 <main+11>`}
              </pre>
            </CardTerminal>

            <h3>Enabling Breakpoints</h3>
            <p>
              Disasbled breakpoints can be enabled by using command{" "}
              <b>enable &lt;breakpoint number&gt;</b>
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) enable 1`}</span>
                <br />
                {`(gdb) i b
Num     Type           Disp Enb Address            What
1       breakpoint     keep y   0x0000555555555139 <main+4>
	breakpoint already hit 1 time
2       breakpoint     keep y   0x0000555555555140 <main+11>`}
              </pre>
            </CardTerminal>

            <h3>Unsetting Breakpoints</h3>
            <p>
              The <b>"clear &lt;address&gt;"</b> command can remove a breakpoint
              at the address, specified either by a symbol name or a * followed
              by an absolute memory address.
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) clear main`}</span>
                <br />
                {`Deleted breakpoint 1`}
              </pre>
            </CardTerminal>

            <p>
              The <b>delete</b> or <b>d</b> command i.e{" "}
              <b>"delete &lt;breakpoint number&gt;"</b> can be used to delete a
              specific breakpoint.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>{`(gdb) del 2`}</span>
                <br />
                {`(gdb) i b
No breakpoints or watchpoints.`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Disassembly Display">
            <p>
              The <b>disassemble</b> or <b>disas</b> command by itself will show
              you assembly surrounding the current location you are stopped at.
            </p>
            <p>
              The <b>"disassemble &lt;address or symbol name&gt;"</b> command
              will disassemble the memory specified by the address or symbol
              name
            </p>
            <p>
              Optionally use the <em>"/r"</em> argument after disassemble to
              display the raw bytes which make up the instructions
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) disassemble main`}</span>
                <br />
                {`Dump of assembler code for function main:
   0x0000555555555135 <+0>:	push   rbp
   0x0000555555555136 <+1>:	mov    rbp,rsp
=> 0x0000555555555139 <+4>:	lea    rdi,[rip+0xec4]        # 0x555555556004
   0x0000555555555140 <+11>:	mov    eax,0x0
   0x0000555555555145 <+16>:	call   0x555555555030 <printf@plt>
   0x000055555555514a <+21>:	nop
   0x000055555555514b <+22>:	pop    rbp
   0x000055555555514c <+23>:	ret    
End of assembler dump.`}
              </pre>
            </CardTerminal>

            <p>
              If you want to display the number of instructions from a specified
              address then use <b>x</b> command.
            </p>
            <CardTerminal>
              <pre>
                <span
                  className={blogStyles.promptLine}
                >{`(gdb) x/4i 0x555555555139`}</span>
                <br />
                {`   0x555555555139 <main+4>:	lea    rdi,[rip+0xec4]        # 0x555555556004
   0x555555555140 <main+11>:	mov    eax,0x0
   0x555555555145 <main+16>:	call   0x555555555030 <printf@plt>
   0x55555555514a <main+21>:	nop`}
              </pre>
            </CardTerminal>

            <h3>Continuously-updating Disassembly Display</h3>
            <p>
              The <b>display</b> command can be used print out some number of
              instructions every time the program stops, starting at the
              instruction pointer / program counter.
              <br />
              i.e <em>display/10i $rip</em>
            </p>
          </BlogCard>

          <BlogCard heading="Examine and Modify Registers">
            <h3>Format Specifiers</h3>
            <p>
              <ul>
                <li>
                  <b>x</b>: Print the binary representation of the value in
                  hexadecimal.
                </li>
                <li>
                  <b>d</b>: Print the binary representation of the value in
                  decimal.
                </li>
                <li>
                  <b>u</b>: Print the binary representation of the value as an
                  decimal, as if it were unsigned.
                </li>
                <li>
                  <b>o</b>: Print the binary representation of the value in
                  octal.
                </li>
                <li>
                  <b>t</b>: Print the binary representation of the value in
                  binary. The letter 't' stands for "two".
                </li>
                <li>
                  <b>c</b>: Cast the value to an integer (unlike other formats,
                  this does not just reinterpret the underlying bits) and print
                  it as a character constant. This prints both the numerical
                  value and its character representation.
                </li>
                <li>
                  <b>f</b>: Regard the bits of the value as a floating point
                  number and print using typical floating point syntax.
                </li>
                <li>
                  <b>s</b>: Regard as a string, if possible. With this format,
                  pointers to single-byte data are displayed as null-terminated
                  strings and arrays of single-byte data are displayed as
                  fixed-length strings. Other values are displayed in their
                  natural types.
                </li>
              </ul>
              Refer the documentation for more formats{" "}
              <Link
                className={blogStyles.extLink}
                href="https://sourceware.org/gdb/current/onlinedocs/gdb#Output-Formats"
                target="_blank"
              >
                here
              </Link>
              .
            </p>

            <h3>Examining Memory</h3>
            <p>
              The <em>x</em> command can be used to examine memory in any of
              several formats:
              <br />
              <CardTerminal>
                <pre>x/nfu addr</pre>
              </CardTerminal>
              <ol>
                <li>
                  <b>n</b>: The repeat count is a decimal integer; the default
                  is 1.
                </li>
                <li>
                  <b>f</b>: The display format is one of the formats used by
                  print ('x', 'd', 'u', 'o', 't', 'a', 'c', 'f', 's'), 'i' (for
                  machine instructions)
                </li>
                <li>
                  <b>u</b>: the unit size.
                </li>
                <ul>
                  <li>
                    <b>b</b>: Bytes.
                  </li>
                  <li>
                    <b>h</b>: Halfwords (Two Bytes).
                  </li>
                  <li>
                    <b>w</b>: Words (Four Bytes). DEFAULT
                  </li>
                  <li>
                    <b>g</b>: Giant words (Eight Bytes).
                  </li>
                </ul>
              </ol>
            </p>

            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>(gdb) x/8xb $rsp</span>
                <br />
                {`0x7fffffffde40:	0x50	0x51	0x55	0x55	0x55	0x55	0x00	0x00`}
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/4xh $rsp</span>
                <br />
                {`0x5150	0x5555	0x5555	0x0000`}
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/2xw $rsp</span>
                <br />
                {`0x55555150	0x00005555`}
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/1xg $rsp</span>
                <br />
                {`0x0000555555555150`}
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/2i $rip</span>
                <br />
                {`=> 0x555555555145 <main+16>:	call   0x555555555030 <printf@plt>
   0x55555555514a <main+21>:	nop`}
              </pre>
            </CardTerminal>

            <h3>Modifing Memory</h3>
            <p>
              The <b>set</b> command is used to modify memory, also optionally
              specifying a C-style type in order to specify the length to write.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>(gdb) x/xg $rdi</span>
                <br />
                {`0x555555556004:	0x77202c6f6c6c6548`}
                <br />
                <span className={blogStyles.promptLine}>
                  {`(gdb) set {char}$rdi = 0x4d`}
                </span>
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/xg $rdi</span>
                <br />
                {`0x555555556004:	0x77202c6f6c6c654d`}
                <br />
                <span className={blogStyles.promptLine}>
                  {`(gdb) set {short}$rdi = 0xff`}
                </span>
                <br />
                <span className={blogStyles.promptLine}>(gdb) x/xg $rdi</span>
                <br />
                {`0x555555556004:	0x77202c6f6c6c00ff`}
                <br />
              </pre>
            </CardTerminal>
            <p>
              <mark>
                <strong>Note</strong>
              </mark>{" "}
              that immediates which are smaller than the size of the specified
              memory write are zero-extended, not sign-extend.
            </p>

            <h3>Viewing Registers</h3>
            <p>
              The <b>info registers</b> or <b>info r</b> or <b>i r</b> command
              will by default print some set of registers.
            </p>
            <p>
              You can also specify a specific register set that you'd like to
              view, by listing the registers after <em>info r</em>.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>
                  (gdb) i r rax rbx rcx
                </span>
                <br />
                {`rax            0x0                 0
rbx            0x0                 0
rcx            0x7ffff7fab718      140737353791256`}
              </pre>
            </CardTerminal>
            <p>
              The <b>print</b> or <p>p</p> command can also be used with the
              format specifier.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>(gdb) p/x $rax</span>
                <br />
                {`$1 = 0x0`}
              </pre>
            </CardTerminal>
            <p>
              <mark>
                <strong>Note</strong>
              </mark>{" "}
              that the print command requires the register name to be prefixed
              with a $. Also note that the "info r" command required no such
              prefix.
            </p>

            <h3>Modifing Registers</h3>
            <CardTerminal>
              <pre>
                {`(gdb) set $rax = 0xdeadbeeff00dface
(gdb) p/x $rax
$2 = 0xdeadbeeff00dface
(gdb) set $ax = 0xcafef00d
(gdb) p/x $rax
$3 = 0xdeadbeeff00df00d`}
              </pre>
            </CardTerminal>
            <p>
              <mark>
                <strong>Note</strong>
              </mark>{" "}
              that the size written was the size of the register (16 bits, ax)
              rather than the size of the immediate (32 bits).
            </p>
          </BlogCard>

          <BlogCard heading="Stack Backtrace">
            <p>
              A backtrace is a summary of how your program got where it is. It
              shows one line per frame, for many frames, starting with the
              currently executing frame (frame zero), followed by its caller
              (frame one), and on up the stack.
            </p>
            <p>
              The <b>backtrace</b> or <b>bt</b> command provides a call stack
              backtrace.
            </p>
            <CardTerminal>
              <pre>
                <span className={blogStyles.promptLine}>(gdb) bt</span>
                <br />
                {`#0  0x0000555555555145 in main ()
#1  0x00007ffff7e00d0a in __libc_start_main (main=0x555555555135 <main>, argc=1, argv=0x7fffffffdf38, init=<optimized out>, fini=<optimized out>, rtld_fini=<optimized out>, stack_end=0x7fffffffdf28) at ../csu/libc-start.c:308
#2  0x000055555555507a in _start ()`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Stepping Through Assembly">
            <h3>Step over</h3>
            <p>
              The <b>nexti</b> or <b>ni</b> steps over call instructions.
            </p>

            <h3>Step into</h3>
            <p>
              The <b>stepi</b> or <b>si</b> steps into call instructions.
            </p>

            <h3>Step out</h3>
            <p>
              The <b>finish</b> or <b>fin</b> steps out of the current function
              context.
            </p>

            <h3>Run until address</h3>
            <p>
              If you just want to step forward some number of instructions, but
              don't want to set and then delete a breakpoint, or don't want to
              count how many instructions it is, you can use the{" "}
              <b>"until &lt;address&gt;"</b> or <b>u &lt;address&gt;</b>{" "}
              command. Note however that if for some reason the address is never
              reached (e.g. because control flow branches some other direction)
              the until instruction will also break upon exit from the current
              function.
            </p>
            <p>
              Refer the documentation for more instructions{" "}
              <Link
                className={blogStyles.extLink}
                href="https://sourceware.org/gdb/current/onlinedocs/gdb#Continuing-and-Stepping"
                target="_blank"
              >
                here
              </Link>
            </p>
          </BlogCard>

          <BlogCard heading="Changing Disassembly Syntax">
            <p>
              You can change the disassembly syntax to Intel or AT&T
              respectively with the following commands from within gdb:
            </p>
            <CardTerminal>
              <pre>{`(gdb) set disassembly-flavor intel`}</pre>
            </CardTerminal>
            <CardTerminal>
              <pre>{`(gdb) set disassembly-flavor att`}</pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Saving a Persistent GDB Configuration">
            <p>
              Often you will be starting and stopping the same or different
              executables multiple times in gdb. You may want to always run the
              same commands each time you start gdb, to set up a view of a
              common set of registers, memory, or instructions. Or you may want
              to set some common breakpoints. This can be accomplished by
              creating a plain text file (e.g. ~/gdbCfg), and entering the set
              of gdb commands which you want to be executed in gdb on startup,
              one per line. Then when you start gdb, specify the commands file
              with the -x option (e.g. -x ~/gdbCfg).
            </p>
            <p>Example of a command file:</p>
            <CardTerminal>
              <pre>
                {`display/10i $rip
display/x $rbp
display/x $rsp
display/x $rax
display/x $rbx
display/x $rcx
display/x $rdx
display/x $rdi
display/x $rsi
display/x $r8
display/x $r9
display/x $r12
display/x $r13
display/x $r14
display/10gx $rsp  
start`}
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Attaching to Running Userspace Processes">
            <h3>ptrace() permissions</h3>
            <p>
              Depending on your system security settings surrounding the
              ptrace() system call, you may not be able to attach to non-child
              processes, even those which are running as the same user as you.
              You can either run gdb as root with sudo, or issue the described
              command to temporarily derestrict ptrace() access.
            </p>
            <CardTerminal>
              <pre>$ echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope</pre>
            </CardTerminal>
            <p>Remembering to re-restrict access when done via:</p>
            <CardTerminal>
              <pre>$ echo 1 | sudo tee /proc/sys/kernel/yama/ptrace_scope</pre>
            </CardTerminal>
            <p>
              You can attach a running process with the command{" "}
              <b>attach &lt;process ID&gt;</b>. Process ID's are the{" "}
              <em>PID</em> in <em>ps</em> command.
            </p>
            <CardTerminal>
              <pre>{`(gdb) attach 6915`}</pre>
            </CardTerminal>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}
