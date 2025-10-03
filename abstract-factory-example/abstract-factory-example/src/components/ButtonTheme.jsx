export default function ButtonTheme({ factory }) {
  const button = factory.createButton().style();

  return (
    <button
      style={{
        background: button.background,
        color: button.color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      {button.text}
    </button>
  );
}
