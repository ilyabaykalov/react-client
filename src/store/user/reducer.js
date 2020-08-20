import { LOGIN_USER_FAILURE, LOGIN_USER_STARTED, LOGIN_USER_SUCCESS } from './actionTypes';

const initialState = {
  username: '',
  token: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_STARTED:
      return {
        ...state,
        loading: true,
        username: '',
        token: ''
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.user.username,
        token: action.user.token
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
