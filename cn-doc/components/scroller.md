
## 概述

`scroller`是一个竖直的，可以容纳多个排成一列的子组件的滚动器。 如果子组件的总高度高于其本身，那么所有的子组件都可滚动。

**注意:**  <scroller> 可以当作根元素或者嵌套元素使用。此组件的滚动方向是列的形式(原文： The scroll direction of this component is column)，不可更改。

## 子组件

这类组件支持任意类型的weex组件作为其自组件。

## 属性
* `show-scrollbar`: <boolean> true | false. 这个属性决定滚动条是否现实，默认是`true`
* `scroll-direction`: <string> 定义子组件的滚动方向, `horizontal` 或者 `vertical`。
其他属性请查看 [公共属性](http://alibaba.github.io/weex/doc/references/common-attrs.html).

## 样式

**共公样式:** 查阅 [公共样式](http://alibaba.github.io/weex/doc/references/common-attrs.html)

* 支持flexbox相关样式
* 支持box model相关样式
* 支持position相关样式
* 支持opacity, background-color等.

## 事件

**公共事件:** 查阅 [公共事件](http://alibaba.github.io/weex/doc/references/common-event.html)

* 支持 click 事件。 查阅 [公共事件](http://alibaba.github.io/weex/doc/references/common-event.html)
* 支持 appear / disappear 事件。 查阅 [公共事件](http://alibaba.github.io/weex/doc/references/common-event.html)

## 示例

```html
<template>
  <scroller>
    <div repeat="{{list}}">
      <text>{{name}}: ${{price}}</text>
    </div>
  </scroller>
</template>

<script>
  module.exports = {
    data: {
      list: [
        {name: '...', price: 100},
        {name: '...', price: 500},
        {name: '...', price: 1.5},
        ...
      ]
    }
  }
</script>
```


[英文文档](http://alibaba.github.io/weex/doc/components/scroller.html)

