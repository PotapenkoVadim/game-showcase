import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import gamesReducer from './games';
import platformsReducer from './platforms';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function makeStore() {
  return configureStore({
    reducer: {
      games: gamesReducer,
      platforms: platformsReducer
    },
    middleware: [sagaMiddleware]
  });
}

export const store = makeStore();

sagaMiddleware.run(sagas);

export const wrapper = createWrapper(makeStore, {
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state)
});
