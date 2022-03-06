import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Input, LoginBox, LoginWrapper} from "./style";
import {actionCreators} from "./store";

const Login = (props) => {

  const {loginState, login} = props;
  const accountEle = useRef();
  const passwordEle = useRef();
  let navigate = useNavigate();
  useEffect(() => {
    loginState && navigate('/')
  }, [loginState]);
  return (
    <LoginWrapper>
      <LoginBox>
        <Input placeholder={'账号'} ref={accountEle}/>
        <Input placeholder={'密码'} ref={passwordEle}/>
        <Button onClick={() => {
          login(accountEle, passwordEle);
        }}>登陆</Button>
      </LoginBox>
    </LoginWrapper>
  );
};

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(
      accountEle.current.value,
      passwordEle.current.value
    ));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
