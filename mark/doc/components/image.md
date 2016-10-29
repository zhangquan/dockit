
## < image > 组件   


<h2>概述</h2>

<code>image</code> 标签用于渲染一个特定的图片，并且它不能包含任何子组件。可以用<code>img</code> 作简写。

<b>注意:</b> <code>width</code>和<code>height</code>需要指定，否则会不工作。

简写：<img>

## 子组件   


这个组件不支持子组件。

## 属性   

* <code>src</code>:<字符串>属性 图片原始链接
* <code>resize</code>: <字符串>  组件的拉伸属性。默认值是<code>stretch</code>,如果此属性不指定，该值可能是<code>cover</code>,<code>contain</code> , 值行为和W3C标准一致。

其他属性请查阅<a href="http://alibaba.github.io/weex/doc/references/common-attrs.html" >基本属性</a>

## 样式
* <code>width</code> : <长度>属性 组件的宽度，需指定。
* <code>height</code>: <长度>属性 组件的高度，需指定。

<b>基本样式</b>： 查看<a href="http://alibaba.github.io/weex/doc/references/common-attrs.html">基本样式</a>

* 支持 flexbox 相关样式
* 支持 box 模型相关样式
* 支持 <code>position</code> 相关属性
* 支持 <code>opacity</code>,<code>background-color</code> 等。

## 事件
<b>基本事件</b>：查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>

* 支持 <code>click</code> 事件。查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>
* 支持 <code>appear</code> / <code>disappear</code> 事件。查阅<a href="http://alibaba.github.io/weex/doc/references/common-event.html">基本事件</a>

## 例子
<pre><code>&lt;div&gt;
  &lt;image src="..." &gt;&lt;/image&gt;
  &lt;text&gt;...&lt;/text&gt;
&lt;/div&gt;
</code></pre>

简写：
<pre><code>&lt;div&gt;
  &lt;img src="..." &gt;&lt;/img&gt;
  &lt;text&gt;...&lt;/text&gt;
&lt;/div&gt;
</code></pre>