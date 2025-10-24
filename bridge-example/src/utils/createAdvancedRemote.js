import { createRemote } from "./createRemote";

export const createAdvancedRemote = (device) => {
  const base = createRemote(device);
  return {
    ...base,
    mute: () => device.setVolume(0),
  };
};
