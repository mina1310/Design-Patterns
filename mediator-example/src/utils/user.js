export function user(name, chatRoom) {
  return {
    name,
    send(message) {
      chatRoom.showMessage({ name }, message);
    },
  };
}
