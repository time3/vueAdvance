//扩展运算符，es2015,可以用来替换cancat()和slice()
const arr1 = [10, 20, 30];

// make a copy of arr1
const copy = [...arr1];

console.log(copy);    // → [10, 20, 30]

const arr2 = [40, 50];

// merge arr2 with arr1
const merge = [...arr1, ...arr2];

console.log(merge);    // → [10, 20, 30, 40, 50]

const arr = [10, 20, 30]

// equivalent to
// console.log(Math.max(10, 20, 30));
console.log(Math.max(...arr));    // → 30



//ES2018通过向对象文本添加扩展属性进一步扩展了这种语法。他可以将一个对象的属性拷贝到另一个对象上

const obj1 = {
  a: 10,
  b: 20
};

const obj2 = {
  ...obj1,
  c: 30
};

console.log(obj2);    // → {a: 10, b: 20, c: 30}

//同时，Spread操作符可以作为Object.assign() 的一个替代方案进行对象融合
const obj1 = {a: 10};
const obj2 = {b: 20};
const obj3 = {c: 30};

// ES2018
console.log({...obj1, ...obj2, ...obj3});    // → {a: 10, b: 20, c: 30}

// ES2015
console.log(Object.assign({}, obj1, obj2, obj3));    // → {a: 10, b: 20, c: 30}

//然而，在进行对象融合时，Spread操作结果并不总是与Object.assign()一致
Object.defineProperty(Object.prototype, 'a', {
  set(value) {
    console.log('set called!');
  }
});

const obj = {a: 10};

console.log({...obj});    
// → {a: 10}

console.log(Object.assign({}, obj));    
// → set called!
// → {}

//spread只会进行浅拷贝，如果属性的值是一个对象的话，只有对象的引用会被拷贝,copy1.x 和 copy2.x 指向同一个对象的引用，所以他们严格相等
const obj = {x: {y: 10}};
const copy1 = {...obj};    
const copy2 = {...obj}; 

console.log(copy1.x === copy2.x);    // → true

//ES2015增加的另一个有用特性是rest参数，它允许JS使用……将值表示为数组: 
//数组解构
const arr = [10, 20, 30];
const [x, ...rest] = arr;

console.log(x);       // → 10
console.log(rest);    // → [20, 30]

const obj = {
  a: 10,
  b: 20,
  c: 30
};

const {a, ...rest} = obj;

console.log(a);       // → 10
console.log(rest);    // → {b: 20, c: 30}





