import React from 'react'
import ReactDOM from 'react-dom'
// , applyMiddleware, compose
import { createStore,applyMiddleware} from './woniu-redux'
import thunk from './woniu-redux-thunk'
import arrThunk from './woniu-redux-array'
import { counter } from './index.redux'
import { Provider } from './woniu-react-redux';
import App from './App'
// import './01.learn.redux'
// import Page from './context.demo'
// import Demo from './demo'
// ReactDOM.render(<Demo></Demo>,document.getElementById('root'))
// // ReactDOM.render(<Page></Page>,document.getElementById('root'))
// , compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

const store = createStore(counter,applyMiddleware(thunk,arrThunk))
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'))


// function add(x){
// 	return function(y){
// 		return x+y+3
// 	}
// }

// const add = x=>y=>x+y+3

// const res = add(2)(3)
// console.log('res is ',res)
// const obj = {name:'蜗牛','type':'React'}
// console.log(Object.keys(obj))

// function sayHello(...args){
// 	console.log(args)
// }
// sayHello('hello','React','And','Imooc')




