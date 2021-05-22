import { Scene } from './scene';
import { createContext, useContext, useEffect, useState } from 'react';
import { game$ } from './game';
import { initialApples, initialSnake } from './scene';

export type StoreModel = Scene;

const defaultStoreState = {
  snake: initialSnake,
  apples: initialApples,
  score: 0,
  level: 1,
};
const StoreStateContext = createContext<StoreModel>(defaultStoreState);

export const StoreProvider: React.FC = ({ children }) => {
  const [scene, setScene] = useState(defaultStoreState);
  useEffect(() => {
    const sub = game$.subscribe((scene) => {
      setScene(scene);
    });
    return () => sub.unsubscribe();
  }, [setScene]);
  return (
    <StoreStateContext.Provider value={scene}>
      {children}
    </StoreStateContext.Provider>
  );
};

export const useStoreState = () => useContext(StoreStateContext);
