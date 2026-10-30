import type { Metadata } from "next";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "HTTP Essentials",
  description:
    "HTTP for developers and pentesters: request/response anatomy, methods, status codes, cookies, headers and curl requests.",
};

export default function HttpEssentialsPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">HTTP Essentials</h1>
      <div className={styles.article}>
        <BlogCard heading="Anatomy of a request & response">
          <p>
            HTTP is a plain-text, stateless protocol between a client (browser,
            curl) and a server. Surprisingly, it is readable even by hand:
          </p>
          <CardTerminal title="raw http">
            <pre>{`── request ─────────────────────────────────────────────────
GET /blog?tag=crypto HTTP/1.1
Host: johnnygreen.vercel.app
User-Agent: curl/8.5.0
Accept: text/html

── response ────────────────────────────────────────────────
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Set-Cookie: session=abc123; HttpOnly; Secure
Content-Length: 5120

<!doctype html> ...payload...`}</pre>
          </CardTerminal>
          <p>
            Every request has a <b>method</b>, a <b>path</b>, an optional{" "}
            <b>query string</b>, <b>headers</b>, and sometimes a <b>body</b>.
            The response adds a <b>status code</b>.
          </p>
        </BlogCard>

        <BlogCard heading="Methods">
          <ul>
            <li>
              <b>GET</b> — fetch a resource; no body; idempotent &amp; cacheable.
            </li>
            <li>
              <b>POST</b> — create or process data; body carries the payload;
              not idempotent.
            </li>
            <li>
              <b>PUT</b> — replace a resource in full (idempotent).
            </li>
            <li>
              <b>PATCH</b> — change part of a resource.
            </li>
            <li>
              <b>DELETE</b> — remove a resource (idempotent).
            </li>
            <li>
              <b>HEAD</b> — like GET but no body (check headers/size).
            </li>
            <li>
              <b>OPTIONS</b> — ask what&apos;s allowed (auto-discovery / CORS
              preflight).
            </li>
          </ul>
        </BlogCard>

        <BlogCard heading="Status codes worth memorizing">
          <p>
            Classes: <b>1xx</b> informational, <b>2xx</b> success,{" "}
            <b>3xx</b> redirection, <b>4xx</b> client error, <b>5xx</b> server
            error.
          </p>
          <CardTerminal title="codes">
            <pre>{`200  OK          successful
201  Created     Location header points at the new resource
204  No Content  success with an empty body
301/308 Moved Permanently  permanent, 308 keeps the method
302/307 Found / Temporary  307 keeps the request method
304  Not Modified  the browser cache is still valid
400  Bad Request   malformed syntax
401  Unauthorized  who are you (wrong credentials)?
403  Forbidden     authenticated but not allowed
404  Not Found
409  Conflict      e.g. duplicate username
418  I'm a teapot  RFC 2324 easter egg
429  Too Many Requests  ease off, you are rate limited
500  Internal Server Error

Reference: https://developer.mozilla.org/docs/Web/HTTP/Status`}</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Headers you will actually use">
          <h3>Request</h3>
          <ul>
            <li>
              <b>Authorization: Bearer &lt;token&gt;</b> — API auth.
            </li>
            <li>
              <b>Cookie</b> — the session state from earlier Set-Cookie.
            </li>
            <li>
              <b>Content-Type: application/json</b> — body interpretation.
            </li>
            <li>
              <b>Origin / Referer</b> — where the call came from.
            </li>
          </ul>
          <h3>Response</h3>
          <ul>
            <li>
              <b>Content-Type</b> — charset matters for encoding bugs.
            </li>
            <li>
              <b>Cache-Control</b> — no-store, max-age, etc.
            </li>
            <li>
              <b>Access-Control-Allow-Origin</b> — relaxed CORS.
            </li>
            <li>
              <b>Strict-Transport-Security</b> — force HTTPS for a year etc.
            </li>
          </ul>
          <p>
            Test response headers in one command with{" "}
            <code>curl -I</code>, and write{" "}
            <code>curl -H &quot;X-Test: 1&quot;</code> to send custom ones.
          </p>
        </BlogCard>

        <BlogCard heading="curl workflows">
          <CardTerminal title="curl">
            <pre>{`# POST JSON
$ curl -X POST https://api.example.com/users \\
    -H "Content-Type: application/json" \\
    -d '{"name":"johnny","role":"admin"}'

# POST form urlencoded
$ curl -d "user=j&pass=hunter2" https://example.com/login

# download with redirect + show response
$ curl -L -o file.zip https://example.com/file.zip

# send a cookie
$ curl -b session=abc123 https://api.example.com/profile`}</pre>
          </CardTerminal>
        </BlogCard>
      </div>
    </div>
  );
}
