import React from 'react';
import { useStoreState } from '../store';
import { Grid } from '../components/Grid';
import styled from '@emotion/styled';

export const Game: React.FC = () => {
  const { score } = useStoreState();

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
