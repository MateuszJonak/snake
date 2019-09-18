import React from 'react';
import { GRID_WIDTH } from '../utils/constants';
import { useStoreState } from '../store/hooks';
import { Tile } from './Tile';

const tiles = [...Array(GRID_WIDTH)];
export const Row: React.FC<{ indexRow: number }> = ({ indexRow }) => {
  const [x, y] = useStoreState(store => store.grid.position);

  return (
    <div>
      {tiles.map((_, indexColumn) => (
        <Tile
          key={indexColumn}
          isActive={x === indexColumn && y === indexRow}
        />
      ))}
    </div>
  );
};
