import React from 'react'
import { connect } from './woniu-react-redux'
import { addGun, removeGun, addGunAsync,addTwice } from './index.redux'

// 装饰器模式
@connect(
  state=>({ num: state}),
  {addGun, removeGun, addGunAsync,addTwice}
)
class App extends React.Component{
  render(){
  // console.log(this.props)
    // num addGun，removeGun，addGunAsync都是connect给的，不需要手动dispatch
    return (
      <div>
        <h2>现在有机枪{this.props.num}把</h2>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
        <button onClick={this.props.addTwice}>申请两把</button>
      </div>
    ) 
  }
}
// App = 
// connect(
//   state=>({ num: state}),
//   {addGun, removeGun, addGunAsync}
// )
// (App)
export default App;
