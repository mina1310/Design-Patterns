export default function CardTheme({ factory }) {
  const card = factory.createCard().style();

  return (
    <div
      style={{
        background: card.background,
        color: card.color,
        padding: "20px",
        borderRadius: "10px",
        marginTop: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
      }}
    >
      {card.text}
    </div>
  );
}
