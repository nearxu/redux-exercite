

import React from 'react'

class Demo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			num:1,
			name:'imooc'
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.state.num = 1
		this.setState({
			num:this.state.num+1
		})
	}
	shouldComponentUpdate(nextProps, nextState){
		// console.log(nextProps, nextState)
		// console.log(this.props, this.state)
		// if (nextState.num!=this.state.num) {
		// 	return true
		// }
		if (nextState.num%5==0) {

			return true
		}
		return false
		// console.log(this.state)
		// return false
	}
	render(){
		// this.setState()
		return (
			<div>
				<p>{this.state.num}</p>
				<button onClick={this.handleClick}>click</button>
			</div>
		)
	}
}




export default Demo







