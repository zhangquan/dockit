# http://alibaba.github.io/weex/doc/components/slider.html
## < slider > 组件

<h2>概述</h2>

轮播组件用于在一个网页中展示多个图片。初始设置是3秒内在2个图片做切换。


## 子组件

weex 所有的组件都支持轮播，特定的<code>indicator</code>组件只能是<code>slider</code>的子组件。

## 属性
* <code>auto-play</code>:<布尔值> <code>true</code> | <code>false</code>.该值决定网页渲染完成之后是否自动播放。初始值的是关。

其他属性请查阅<a href="http://alibaba.github.io/weex/doc/references/common-attrs.html" >基本属性</a>

## 样式

<b>基础样式</b>：请查阅<a href="http://alibaba.github.io/weex/doc/references/common-style.html" >基本样式</a>

* 支持flexbox相关样式
* 支持盒模型相关样式
* 支持<code>position</code>相关样式
* 支持<code>opacity</code>,<code>background-color</code>等.

## 事件

* <code>change</code>:当轮播索引改变时的钩子。事件对象包含<code>index</code>属性，他显示正在展示的图片的索引序号。

<b>基本事件</b>：查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>

* 支持<code>click</code>事件:查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>
* 支持<code>appear</code> / <code>disapper</code>事件:查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>

## 例子
<pre><code> 
&lt;template&gt;
  &lt;div&gt;
    &lt;slider auto-play="true" onchange="change" style="..."&gt;
      &lt;image repeat="{{imageList}}" src="{{src}}" style="..."&gt;&lt;/image&gt;
      &lt;indicator&gt;&lt;/indicator&gt;
    &lt;/slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
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
&lt;/script&gt;
</code></pre>
