import Link from "next/link";
import styles from "../../styles/Resources.module.css";

function BlogCategoryRow({ category }) {
  return (
    <>
      <tr>
        <th colSpan={2}>
          <hr />
        </th>
      </tr>
      <tr>
        <th>{category}</th>
      </tr>
    </>
  );
}

function BlogRow({ blog }) {
  return (
    <tr>
      <td>
        <Link href={blog.url}>{blog.name}</Link>
      </td>
      <td>{blog.description}</td>
    </tr>
  );
}

export default function BlogsSection({ blogs, filterText }) {
  const rows = [];
  let lastCategory = null;

  blogs.forEach((blog) => {
    if (
      blog.description.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      blog.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    if (blog.category !== lastCategory) {
      rows.push(
        <BlogCategoryRow category={blog.category} key={blog.category} />
      );
    }

    rows.push(<BlogRow blog={blog} key={blog.name} />);

    lastCategory = blog.category;
  });

  return (
    <table className={styles.toolsTable}>
      <tbody>{rows}</tbody>
    </table>
  );
}
