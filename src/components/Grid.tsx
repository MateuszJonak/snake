import React from 'react';
import styled from '@emotion/styled';
import { GRID_HEIGHT, GRID_WIDTH, TILE_SIZE } from '../utils/constants';
import { Column } from './Column';

const rows = [...Array(GRID_HEIGHT)];
export const Grid: React.FC = () => (
  <GridContainer tileWidth={20}>
    {rows.map((_, index) => (
      <Column key={index} indexColumn={index}></Column>
    ))}
  </GridContainer>
);

const GridContainer = styled.div<{
  tileWidth: number;
}>`
  display: flex;
  max-width: ${(TILE_SIZE + 2 + 2) * GRID_WIDTH}px;
  max-height: ${(TILE_SIZE + 2 + 2) * GRID_HEIGHT}px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2px;
  background-color: #fdfdfd;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
`;
