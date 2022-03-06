import {fromJS} from "immutable";
import {CHANGE_LOGIN, LOG_OUT} from './actionTypes'

const defaultState = fromJS({
  login: false
})

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_LOGIN) {
    return state.set('login', action.value);
  }
  if (action.type === LOG_OUT) {
    return state.set('login', action.value);
  }
  return state;
}

export default reducer;
