import { ApiClient } from "./ApiClient";
import { TokenStorage } from "./TokenStorage";
import { UserService } from "./UserService";

export const AuthFacade = {
  async login(email: string, password: string) {
    const res = await ApiClient.post("login", { email, password });
    TokenStorage.save(res.token!);
    return res.data;
  },

  async logout() {
    TokenStorage.clear();
    console.log("User logged out");
  },

  async getProfile() {
    const token = TokenStorage.get();
    if (!token) {
      throw new Error("No token found. Please login first.");
    }
    return await UserService.getProfile();
  },
};
