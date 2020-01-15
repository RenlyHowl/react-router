import React, { Component } from 'react'
// import {Route} from "react-router-dom"

// 导入components下的Button组件
import {
  Button
} from "../../components"
export default class ArticleDetail extends Component {

  render() {
    // console.log(this.props)
    return (
      <>
        <h1>文章详情{this.props.match.params.id} </h1>
        <button onClick={this.goBackHome}>返回首页</button>
        <Button></Button>
        {/* <Route component={Button} /> */}
        {/* <Button {...this.props}></Button> */}
      </>
    )
  }
  goBackHome = () => {
    // this.props.history.push("/home") // 好像使用replace方法也可以

    // 传一个对象
    // this.props.history.push({
    //   pathname: "/home",
    //   state: {
    //     id: this.props.match.params.id // 通过state将id传过去
    //   }
    // })
    /*上面这样传参数好像在返回到主页时的组件打印location下的state属性还是为undefined;
    下面的方法有用*/
    this.props.history.push("/home",
      {id: this.props.match.params.id}
    )

  }
}
