import React, { useEffect } from 'react';
import {
  interval,
  of,
  fromEvent,
  BehaviorSubject,
  animationFrameScheduler,
  combineLatest,
} from 'rxjs';
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
  takeWhile,
  // skip,
  // tap,
} from 'rxjs/operators';
import { useStoreActions } from '../store/hooks';
import { DIRECTION } from '../store/model';
import { Grid } from '../components/Grid';
import {
  moveToDirection,
  isOpposite,
  isPositionEqual,
} from '../utils/positions';
import { Position } from '../types';
import {
  APPLE_COUNT,
  GRID_HEIGHT,
  GRID_WIDTH,
  SNAKE_LENGTH,
} from '../utils/constants';
import { generateSnake } from '../utils/snake';
import { generateApples } from '../utils/apples';
import * as R from 'ramda';

const keys$ = fromEvent(document, 'keydown').pipe<string>(pluck('code'));
const MAP_DIRECTION: Record<string, DIRECTION> = {
  ArrowUp: DIRECTION.UP,
  ArrowDown: DIRECTION.DOWN,
  ArrowLeft: DIRECTION.LEFT,
  ArrowRight: DIRECTION.RIGHT,
};
const length$ = new BehaviorSubject<number>(SNAKE_LENGTH);

const nextDirection = (prevDirection: DIRECTION, nextDirection: DIRECTION) =>
  isOpposite(prevDirection, nextDirection) ? prevDirection : nextDirection;

const snakeLength$ = length$.pipe(
  scan((step, snakeLength) => snakeLength + step),
  share(),
);
const direction$ = keys$.pipe(
  map(key => MAP_DIRECTION[key]),
  filter(direction => !!direction),
  startWith(DIRECTION.RIGHT),
  distinctUntilChanged(),
);

const gameSpeed$ = new BehaviorSubject(200);

// TEST for speed up
// let increment = 1;
// setInterval(() => {
//   increment += 1;
//   gameSpeed$.next(200 / increment);
// }, 3000);

const move$ = gameSpeed$.pipe(
  switchMap(i =>
    interval(i).pipe(
      withLatestFrom(direction$, (_, direction) => ({
        direction,
      })),
      scan(
        (lastDirection, { direction }): DIRECTION =>
          nextDirection(lastDirection, direction),
        DIRECTION.RIGHT,
      ),
    ),
  ),
);

const moveSnake = (
  snake: Position[],
  { move, snakeLength }: { move: DIRECTION; snakeLength: number },
): Position[] => {
  const [head, ...tail] = snake;
  let lastPosition = head;

  return [
    moveToDirection({ direction: move, pos: head }),
    ...tail.map<Position>(pos => {
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
  scan(moveSnake, generateSnake(SNAKE_LENGTH)),
  share(),
);

const eat = (apples: Position[], snake: Position[]) => {
  const [head] = snake;
  const eaten = apples.find(a => isPositionEqual(a, head));
  if (eaten) {
    return [...R.without([eaten], apples), ...generateApples(1)];
  }
  return apples;
};
const apples$ = snake$.pipe(
  scan(eat, generateApples(APPLE_COUNT)),
  distinctUntilChanged(),
  share(),
);

// const appleEaten$ = apples$
//   .pipe(
//     skip(1),
//     tap(() => length$.next(POINTS_PER_APPLE)),
//   )
//   .subscribe();

const POINTS_PER_APPLE = 1;
const score$ = snakeLength$.pipe(
  startWith(0),
  scan((score, _) => score + POINTS_PER_APPLE),
);
export type Scene = {
  snake: Position[];
  apples: Position[];
  score: number;
};

const scene$ = combineLatest([snake$, apples$, score$]).pipe<Scene>(
  map(([snake, apples, score]) => ({ snake, apples, score })),
);

const FPS = 60;
export const game$ = of('Start Game').pipe(
  map(() => interval(1000 / FPS, animationFrameScheduler)),
  switchMap(fps$ => fps$.pipe(withLatestFrom(scene$, (_, scene) => scene))),
  takeWhile(scene => !isGameOver(scene)),
);

const isOverGrid = ({ x, y }: Position) =>
  x >= GRID_WIDTH || x < 0 || y >= GRID_HEIGHT || y < 0;

const isGameOver = (scene: Scene) => {
  const { snake } = scene;
  const [head, ...tail] = snake;
  return isOverGrid(head) || tail.some(p => isPositionEqual(p, head));
};

export const Game: React.FC = () => {
  const { setSnake, setApples } = useStoreActions(store => ({
    setSnake: store.game.setSnake,
    setApples: store.game.setApples,
  }));

  useEffect(() => {
    const sub = game$.subscribe(scene => {
      setSnake(scene.snake);
      setApples(scene.apples);
    });
    return () => sub.unsubscribe();
  });

  return (
    <>
      <h1>Snake</h1>
      <Grid />
    </>
  );
};
