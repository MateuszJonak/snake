import { Position } from '../types';

export const generateSnake = (length: number) => {
  let snake: Position[] = [];

  for (let i = length - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }

  return snake;
};
