import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { reducers } from './reducers';

const platfromsSlice = createSlice({
  name: 'platforms',
  initialState: {
    loading: false,
    error: null,
    items: []
  },
  reducers,
  extraReducers: {
    [HYDRATE]: (state, actions) => {
      Object.assign(state, actions.payload.platforms);
    }
  }
});

export const { loadPlatforms, loadPlatformsSuccess, loadPlatformsFailure } =
  platfromsSlice.actions;

export default platfromsSlice.reducer;
