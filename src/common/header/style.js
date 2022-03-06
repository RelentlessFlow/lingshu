import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  margin: 0 60px 0 60px;
  overflow: hidden;
`

export const Logo = styled.div`
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  display: inline-block;
`

export const SearchWrapper = styled.div`
  position: relative;
  margin-bottom: 9px;
  float: left;
  .color-enter {
    transition: all .2s ease-in;
  }
  .color-enter-active {
    background: #777;
    color: #fff;
  }
  .color-exit {
    transition: all .2s ease-out;
  }
  .color-exit-active {
    color: #777;
  }
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    color: #777;
    text-align: center;
    &.focused {
       background: #777;
       color: #fff;
     }
  }
  .card_show-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .card_show-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 150ms, transform 150ms;
  }
  .card_show-exit {
    opacity: 1;
  }
  .card_show-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 150ms, transform 150ms;
  }
  
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.slide-enter {
    transition: all .2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }

  &.focused {
    width: 240px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  height: auto;
  width: 240px;
  padding: 20px 20px 8px 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  .flashcard {
    background: red;
  }
`

export const SearchInfoBlock = styled.div`
  height: 10px;
  width: 15px;
  position: absolute;
  top: -10px;
  left: 50px;
  background: white;
`

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor:pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all .5s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 8px;
  line-height: 20px;
  border: 1px solid #ddd;
  font-size: 12px;
  color: #969696;
  border-radius: 3px;
`

export const Addition = styled.div`
  float: right;
  height: 56px;
`

export const Button = styled.div`
  float: left;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.writing {
    color: #ec6149;
  }
  &.reg {
    color: #fff;
    background-color: #ec6149;
  }
`
