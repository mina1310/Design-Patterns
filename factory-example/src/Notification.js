class Notification {
  constructor(message) {
    this.message = message;
  }
  notify() {
    return `notification:${this.message}`;
  }
}

class SuccessNotification extends Notification {
  notify() {
    return `success:${this.message}`;
  }
}

class ErrorNotification extends Notification {
  notify() {
    return `error:${this.message}`;
  }
}

class NotificationFactory {
  static create(type, message) {
    switch (type) {
      case "success":
        return new SuccessNotification(message);
      case "error":
        return new ErrorNotification(message);
      default:
        return new Notification(message);
    }
  }
}
export default NotificationFactory;
