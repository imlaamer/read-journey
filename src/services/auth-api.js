import axios from 'axios';
import { AUTH_ENDPOINT } from '../helpers/endpoints/authEndpoint';

const BASE_URL = 'https://readjourney.b.goit.study/api'; //-> env !

export const authApiInstance = axios.create({
  baseURL: BASE_URL,
});

// export const setAuthorizationHeaders = (token) => {
//   userInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearTokenAuthInstance = () =>
//   (userInstance.defaults.headers.common.Authorization = '');

//------endpoints
// SIGNUP: '/users/signup',
//   SIGNIN: '/users/signin',
//   CURRENT: '/users/current',
//   REFRESH: '/users/current/refresh',
//   SIGNOUT: '/users/signout',

// --------sign up
export const signUpApi = async (credentials) => {
  const { data } = await authApiInstance.post(
    AUTH_ENDPOINT.SIGNUP,
    credentials
  );
  return data;
};

// --------sign in
export const signInApi = async (credentials) => {
  const { data } = await authApiInstance.post(
    AUTH_ENDPOINT.SIGNIN,
    credentials
  );
  return data;
};

// --------sign out
export const signOutApi = async (credentials) => {
  const { data } = await authApiInstance.post(
    AUTH_ENDPOINT.SIGNOUT,
    credentials
  );
  return data;
};

// -------- get Current User ?????

//no params
export const getCurrentUserApi = async () => {
  const { data } = await authApiInstance.get(
    AUTH_ENDPOINT.CURRENT
  );
  return data;
};

// {
//   "_id": "64b1e25f6b0a2ccb95591ec7",
//   "name": "TestName",
//   "email": "test@gmail.com",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjFlMjVmNmIwYTJjY2I5NTU5MWVjNyIsImlhdCI6MTY4OTM3OTQyMywiZXhwIjoxNjg5NDYyMjIzfQ.hT2Ta6pBhDR1vOF7LjcKxofyASDPjcTZtFi9CESKIuA",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQyZWRkMTEwYjBiOGRlZjQ4MTY1ZiIsImlhdCI6MTcwNTg0ODg3NSwiZXhwIjoxNzA2NDUzNjc1fQ.MONgGZKIUzqvq13OAlJvBctxJl1rt5OXMFQeIiZm2Ag"
// }

// -------- refresh User ?????
//no params
export const refreshUserApi = async () => {
  const { data } = await authApiInstance.get(
    AUTH_ENDPOINT.REFRESH
  );
  return data;
};
// -> response
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjFlMjVmNmIwYTJjY2I5NTU5MWVjNyIsImlhdCI6MTY4OTM3OTQyMywiZXhwIjoxNjg5NDYyMjIzfQ.hT2Ta6pBhDR1vOF7LjcKxofyASDPjcTZtFi9CESKIuA",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWQyZWRkMTEwYjBiOGRlZjQ4MTY1ZiIsImlhdCI6MTcwNTg0ODg3NSwiZXhwIjoxNzA2NDUzNjc1fQ.MONgGZKIUzqvq13OAlJvBctxJl1rt5OXMFQeIiZm2Ag"
// }