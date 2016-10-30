
# &lt;slider&gt; 组件

mx_time 
	0.4及其以上版本支持
mx_time 

轮播组件用于在一个网页中展示多个图片。初始设置是3秒内在2个图片做切换。下面代码可以运行在手机上，左右滑动滚动图片。

````html
<template>
  <div>
    <slider auto-play="false" onchange="change" style="width:750;height:920;">
      <image repeat="{{imageList}}" src="{{src}}" style="width:750;height:920;"></image>
      <indicator></indicator>
    </slider>
  </div>
</template>

<script>
  module.exports = {
    data: {
      imageList: [
        {src: 'http://gtms03.alicdn.com/tps/i3/TB1pQENMXXXXXaLXVXXkIFHLVXX-624-1105.jpg'}, 
        {src: 'http://gtms04.alicdn.com/tps/i4/TB19A30MpXXXXa.XVXXp.9cVpXX-278-424.gif'},
        {src: 'http://gtms03.alicdn.com/tps/i3/TB1gCc.MpXXXXXAXFXXHO6y1XXX-319-615.png'}
      ]
    },
    methods: {
      change: function (e) {
        //TODO: 
        //e.index
      }
    }
  }
</script>
````  
[体验一下](http://www.baidu.com?123=test)


### 子组件

weex 所有的组件都支持轮播，特定的`indicator`组件只能是slider的子组件。

### 属性

auto-play: true 或者 false。该值决定网页渲染完成之后是否自动播放。默认的是false。

其他属性，可以查阅 [基本属性](http://alibaba.github.io/weex/doc/references/common-attrs.html)。

### 样式

基础样式：请查阅 [基本样式](http://alibaba.github.io/weex/doc/references/common-style.html)。
* 支持flexbox相关样式 

* 支持盒模型相关样式

* 支持position相关样式 

* 支持opacity，background-color等.

### 事件

* change: 当轮播索引改变时，触发改事件。事件对象包含index属性，即展示的图片索引；

* 支持click事件；

* 支持appear / disapper事件。  


基本事件：查阅 [基本事件](http://alibaba.github.io/weex/doc/references/common-event.html)。

### 例子
````html
<template>
  <div>
    <slider auto-play="true" onchange="change" style="...">
      <image repeat="{{imageList}}" src="{{src}}" style="..."></image>
      <indicator></indicator>
    </slider>
  </div>
</template>

<script>
  module.exports = {
    data: {
      imageList: [{src: '...'}, {src: '...'}, ...]
    },
    methods: {
      change: function (e) {
        // e.index
      }
    }
  }
</script>

````

## 其它参考
+ [英文文档](http://alibaba.github.io/weex/doc/components/slider.html)

[mobile_preview](https://vczero.github.io/markdown-extension/mark/source/imgs/slide.png)
