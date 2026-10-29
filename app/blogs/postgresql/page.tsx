import type { Metadata } from "next";
import Image from "next/image";
import BlogCard from "../../../components/blog/BlogCard";
import CardTerminal from "../../../components/blog/CardTerminal";
import styles from "../../../styles/Blog.module.css";

export const metadata: Metadata = {
  title: "PostgreSQL",
};

const LIST_DB = `                                 List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges
-----------+----------+----------+---------+-------+-----------------------
 postgres  | postgres | UTF8     | C       | C     |
 template0 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 template1 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 testdb    | postgres | UTF8     | C       | C     |
(4 rows)`;

const LIST_TABLES = `              List of relations
 Schema | Name  | Type  |     Owner
--------+-------+-------+----------------
 public | users | table | learn_postgres
(1 row)`;

const DESC_TABLE = `                                                    Table "public.users"
 Column |          Type          | Collation | Nullable | Default | Storage  | Compression | Stats target | Description
--------+------------------------+-----------+----------+---------+----------+-------------+--------------+-------------
 name   | character varying(128) |           |          |         | extended |             |              |
 email  | character varying(128) |           |          |         | extended |             |              |
Access method: heap`;

export default function PostgresPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">PostgreSQL</h1>
      <a
        href="https://www.postgresql.org/docs/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="PostgreSQL documentation"
        className={styles.centerImg}
        style={{ width: "fit-content" }}
      >
        <Image
          src="/assets/blogs/databases/postgres/elephant.png"
          alt="postgresql logo"
          width={56}
          height={56}
          unoptimized
        />
      </a>
      <div className={styles.article} style={{ marginTop: "1.5rem" }}>
        <BlogCard heading="Starting PostgreSQL Command Line">
          <p>
            The following command can be used to start psql command line as{" "}
            <em>postgres</em> user which is the <em>super user</em>.
          </p>
          <CardTerminal title="psql">
            <pre>
              {`$ psql -U postgres
Password for user postgres: <password here>`}
            </pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="Connecting to a remote PostgreSQL Server">
          <p>
            For connecting to a remote psql server use <b>-h</b> flag to specify
            the <em>IP/Domain</em> of the remote server, <b>-p</b> flag to
            specify the <em>port</em> number and <b>-U</b> to specify the{" "}
            <em>username</em> to login. Optionally you can also specify the{" "}
            <em>database name</em>.
          </p>
          <CardTerminal title="psql">
            <pre>$ psql -h &lt;IP/DOMAIN&gt; -p &lt;PORT&gt; -U &lt;USERNAME&gt; [DB-NAME]</pre>
          </CardTerminal>
        </BlogCard>

        <BlogCard heading="PostgreSQL Commands">
          <h3>Listing all databases</h3>
          <p>
            To list all the databases use <b>\l</b> command.
          </p>
          <CardTerminal title="psql">
            <pre>{`postgres-# \\l
${LIST_DB}
postgres-#`}</pre>
          </CardTerminal>

          <h3>Selecting a database</h3>
          <p>
            To connect/select a desired database use <b>\c</b> command.
          </p>
          <CardTerminal title="psql">
            <pre>{`postgres=# \\c testdb;

psql (9.2.4)
Type "help" for help.
You are now connected to database "testdb" as user "postgres".

testdb=#`}</pre>
          </CardTerminal>

          <h3>Listing all tables in the selected database</h3>
          <p>
            To list all tables in a database use <b>\dt</b> command.
          </p>
          <CardTerminal title="psql">
            <pre>{`testdb=> \\dt
${LIST_TABLES}
testdb=>`}</pre>
          </CardTerminal>

          <h3>Describe a table (Table Schema)</h3>
          <p>
            To describe a table in a database use <b>\d+</b> command.
          </p>
          <CardTerminal title="psql">
            <pre>{`testdb=> \\d+ users
${DESC_TABLE}
testdb=>`}</pre>
          </CardTerminal>

          <h3>Copy the data between a file and a table</h3>
          <p>
            To import the data in a CSV file to a table use <b>FROM</b> with{" "}
            <b>\copy</b> command and optionally use <em>HEADER</em> if the CSV
            file contains the header. For example,
          </p>
          <CardTerminal title="psql">
            <pre>{`testdb=> \\copy users(name,email) FROM 'users.csv' WITH DELIMITER ',' CSV [HEADER];
COPY 100
testdb=>`}</pre>
          </CardTerminal>
          <p>
            To export a table to a CSV file use <b>TO</b> with <b>\copy</b>{" "}
            command and optionally use <em>HEADER</em> if you want a header row
            in CSV file. For example,
          </p>
          <CardTerminal title="psql">
            <pre>{`testdb=> \\copy users TO 'test.csv' WITH DELIMITER ',' CSV HEADER;
COPY 100
testdb=>`}</pre>
          </CardTerminal>
        </BlogCard>
      </div>
    </div>
  );
}
