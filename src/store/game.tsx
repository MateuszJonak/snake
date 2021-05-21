import { interval, of, animationFrameScheduler } from 'rxjs';
import { map, switchMap, withLatestFrom, takeWhile } from 'rxjs/operators';
import { equalPosition } from '../utils/positions';
import { Position } from '../types';
import { GRID_HEIGHT, GRID_WIDTH } from '../utils/constants';
import { scene$, Scene } from './scene';

const FPS = 60;
export const game$ = of('Start Game').pipe(
  map(() => interval(1000 / FPS, animationFrameScheduler)),
  switchMap((fps$) => fps$.pipe(withLatestFrom(scene$, (_, scene) => scene))),
  takeWhile((scene) => !isGameOver(scene)),
);

const isOverGrid = ({ x, y }: Position) =>
  x >= GRID_WIDTH || x < 0 || y >= GRID_HEIGHT || y < 0;

const isGameOver = (scene: Scene) => {
  const { snake } = scene;
  const [head, ...tail] = snake;
  return isOverGrid(head) || tail.some((p) => equalPosition(p, head));
};
