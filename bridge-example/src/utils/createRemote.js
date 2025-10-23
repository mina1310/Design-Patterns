const createRemote = (device) => {
  return {
    togglePower: () => {
      device.isEnable() ? device.disable() : device.enable();
    },
    volumeUp: () => {
      device.setVolume(device.getvolume() + 10);
    },
    volumeDown: () => {
      device.setVolume(device.getvolume() - 10);
    },
  };
};
