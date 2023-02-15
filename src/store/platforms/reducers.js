export const reducers = {
  loadPlatforms(state) {
    Object.assign(state, { loading: true });
  },

  loadPlatformsSuccess(state, action) {
    Object.assign(state, {
      loading: false,
      items: action.payload.platforms.results
    });
  },

  loadPlatformsFailure(state, action) {
    Object.assign(state, {
      loading: false,
      error: action.payload
    });
  }
};
