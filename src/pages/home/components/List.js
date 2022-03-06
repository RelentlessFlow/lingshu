import React, {Fragment, useEffect, useRef, useState} from 'react';
import {ListInfo, ListItem, LoadMore} from "../style";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";
import {actionCreators} from "../store";

const List = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const {list, page, getMoreList} = props;
  const loadRef = useRef();
  useEffect(() => {
    document.documentElement.scrollTop = scrollTop;
  },[page, scrollTop]);
  return (
    <Fragment>
      {
        list.map((item, index) => (
          <Link key={nanoid()} to={'/detail/1'}>
            <ListItem>
              <img
                className={'pic'}
                src={item.get('imgUrl')} alt="pic"/>
              <ListInfo>
                <h3 className={'title'}> {index} {item.get('title')}</h3>
                <p className={'desc'}>{item.get('desc')}
                </p>
              </ListInfo>
            </ListItem>
          </Link>
        ))
      }
      <LoadMore
        ref={loadRef}
        onClick={() => {
          getMoreList(page, setScrollTop);
        }}>
        更多
      </LoadMore>
    </Fragment>
  );


}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page, setScrollTop) {
    setScrollTop(document.documentElement.scrollTop);
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapStateToProps, mapDispatch)(List);
