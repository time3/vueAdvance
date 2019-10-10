实现 flex 布局需要先指定一个容器，任何一个容器都可以被指定为 flex 布局，这样容器内部的元素就可以使用 flex 来进行布局。
```
.container {
    display: flex | inline-flex;       //可以有两种取值
}
```
分别生成一个块状或行内的 flex 容器盒子。简单说来，如果你使用块元素如 div，你就可以使用 flex，而如果你使用行内元素，你可以使用 inline-flex。
需要注意的是：当时设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效。

有下面六种属性可以设置在容器上，它们分别是：
+ flex-direction
+ flex-wrap
+ flex-flow
+ justify-content
+ align-items
+ align-content

##### flex-direction:决定主轴的方向（即项目的排列方向）
```
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
默认值：row，主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端
column：主轴为垂直方向，起点在上沿
column-reverse：主轴为垂直方向，起点在下沿
```

##### flex-wrap: 决定容器内项目是否可换行
```
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
默认值：nowrap 不换行，即当主轴尺寸固定时，当空间不足时，项目尺寸会随之调整而并不会挤到下一行。
wrap：项目主轴总尺寸超出容器时换行，第一行在上方
wrap-reverse：换行，第一行在下方
```

##### justify-content：定义了项目在主轴的对齐方式。
```
.container {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
建立在主轴为水平方向时测试，即 flex-direction: row
默认值: flex-start 左对齐
flex-end：右对齐
center：居中
space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。
space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。
```

##### align-items: 定义了项目在交叉轴上的对齐方式
```
.container {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
建立在主轴为水平方向时测试，即 flex-direction: row
默认值为 stretch 即如果项目未设置高度或者设为 auto，将占满整个容器的高度。
flex-start：交叉轴的起点对齐
flex-end：交叉轴的终点对齐
center：交叉轴的中点对齐
baseline: 项目的第一行文字的基线对齐
```

##### align-content: 定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用
```
.container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
当你 flex-wrap 设置为 nowrap 的时候，容器仅存在一根轴线，因为项目不会换行，就不会产生多条轴线。
当你 flex-wrap 设置为 wrap 的时候，容器可能会出现多条轴线，这时候你就需要去设置多条轴线之间的对齐方式了。
建立在主轴为水平方向时测试，即 flex-direction: row, flex-wrap: wrap
默认值为 stretch
flex-start：轴线全部在交叉轴上的起点对齐
flex-end：轴线全部在交叉轴上的终点对齐
center：轴线全部在交叉轴上的中间对齐
space-between：轴线两端对齐，之间的间隔相等，即剩余空间等分成间隙。
space-around：每个轴线两侧的间隔相等，所以轴线之间的间隔比轴线与边缘的间隔大一倍。
```