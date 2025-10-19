import { bankAccount, withdrawFromAccount } from "./bankAccount";

export const bankProxy = new Proxy(bankAccount, {
  get(target, prop) {
    if (prop === "withdraw") {
      return function (requester, amount) {
        if (requester !== target.owner) {
          return { success: false, message: "Access denied" };
        }
        return withdrawFromAccount(target, amount);
      };
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop === "balance" && typeof value !== "number") {
      throw new Error("Balance must be a number");
    }
    target[prop] = value;
    return true;
  },
});
