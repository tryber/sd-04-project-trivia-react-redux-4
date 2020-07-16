import { USER_LOGIN } from './types';

const userLogin = (infos) => ({
  type: USER_LOGIN,
  player: infos,
});

export default userLogin