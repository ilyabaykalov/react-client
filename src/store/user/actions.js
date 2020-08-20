import axios from '@utils/axios';

import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_STARTED,
  LOGIN_USER_SUCCESS,
} from './actionTypes';

export const loginUserRequest = (data) => {
  return (dispatch) => {
    dispatch(loginUserStarted());

    const user = new FormData();

    if (data.username && data.password) {
      user.append('username', data.username);
      user.append('password', data.password);
    }

    axios
        .post('/auth/token/', data)
        .then(({ data }) => {
          dispatch(loginUserSuccess(data));
        })
        .catch((error) => dispatch(loginUserFailure(error)));
  };
};

const loginUserStarted = () => ({
  type: LOGIN_USER_STARTED,
});
const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});
const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  error,
});
