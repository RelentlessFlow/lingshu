import {CHANGE_DETAIL} from "./actionType";
import {fromJS} from "immutable";

const defaultState = {
  title: '实现可在 RecyclerView 中展开和收缩的 TextView',
  content: 'StaticLayout 的构造方法是 StaticLayout(CharSequence source, TextPaint paint, int width, Layout.Alignment align, float spacingmult, float spacingadd, boolean includepad)，其中参数里：width 是文字区域的宽度，文字到达这个宽度后就会自动换行；align 是文字的对齐方向；spacingmult 是行间距的倍数，通常情况下填 1 就好；spacingadd 是行间距的额外增加值，通常情况下填 0 就好；includeadd 是指是否在文字上下添加额外的空间，来避免某些过高的字符的绘制出现越界。'
}

const reducer = (state = fromJS(defaultState), action) => {
  if(action.type === CHANGE_DETAIL) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  return state;
}

export default reducer;
