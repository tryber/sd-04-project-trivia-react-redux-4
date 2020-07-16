import { USER_LOGIN } from '../actions/types';

const initialState = {
  player: {
    name: '',
    assertions: 2,
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
    default:
      return state;
  }
};

export default userReducer;
