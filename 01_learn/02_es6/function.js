
// 带默认参数的箭头函数
let hello = (name='world')=>{
    console.log(`hello ${name}`)
}
// 直接返回值的箭头函数
let cal = num=>num*2
// 多个参数
let cal1 = (num1, num2)=>num1*num2
hello()
hello('imooc')
console.log(cal(5))
console.log(cal1(5, 6))
arr = [6, 7]
console.log(cal1(...arr))
