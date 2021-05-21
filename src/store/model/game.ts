import { action, Action } from 'easy-peasy';
import { Position } from '../../types';
import { generateSnake } from '../../utils/snake';
import { generateApples } from '../../utils/apples';

import { SNAKE_LENGTH, APPLE_COUNT } from '../../utils/constants';

export const initialSnake = generateSnake(SNAKE_LENGTH);
export const initialApples = generateApples(APPLE_COUNT, initialSnake);

export interface GameModel {
  snake?: Position[];
  setSnake: Action<GameModel, Position[]>;
  apples: Position[];
  setApples: Action<GameModel, Position[]>;
}

export const game: GameModel = {
  snake: initialSnake,
  setSnake: action((state, snake) => {
    state.snake = snake;
  }),
  apples: initialApples,
  setApples: action((state, apples) => {
    state.apples = apples;
  }),
};
