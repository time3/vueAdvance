/* map()、filter() 是 ES5 为数组定义的迭代方法， 
reduce() 是 ES5 为数组定义的归并方法。这些方法并不是 ES6 新增的语法。
你可以在 《JavaScript 高级程序设计-第三版》 96-97 页中看到明确的说明 */

//语法
/*  array.filter(function(currentValue,index,arr), thisValue)
 function(currentValue, index,arr) 必须。函数，数组中的每个元素都会执行这个函数
 currentValue 必须。当前元素的值
 index 可选。当前元素的索引值
 arr 可选。当前元素属于的数组对象
 thisValue 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" */
 
// array.map(callback[,thisObject]);
// array.reduce(callback[,initialValue])
//都不会改变原始数组。

// callback：要对每个数组元素执行的回调函数。
// thisObject：在执行回调函数时定义的
// initialValue: 作为第一次调用 callback 函数时的第一个参数的值。

/* map()
对原数组中的每个元素按顺序执行一次指定的函数（即 callback），callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。
回调函数可以有三个参数：当前元素，当前元素的索引 [可选] 和当前的数组对象 [可选]  */

/* filter()
对原数组中的每个元素执行一次指定的函数（即 callback），并且创建一个新的数组，该数组元素是所有回调函数执行时返回值为 true 的原数组元素。
回调函数可以有三个参数：当前元素，当前元素的索引 [可选] 和当前的数组对象 [可选] 。 */

/* reduce()
对原数组中的每个元素执行一次指定的函数（即 callback），返回最后一次回调返回值。
回调函数可以有四个参数：累计器，当前元素，当前元素的索引 [可选] 和当前的数组对象 [可选] */

/* parseInt()、parseFloat() 两个数值转换方法

parseInt 语法 parseInt(string, radix) 
将一个字符串 string 转换为 radix（值默认为 10） 进制的整数，radix 为介于 2-36 之间的数。
注意：string 将看作是一个数的 n 进制表示，返回的值为十进制。
返回值：
如果被解析参数的第一个字符无法被转化成数值类型，则返回 NaN
如果 radix 小于 2 或者大于 36，则返回 NaN

parseFloat 语法 parseFloat(string)
只有一个参数，用作将给定值解析成浮点数（如果给定值不能被转换成数值，则会返回 NaN）。 */

//解释 
/* arr.map(parseInt)
其实以上的过程就很好地解析了这个问题，此类问题只要理解基本方法的传参就不会出错了，而且不需要强记 ['1','2','3'].map(parseInt)的结果。
['1','2','3'].map(parseInt) //[1, NaN, NaN]
1、首先 arr 的每个元素执行一次 parseInt，传入 parseInt 的参数就是当前元素和当前元素的索引。
2、过程： 
parseInt('1', 0) //1
parseInt('2', 1) //NaN
parseInt('3', 2) //NaN */

[2, 0, 11, 13].filter(parseInt);  //[2,11,13]

/* 1、首先 arr 的每个元素执行一次 parseInt，传入 parseInt 的参数就是当前元素和当前元素的索引。
2、过程： 
parseInt(2, 0) //1 true
parseInt(0, 1) //NaN false
parseInt(11, 2) //3  true
parseInt(13, 3) //1 true
 */