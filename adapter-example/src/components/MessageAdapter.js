export class MessageAdapter {
  constructor(newMessenger) {
    this.newMessenger = newMessenger;
  }
  send(message) {
    const text = message;
    const receiver = "admin";
    this.newMessenger.newsend(text, receiver);
  }
}
