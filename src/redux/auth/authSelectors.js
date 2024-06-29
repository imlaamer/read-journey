export const selectUserName = (state) => state.auth.user.username;
export const selectIsLoggedIn = (state) => !!state.auth.token; 
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectLoadingUser = (state) => state.auth.loadingUser;
export const selectError = (state) => state.auth.error;



// export const getLoading = (state) => state.auth.loading;

// export const getError = (state) => state.auth.error;

// export const getUser = (state) => state.auth.user;

// export const getEmailVerificationStatus = (state) => state.auth.user.verify;

// export const getLoggedInStatus = (state) => state.auth.isLoggedIn;

// export const getToken = (state) => state.auth.token;

// export const getRefreshingStatus = (state) => state.auth.isRefreshing;

// export const selectUpdateUserData = (state) => state.auth.user;
// export const selectAvatarLoading = (state) => state.auth.isAvatarLoading;

// export const selectWaterRate = (state) => state.auth.user.waterRate;


