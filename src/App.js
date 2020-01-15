import React,{Component} from "react"

import {
  Home,
  Article,
  Users,
  ArticleDetail,
  NotFound
} from "./views"
import {Route, NavLink as Link, Redirect, Switch} from "react-router-dom"



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }
  render() {
    // console.log(this.props)
    return(
      <>
      <ul>
        <li><Link to="/home" activeStyle={{color: "red"}}>首页</Link></li>
        <li><Link to="/article">文章</Link></li>
        <li><Link to="/users">用户</Link></li>
      </ul>
      {/* Switch包裹 匹配渲染一个组件 */}
      <Switch>

      {/* 关于Route组件有几种写法 */}
      <Route path="/home" component={Home} ></Route>
      <Route path="/article" exact><Article></Article></Route>

      {/* <Route path="/users" component={Users} /> */}
      {/* 使用render方法做权限认证 */}
      <Route path="/users" render={(props) => {
        return this.state.isLoading ? <Users {...props}></Users> : "请登录"
      }} />

      <Route path="/article/:id" component={ArticleDetail} /> 
      {/* <Route path="/404" component={NotFound}></Route> */}
      {/* <Route path="/404"><NotFound tittle="component另一种传的参数"></NotFound> </Route> */}
      <Route path="/404" render={(props) => {
        // console.log(props)
        return (
          <>
          {/* 将上面的props属性解构传过去 */}
          <NotFound {...props} tittle="render传的参数"></NotFound>
          </>
        )
      }}></Route>
      <Redirect to="/home" from="/" exact/>
      {/* 下面是上面所有的都没匹配到 全部重定位到404;但是注意上面会优先重定位到;故需要加exact全部匹配 */}
      <Redirect to="/404" />
      </Switch>
      </>
    )
  }

}