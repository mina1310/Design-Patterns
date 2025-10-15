export class NewMessenger {
  newsend(content, reciept) {
    console.log("new done");
    return `the message sent with this content : ${content} sent to ${reciept}`;
  }
}
