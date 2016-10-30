# &lt;div&gt; 组件   

mx_time 
	任何版本都支持
mx_time 

div是一个用于包装其它组件的最基本容器组件。支持所有的公共样式、 属性、 flexbox布局。其类似于HTML的div容器，但是不能直接在里面添加文本（字符串）。如果要展示文本，则可以使用text组件。历史版本中，div别名是&lt;container&gt;，目前已经弃用。

### 子组件
因为div组件是容器，所以支持任何类型的组件作为自己的字组件，当然也包括自身。
因此，在写一个组件时，推荐外层使用div作为根容器。
````javascript
<template>
  <div>
    <div></div>
    <div>
      <text>hello weex</text>
    </div>
  </div>
</template>
````

### 属性
因为div是基础容器组件，因此只包含公共属性。可参考[公共属性](http://alibaba.github.io/weex/doc/references/common-attrs.html)。
````html
<!--例如可以支持内联样式style、class、循环repeat以及事件onclick等等-->
<div>
  <div style="" class="" repeat="" onclick=""></div>
</div>
````

### 样式

div支持共公样式，例如下面四类，更多样式可以查阅 [公共样式](http://alibaba.github.io/weex/doc/references/common-style.html)。

+ 支持flexbox相关样式；

+ 支持css盒子模型相关样式；

+ 支持position相关样式；

+ 支持opacity, background-color等。   

````html
<template>
  <div class="div_style">
    <text>hello weex common style</text>
  </div>
</template>
<style>
  .div_style{
    width:200;
    height:200;
    border-width:1;
    border-color: #DE5145;
  }
</style>
````   
[体验一下](http://www.baidu.com?123=test)

### 事件

div支持公共事件, 查阅 [公共事件](http://alibaba.github.io/weex/doc/references/common-event.html)。

* 支持 click 事件；

* 支持 appear / disappear 事件。   

````html
<template>
  <div class="div_style" onclick="showTip" onappear="appear">
    <text>hello weex common style</text>
  </div>
</template>
<style>
  .div_style{
    width:200;
    height:200;
    border-width:1;
    border-color: #DE5145;
  }
</style>
<script>
  module.exports = {
    methods:{
      showTip: function(){
        alert('hello');
      },
      appear: function(){
        alert('appear');
      }
    }
  };
</script>
````   
如上面代码，给div添加了两个事件appear和click。当div组件展示时，appear事件触发；当点击div组件时，click事件触发。其中，appear和showTip是事件触发执行的函数。


### 示例
div是容器组件，可以在其中添加任何组件。
```html
<template>
  <div class="div_style" onclick="showTip" onappear="appear">
    <div></div>
    <image></image>
    <!--可以是任何任组件-->
  </div>
</template>
<style>
  .div_style{
    width:200;
    height:200;
    border-width:1;
    border-color: #DE5145;
  }
</style>
<script>
  module.exports = {
    methods:{
      showTip: function(){
        //TODO: 当被点击时，执行逻辑
      },
      appear: function(){
        //TODO: 当被展示时，执行逻辑
      }
    }
  };
</script>
```    


## 其它参考

+ [英文文档](http://alibaba.github.io/weex/doc/components/div.html)
+ [scoller标签里面把一个div始终置底的问题](https://github.com/alibaba/weex/issues/1309)

[mobile_preview](http://gtms04.alicdn.com/tps/i4/TB1dX3LMXXXXXbDXVXXcprE6XXX-618-1103.jpg)   

