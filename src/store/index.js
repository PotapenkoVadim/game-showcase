import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games';
import gameReducer from './game';
import platformsReducer from './platforms';

export function makeStore() {
  return configureStore({
    reducer: {
      games: gamesReducer,
      game: gameReducer,
      platforms: platformsReducer
    }
  });
}

export const store = makeStore();

export const wrapper = createWrapper(makeStore, {
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state)
});
