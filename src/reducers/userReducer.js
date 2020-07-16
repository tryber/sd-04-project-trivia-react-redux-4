import { USER_LOGIN, USER_SCORE } from '../actions/types';

const initialState = {
  player: {
    name: '',
    assertions: 3,
    score: 0,
    gravatarEmail: '',
  },
};

const userReducer = (state = initialState, { type, player }) => {
  switch (type) {
    case USER_LOGIN:
      localStorage.setItem('player', JSON.stringify({
        ...state,
        player: { ...state.player, name: player.name, gravatarEmail: player.gravatarEmail },
      }));
      return {
        ...state,
        player: { ...state.player, name: player.name, gravatarEmail: player.gravatarEmail },
      };
    case USER_SCORE:
      localStorage.setItem('player', JSON.stringify({
        ...state,
        player: { ...state.player, score: player.score, assertions: player.assertions },
      }));
      return {
        ...state,
        player: { ...state.player, score: player.score, assertions: player.assertions },
      };
    default:
      return state;
  }
};

export default userReducer;
