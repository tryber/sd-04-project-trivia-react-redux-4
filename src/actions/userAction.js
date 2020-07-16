import { USER_LOGIN } from './types';

export default userLogin = (infos) => ({
  type: USER_LOGIN,
  player: infos,
});
