export const createRemote = (device) => {
  return {
    togglePower: () => {
      device.isEnable() ? device.disable() : device.enable();
    },
    volumeUp: () => {
      device.setVolume(device.getVolume() + 10);
    },
    volumeDown: () => {
      device.setVolume(device.getVolume() - 10);
    },
  };
};
