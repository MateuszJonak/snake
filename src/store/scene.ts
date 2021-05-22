import { interval, fromEvent, BehaviorSubject, combineLatest } from 'rxjs';
import {
  pluck,
  scan,
  map,
  switchMap,
  withLatestFrom,
  filter,
  startWith,
  distinctUntilChanged,
  share,
  skip,
  tap,
} from 'rxjs/operators';
import { moveToDirection, isOpposite, equalPosition } from '../utils/positions';
import { Position, DIRECTION } from '../types';
import { SNAKE_LENGTH, APPLE_COUNT } from '../utils/constants';
import { createApple, generateApples } from '../utils/apples';
import { generateSnake } from '../utils/snake';
import * as R from 'ramda';

export const initialSnake = generateSnake(SNAKE_LENGTH);
export const initialApples = generateApples(APPLE_COUNT, initialSnake);

const keys$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(pluck('code'));
const MAP_DIRECTION: Record<string, DIRECTION> = {
  ArrowUp: DIRECTION.UP,
  ArrowDown: DIRECTION.DOWN,
  ArrowLeft: DIRECTION.LEFT,
  ArrowRight: DIRECTION.RIGHT,
};
const length$ = new BehaviorSubject(SNAKE_LENGTH);

const snakeLength$ = length$.pipe(
  scan((step, snakeLength) => snakeLength + step),
  share(),
);
const direction$ = keys$.pipe(
  map((key) => MAP_DIRECTION[key]),
  filter((direction) => !!direction),
  startWith(DIRECTION.RIGHT),
  distinctUntilChanged(),
);

const POINTS_PER_APPLE = 1;
const score$ = snakeLength$.pipe(
  startWith(0),
  scan((score, _) => score + POINTS_PER_APPLE),
);

const initLevelUpgrade = 3;

const levelUpgrade$ = score$.pipe(
  scan((upgradeScore, score) => {
    if (score !== 0 && score % upgradeScore === 0) {
      return upgradeScore * 2;
    }
    return upgradeScore;
  }, initLevelUpgrade),
  distinctUntilChanged(),
);

const level$ = levelUpgrade$.pipe(scan((level) => level + 1, 0));

const defaultSpeed = 200;

const nextDirection = (prevDirection: DIRECTION, nextDirection: DIRECTION) =>
  isOpposite(prevDirection, nextDirection) ? prevDirection : nextDirection;

const move$ = level$.pipe(
  switchMap((level) => interval(defaultSpeed - level * 20)),
  withLatestFrom(direction$, (_, direction) => direction),
  scan(nextDirection),
);

const moveSnake = (
  snake: Position[],
  { move, snakeLength }: { move: DIRECTION; snakeLength: number },
): Position[] => {
  const [head, ...tail] = snake;
  let lastPosition = head;

  return [
    moveToDirection({ direction: move, pos: head }),
    ...tail.map<Position>((pos) => {
      const newPosition = { ...lastPosition };
      lastPosition = pos;
      return newPosition;
    }),
    ...(snakeLength > snake.length ? [snake[snake.length - 1]] : []),
  ];
};

const snake$ = move$.pipe(
  withLatestFrom(snakeLength$, (move, snakeLength) => ({
    move,
    snakeLength,
  })),
  scan(moveSnake, initialSnake),
  share(),
);

const eat = (apples: Position[], snake: Position[]) => {
  const [head] = snake;
  const eaten = apples.find((a) => equalPosition(a, head));
  if (eaten) {
    const withoutEaten = R.without([eaten], apples);
    return [...withoutEaten, createApple([...withoutEaten, ...snake])];
  }
  return apples;
};

const apples$ = snake$.pipe(
  scan(eat, initialApples),
  distinctUntilChanged(),
  share(),
);

apples$
  .pipe(
    skip(1),
    tap(() => {
      length$.next(POINTS_PER_APPLE);
    }),
  )
  .subscribe();

export type Scene = {
  snake: Position[];
  apples: Position[];
  score: number;
  level: number;
};

export const scene$ = combineLatest([
  snake$,
  apples$,
  score$,
  level$,
]).pipe<Scene>(
  map(([snake, apples, score, level]) => ({ snake, apples, score, level })),
);
