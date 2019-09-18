import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import { Main } from './pages/Main';

const Root: React.FC = () => (
  <StoreProvider store={store}>
    <Main />
  </StoreProvider>
);

export default Root;
