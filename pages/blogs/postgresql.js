import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";

export default function PostgresPage() {
  const listdb = `
                                 List of databases
   Name    |  Owner   | Encoding | Collate | Ctype |   Access privileges   
-----------+----------+----------+---------+-------+-----------------------
 postgres  | postgres | UTF8     | C       | C     | 
 template0 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 template1 | postgres | UTF8     | C       | C     | =c/postgres          +
           |          |          |         |       | postgres=CTc/postgres
 testdb    | postgres | UTF8     | C       | C     | 
(4 rows)
  `;

  const listTables = `
              List of relations
 Schema | Name  | Type  |     Owner      
--------+-------+-------+----------------
 public | users | table | learn_postgres
(1 row)
  `;

  const descTable = `
                                                    Table "public.users"
 Column |          Type          | Collation | Nullable | Default | Storage  | Compression | Stats target | Description 
--------+------------------------+-----------+----------+---------+----------+-------------+--------------+-------------
 name   | character varying(128) |           |          |         | extended |             |              | 
 email  | character varying(128) |           |          |         | extended |             |              | 
Access method: heap
  `;

  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.postgresql}</title>
        </Head>

        <main className="main">
          <h1 className={blogStyles.title}>PostgreSQL</h1>

          <p></p>

          <Link href="https://www.postgresql.org/docs/" target="_blank">
            <Image
              src="/assets/blogs/postgres/elephant.png"
              alt="postgresql logo"
              width={50}
              height={50}
            />
          </Link>

          <BlogCard heading="Starting PostgreSQL Command Line">
            <p>
              The following command can be used to start psql command line as{" "}
              <em>postgres</em> user which is the <em>super user</em>.
            </p>
            <CardTerminal>
              $ psql -U postgres
              <br />
              Password for user postgres: &lt;password here&gt;
              <br />
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="Connecting to a remote PostgreSQL Server">
            <p>
              For connecting to a remote psql server use <b>-h</b> flag to
              specify the <em>IP/Domain</em> of the remote server, <b>-p</b>{" "}
              flag to specify the <em>port</em> number and <b>-U</b> to specify
              the <em>username</em> to login. Optionally you can also specify
              the <em>database name</em>.
            </p>
            <CardTerminal>
              <pre>
                $ psql -h &lt;IP/DOMAIN&gt; -p &lt;PORT&gt; -U &lt;USERNAME&gt;
                [DB-NAME]
              </pre>
            </CardTerminal>
          </BlogCard>

          <BlogCard heading="PostgreSQL Commands">
            <h3>Listing all databases</h3>
            <p>
              To list all the databases use <b>\l</b> command.
            </p>
            <CardTerminal>
              <pre>
                postgres-# \l
                <br />
                {listdb}
                <br />
                postgres-#
              </pre>
            </CardTerminal>

            <h3>Selecting a database</h3>
            <p>
              To connect/select a desired database use <b>\c</b> command.
            </p>
            <CardTerminal>
              <pre>
                postgres=# \c testdb;
                <br />
                <br />
                psql (9.2.4)
                <br />
                Type "help" for help.
                <br />
                You are now connected to database "testdb" as user "postgres".
                <br />
                <br />
                testdb=#
              </pre>
            </CardTerminal>

            <h3>Listing all tables in the selected database</h3>
            <p>
              To list all tables in a database use <b>\dt</b> command.
            </p>
            <CardTerminal>
              <pre>
                testdb=&gt; \dt
                <br />
                {listTables}
                <br />
                testdb=&gt;
              </pre>
            </CardTerminal>

            <h3>Describe a table (Table Schema)</h3>
            <p>
              To describe a table in a database use <b>\d+</b> command.
            </p>
            <CardTerminal>
              <pre>
                testdb=&gt; \d+ users
                <br />
                {descTable}
                <br />
                testdb=&gt;
              </pre>
            </CardTerminal>

            <h3>Copy the data between a file and a table</h3>
            <p>
              To import the data in a CSV file to a table use <b>FROM</b> with{" "}
              <b>\copy</b> command and optionally use <em>HEADER</em> if the CSV
              file contains the header. For example,
            </p>
            <CardTerminal>
              <pre>
                testdb=&gt; \copy users(name,email) FROM 'users.csv' WITH
                DELIMITER ',' CSV [HEADER];
                <br />
                COPY 100
                <br />
                testdb=&gt;
              </pre>
            </CardTerminal>
            <p>
              To export a table to a CSV file use <b>TO</b> with <b>\copy</b>{" "}
              command and optionally use <em>HEADER</em> if you want a header
              row in CSV file. For example,
            </p>
            <CardTerminal>
              <pre>
                testdb=&gt; \copy users TO 'test.csv' WITH DELIMITER ',' CSV
                HEADER;
                <br />
                COPY 100
                <br />
                testdb=&gt;
              </pre>
            </CardTerminal>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}
