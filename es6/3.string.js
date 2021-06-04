// es6 模板字符串取代了原有的字符串拼接功能
let name = 'time'
let age = 18
// hello~'time'今年18岁了
// let str = 'hello~\'' + name + '\'今年' + age + '岁了'
let str = `hello~'${name}'今年${age}岁了`
console.log(str)

//如何实现一个类模板字符串的功能
let name = 'time'
let age = 18
let str = 'hello~${name}今年${age}岁了'
str = str.replace(/\$\{([^}]*)\}/g, function(){
    // console.log(arguments[1])
    return eval(arguments[1])
})
console.log(str)