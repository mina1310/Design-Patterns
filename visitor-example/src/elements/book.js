export const book = (quantity, type, title, price) => ({
  price,
  title,
  type,
  quantity,
  accept: (visitor) => {
    return visitor.book({ quantity, type, title, price });
  },
});
