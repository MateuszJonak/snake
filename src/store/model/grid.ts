import { action, Action } from 'easy-peasy';
import { GRID_HEIGHT, GRID_WIDTH } from '../../utils/constants';

export enum DIRECTION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  UP = 'UP',
  DOWN = 'DOWN',
}
export interface GridModel {
  direction: DIRECTION;
  setDirection: Action<GridModel, DIRECTION>;
  position: [number, number];
  goToDirection: Action<GridModel>;
}

const defaultState: [number, number] = [0, 0];

export const grid: GridModel = {
  direction: DIRECTION.RIGHT,
  setDirection: action((store, direction) => {
    store.direction = direction;
  }),
  position: defaultState,
  goToDirection: action(store => {
    const [x, y] = store.position;
    switch (store.direction) {
      case DIRECTION.RIGHT:
        store.position = y === GRID_HEIGHT - 1 ? defaultState : [x, y + 1];
        break;
      case DIRECTION.LEFT:
        store.position = y === 0 ? defaultState : [x, y - 1];
        break;
      case DIRECTION.UP:
        store.position = x === 0 ? defaultState : [x - 1, y];
        break;
      case DIRECTION.DOWN:
        store.position = x === GRID_WIDTH - 1 ? defaultState : [x + 1, y];
        break;
    }
  }),
};
