import React from 'react';
import styled from '@emotion/styled';
import { GRID_HEIGHT, GRID_WIDTH } from '../utils/constants';
import { Row } from './Row';

type Props = {
  tileWidth: number;
};

const rows = [...Array(GRID_HEIGHT)];
export const Grid: React.FC = () => (
  <GridContainer tileWidth={30}>
    {rows.map((_, index) => (
      <Row key={index} indexRow={index}></Row>
    ))}
  </GridContainer>
);

const GridContainer = styled.div<Props>`
  display: flex;
  max-width: ${props => (props.tileWidth + 2 + 2) * GRID_WIDTH}px;
  max-height: ${props => (props.tileWidth + 2 + 2) * GRID_HEIGHT}px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
