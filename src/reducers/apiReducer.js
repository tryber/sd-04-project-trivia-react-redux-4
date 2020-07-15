import { REQUEST_TOKEN, REQUEST_TOKEN_SUCCESS, REQUEST_TOKEN_FAILURE } from '../actions/types';

const initialState = {
  token: '',
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return { ...state };
    case REQUEST_TOKEN_SUCCESS:
      return { ...state, token: action.token };
    case REQUEST_TOKEN_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default apiReducer;
