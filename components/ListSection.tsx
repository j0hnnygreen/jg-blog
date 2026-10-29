import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import styles from "../styles/Listing.module.css";

export interface ListingItem {
  category: string;
  name: string;
  url: string;
  description: string;
}

function matches(item: ListingItem, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (q === "") return true;
  return [item.category, item.name, item.description].some((field) =>
    field.toLowerCase().includes(q),
  );
}

function Card({ item }: { item: ListingItem }) {
  const content = (
    <>
      <span className={styles.cardTitle}>
        {item.name}
        <span className={styles.arrow}>
          <ArrowRightIcon />
        </span>
      </span>
      <span className={styles.cardDesc}>{item.description}</span>
    </>
  );

  if (item.url.startsWith("/")) {
    return (
      <Link href={item.url} className={styles.card}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={item.url}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}

export default function ListingGrid({
  items,
  filterText,
  what,
}: {
  items: ListingItem[];
  filterText: string;
  what: string;
}) {
  const filtered = items.filter((item) => matches(item, filterText));

  if (filtered.length === 0) {
    return (
      <p className={styles.empty}>
        No {what} found
        {filterText.trim().length > 0 ? (
          <>
            {" "}
            for <strong className={styles.emptyQuery}>{filterText.trim()}</strong>
          </>
        ) : (
          ""
        )}
        .
      </p>
    );
  }

  const groups = new Map<string, ListingItem[]>();
  for (const item of filtered) {
    const group = groups.get(item.category) ?? [];
    group.push(item);
    groups.set(item.category, group);
  }

  return (
    <div className={styles.listing}>
      {[...groups.entries()].map(([category, groupItems]) => (
        <section key={category} className={styles.group}>
          <h2 className={styles.category}>{category}</h2>
          <ul className={styles.grid}>
            {groupItems.map((item) => (
              <li key={item.name} className={styles.gridItem}>
                <Card item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
