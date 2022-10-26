// es模块  
// commonjs模块
// 模块化里面没有在函数里面this是undefined
// console.log(this)

let usernmae = "嘻嘻"


// 单个分别导出
// export let o = {
//   name:'张三',
//   age:13
// }

// export let a = 10

// export let sayHi = () => {
//   console.log("大家好")
// }


// let o = {
//   name:'张三',
//   age:13
// }

// export let a = 10

// let sayHi = () => {
//   console.log("大家好")
// }

// // 默认到处
// export default o

// let o = {
//   name:'张三',
//   age:13
// }

//  let a = 10

// let sayHi = () => {
//   console.log("大家好")
// }

// // 默认到处
// export default {
//   o, a, sayHi
// }

// export let a = 10
// export let b = 20

// console.log("xmjs")



// commonjs的导出

let a = 10
let b = 20

// exports.a = a
// exports.b = b

module.exports = {
  a,b
}






