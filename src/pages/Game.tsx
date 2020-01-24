import React, { useEffect } from 'react';
import { useStoreActions } from '../store/hooks';
import { DIRECTION } from '../store/model';
import { useInterval } from '../hooks/useInterval';
import { Grid } from '../components/Grid';

export const Game: React.FC = () => {
  const { setDirection, goToDirection } = useStoreActions(store => ({
    setDirection: store.game.setDirection,
    goToDirection: store.game.goToDirection,
  }));

  useInterval(goToDirection, 200);
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
    <>
      <h1>Snake</h1>
      <Grid />
    </>
  );
};
