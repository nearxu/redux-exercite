
import React from 'react'

class App extends React.Component {
  render() {
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>      
        <一营 老大='张大喵'></一营>
        <骑兵连 老大='孙德胜'></骑兵连>
      </div>
    )
  }
}
class 一营 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      soldiers : ['虎子','柱子','王根生']
    }
    this.addSoldier = this.addSoldier.bind(this)
    console.log('组件初始化')
  }
  componentWillMount() {
    console.log("组件马上就要挂载了");
  }

  componentDidMount() {
    console.log("组件已经挂载");
  }

  componentWillReceiveProps(nextProps) {
    console.log("组件要接收福组件的值了");
  }

  shouldComponentUpdate() {
    console.log("判断是不是要更新组件");
    return true;        // 记得要返回true
  }
  componentWillUpdate() {
    console.log("马上就要更新组件了");
  }

  componentDidUpdate() {
    console.log("组件更新完毕");
  }

  componentWillUnmount() {
    console.log("组件卸载了");
  }


  addSoldier(){
    this.setState({
      soldiers : [...this.state.soldiers,'新兵蛋子'+Math.random()]
    })
  }
  render(){
    return (
      <div>
        <h2>一营营长，{this.props.老大}</h2>
        <button onClick={this.addSoldier}>新兵入伍</button>
        <ul>
          {this.state.soldiers.map(v=><li key={v}>{v}</li>)}
        </ul>      
      </div>
    ) 
  }
}
function 骑兵连(props){
  return <h2>骑兵连连长{props.老大},冲啊！</h2>
}
export default App;
