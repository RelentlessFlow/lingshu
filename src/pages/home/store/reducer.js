import {fromJS} from "immutable";
import {ADD_HOME_LIST, CHANGE_HOME_DATA, TOGGLE_TOP_SHOW} from "./actionTypes";

const defaultState = fromJS({
  topPicList: [],
  articleList: [],
  articlePage: 1,
  recommendList: [],
  showScroll: false,
});

const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_HOME_DATA) {
    return state.merge({
      topPicList: fromJS(action.data.topPicList),
      articleList: fromJS(action.data.articleList),
      recommendList: fromJS(action.data.recommendList)
    })
  }
  if (action.type === ADD_HOME_LIST) {
    return state.merge({
      'articleList': state.get('articleList').concat(action.list),
      'articlePage': action.nextPage,
    })
  }
  if (action.type === TOGGLE_TOP_SHOW) {
    return state.set('showScroll', action.show);
  }
  return state;
}

export default reducer;