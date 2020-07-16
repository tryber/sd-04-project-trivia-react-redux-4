import { USER_LOGIN } from '../actions/types';

const initialState = {
  player: {
    name: 'jess',
    assertions: '',
    score: 0,
    gravatarEmail: 'jessicatavareseel@gmail.com',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        player: { ...player, name: player.name, gravatarEmail: player.email}
      }

  default:
    return state,
  }
}
