export const createRadio = () => {
  let on = false;
  let volume = 30;
  return {
    isEnable: () => on,
    enable: () => (on = true),
    disable: () => (on = false),
    getVolume: () => volume,
    setVolume: (number) => (volume = number),
    toString: () => `Radio on :${on} and the volume is ${volume}`,
  };
};
