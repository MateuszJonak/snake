import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import { Game } from './pages/Game';

const Root: React.FC = () => (
  <StoreProvider store={store}>
    <Game />
  </StoreProvider>
);

export default Root;
