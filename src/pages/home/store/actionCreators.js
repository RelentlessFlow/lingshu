import {ADD_HOME_LIST, CHANGE_HOME_DATA, TOGGLE_TOP_SHOW} from "./actionTypes";
import axios from "axios";
import {fromJS} from "immutable";

export const changeHomeData = (data) => {
  return {
    type : CHANGE_HOME_DATA, data
  }
}

export const getHomeDataAjax = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      dispatch(changeHomeData(res.data));
    }).catch(() => {
      console.log('ajax error')
    })
  }
}

export const addHomeList = (list, nextPage) => {
  return { type: ADD_HOME_LIST, list: fromJS(list), nextPage }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get(`/api/home.json?page=${page}`).then(res => {
      dispatch(addHomeList(res.data.articleList, page + 1));
    })
  }
}

export const toggleTopShow = (show) => {
  return { type: TOGGLE_TOP_SHOW, show };
}