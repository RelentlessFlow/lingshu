import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import Topic from './components/Topic'
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import List from "./components/List";
import bannerPic from '../../static/banner.png';
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from './style'

const Home = (props) => {
  const {showScroll, changeHomeData, changeScrollToShow} = props;
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  }
  const bindScrollEvents = () => {
    window.addEventListener('scroll', changeScrollToShow)
  }
  useEffect(() => {
    changeHomeData();
    bindScrollEvents();
  }, );
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className={'banner-img'} src={bannerPic} alt={'banner'}/>
        <Topic/>
        <List/>
        <HomeLeft/>
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
      {
        showScroll
          ? <BackTop onClick={handleScrollTop}>顶部</BackTop>
          : null
      }
    </HomeWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeDataAjax());
    },
    changeScrollToShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(Home);
