import { atom } from "recoil";
import { IStars } from "../interfaces";
export const controlOptions = atom({
  key: "controlOptions",
  default: {
    isRunning: false,
    speed: 5,
  },
});

export const starsState = atom({
  key: "starsState",
  default: [] as IStars[],
});
