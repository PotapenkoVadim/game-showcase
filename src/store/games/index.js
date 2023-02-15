import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { reducers } from './reducers';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentPage: 1,
    totalPages: 0,
    loading: false,
    error: null,
    items: []
  },
  reducers,
  extraReducers: {
    [HYDRATE]: (state, actions) => {
      Object.assign(state, actions.payload.games);
    }
  }
});

export const { loadGames, loadGamesSuccess, loadGamesFailure } =
  gamesSlice.actions;

export default gamesSlice.reducer;
