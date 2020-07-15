import { getTrivia } from '../services';
import { REQUEST_TRIVIA, REQUEST_TRIVIA_SUCCESS, REQUEST_TRIVIA_FAILURE } from './types';

const requestTriva = () => ({
  type: REQUEST_TRIVIA,
});

const triviaSuccess = (token) => ({
  type: REQUEST_TRIVIA_SUCCESS,
  token,
});

const triviaFailure = (error) => ({
  type: REQUEST_TRIVIA_FAILURE,
  error,
});

export default function fetchTrivia() {
  return (dispatch) => {
    dispatch(requestTriva());
    return getTrivia().then(
      (data) => dispatch(triviaSuccess(data)),
      (error) => dispatch(triviaFailure(error.message)),
    );
  };
}
