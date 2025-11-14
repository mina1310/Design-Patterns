export const notempty = (value, next) => {
  if (!value.trim()) return "لطفا فیلد را پر کنید";
  return next(value);
};
