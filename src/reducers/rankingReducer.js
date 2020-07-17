import { RANKING_DATA, RANKING_SCORE } from '../actions/types';

const initialState = {
  id: '',
  name: '',
  score: 0,
  picture: '',
};

const saveData = (state, payload) => {
  let oldState = JSON.parse(localStorage.getItem('ranking'));
  let newState = {score: 0, name: payload.name, picture: payload.url, id: new Date()};
  if(oldState) return localStorage.setItem('ranking', JSON.stringify([...oldState, newState]));
  localStorage.setItem('ranking', JSON.stringify([newState]));
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case RANKING_DATA:
    saveData(state, payload);
    return {...state, name: payload.name, picture: payload.url}

  default:
    return state
  }
}
