const MessageList = ({ messages }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <h3> پیام‌ها:</h3>
      {messages.map((m, i) => (
        <div key={i}>
          <strong>{m.user}:</strong> {m.message}
        </div>
      ))}
    </div>
  );
};
export default MessageList;
