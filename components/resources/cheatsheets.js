import styles from "../../styles/Cheatsheets.module.css";

function InnerCardSection({ filterText, commands }) {
  const innerCards = [];

  commands.forEach((commandInfo) => {
    if (
      commandInfo.descriptionWords
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) === -1
    ) {
      return;
    }
    innerCards.push(
      <tr className={styles.card2} key={commandInfo.command}>
        <td className={styles.command}>{commandInfo.command}</td>
        <td>{commandInfo.description}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr className={styles.card2}>
          <th>Commands</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{innerCards}</tbody>
    </table>
  );
}

function CardSection({ filterText, card }) {
  if (
    card.descriptionWords.toLowerCase().indexOf(filterText.toLowerCase()) === -1
  ) {
    return;
  }
  return (
    <div className={styles.card1}>
      <h1 className={styles.heading}>{card.title}</h1>
      {card.note ? <p className={styles.note}>Note: {card.note}</p> : null}
      <InnerCardSection filterText={filterText} commands={card.commands} />
    </div>
  );
}

export default function CheatsheetSection({ filterText, cheatsheetModel }) {
  const cards = [];

  cheatsheetModel.forEach((card) => {
    cards.push(
      <CardSection filterText={filterText} card={card} key={card.title} />
    );
  });

  return <div className={styles.cardsFlex}>{cards}</div>;
}
