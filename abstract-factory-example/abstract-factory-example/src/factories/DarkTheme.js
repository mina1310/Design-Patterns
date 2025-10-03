class DarkButton {
  style() {
    return {
      background: "#333",
      color: "#fff",
      text: "Dark Button",
    };
  }
}

class DarkCard {
  style() {
    return {
      background: "#444",
      color: "#fff",
      text: "Dark Card",
    };
  }
}

class DarkFactory {
  createButton() {
    return new DarkButton();
  }
  createCard() {
    return new DarkCard();
  }
}
export default DarkFactory;
