class LigthButton {
  style() {
    return {
      background: "#f0f0f0",
      color: "#000",
      text: "Light Button",
    };
  }
}
class LigthCard {
  style() {
    return {
      background: "#fff",
      color: "#000",
      text: "Light Card ",
    };
  }
}

class LigthFactory {
  createButton() {
    return new LigthButton();
  }
  createCard() {
    return new LigthCard();
  }
}
export default LigthFactory;
