import styled, { createGlobalStyle } from 'styled-components'

export const Page = styled.div`
  position: absolute;
  width:100%;
  height: 100%;
`

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*包含以下四种的链接*/
  a {
    color: black;
    text-decoration: none;
  }
  /*正常的未被访问过的链接*/
  a:link {
    color: black;
    text-decoration: none;
  }
  /*已经访问过的链接*/
  a:visited {
    color: black;
    text-decoration: none;
  }
  /*鼠标划过(停留)的链接*/
  a:hover {
    color: black;
    text-decoration: none;
  }
  /* 正在点击的链接*/
  a:active {
    color: black;
    text-decoration: none;
  }
`

