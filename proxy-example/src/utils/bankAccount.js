export const bankAccount = {
  owner: "Mina",
  balance: 1000,
};

export function withdrawFromAccount(target, amount) {
  if (amount > target.balance) {
    return { success: false, message: "Insufficient balance" };
  }
  target.balance -= amount;
  return {
    success: true,
    message: "Withdrawn successfully",
    balance: target.balance,
  };
}
