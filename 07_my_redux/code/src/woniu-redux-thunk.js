

const thunk = ({dispatch,getState})=>next=>action=>{
	// 如果是函数，执行一下，参数是dispatch和getState
	// console.log(action,typeof action)
	if (typeof action=='function') {
		return action(dispatch,getState)
	}
	// 默认，什么都没干，
	return next(action)
}
export default thunk