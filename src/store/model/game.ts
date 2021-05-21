import { action, Action } from 'easy-peasy';
import { Position } from '../../types';
import { generateSnake } from '../../utils/snake';
import { SNAKE_LENGTH } from '../../utils/constants';

export interface GameModel {
  dots: Position[];
  snake?: Position[];
  setSnake: Action<GameModel, Position[]>;
  apples: Position[];
  setApples: Action<GameModel, Position[]>;
}

export const game: GameModel = {
  snake: generateSnake(SNAKE_LENGTH),
  dots: [{ x: 1, y: 1 }],
  setSnake: action((state, snake) => {
    state.snake = snake;
  }),
  apples: [],
  setApples: action((state, apples) => {
    state.apples = apples;
  }),
};
