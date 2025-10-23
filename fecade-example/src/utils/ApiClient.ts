export const ApiClient = {
  async post(url: string, data: any) {
    if (url === "login") {
      return { token: "string", data: { name: "mina", email: data.email } };
    }
    return { message: "there isn't any data" };
  },
  async get(url: string) {
    if (url === "myData") {
      return { name: "Mina", email: "mina.kaviani@yahoo.com" };
    }
    return { message: "there isn't any data" };
  },
};
