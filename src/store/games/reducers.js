export const reducers = {
  loadGames(state) {
    Object.assign(state, { loading: true });
  },

  loadGamesSuccess(state, action) {
    Object.assign(state, {
      loading: false,
      items: [...state.items, ...action.payload.games.results],
      currentPage: action.payload.page,
      totalPages: Math.ceil(action.payload.games.count / 20)
    });
  },

  loadGamesFailure(state, action) {
    Object.assign(state, {
      loading: false,
      error: action.payload
    });
  }
};
