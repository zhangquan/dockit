# 基本样式

所有 weex 标签都有以下基本样式规则。

## 盒模型

![box model @300*](http://alibaba.github.io/weex/doc/images/css-boxmodel.png)

weex 盒模型基于 CSS 盒模型，每个 weex 元素都可视作一个盒子。我们一般在讨论设计或布局时，会提到「盒模型」这个概念。

元素实际的内容（content）、内边距（paddings）、边框（borders）、外边距（margins），形成一层层的盒子包裹起来，这就是盒模型大体上的含义。

- width
- height
- padding (space around content, between element content and the element border)
  - padding-left
  - padding-right
  - padding-top
  - padding-bottom
- margin (space around elements, outside the border)
  - margin-left
  - margin-right
  - margin-top
  - margin-bottom
- border
  - border-style (solid, dashed, dotted)
  - border-width
    - border-left-width
    - border-top-width
    - border-right-width
    - border-bottom-width
  - border-color
    - border-left-color
    - border-top-color
    - border-right-color
    - border-bottom-color
  - border-radius (rounded borders to elements, default value is 0 meaning right angle)
    - border-bottom-left-radius
    - border-bottom-right-radius
    - border-top-left-radius
    - border-top-right-radius

注意：目前在 `<image>` 和 `<text>` 组件上尚无法只定义一个或几个角的 border-radius。比如你无法在这两个组件上使用 `border-top-left-radius`。

weex 盒模型的 `box-sizing` 默认为 `border-box`，即盒子的宽高包含内容、内边距和边框的宽度，不包含外边距的宽度。

### 示例：

```html
<template>
  <div>
    <image src="..." style="width: 400; height: 200; margin-left: 20;"></image>
  </div>
</template>
```

## Flexbox

weex 布局模型基于 CSS 的 Flexbox。以便所有页面元素的排版能够一致可预测，同时页面布局能适应各种设备或者屏幕尺寸。

Flexbox 包含 flex 容器和 flex 成员项。如果一个 weex 元素可以容纳其他元素，那么它就成为 flex 容器。需要注意的是，flexbox 的老版规范相较新版有些出入，比如是否能支持 wrapping。这些都描述在 W3C 的工作草案中了，你需要注意下新老版本之间的不同。另外，老版本只在安卓 4.4 版以下得到支持。

### Flex 容器

在 weex 中，Flexbox 是默认且唯一的样式模型，所以你不需要手动为元素添加 `display: flex;` 属性。

- `flex-direction`: `row` | `column`
flex-direction 属性定义了 flex 容器中 flex 成员项的排列方向。默认值为 `column`，即从左到右、从上到下。

- `justify-content`: `flex-start` | `flex-end` | `center` | `space-between`
justify-content 属性定义了 flex 容器中 flex 成员项在水平方向上如何排列以处理空白部分。`flex-start` 是默认值，即左对齐，所有的 flex 成员项都排列在容器的前部；`flex-end` 则意味着右对齐，成员项排列在容器的后部；`center` 即中间对齐，成员项排列在容器中间、两边留白；`space-between` 表示两端对齐，空白均匀地填充到 flex 成员项之间。
![justify-content @400*](http://alibaba.github.io/weex/doc/images/css-flexbox-justify.svg)

- `align-items`: `stretch` | `flex-start` | `center` | `flex-end`
align-items 属性定义了 flex 容器中 flex 成员项在垂直方向上如何排列以处理空白部分。`stretch` 是默认值，即拉伸高度至 flex 容器的大小；`flex-start` 则是上对齐，所有的成员项排列在容器顶部；`flex-end` 是下对齐，所有的成员项排列在容器底部；`center` 是中间对齐，所有成员项都垂直地居中显示。
![align-items @400*](http://alibaba.github.io/weex/doc/images/css-flexbox-align.jpg)

### Flex 成员项

- flex: &lt;number&gt;
flex 属性定义了 flex 成员项在容器中占据的尺寸。如果所有成员项都设置为 `flex: 1`，那么它们就有相等的宽度（水平排列）或者相等的高度（垂直排列）。如果一共有两个成员项，其中一个 `flex: 1`，另一个 `flex: 2`，那么第一个将占据 1/3 的空间，另一个占据 2/3。如果所有 flex 成员项都不设置 `flex` 属性，它们将根据容器的 `justify-content` 属性来决定如何排列。

### 示例

一组平分了容器的图片。

```html
<template>
  <div style="width: 300; height: 100;">
    <image src="..." style="flex: 1;"></image>
    <image src="..." style="flex: 1;"></image>
    <image src="..." style="flex: 1;"></image>
  </div>
</template>
```

一张固定宽度的图片加上一段流动布局的文本。

```html
<template>
  <div style="width: 300; height: 100;">
    <image src="..." style="width: 100; height: 100;"></image>
    <text style="flex: 1;">...</text>
  </div>
</template>
```

复杂的混合布局。

```html
<template>
  <div style="width: 100;">
    <image src="..." style="width: 100; height: 100;"></image>
    <div style="flex-direction: row;">
      <text style="flex: 2; font-size: 32;">title</text>
      <text style="flex: 1; font-size: 16;">$100</text>
    </div>
  </div>
</template>
```

一段文本左对齐，其他内容右对齐。

![one text align left , the other float right](http://alibaba.github.io/weex/doc/images/css-flexbox-sample.png)

```html
<template>
<div style="flex-direction: row; justify-content: space-between;">
   <text>WEEX</text>
   <text>2016-05-08</text>
</div>
</template>
```

## 定位

我们可以使用以下属性来定位一个 weex 元素。

- `position`: `relative` | `absolute` | `fixed` | `sticky`
`relative` 是默认值，指的是相对定位；`absolute` 是绝对定位，以元素的容器作为参考系；`fixed` 保证元素在页面窗口中的对应位置显示；`sticky` 指的是仅当元素滚动到页面之外时，元素会固定在页面窗口的顶部。

- `top`:  &lt;number&gt;
距离上方的偏移量，默认为 0。

- `bottom`: &lt;number&gt;
距离下方的偏移量，默认为 0。

- `left`: &lt;number&gt;
距离左方的偏移量，默认为 0。

- `right`: &lt;number&gt;
距离右方的偏移量，默认为 0。

### 示例

```html
<template>
  <div style="flex-direction: column;">
    <div style="height: 3000;">
      <image src="..." style="top: 50; left: 50; ..."></image>
    </div>
    <div style="height: 3000;">
      <image src="..." style="position: sticky; ..."></image>
    </div>
    <div style="height: 3000;">
      <image src="..." style="position: absolute; top: 50; left: 50; ..."></image>
    </div>
  </div>
</template>
```

## 其他基本样式

- `opacity`:  &lt;number&gt;
取值范围为 [0, 1]。默认值是 1，即完全不透明；0 是完全透明；0.5 是 50% 的透明度。

- `background-color`: &lt;colors&gt;
设定元素的背景色，默认值是 `transparent`。

## 样式属性取值可用的类型

- 长度：数字后跟着 `px` 作为单位，`px` 也可以省略。
- 颜色：有多种取值类型。RGB（`rgb(255, 0, 0)`）；RGBA（`rgba(255, 0, 0, 0.5)`）；十六进制（`#ff0000`）；精简写法的十六进制（`#f00`）；色值关键字（`red`）。
- 枚举值：特定可选的几个字符串。

**注意：** [色值的关键字列表](https://github.com/alibaba/weex/blob/doc/doc/references/color-names.md)。

## 上手样式

你可以按照以下步骤来规划 weex 页面的样式。

1. 全局样式规划：将整个页面分割成合适的模块。
2. flex 布局：排列和对齐页面模块。
3. 定位盒子：定位并设置偏移量。
4. 细节样式处理：增加特定的具体样式。