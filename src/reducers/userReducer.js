import { USER_LOGIN, USER_SCORE } from '../actions/types';

const initialState = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
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
      return {
        ...state, player: { ...state.player, name: action.player.name,
          gravatarEmail: action.player.gravatarEmail,
        },
      };
    case USER_SCORE:
      localStorage.setItem('player', JSON.stringify({
          ...state,
          player: { ...state.player, score: action.infos.score, assertions: action.infos.assertions,
          },
        }),
      );
      return {
        ...state,
        player: { ...state.player, score: action.infos.score, assertions: action.infos.assertions },
      };
    default:
      return state;
  }
};

export default userReducer;
