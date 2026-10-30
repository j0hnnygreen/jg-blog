"use client";

import { Fragment } from "react";
import type { TmuxCard } from "../../models/cheatsheets.model";
import styles from "../../styles/Cheatsheets.module.css";

function matches(card: TmuxCard, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (q === "") return true;
  return (
    card.title.toLowerCase().includes(q) ||
    card.descriptionWords.toLowerCase().includes(q) ||
    card.commands.some(
      (command) =>
        command.command.toLowerCase().includes(q) ||
        command.description.toLowerCase().includes(q) ||
        command.descriptionWords.toLowerCase().includes(q),
    )
  );
}

export default function CheatsheetSection({
  filterText,
  cheatsheetModel,
}: {
  filterText: string;
  cheatsheetModel: TmuxCard[];
}) {
  const filtered = cheatsheetModel.filter((card) => matches(card, filterText));

  if (filtered.length === 0) {
    return (
      <p className={styles.empty}>
        No commands found
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

  return (
    <div className={styles.cards}>
      {filtered.map((card, cardIndex) => (
        <Fragment key={card.title}>
          <section className={styles.card}>
            <h2 className={styles.heading}>{card.title}</h2>
            {card.note ? <p className={styles.note}>Note: {card.note}</p> : null}
            <div className={styles.rows}>
              {card.commands.map((command) => (
                <div key={`${cardIndex}-${command.command}`}>
                  <div className={styles.row}>
                    <code className={styles.command}>{command.command}</code>
                    <span className={styles.description}>
                      {command.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Fragment>
      ))}
    </div>
  );
}
