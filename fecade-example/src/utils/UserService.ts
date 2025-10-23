import { ApiClient } from "./ApiClient";

export const UserService = {
  async getProfile() {
    return await ApiClient.get("myData");
  },
};
