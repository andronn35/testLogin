import { loginActionTypes } from './actionTypes';

const initialState = {
  users: [
    {
      userName: 'developer21',
      password: '123456'
    }
  ],
  isAuth: false
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case loginActionTypes.SET_IS_AUTH:
      return {...state, isAuth: action.payload}
    default: return state
  }
}