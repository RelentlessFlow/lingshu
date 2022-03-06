import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
`

export const PageWrapper = styled.div`
  background-color: #f9f9f9;
  display: flex;
  height: calc(100% - 57px);
`

export const HomeWrapper = styled.div`
  width: 1000px;
  margin: 10px auto 0 auto;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: #fff;
`

export const HomeLeft = styled.div`
  flex: 5;
  padding: 32px;
`

export const Header = styled.div`
  margin-top: 32px;
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  text-rendering: optimizelegibility;
  margin-bottom: 15px;
  line-height: 45px;
  color: #404040;
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
`

export const AuthorAvatar = styled.div`
  height: 48px;
  width: 48px;
  background: url("https://upload.jianshu.io/users/upload_avatars/1787010/9cf1f827721f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp");
  background-size: contain;
  border-radius: 50%;
`

export const AuthorContent = styled.div`
  display: flex;
  margin-left: 8px;
  flex-direction: column;
  justify-content: space-around;
  font-feature-settings: "tnum";
  font-variant: tabular-nums;
`

export const AuthorNameInfo = styled.div``

export const AuthorName = styled.div`
  display: inline-block;
  margin-bottom: 6px;
  margin-right: 8px;
`

export const AuthorNameFollowButton = styled.button`
  display: inline-block;
  font-size: 12px;
  padding: 2px 9px;
  border: none;
  color: #ec7259;
  background: #ffebeb;
  border-radius: 20px;
`

export const AuthorArticleStatus = styled.div`
  color: #969696;
  font-size: 14px;
`

export const AuthorArticleStatusSpan = styled.span`
  margin-right: 10px;
  &.first {
    color: #ec7259;
  }
`

export const Article = styled.div`
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;
  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #2f2f2f;
    line-height: 30px;
  }
`

export const HomeRight = styled.div`
  //flex: 3;
`
