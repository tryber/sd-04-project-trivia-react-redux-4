import { USER_LOGIN } from '../actions/types';

const initialState = {
  player: {
    name: '',
    assertions: '',
    score: '0',
    gravatarEmail: '',
  },
};

const userReducer = (state = initialState, { type, player }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        player: { ...player, name: player.name, gravatarEmail: player.gravatarEmail },
      };
    default:
      return state;
  }
};

export default userReducer;
