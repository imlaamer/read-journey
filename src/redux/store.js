import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './auth/authSlice';
// import { nanniesSlice } from '../redux copy/nannies/nanniesSlice';
import storage from 'redux-persist/lib/storage';

// const persistNanniesConfig = {
//   key: 'nannies',
//   storage,
//   whitelist: ['filter', 'favorites'],
// };

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'], //'refreshToken' - для  чого сервер віддає рефреш токен при реєстрації?
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authSlice.reducer),
    // nannies: persistReducer(persistNanniesConfig, nanniesSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
