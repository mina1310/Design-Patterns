export const ApiResponce = {
  async post(url: String, data: any) {
    if (url === "login") {
      return { token: "string", data: { name: "mina", email: "data.email" } };
    }
    return { message: "there isn't any data" };
  },
  async get(url: string) {
    console.log(`[ApiClient] GET ${url}`);
    return { name: "Mina", email: "mina@example.com" };
  },
};
