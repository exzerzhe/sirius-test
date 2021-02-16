import { VALUES } from "./constants";
export const createStar = () => {
  let x = Math.floor(Math.random() * 100);
  const value = VALUES[Math.floor(Math.random() * VALUES.length)];
  return {
    value,
    x,
    y: -200,
  };
};
export const removeStar = (stars, index) => {
  const newStars = [...stars];
  newStars.splice(index, 1);
  return newStars;
};
