import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { GRID_HEIGHT, GRID_WIDTH } from '../utils/constants';
import { useStoreActions } from '../store/hooks';
import { DIRECTION } from '../store/model';
import { Row } from './Row';

type Props = {
  tileWidth: number;
};
const rows = [...Array(GRID_HEIGHT)];
const GridContainer = styled.div<Props>`
  display: flex;
  max-width: ${props => (props.tileWidth + 2 + 2) * GRID_WIDTH}px;
  max-height: ${props => (props.tileWidth + 2 + 2) * GRID_HEIGHT}px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Grid: React.FC = () => {
  const setDirection = useStoreActions(store => store.grid.setDirection);
  const goToDirection = useStoreActions(store => store.grid.goToDirection);

  useEffect(() => {
    const interval = setInterval(goToDirection, 200);
    return () => clearInterval(interval);
  }, [goToDirection]);
  useEffect(() => {
    const [body] = document.getElementsByTagName('body');
    body.onkeydown = ({ key }) => {
      switch (key) {
        case 'ArrowUp':
          return setDirection(DIRECTION.UP);
        case 'ArrowDown':
          return setDirection(DIRECTION.DOWN);
        case 'ArrowLeft':
          return setDirection(DIRECTION.LEFT);
        case 'ArrowRight':
          return setDirection(DIRECTION.RIGHT);
      }
    };
  }, [setDirection]);

  return (
    <GridContainer tileWidth={30}>
      {rows.map((_, index) => (
        <Row key={index} indexRow={index}></Row>
      ))}
    </GridContainer>
  );
};
