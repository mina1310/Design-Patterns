export class MessageAdapter {
  constructor(newMessenger) {
    this.newMessenger = newMessenger;
  }
  send(message) {
    const text = message;
    const receiver = "admin";
    const result = this.newMessenger.newsend(text, receiver);
    console.log("adapter done");
    return result;
  }
}
