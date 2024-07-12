import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  clearAuthorizationHeaders,
  setAuthorizationHeaders,
  signIn,
  signUp,
  signOut,
  // signIn,
  // getUser,
  // refreshToken,
  // updateProfile,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  token: null, //''
  refreshToken: null, // ?

  loading: false,
  loadingUser: false, // ?
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ------------ SIGN UP ------------
      .addCase(signUp.fulfilled, (state, { payload }) => {
        // state.user.email = payload.email;
        // console.log(payload, 'payload signup');
        state.loading = false;
        state.isLoggedIn = true;

        state.user.name = payload.name;
        state.token = payload.token;
        setAuthorizationHeaders(payload.token);
      })
      //  ------------  SIGN IN  ------------
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;

        state.user.name = payload.name;
        state.token = payload.token;
        setAuthorizationHeaders(payload.token);
        // setTokenwaterPortionsInstance(payload.token);
      })
      // ------------   SIGN OUT  ------------
      .addCase(signOut.fulfilled, () => {
        clearAuthorizationHeaders();
        // clearTokenwaterPortionsInstance();
        return initialState;
      })
      // ------------ GET CURRENT USER ------------
      // .addCase(getCurrentUser.fulfilled, () => {

      // })

      // ------------  REFRESH  ------------
      // .addCase(refreshUser.pending, (state) => {
      //   state.isRefreshing = true;
      //   state.loading = false; // why not true?
      //   state.error = null;
      // })
      // .addCase(refreshUser.fulfilled, (state, { payload }) => {
      //   state.loading = false;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      //   // state.user = { ...payload.user }; //?
      // })
      // .addCase(refreshUser.rejected, (state) => {
      //   state.isRefreshing = false;
      // })

      //pending
      .addMatcher(
        isAnyOf(signUp.pending, signIn.pending, signOut.pending),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )
      //rejected
      .addMatcher(
        isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

// export const {  } = authSlice.actions;
