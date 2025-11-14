export const minlenght = (value, next) => {
  if (value.length < 3) return "حداقل طول کاراکتر باید 3 باشد";
  return next(value);
};
