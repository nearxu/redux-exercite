const name = 'imooc'

const obj = {
    name,
    site:'imooc.com',
    [name]:'React开发App',
    [name+'test']:'test',
    sayHello(){
        console.log('hello world!')
    }
}
console.log(obj)
obj.sayHello()