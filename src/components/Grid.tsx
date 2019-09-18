import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GRID_HEIGHT, GRID_WIDTH } from '../utils/constants';
import { useStoreState, useStoreActions } from '../store/hooks';
import { DIRECTION } from '../store/model';

const rows = [...Array(GRID_HEIGHT)];
const GridContainer = styled.div`
  display: flex;
  max-width: ${(props: { tileWidth: number }) =>
    (props.tileWidth + 2 + 2) * GRID_WIDTH}px;
  max-height: ${(props: { tileWidth: number }) =>
    (props.tileWidth + 2 + 2) * GRID_HEIGHT}px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Grid: React.FC = () => {
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
      {rows.map((row, index) => (
        <Row indexRow={index}></Row>
      ))}
    </GridContainer>
  );
};

const tiles = [...Array(GRID_WIDTH)];
const Row: React.FC<{ indexRow: number }> = ({ indexRow }) => {
  const [x, y] = useStoreState(store => store.grid.position);

  return (
    <div>
      {tiles.map((tile, indexColumn) => (
        <Tile isActive={x === indexColumn && y === indexRow} />
      ))}
    </div>
  );
};

const Tile = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  margin: 1px;
  background-color: ${(props: { isActive: boolean }) =>
    props.isActive ? 'yellow' : 'transparent'};
`;
export default Grid;
