import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  authApiInstance,
  refreshUserApi,
  signInApi,
  signOutApi,
  signUpApi,
} from '../../services/auth-api';

export const setAuthorizationHeaders = (token) => {
  authApiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthorizationHeaders = () =>
  (authApiInstance.defaults.headers.common.Authorization = '');

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpApi(credentials);
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message);

      // if (error.response.status === 400) {
      //   toast.error(error.response?.data?.message); //?
      // } else if (error.response.status === 409) {
      //   toast.error(error.response?.data?.message);
      //   // Such email already exists
      // }
      // else {
      //   toast.error(error.response?.data?.message);

      // }

      //404
      //500
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signInApi(credentials);
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message);
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/signOut', async (_, ThunkAPI) => {
  try {
    await signOutApi();
    return;
  } catch (error) {
    toast.error(error.response?.data?.message); //
    return ThunkAPI.rejectWithValue(error.response.data.error.message);
  }
});

// getCurrentUserApi;

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (token, thunkApi) => {
    const persistedToken = token ?? thunkApi.getState().auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue();
    }
    try {
      const body = { idToken: persistedToken };
      const data = await axios.post(`${BASE_URL}:lookup?key=${API_KEY}`, body);
      return data.users[0];
    } catch (error) {
      const errMsg = error.response.data.error.message;
      if (errMsg === 'INVALID_ID_TOKEN') {
        thunkApi.dispatch(refreshToken());
      }
      return thunkApi.rejectWithValue(errMsg);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("You don't have a token!");

    try {
      setAuthorizationHeaders(token);
      // setTokenwaterPortionsInstance(token);
      const data = await refreshUserApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getUser = createAsyncThunk(
//   'auth/getUser',
//   async (token, thunkApi) => {
//     const persistedToken = token ?? thunkApi.getState().auth.token;

//     if (!persistedToken) {
//       return thunkApi.rejectWithValue();
//     }
//     try {
//       const body = { idToken: persistedToken };
//       const { data } = await axios.post(
//         `${BASE_URL}:lookup?key=${API_KEY}`,
//         body
//       );
//       return data.users[0];
//     } catch (error) {
//       const errMsg = error.response.data.error.message;
//       if (errMsg === 'INVALID_ID_TOKEN') {
//         thunkApi.dispatch(refreshToken());
//       }
//       return thunkApi.rejectWithValue(errMsg);
//     }
//   }
// );

// export const refreshToken = createAsyncThunk(
//   'auth/refreshToken',
//   async (_, thunkApi) => {
//     try {
//       const persistedRefreshToken = thunkApi.getState().auth.refreshToken;

//       if (!persistedRefreshToken) {
//         return thunkApi.rejectWithValue();
//       }

//       const body = {
//         grant_type: 'refresh_token',
//         refresh_token: persistedRefreshToken,
//       };
//       const { data } = await axios.post(
//         `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
//         body
//       );
//       thunkApi.dispatch(getUser(data.id_token));
//       return data;
//     } catch (error) {
//       const errMsg = error.response.data.error.message;
//       return thunkApi.rejectWithValue(errMsg);
//     }
//   }
// );

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (credentials, { rejectWithValue }) => {
    const body = { ...credentials, returnSecureToken: true };
    try {
      const { data } = await axios.post(
        `${BASE_URL}:update?key=${API_KEY}`,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
