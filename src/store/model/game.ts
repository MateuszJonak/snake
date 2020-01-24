import { action, Action } from 'easy-peasy';
import { DIRECTION, Position } from '../../types';
import { moveToDirection, isOpposite } from '../../utils/positions';

export interface GameModel {
  direction: DIRECTION;
  setDirection: Action<GameModel, DIRECTION>;
  dots: Position[];
  snake: Position[];
  goToDirection: Action<GameModel>;
}

export const game: GameModel = {
  direction: DIRECTION.RIGHT,
  setDirection: action((state, direction) => {
    const { snake, direction: oldDirection } = state;
    if (snake.length === 1 || !isOpposite(oldDirection, direction)) {
      state.direction = direction;
    }
  }),
  snake: [[0, 0], [0, 0], [0, 0]],
  dots: [[1, 1]],
  goToDirection: action(state => {
    const { direction, snake } = state;
    const [head, ...tail] = snake;
    let lastPosition = head;

    state.snake = [
      moveToDirection({ direction, pos: head }),
      ...tail.map<Position>(pos => {
        const newPosition = [...lastPosition] as Position;
        lastPosition = pos;
        return newPosition;
      }),
    ];
  }),
};
