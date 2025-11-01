export function chatRoom() {
  return {
    showMessage(name, message) {
      return { name, message };
    },
  };
}
