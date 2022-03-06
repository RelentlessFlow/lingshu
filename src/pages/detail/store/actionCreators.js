import axios from "axios";
import {CHANGE_DETAIL} from "./actionType";

export const getDetail = (data) => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    })
  }
}

export const changeDetail = (title, content) => ({
  type: CHANGE_DETAIL, title, content
})
