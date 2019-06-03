
//扩展运算符
console.log(...[1, 2, 3])
console.log(1, ...[2, 3, 4], 5)

//函数调用
function add(x, y) {
    return x + y;
}
const numbers = [4, 38];
console.log(add(...numbers));

//放表达式
const arr = [...(3 > 0 ? ['a'] : [])]
console.log(arr)

//替代函数的apply方法
//es5的写法
function f(x, y, z) {
    return x + y + z
}
var args = [0, 1, 2];
console.log(f.apply(null, args));

Math.max.apply(null, [1, 2, 3, 4, 5])

//es6的写法
function f(x, y, z) {
    return x + y + z
}
var args = [0, 1, 2];
console.log(f(...args));

Math.max(...[1, 2, 3, 4, 5])

//通过push函数，将一个数组添加到另一个数组的尾部
//es5
var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
// Array.prototype.push.apply(arr1, arr2);
arr1.push(...arr2);
console.log(arr1);

//解构赋值
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first)
console.log(rest)

//扩展运算符还可以将字符串转为真正的数组。
console.log([...'hello']);

let nodeList = document.querySelectorAll('div'); //类数组对象
let array = [...nodeList]; //转化为真正的数组


//Array.from(), 将两类对象转化为真正的数组：类数组最想和可遍历的对象
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}

var arr1 = [].slice.call(arrayLike); //es5
let arr2 = Array.from(arrayLike); //es6
console.log(arr1, arr2)

//Array.of 将一组数值，转化为数组
Array.of(3, 11, 8); //[3, 11, 8]
Array.of(3); //[3]
Array.of(3).length; //1
Array, of(); //[]
Array.of(undefined); //undefined

//数组实例的find()和findIndex find方法用于找出第一个符合条件的数组成员，参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员 。如果没有符合条件的成员，则返回undefined
[1, 2, 0, -12].find(n => n < 0)  //-12
[1, 2, 3, 4, 5].find(function (value, index, arr) { //value当前值， index当前的位置， arr原数组
    return value > 3  //4
})
//findIndex返回第一个符合条件的数组成员的位置
[1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9; //2
})

//数组的实例 entries()、keys()、values()都用于遍历数组。可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
for (let index of ['a', 'b'].keys()) {
    console.log(index);
} // 0 1

for (let elem of ['a', 'b'].values()) {
    console.log(elem);
} // 'a' 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
} 
// 0 "a"
// 1 "b"

//数组实例的includes() Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
[1, 2, 3].includes(2) //true
[1, NaN].includes(NaN) //true
//第二个参数表示搜索的起始位置，默认是0，如果第二个参数为负数，则表示倒数的位置，如果这是大于数组长度，则会重置为从0开始
[1, 2, 3].includes(3, 3);  // false 
//indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
[NaN].indexOf(NaN) //-1
[NaN].includes(NaN) //true

//flat() flatMap()
[1, 2, [3, 4]].flat() //[1, 2, 3, 4]
[1, 2, [3, [4, 5]]].flat() //[1, 2, 3, [4, 5]]  flat()默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。
[1, 2, [3, [4, 5]]].flat(2)  //[1, 2, 3, 4, 5]
[1, [2, [3, [4]]]].flat(Infinity) //[1, 2, 3, 4] 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数
