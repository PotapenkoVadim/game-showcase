import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { reducers } from './reducers';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    loading: false,
    item: null,
    error: null
  },
  reducers,
  extraReducers: {
    [HYDRATE]: (state, actions) => {
      Object.assign(state, actions.payload.game);
    }
  }
});

export const { loadGame, loadGameSuccess, loadGameFailure } = gameSlice.actions;

export default gameSlice.reducer;
