import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const Write = (props) => {
  const {loginStatus} = props;
  let navigate = useNavigate();
  useEffect(() => {
    console.log('useEffect');
    loginStatus && navigate('/');
  });
  return (
    <div>
      写文章
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login','login'])
})

export default connect(mapStateToProps, null)(Write);
