# &lt;list&gt;
<span class="weex-version">0.4</span>


### 概括

这是一个提供了常见的列表功能的核心组件，通过平滑滚动和内存回收提供了更好的用户体验和性能

### 子组件

**注意:**  `list`'的子组件只能包括  `cell`, `header`, `refresh`, `loading` 或者是 fix定位的组件. 其他形式的组件将不能被正确的渲染

* `cell` 定义了展现在list中的元件的属性和行为
* `header` <sup class="wx-v">0.6.1</sup> 当 header到达屏幕顶部时，将会固定在屏幕顶部 .
* `refresh` 组件可以用来给列表添加下拉刷新的功能
* `loading` 组件可以用来给列表添加上拉加载更多的功能

* `refresh` and `loading` 请查看 [refresh-loading](http://alibaba.github.io/weex/doc/components/refresh-loading.md).

### 属性

- `loadmoreoffset`: &lt;number&gt; 触发loadmore事件所需要的滚动条距离list底部的垂直偏移距离.当list的滚动条滚动到足够接近list底部时将会触发loadmore这个事件

其他属性请查看 [公共属性](https://github.com/weexteam/article/issues/13).


### 样式
**公共样式**: 查看 [组件公共样式](https://github.com/weexteam/article/issues/23)

- 支持flexbox 等样式
- 支持box model 等样式
- 支持``position`` 等样式
- 支持``opacity``, ``background-color`` 等

### 事件

- `loadmore` <sup class="wx-v">0.5</sup>: 如果列表滚动到底部将会立即触发这个事件，你可以在这个事件的处理函数中加载下一页的列表项.

**公共事件**: 查看 [公共事件](https://github.com/weexteam/article/issues/33)

- 支持`click` 事件，查看 [common events](https://github.com/weexteam/article/issues/33)
- 支持 `appear` / `disappear` 事件. 查看[common events](https://github.com/weexteam/article/issues/33)

### API

所以得cell或者类cell都支持 `scrollToElement` API  [dom module](https://github.com/weexteam/article/issues/52)

### 约束
**不允许**相同方向的list或者scroller互相嵌套.换句话说就是嵌套的lists/scroller必须是不同的方向

举个例子，**不允许**一个垂直方向的list嵌套的一个垂直方向的scroller中，但是一个垂直方向的list是可以嵌套的一个水平方向的list或者scroller中的.

### 示例

查看 [list-basic demo](https://github.com/alibaba/weex/blob/example/examples/component/list/list-basic.we)
