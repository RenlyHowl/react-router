import React from "react"
import ReactDom from "react-dom"

import App from "./App.js"

import {BrowserRouter as Router, Route} from "react-router-dom"
/*
要使用react-router的时候,我们需要在最外层包裹BrowserRouter;
所以我们在App根组件外面包裹
*/
ReactDom.render(
  <Router>
    <Route component={App}></Route>
  </Router>,
  document.querySelector("#root")
)