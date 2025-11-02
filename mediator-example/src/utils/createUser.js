export function createUser(name, chatRoom) {
  return {
    name,
    send(message) {
      chatRoom.showMessage(name, message);
    },
  };
}
