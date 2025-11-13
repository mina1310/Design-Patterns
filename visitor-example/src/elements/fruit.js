export const fruit = (type, title, price, weight) => ({
  price,
  title,
  type,
  weight,
  accept: (visitor) => {
    return visitor.fruit({ type, title, price, weight });
  },
});
