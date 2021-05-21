import { Position } from '../types';
import { getRandomPosition, hasPosition } from './positions';

export function createApple(omitPositions: Position[]) {
  let apple = getRandomPosition();
  while (hasPosition(apple, omitPositions)) {
    apple = getRandomPosition();
  }
  return apple;
}

export const generateApples = (count: number, omitPositions: Position[]) => {
  const apples = [];
  const toOmit = [...omitPositions];
  for (let i = 0; i < count; i++) {
    const apple = createApple(toOmit);
    apples.push(apple);
    toOmit.push(apple);
  }

  return apples;
};
