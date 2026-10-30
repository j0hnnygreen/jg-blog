import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "The Stack — Frames & Calling Conventions",
  description:
    "How the x86-64 stack is organized: push/pop, stack frames, prologue/epilogue and the System V calling convention.",
};

const LAYOUT = `              +------------------+
   higher     |  command-line    |
  addresses   |  args & env vars |
              +------------------+
              |      stack       |   v  (grows down)
              |        |         |
              |        v         |
              |                  |
              |   unmapped       |
              |                  |
              |        ^         |
              |        |         |
              |      heap        |   ^  (grows up)
              +------------------+
              |       .bss       |   (uninitialized data)
              +------------------+
              |      .data       |   (initialized data)
              +------------------+
              |      .text       |   (code, read-only)
   lower      +------------------+
  addresses`;

const FRAME = `             low addresses
            +------------------+
   rbp -->  | saved rbp        |   caller's frame pointer
            +------------------+
            | local variables  |
            | ...              |
   rsp -->  | [canary / args]  |   current top of the stack
            +------------------+
            | return address   |   <-- overwritten by buffer overflows
            +------------------+
            | caller's frame   |`;

export default function StackLayoutPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">The Stack — Frames &amp; Calling Conventions</h1>
      <div className={styles.article}>
        <BlogCard heading="Where the stack sits in memory">
          <p>
            On a typical Linux process, the stack occupies the{" "}
            <strong>high end</strong> of the address space and{" "}
            <strong>grows downwards</strong> while the heap grows upwards.
            Knowing this layout is the foundation for understanding buffer
            overflows and ROP.
          </p>
          <CardTerminal title="process layout">
            <pre>{LAYOUT}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="push &amp; pop">
          <p>
            The two instructions that drive the stack use the{" "}
            <b>stack pointer</b> register (<i>rsp</i>):
          </p>
          <ul>
            <li>
              <b>push</b> <i>src</i>: subtracts 8 from <i>rsp</i>, then stores{" "}
              <i>src</i> at the address <i>rsp</i> now points to.
            </li>
            <li>
              <b>pop</b> <i>dst</i>: copies the value <i>rsp</i> points at into{" "}
              <i>dst</i>, then adds 8 back.
            </li>
          </ul>
          <p>
            One oddity to remember: when you push a memory operand,{" "}
            <b>x86-64 pushes the value</b>, not the address. Saved registers
            therefore appear as <em>values</em> in the frame.
          </p>
        </BlogCard>

        <BlogCard heading="Stack frames">
          <p>
            Every function call creates a <b>frame</b>: a region of the stack
            holding its locals, saved registers and return information.
            Normally <i>rbp</i> marks the frame&apos;s <em>base</em> and{" "}
            <i>rsp</i> its <em>top</em>.
          </p>
          <CardTerminal title="stack frame">
            <pre>{FRAME}</pre>
          </CardTerminal>

          <h3>Prologue &amp; epilogue</h3>
          <p>
            GCC often emits this classic pair to set up and tear down a frame:
          </p>
          <CardTerminal title="assembly">
            <pre>{`push   rbp          ; save the caller's base pointer
mov    rbp, rsp     ; our frame starts here
...                 ; reserve locals by subtracting from rsp
...                 ; function body
pop    rbp          ; (or: leave)  restore caller's rbp
ret                 ; pop the return address and jump to it`}</pre>
          </CardTerminal>
          <p>
            When the code is compiled with optimizations, <i>rbp</i> may be
            omitted entirely (the <em>-fomit-frame-pointer</em> style), and{" "}
            <i>rsp</i> alone tracks locals relative to the stack pointer.
          </p>
        </BlogCard>

        <BlogCard heading="System V AMD64 calling convention">
          <p>
            On Linux, the first <b>six integer arguments</b> go in registers
            (in order); anything beyond that is passed <em>right to left</em> on
            the stack. The helpers below are what you would see in a syscall
            context too, since syscalls reuse the same register plan — see the{" "}
            <a className={styles.extLink} href="/blogs/syscalls">syscall table</a>.
          </p>
          <CardTerminal title="registers">
            <pre>{`Argument order:  rdi, rsi, rdx, rcx, r8, r9
Return value  :  rax
Callee-saved  :  rbx, rbp, r12, r13, r14, r15
Caller-saved  :  rax, rcx, rdx, rsi, rdi, r8-r11`}</pre>
          </CardTerminal>
          <p>
            Contrast this with the 32-bit <em>cdecl</em> style where{" "}
            <b>every</b> argument lives on the stack — passing in registers
            makes 64-bit calls much faster. Floating-point arguments travel in{" "}
            <i>xmm0–xmm7</i>, and the number of vector registers used is passed
            in <i>al</i> for variadic functions like <i>printf</i>.
          </p>
        </BlogCard>

        <BlogCard heading="Why pwners care">
          <ul>
            <li>
              The <b>return address</b> sits just above the locals — a write
              past the end of a buffer walks straight into it.
            </li>
            <li>
              <b>Stack canaries</b> (see <i>fs:0x28</i> checks) are placed
              between locals and the saved pointer to detect such overwrites.
            </li>
            <li>
              <b>No-execute (NX)</b> memory means you cannot simply put shellcode
              on the stack and jump — hence ROP chains.
            </li>
            <li>
              <b>ASLR</b> randomizes the stack base each run, so leaks of stack
              or libc addresses are usually the first goal in an exploit.
            </li>
          </ul>
          <p>
            A quick way to inspect the live layout during debugging is{" "}
            <i>vmmap</i> in <a className={styles.extLink} href="/blogs/gdbIntro">GEF/pwndbg</a>{" "}
            or <i>info proc mappings</i> in plain GDB.
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
