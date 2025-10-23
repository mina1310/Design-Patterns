export const TokenStorage = {
  save(token: string) {
    localStorage.setItem("token", token);
  },
  get() {
    return localStorage.getItem("token");
  },
  clear() {
    localStorage.removeItem("token");
  },
};
