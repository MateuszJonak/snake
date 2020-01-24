import { game, GameModel } from './game';

export enum DIRECTION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  UP = 'UP',
  DOWN = 'DOWN',
}

export interface StoreModel {
  game: GameModel;
}

export const model: StoreModel = {
  game,
};
