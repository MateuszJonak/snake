import * as R from 'ramda';
import { Position, DIRECTION } from '../types';
import { GRID_HEIGHT, GRID_WIDTH } from './constants';

export const positionZero: Position = [0, 0];
export const moveToRight = ([x, y]: Position): Position =>
  y === GRID_HEIGHT - 1 ? positionZero : [x, y + 1];
export const moveToLeft = ([x, y]: Position): Position =>
  y === 0 ? positionZero : [x, y - 1];
export const moveToUp = ([x, y]: Position): Position =>
  x === 0 ? positionZero : [x - 1, y];
export const moveToDown = ([x, y]: Position): Position =>
  x === GRID_WIDTH - 1 ? positionZero : [x + 1, y];

const MAP_POSITION: Record<DIRECTION, (pos: Position) => Position> = {
  [DIRECTION.RIGHT]: moveToRight,
  [DIRECTION.LEFT]: moveToLeft,
  [DIRECTION.UP]: moveToUp,
  [DIRECTION.DOWN]: moveToDown,
};

export const moveToDirection = ({
  direction,
  pos,
}: {
  direction: DIRECTION;
  pos: Position;
}): Position => MAP_POSITION[direction](pos);

const VERTICAL_DIRECTIONS = [DIRECTION.UP, DIRECTION.DOWN];
const HORIZONTAL_DIRECTIONS = [DIRECTION.LEFT, DIRECTION.RIGHT];
export const isOpossiteForVertical = R.compose(
  R.equals(0),
  R.length,
  R.without(VERTICAL_DIRECTIONS),
);
export const isOpossiteForHorizontal = R.compose(
  R.equals(0),
  R.length,
  R.without(HORIZONTAL_DIRECTIONS),
);

export const isOpposite = (direction: DIRECTION, newDirection: DIRECTION) =>
  R.either(isOpossiteForVertical, isOpossiteForHorizontal)([
    direction,
    newDirection,
  ]);
