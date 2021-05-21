import React, { useEffect, useState } from 'react';
import { useStoreActions } from '../store/hooks';
import { Grid } from '../components/Grid';
import { game$ } from '../store/game';
import styled from '@emotion/styled';

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
    <Container>
      <Title>Snake</Title>
      <ScoreInfo>
        Score: <strong>{score}</strong>
      </ScoreInfo>
      <Grid />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const ScoreInfo = styled.p`
  font-size: 1.25rem;
`;
