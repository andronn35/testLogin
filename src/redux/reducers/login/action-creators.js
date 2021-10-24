import { loginActionTypes } from './actionTypes';

export const loginActionCreators = {
  setIsAuth: (payload) => ({type: loginActionTypes.SET_IS_AUTH, payload})
}