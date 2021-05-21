import * as R from 'ramda';
import { Position, DIRECTION } from '../types';
import { GRID_HEIGHT, GRID_WIDTH } from './constants';

export const positionZero: Position = { x: 0, y: 0 };
export const moveToDown = ({ x, y }: Position): Position => ({ x, y: y + 1 });
export const moveToUp = ({ x, y }: Position): Position => ({ x, y: y - 1 });
export const moveToLeft = ({ x, y }: Position): Position => ({ x: x - 1, y });
export const moveToRight = ({ x, y }: Position): Position => ({ x: x + 1, y });

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
  R.without(HORIZONTAL_DIRECTIONS),
);
export const isOpossiteForHorizontal = R.compose(
  R.equals(0),
  R.length,
  R.without(VERTICAL_DIRECTIONS),
);

export const isOpposite = (direction: DIRECTION, newDirection: DIRECTION) =>
  R.either(isOpossiteForVertical, isOpossiteForHorizontal)([
    direction,
    newDirection,
  ]);

const getRandomNumber = (minimum: number, maximum: number) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPosition = (): Position => ({
  x: getRandomNumber(0, GRID_WIDTH),
  y: getRandomNumber(0, GRID_HEIGHT),
});

export const isPositionEqual = (p1: Position, p2: Position) =>
  p1.x === p2.x && p1.y === p2.y;
