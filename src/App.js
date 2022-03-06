import React, {Fragment} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./store";
import './static/iconfont/iconfont.css'
import {GlobalStyle, Page} from "./style";
import Header from "./common/header";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Writer from "./pages/write"


const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Page>
            <Header/>
            <Routes>
              <Route path={'/'} exact element={<Home/>}/>
              <Route path={'/login'} exact element={<Login/>}/>
              <Route path={'/detail/:id'} exact element={<Detail/>}/>
              <Route path={'/writer'} exact element={<Writer/>}/>
            </Routes>
          </Page>
        </BrowserRouter>
      </Provider>
      <GlobalStyle/>
    </Fragment>
  );
}

export default App;
