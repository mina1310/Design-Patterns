export const totalPrice = {
  book: (item) => Number(item.price),
  fruit: (item) => Number(item.price) * Number(item.weight),
};
