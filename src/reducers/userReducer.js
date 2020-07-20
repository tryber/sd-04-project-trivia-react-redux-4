import { USER_LOGIN, USER_SCORE } from '../actions/types';

const initialState = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

const setLoginPlayerStorage = (state, action) =>
  localStorage.setItem(
    'player',
    JSON.stringify({
      ...state,
      player: {
        ...state.player,
        name: action.player.name,
        gravatarEmail: action.player.gravatarEmail,
      },
    }),
  );

const setScorePlayerStorage = (state, action) =>
  localStorage.setItem(
    'player',
    JSON.stringify({
      ...state,
      player: {
        ...state.player,
        score: action.infos.score,
        assertions: action.infos.assertions,
      },
    }),
  );

const userReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case USER_LOGIN:
      setLoginPlayerStorage(state = initialState, action);
      return {
        ...state,
        player: {
          ...state.player,
          name: action.player.name,
          gravatarEmail: action.player.gravatarEmail,
        },
      };
    case USER_SCORE:
      setScorePlayerStorage(state = initialState, action);
      return {
        ...state,
        player: { ...state.player, score: action.infos.score, assertions: action.infos.assertions },
      };
    default:
      return state;
  }
};

export default userReducer;
