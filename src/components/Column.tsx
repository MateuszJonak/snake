import React from 'react';
import { GRID_WIDTH } from '../utils/constants';
import { useStoreState } from '../store';
import { Tile } from './Tile';
import { hasPosition, equalPosition } from '../utils/positions';

const tiles = [...Array(GRID_WIDTH)];
type Props = {
  indexColumn: number;
};

export const Column: React.FC<Props> = ({ indexColumn }) => {
  const { snake, apples } = useStoreState();

  if (!snake) {
    return null;
  }

  return (
    <div>
      {tiles.map((_, indexRow) => {
        const pos = { x: indexColumn, y: indexRow };
        return (
          <Tile
            key={indexRow}
            isActive={hasPosition(pos, snake)}
            isApple={hasPosition(pos, apples)}
            isHead={equalPosition(pos, snake[0])}
          />
        );
      })}
    </div>
  );
};
