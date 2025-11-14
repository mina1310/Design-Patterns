export const composehandler = (handlers) => {
  return (value) => {
    const dispatch = (index, currentValue) => {
      if (index >= handlers.length) return "معتبر است";
      const handler = handlers[index];
      return handler(currentValue, (nextValue) =>
        dispatch(index + 1, nextValue)
      );
    };
    return dispatch(0, value);
  };
};
