### 什么是vue
- Vue是一套用于构建用户界面的渐进式框架。特点：易用、灵活、高效
- 渐进式框架
[渐进式框架-知乎](https://www.zhihu.com/question/51907207)
![渐进式框架](https://pic3.zhimg.com/v2-cc3ec77bdca6da1a7e276918d894490b_r.jpg "渐进式框架")
声明式渲染 < 组件系统 < 客户端路由（hash, history） < vuex(大量数据管理) < vueCli(构建工具)，可以选择任意部分进行组合

### 库和框架
- 库（loadsh, jq）是将代码集合成一个产品，库是我们调用库中的方法实现自己的功能
- 框架则是为解决一类问题而开发的产品，框架是我们在指定的位置编写好代码，框架帮我们调用。
- 框架是库的升级版

### MVC && MVVM
[MVC模式](http://www.mamicode.com/info-detail-2141603.html)
![MVC模式](http://image.mamicode.com/info/201712/20171231142952043909.png "MVC模式")
![MVVM](https://images2015.cnblogs.com/blog/602871/201609/602871-20160907153102598-644577636.jpg "MVVM")
在传统的mvc中除了model和view以外的逻辑都放在了controller中，导致controller逻辑复杂难以维护,在mvvm中view和model没有直接的关系，全部通过viewModel进行交互

### 声明式和命令式
- 自己写for循环就是命令式  (命令其按照自己的方式得到结果)
- 声明式就是利用数组的方法forEach/map/reduce (内部帮我们去做)