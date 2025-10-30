export function createNotification() {
  let listeners = [];
  let notifications = [];

  return {
    addNotification: (message) => {
      notifications.push(message);
      listeners.forEach((listener) => listener([...notifications]));
    },
    removeNotification: (index) => {
      notifications = notifications.filter((_, i) => i !== index);
      listeners.forEach((listener) => listener([...notifications]));
    },
    subscribe: (listener) => {
      listeners.push(listener);
    },
    unsubscribe: (listenerr) => {
      listeners = listeners.filter((listener) => listener !== listenerr);
    },
  };
}
export const notificationStore = createNotification();
