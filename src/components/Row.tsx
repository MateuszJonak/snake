import React from 'react';
import * as R from 'ramda';
import { GRID_WIDTH } from '../utils/constants';
import { useStoreState } from '../store/hooks';
import { Tile } from './Tile';

const tiles = [...Array(GRID_WIDTH)];
type Props = {
  indexRow: number;
};

export const Row: React.FC<Props> = ({ indexRow }) => {
  const snake = useStoreState(store => store.game.snake);

  return (
    <div>
      {tiles.map((_, indexColumn) => (
        <Tile
          key={indexColumn}
          isActive={R.includes([indexColumn, indexRow], snake)}
        />
      ))}
    </div>
  );
};
