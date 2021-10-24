import { combineReducers, createStore } from "redux";
import loginReducer from './reducers/login/loginReducer';

const reducers = combineReducers({
  loginPage: loginReducer
})

export const store = createStore(reducers)