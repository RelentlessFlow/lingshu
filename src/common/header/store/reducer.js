import {CHANGE_LIST, CHANGE_MOUSE_STATE, CHANGE_PAGE, CHANGE_SEARCH_FOCUS, CHANGE_SHOW_CARD} from "./actionTypes";
import {fromJS} from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  mouseState: false,
  totalPage: 1,
  showCard: false
})

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_SEARCH_FOCUS) {
    return state.set("focused",
      action.value ?? !state.get('focused'));
  }
  else if (action.type === CHANGE_LIST) {
    return state.merge({
      'list': action.data,
      'totalPage': action.totalPage
    });
  }
  else if (action.type === CHANGE_MOUSE_STATE) {
    return state.set("mouseState",
      action.value ?? !state.get('mouseState'));
  }
  else if (action.type === CHANGE_PAGE) {
    return state.set("page", action.value)
  }
  else if (action.type === CHANGE_SHOW_CARD) {
    return state.set(
      'showCard', action.value ?? !state.get('showCard'));
  }
  return state;
}

export default reducer;