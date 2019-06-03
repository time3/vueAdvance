let obj = {
    name: 'bsb',
    age: 18,
    aa:{
        bb: 33
    },
    arr: []
}

function render(){
    console.log('模拟视图更新')
}

let handler = {
    get(target, key){
        if(typeof target[key] == 'object' && target[key] !== null){
            return new Proxy(target[key], handler);
        }
        return Reflect.get(target, key);
    },
    set(target, key, value){
        if(key === 'length') return true;
        render();
        return Reflect.set(target, key, value)
    }
}

let proxy = new Proxy(obj, handler);
proxy.age = 10;
proxy.aa.bb = 12;
proxy.arr.push(123);
console.log(proxy)