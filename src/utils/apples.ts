import { getRandomPosition } from './positions';

export const generateApples = (count: number) => {
  const apples = [];

  for (let i = 0; i < count; i++) {
    apples.push(getRandomPosition());
  }

  return apples;
};
