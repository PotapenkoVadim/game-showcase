export const reducers = {
  loadGame(state) {
    Object.assign(state, { loading: true });
  },

  loadGameSuccess(state, action) {
    Object.assign(state, {
      loading: false,
      item: action.payload
    });
  },

  loadGameFailure(state, action) {
    Object.assign(state, {
      loading: false,
      error: action.payload
    });
  }
};
