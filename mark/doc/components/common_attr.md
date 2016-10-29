# 基本属性

所有的 weex 标签都有以下的基本属性。

## id

```
id="logo"
id="item-{{index}}"
```

`id` 是一个 weex 标签在 `<template>` 下的唯一标识符。你可以使用 id 属性来引用对应的 weex 标签。

[参考关于 id 的更多内容][more-id]。

## style

```
style="width: 200; height: 200"
style="padding: {{x}}; margin: 0"
```

为 weex 标签增加内联样式。

[参考关于 style 的更多内容][more-style]。

## class

```
class="button"
class="button {{btnStatus}}"
```

为 weex 标签增加类别。

## repeat

```
repeat="{{items}}"
```

以 `{{items}}` 作为循环项，迭代地生成当前的 weex 标签。

[参考关于 repeat 的更多内容][more-repeat]。

## if

```
if="{{opened}}"
```

`{{opened}}` 返回一个 boolean 值。若为 true，则显示当前标签；否则不显示。

[参考关于 if 的更多内容][more-if]。

## append

```
append="tree/node"
```

`append` 属性的可选值为 `tree` 或 `node`。不同的值会走不同的渲染过程。

[参考关于 append 的更多内容][more-append]。

## on... 事件处理

```
onclick="gotoDetail"
onappear="loadMore"
```

为当前 weex 标签注册事件处理函数。

[参考关于事件处理的更多内容][more-event]。

### 注意

weex 遵循 [HTML attribute][html-attr] 命名规范，所以 **不要在属性中使用驼峰风格（CamelCase）**，使用 `-` 连接符的 **羊肉串风格（kebab-case）才是正确的打开方式**。


[more-id]: https://github.com/alibaba/weex/blob/doc/doc/syntax/id.md
[more-style]: https://github.com/alibaba/weex/blob/doc/doc/syntax/style-n-class.md
[more-repeat]: https://github.com/alibaba/weex/blob/doc/doc/syntax/display-logic.md
[more-if]: https://github.com/alibaba/weex/blob/doc/doc/syntax/display-logic.md
[more-append]: https://github.com/alibaba/weex/blob/doc/doc/syntax/render-logic.md
[more-event]: https://github.com/alibaba/weex/blob/doc/doc/syntax/events.md
[html-attr]: https://en.wikipedia.org/wiki/HTML_attribute