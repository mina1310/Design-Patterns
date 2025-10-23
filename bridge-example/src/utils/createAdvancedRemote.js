const createAdvancedRemote = (device) => {
  const base = createRemote(device);
  return {
    ...base,
    mute: device.setvolume(0),
  };
};
