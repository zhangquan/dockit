# &lt;wxc-navpage&gt; 组件

mx_time 
	0.5及其以上版本支持
mx_time 

wxc-navpage组件是一个包含navbar的容器组件，可以根据业务场景定制navbar组件。同时，可以使用`navigator` 模块控制页面的跳转，具体参考 [navigator 模块](../modules/navigator.md)。一般情况，都是配合navbar组件使用。如果不了解navigator相关知识，建议先了解下iOS或者Android的相关组件。在H5上，其实是相当于导航栏。

我们在使用wxc-navpage组件时，首先需要加载weex-components模块。因为wxc-navpage是独立模块发布的。

````javascript
require('weex-components');
````

### 子组件
wxc-navpage组件可以包含任意的weex组件。

### 属性
wxc-navpage组件的属性其实是对navbar进行功能设置，如下图所示，是navbar的一个简单示意。

![nav@500*245](https://vczero.github.io/dockit/mark/source/imgs/nav.png)

- height: navbar的高度，默认是88。

- background-color: navbar的背景颜色，默认是白色。

- title: navbar的标题。

- title-color: navbar标题的颜色，默认黑色。

- left-item-title: leftItem的标题。

- left-item-color: leftItem标题颜色，默认黑色。

- right-item-title: rightItem标题。

- right-item-color: rightItem标题颜色，默认黑色。

- left-item-src: leftItem的图标。

- right-item-src: rightItem的图标。    



其它公共属性，可参考 [公共属性](../references/common-attrs.md).

### 样式
wxc-navpage组件支持所有的 [公共样式]()。

- flexbox布局相关样式；

- 盒子模型相关样式；

- position相关样式；

- opacity，background-color样式等。

### 事件

wxc-navpage组件支持左右两项点击事件。

- naviBar.leftItem.click: 当navbar的leftItem被点击时触发事件，需要在created时期注册事件。

- naviBar.rightItem.click: 当navbar的rightItem被点击时触发事件，需要在created时期注册事件。

wxc-navpage组件同时支持 [基础事件]()。

- 支持点击事件；

- 支持appear，disappear事件

### 列子

```js
<template>
  <wxc-navpage height={{...}} background-color="..." title="..." title-color="..." left-item-title="..." left-item-color="..." right-item-src="...">
      <content> ...</content>
  </wxc-navpage>
</template>
<script>
  require('weex-components');
  module.exports = {
    created: function() {
        this.$on('naviBar.rightItem.click',function(e){
           //当rightItem被点击时处理事件
        });

        this.$on('naviBar.leftItem.click',function(e){
          //当leftItem被点击时处理事件
        });
    }
  }
</script>
```

## 其它参考
+ [wxc-tabbar]()   


[mobile_preview](https://vczero.github.io/dockit/mark/source/imgs/navigator.png)