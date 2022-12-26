import Link from "next/link";
import styles from "../../styles/Resources.module.css";

function ToolCategoryRow({ category }) {
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

function ToolRow({ tool }) {
  return (
    <tr>
      <td>
        <Link href={tool.url}>{tool.name}</Link>
      </td>
      <td>{tool.description}</td>
    </tr>
  );
}

export default function ToolsSection({ tools, filterText }) {
  const rows = [];
  let lastCategory = null;

  tools.forEach((tool) => {
    if (
      tool.description.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      tool.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }

    if (tool.category !== lastCategory) {
      rows.push(
        <ToolCategoryRow category={tool.category} key={tool.category} />
      );
    }

    rows.push(<ToolRow tool={tool} key={tool.name} />);

    lastCategory = tool.category;
  });

  return (
    <table className={styles.toolsTable}>
      <tbody>{rows}</tbody>
    </table>
  );
}
