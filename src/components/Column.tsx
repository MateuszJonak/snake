import React from 'react';
import * as R from 'ramda';
import { GRID_WIDTH } from '../utils/constants';
import { useStoreState } from '../store/hooks';
import { Tile } from './Tile';

const tiles = [...Array(GRID_WIDTH)];
type Props = {
  indexColumn: number;
};

export const Column: React.FC<Props> = ({ indexColumn }) => {
  const snake = useStoreState(store => store.game.snake);
  const apples = useStoreState(store => store.game.apples);

  if (!snake) {
    return null;
  }

  return (
    <div>
      {tiles.map((_, indexRow) => {
        return (
          <Tile
            key={indexRow}
            isActive={R.includes({ x: indexColumn, y: indexRow }, snake)}
            isApple={R.includes({ x: indexColumn, y: indexRow }, apples)}
            isHead={snake[0].x === indexColumn && snake[0].y === indexRow}
          />
        );
      })}
    </div>
  );
};
