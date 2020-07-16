import { USER_LOGIN } from '../actions/types';

const initialState = {
  player: {
    name: 'jess',
    assertions: '',
    score: 0,
    gravatarEmail: 'jessicatavareseel@gmail.com',
  },
};

const userReducer = (state = initialState, { type, player }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        player: { ...player, name: player.name, gravatarEmail: player.gravatarEmail}
      }
    default:
      return state
  }
}

export default userReducer;
