# &lt;cell&gt;
<span class="weex-version">0.4</span>


### 概括

这个组件必须作为[`list`](https://github.com/weexteam/article/issues/74) 组件的子组件, 这是为了优化滚动时的性能.

### 子组件

支持所有weex的组件作为它的子组件

### 属性

和 [公共属性](https://github.com/weexteam/article/issues/13).相比，没有特殊属性

**注意:** 你不能给 `<cell>` 设定`flex`值. `<cell>`的宽度等于父组件 `<list>`的宽度,并且你不需要去设定它的高度

### 样式

### 样式
**公共样式**: 查看 [组件公共样式](https://github.com/weexteam/article/issues/23)

- 支持flexbox 等样式
- 支持box model 等样式
- 支持``position`` 等样式
- 支持``opacity``, ``background-color`` 等

### 事件

**公共事件**: 查看 [common events](https://github.com/weexteam/article/issues/33)

- 支持`click` 事件，查看 [common events](https://github.com/weexteam/article/issues/33)
- 支持`appear` / `disappear` 事件. 查看 [common events](https://github.com/weexteam/article/issues/33)

### 示例

请查看 [List](list.md)
