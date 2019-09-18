import { grid, GridModel } from './grid';

export enum DIRECTION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  UP = 'UP',
  DOWN = 'DOWN',
}

export interface StoreModel {
  grid: GridModel;
}

export const model: StoreModel = {
  grid,
};
