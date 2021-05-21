import React from 'react';
import { css, Global } from '@emotion/react';
import { StoreProvider } from './store';
import { Game } from './pages/Game';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700&display=swap');
  body {
    margin: 0;
    height: 100%;
  }

  html {
    height: 100%;
    font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

const Root: React.FC = () => (
  <StoreProvider>
    <Global styles={globalStyles} />
    <Game />
  </StoreProvider>
);

export default Root;
