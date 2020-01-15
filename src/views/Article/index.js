import React, { Component } from 'react'


// import ArticleDetail from "./ArticleDetail"

import {Link} from "react-router-dom"
export default class Article extends Component {
  render() {
    return (
      <>
        <h1>Article</h1>
        <span><Link to="/article/1?name=qqq">第一章</Link> </span>
        {/* 使用对象的方式 */}
       
        <span><Link to="/article/2">第二章</Link> </span>
        {/* 使用参数匹配 */}
        {/* <Route component={ArticleDetail} path="/article/:id" />  */}
      </>
    )
  }
}

