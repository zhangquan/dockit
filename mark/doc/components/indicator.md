# &lt;indicator&gt; 组件
mx_time 
	0.4及其以上版本支持
mx_time 

indicator组件必须充当slider组件的子组件使用。   
````html  
<template>
  <div>
    <slider class="slider">
      <div class="slider-pages" repeat="{{itemList}}">
        <image class="img" src="{{pictureUrl}}"></image>
        <text class="title">{{title}}</text>
      </div>

      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style>
  .img {width: 150; height: 150;}
  .title {flex: 1; color: #ff0000; font-size: 48; font-weight: bold; background-color: #eeeeee;}
  .slider {
    flex-direction: row;
    margin: 18;
    width: 714;
    height: 230;
  }
  .slider-pages {
    flex-direction: row;
    width: 714;
    height: 200;
  }
  .indicator {
    width:714;
    height:200;
    position:absolute;
    top:1;
    left:1;
    item-color: red;
    item-selectedColor: blue;
    item-size: 20;
  }
</style>

<script>
  module.exports = {
    data: {
      itemList: [
        {itemId: '520421163634', title: 'item1', pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {itemId: '522076777462', title: 'item2', pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        {itemId: '522076777462', title: 'iten3', pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ]
    }
  }
</script>
````
[体验一下](http://www.baidu.com?123=test)

### 子组件
indicator组件没有任何子组件。

### 属性
indicator组件除了公共属性，没有任何特定属性。

### 样式
indicator组件有一些自己的样式，如下：

+ item-color: 设置项的颜色，可以是颜色的名称，例如red; 也可以是16进制的颜色，例如#RRGGBB。

+ item-selectedColor: 被选中时的颜色，可以是颜色的名称，例如red; 也可以是16进制的颜色，例如#RRGGBB。

+ item-size: 元素的个数。

当然，indicator也支持 [公共样式](http://alibaba.github.io/weex/doc/references/common-style.html)，如下：

+ 支持flexbox相关样式；

+ 支持盒子模型相关样式；

+ 支持position相关样式。

**注意1**: 这里需要注意一点，indicator的position不仅依赖top、left、bottom和right样式，同时会参考width和height样式。indicator默认的宽高是继承于slider的。

**注意2**：background-color不推荐使用，建议使用item-color和item-selectedColor代替。


### 事件

+ 基础事件: 可以参考 [基础事件](http://alibaba.github.io/weex/doc/references/common-event.html)。

+ click 事件：支持点击事件。

+ appear / disappear 事件：支持组件的显示和隐藏事件。


