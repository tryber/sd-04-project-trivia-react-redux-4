import { requestToken } from '../services';
import { REQUEST_TOKEN, REQUEST_TOKEN_SUCCESS, REQUEST_TOKEN_FAILURE } from './types';

const requestToken = () => ({
  type: REQUEST_TOKEN,
});

const tokenSucces = (token) => ({
  type: REQUEST_TOKEN_SUCCESS,
  token,
});

const tokenFailure = (error) => ({
  type: REQUEST_TOKEN_FAILURE,
  error,
});

export default function fetchToken() {
  return (dispatch) => {
    dispatch(requestToken());
    return requestToken().then(
      (data) => dispatch(tokenSucces(data)),
      (error) => dispatch(tokenFailure(error.message)),
    );
  };
}
