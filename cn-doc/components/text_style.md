# text 样式

文本类组件共享一些共同特性, 这类组件目前包括[text](http://alibaba.github.io/weex/doc/components/text.html) and [input](http://alibaba.github.io/weex/doc/components/input.html)。

### 属性

- color: &lt;colors&gt; 字体颜色。

- font-size: &lt;length&gt; 文字大小。

- font-style: &lt;enum&gt; normal | italic 字体类别，默认为 normal。

- font-weight: &lt;enum&gt; normal | bold 字体粗细程度，默认为 normal。

- text-decoration: &lt;enum&gt; none | underline | line-through 字体装饰，默认值为 none。

- text-align: &lt;enum&gt; left | center | right。 对齐方式，默认值为 left。

- font-family: &lt;string&gt; 字体家族， 这个设置 **不保证** 在不同平台，设备间的一致性。 如所选设置在平台上不可用，将会降级到平台默认字体家族。

- text-overflow: &lt;string&gt; clip | ellipsis 内容超长时的省略样式 

color属性支持多种颜色表达方法: rgb, rgba, #fff, #ffffff, 或颜色名。

### 示例:
````html
<template>
  <div class="my-class"></div>
</template>

<style>
.my-class { color: red; }
.my-class { color: #f00; }
.my-class { color: #ff0000; }
.my-class { color: rgb(255, 0, 0); }
.my-class { color: rgba(255, 0, 0, 0.5); }
</style>
````

### 样式属性值类型

- 长度(&lt;number&gt;)：数字。
- 长度(&lt;length&gt;)：数字后跟着  px  作为单位， px  也可以省略。
- 颜色(&lt;color&gt;)：有多种取值类型。RGB（ rgb(255, 0, 0) ）；RGBA（ rgba(255, 0, 0, 0.5) ）；十六进制（ #ff0000 ）；精简写法的十六进制（ #f00 ）；色值关键字（ red ）。
- 枚举值(&lt;enum&gt;)：特定可选的几个字符串。



## 其它参考

+ [颜色关键字列表](http://alibaba.github.io/weex/doc/references/color-names.html)。
+ [英文文档](http://alibaba.github.io/weex/doc/references/text-style.html)。

