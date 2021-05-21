import React, { useEffect, useState } from 'react';
import { useStoreActions } from '../store/hooks';
import { Grid } from '../components/Grid';
import { game$ } from '../store/game';

export const Game: React.FC = () => {
  const { setSnake, setApples } = useStoreActions((store) => ({
    setSnake: store.game.setSnake,
    setApples: store.game.setApples,
  }));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const sub = game$.subscribe((scene) => {
      setSnake(scene.snake);
      setApples(scene.apples);
      setScore(scene.score);
    });
    return () => sub.unsubscribe();
  }, [setSnake, setApples, setScore]);

  return (
    <>
      <h1>Snake</h1>
      Score: {score}
      <Grid />
    </>
  );
};
