//如果是对象会使用Object.defineProperty
//会把数组的方法重写

function render() {
    console.log('视图渲染')
}

let obj = {
    name: 'time',
    location: {
        x: 100,
        y: 100
    }
}

let obj2 = [1,2,3]
let methods = ['pop', 'shift', 'unshift', 'sort', 'recerse', 'splice', 'push'];

let arrayProto = Array.prototype;
let proto = Object.create(arrayProto);

methods.forEach(method => {
    proto[method] = function(){
        render();
        arrayProto[method].call(this, ...arguments);
    }
})


function observer(obj) { 
    if(Array.isArray(obj)){
        obj.__proto__ = proto;
        return;
    }
    if (typeof obj == 'object') {
        for (let key in obj) {
            defineReactive(obj, key, obj[key]);
        }
    }
}

function defineReactive(data, key, value) {
    observer(value);
    Object.defineProperty(data, key, {
        get() {
            return value
        },
        set(newValue) {
            observer(newValue);
            if (newValue !== value) {
                render();
                value = newValue;
            }
        }
    })
}
observer(obj);
// obj.name = 'wbk';
// obj.name = 'wk';
// obj.location.x='101';
// console.log(obj.location.x)

// obj.location = {
//     x: 1000,
//     y: 1000
// }
// obj.location.x = 2000;

//vue 如果给对象新增属性是不会被监控的 $set
// 如果想给对象增加一个不存在的属性 obj.location = {...obj.loaction, a:1}
// function $set(data, key, value){
//     defineReactive(data, key, value);
// }
// $set(obj, 'a', 1);
// obj.a = 10;
// console.log(obj.a)


// obj2.push(123);
// console.log(obj2);

function $set(data, key, value){
    if(Array.isArray(data)){
        return data.splice(key, 1, value);
    }
    defineReactive(data, key, value);
}
$set(obj2, 0, 100)
console.log(obj2[0])