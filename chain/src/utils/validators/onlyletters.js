export const onlyletters = (value, next) => {
  if (!/^[a-zA-Z]+$/.test(value)) return "از حروف انگلیسی استفاده کنید";
  return next(value);
};
