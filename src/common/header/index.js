import React, {Fragment, useRef} from "react";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import {nanoid} from "nanoid";
import {Link} from "react-router-dom";
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavSearch,
  SearchInfo,
  SearchInfoBlock,
  SearchInfoItem,
  SearchInfoSwitch,
  SearchInfoTitle,
  SearchWrapper
} from "./style";
import {actionCreators} from "./store"
import {actionCreators as loginActionCreators} from '../../pages/login/store'

const Header = (props) => {
  const spinIcon = useRef();
  const {
    focused, list, page, totalPage,
    showCard, mouseState, login,
    handleInputFocus, handleInputBlur,
    handleMouseEnter, handleMouseLeave,
    handleChangePage, logout
  } = props;
  const getListArea = () => {
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
        pageList.push(
          <CSSTransition
            key={nanoid()}
            in={showCard}
            timeout={150}
            classNames={'card_show'}
          >
            <SearchInfoItem>
              {newList[i]}
            </SearchInfoItem>
          </CSSTransition>
        )
      }
    }
    if (mouseState || focused) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoBlock/>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, spinIcon)}>
              <i ref={spinIcon}
                 className={'iconfont spin'}>&#xe782;</i>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {pageList}
        </SearchInfo>
      )
    }
  }
  return (
    <Fragment>
      <HeaderWrapper>
        <Link to='/'><Logo/></Link>
        <Nav>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames={'slide'}
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames={'color'}
            >
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
            </CSSTransition>
            {getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          {login ?
            <Button
              className={'writing'}
              onClick={logout}
            >退出</Button>
            : (<>
              <Link to={'/login'} ><Button className={'writing'}>登陆</Button></Link>
              <Button className={'reg'}>注册</Button>
            </>)}
          <Button className={'writing'}>
            <i className={"iconfont"}>&#xe600;</i> 写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(["header", 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseState: state.getIn(['header', 'mouseState']),
    showCard: state.getIn(['header', 'showCard']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.changeSearchFocus(true));
    },
    handleInputBlur() {
      dispatch(actionCreators.changeSearchFocus(false));
    },
    handleMouseEnter() {
      dispatch(actionCreators.changeMouseState(true));
    },
    handleMouseLeave() {
      dispatch(actionCreators.changeMouseState(false));
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.current?.style.transform
        .replace(/[^0-9]/ig, '');
      originAngle = originAngle ? parseInt(originAngle) : 0
      spin.current.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
      setTimeout(() => {
        dispatch(actionCreators.changeShowCard());
      }, 10);
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
