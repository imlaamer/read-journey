export const selectLoadingUser = (state) => state.auth.loadingUser;

export const selectLoading = (state) => state.auth.loading;

export const selectError = (state) => state.auth.error;

export const selectUser = (state) => state.auth.user;

export const selectUserName = (state) => state.auth.username;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectToken = (state) => state.auth.token;

export const selectRefreshingStatus = (state) => state.auth.isRefreshing;
