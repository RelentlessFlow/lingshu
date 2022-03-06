import {
  CHANGE_LIST, CHANGE_SEARCH_FOCUS,
  CHANGE_MOUSE_STATE, CHANGE_PAGE, CHANGE_SHOW_CARD
} from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";
import {actionCreators} from "./index";

const changeList = (data) => {
  return {
    type: CHANGE_LIST,
    data: fromJS(data),
    page: 1,
    totalPage: Math.ceil(data.length / 10)
  };
}

export const changeSearchFocus = () => {
  return {type: CHANGE_SEARCH_FOCUS};
}

export const changeMouseState = (value) => {
  return {type: CHANGE_MOUSE_STATE, value}
}

export const changePage = (value) => {
  return {type: CHANGE_PAGE, value}
}

export const changeShowCard = (value) => {
  return {type: CHANGE_SHOW_CARD, value}
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then(res => {
        dispatch(changeList(res.data.data));
        dispatch(actionCreators.changeShowCard(true));
      }).catch(() => {
        console.log('ajax error')
    })
  }
}