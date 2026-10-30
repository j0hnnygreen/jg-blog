import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "Git Essentials",
  description:
    "Everyday Git: init/clone, staging & commits, branching, merging & conflicts, remotes, stash, undoing work and a pretty log graph.",
};

export default function GitEssentialsPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Git Essentials</h1>
      <div className={styles.article}>
        <BlogCard heading="First steps">
          <h3>Initialize a repository</h3>
          <CardTerminal title="init">
            <pre>{`$ git init
$ git config user.name  "Johnny Green"     # repo-scoped config
$ git config user.email "me@example.com"`}</pre>
          </CardTerminal>

          <h3>Or clone one</h3>
          <CardTerminal title="clone">
            <pre>{`$ git clone https://github.com/owner/repo.git
$ git clone -b dev https://github.com/owner/repo.git   # specific branch`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="The daily loop">
          <p>
            Most of a normal day is <b>add &rarr; commit &rarr; push</b>:
          </p>
          <CardTerminal title="add-commit">
            <pre>{`$ git status                 # what changed / what's staged
$ git add file.js            # stage one file
$ git add -A                 # stage all changes (incl. renames/deletes)
$ git commit -m "feat: add login form"
$ git push origin main       # publish commits to the remote
$ git pull --rebase          # fetch remote commits and replay yours on top`}</pre>
          </CardTerminal>
          <p>
            The <b>staging area</b> is what makes Git unusual: a commit records
            exactly what you staged, not what you edited. Review with{" "}
            <code>git diff</code> (unstaged), <code>git diff --staged</code>.
          </p>
        </BlogCard>

        <BlogCard heading="Branching &amp; merging">
          <CardTerminal title="branch">
            <pre>{`$ git switch -c feature/auth     # create + switch (modern syntax)
$ git switch main                # go back
$ git branch -d feature/auth     # delete after merge
$ git merge feature/auth         # merge INTO the current branch`}</pre>
          </CardTerminal>

          <h3>Resolving a conflict</h3>
          <CardTerminal title="merge-conflict">
            <pre>{`<<<<<<< HEAD
hello from main
=======
hello from feature branch
>>>>>>> feature/auth`}</pre>
          </CardTerminal>
          <p>
            Edit the file, keeping the wanted code, then:
          </p>
          <CardTerminal title="resolve">
            <pre>{`$ git add conflicted-file
$ git commit                     # or: git rebase --continue`}</pre>
          </CardTerminal>
          <p>
            <code>git merge --abort</code> backs out cleanly if things go
            sideways.
          </p>
        </BlogCard>

        <BlogCard heading="Undoing things">
          <ul>
            <li>
              <code>git restore file</code> — discard <em>uncommitted</em> edits
              to a file.
            </li>
            <li>
              <code>git restore --staged file</code> — unstage (keep the edits).
            </li>
            <li>
              <code>git revert &lt;hash&gt;</code> — <b>safe</b>: add a new
              commit that undoes an old one.
            </li>
            <li>
              <code>git reset --hard HEAD~1</code> — <b>dangerous</b>: move the
              branch pointer and wipe the working tree.
            </li>
            <li>
              <code>git stash push -m &quot;wip&quot;</code> /{" "}
              <code>git stash pop</code> — park and restore dirty work mid-task.
            </li>
          </ul>
          <CardTerminal title="oops">
            <pre>{`$ git commit --amend              # fix the last commit (message or files)
$ git reflog                      # every HEAD move — the escape hatch
$ git checkout <hash> .           # recover "deleted" work after a reset`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Log, remotes &amp; fixes">
          <h3>A useful log format</h3>
          <CardTerminal title="log">
            <pre>{`$ git log --oneline --graph --decorate --all
* f8a2c3f (HEAD -> main, origin/main) docs: update readme
* 9d1b0e2 feat: bump rate Limit
* 41c85aa fix: null check on user avatar`}</pre>
          </CardTerminal>

          <h3>Remotes</h3>
          <CardTerminal title="remote">
            <pre>{`$ git remote -v
$ git remote add upstream https://github.com/original/repo.git
$ git fetch upstream && git merge upstream/main`}</pre>
          </CardTerminal>

          <h3>Ignore behavior</h3>
          <p>
            <code>.gitignore</code> lists paths to keep out of the repo; run{" "}
            <code>git check-ignore -v path</code> to debug why a file is (or
            isn&apos;t) ignored.
          </p>
        </BlogCard>
      </div>
    </div>
  );
}
