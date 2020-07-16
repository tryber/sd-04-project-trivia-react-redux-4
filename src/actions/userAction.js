import { USER_LOGIN } from './types';
import { USER_SCORE } from './types';

export const userLogin = (infos) => ({
  type: USER_LOGIN,
  player: infos,
});

export const userScore = (infos) => ({
  type: USER_SCORE,
  player: infos,
})
