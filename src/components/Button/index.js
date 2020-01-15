import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
// 使用高阶组件 withRouter的方式
class Button extends Component {
  
  render() {
    console.log(this.props)
    return (
      <>
        <button onClick={this.goHome}>Button组件返回主页</button>
      </>
    )
  }
  goHome = () => {
    this.props.history.push("/home",
      {id: this.props.match.params.id}
    )
  }
}

export default withRouter(Button)






/*使用解构props参数和Route组件渲染的方法 */
// export default class Button extends Component {
  
//   render() {
//     console.log(this.props)
//     return (
//       <>
//         <button onClick={this.goHome}>Button组件返回主页</button>
//       </>
//     )
//   }
//   goHome = () => {
//     // this.props.history.push("/home",
//     //   {id: this.props.match.params.id}
//     // )
//     this.props.history.push("/home",
//       {id: this.props.match.params.id}
//     )
//   }
// }
