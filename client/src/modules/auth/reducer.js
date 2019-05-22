import axios from 'axios';
const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
const HANDLE_FORM_SUBMIT = 'HANDLE_FORM_SUBMIT'

const defaultState = {
  email: '',
  password: '',
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_FORM_SUBMIT:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case AUTH_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case AUTH_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  };
};

export const handleFormSubmit = (data) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:5000/api/user/login',
    data: {
      'login': data.login,
      'password': data.password,
    }
  });
  return {
    type: HANDLE_FORM_SUBMIT,
    payload: data,
  };
};

export const setEmailText = (email) => {
  return {
    type: AUTH_CHANGE_EMAIL,
    payload: email,
  };
};

export const setPasswordText = (password) => {
  return {
    type: AUTH_CHANGE_PASSWORD,
    payload: password,
  };
};

export default authReducer;
