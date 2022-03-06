import React, {Fragment, useEffect} from 'react';
import {connect} from "react-redux";
import {
  Article,
  AuthorArticleStatus,
  AuthorArticleStatusSpan,
  AuthorAvatar,
  AuthorContent,
  AuthorInfo,
  AuthorName,
  AuthorNameFollowButton,
  AuthorNameInfo,
  GlobalStyle,
  Header,
  HomeLeft,
  HomeRight,
  HomeWrapper,
  PageWrapper
} from "./style";
import {actionCreators} from "./store";

const Detail = (props) => {
  const {title, content, getMyDetail} = props;
  useEffect(() => {getMyDetail()});
  return (
    <Fragment>
      <PageWrapper>
        <HomeWrapper>
          <HomeLeft>
            <Header>{title}</Header>
            <AuthorInfo>
              <AuthorAvatar/>
              <AuthorContent>
                <AuthorNameInfo>
                  <AuthorName>Lin</AuthorName>
                  <AuthorNameFollowButton>关注</AuthorNameFollowButton>
                </AuthorNameInfo>
                <AuthorArticleStatus>
                  <AuthorArticleStatusSpan className={'first'}>
                    0.802
                  </AuthorArticleStatusSpan>
                  <AuthorArticleStatusSpan>
                    2017.11.15 22:01:44
                  </AuthorArticleStatusSpan>
                  <AuthorArticleStatusSpan>
                    字数 612
                  </AuthorArticleStatusSpan>
                  <AuthorArticleStatusSpan>
                    阅读 7,401
                  </AuthorArticleStatusSpan>
                </AuthorArticleStatus>
              </AuthorContent>
            </AuthorInfo>
            <Article>
              <p dangerouslySetInnerHTML={{__html: content}} />
            </Article>
          </HomeLeft>
          <HomeRight/>
        </HomeWrapper>
      </PageWrapper>
      <GlobalStyle/>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyDetail() {
      dispatch(actionCreators.getDetail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
