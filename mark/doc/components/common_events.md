# 通用事件
weex 所有组件都支持通用事件。  

### click 事件

如果某个组件绑定了 `click` 事件，那么该事件会在用户点击时触发。

**注解：**  `input`组件  和 `switch`组件目前并不支持 click 事件，请使用 `change` 或 `input` 事件代替。

**事件对象**

- `type`: `click`；
- `target`: 触发事件的目标组件；
- `timestamp`: 事件触发的时间戳。

### appear 事件

如果一个 `appear` 事件被绑定到某个滚动区内的组件上，当组件可见时该事件触发。

**事件对象**

- `type`: `appear`；
- `target`: 触发事件的目标组件；
- `timestamp`: 事件触发的时间戳；
- `direction`: 屏幕滚动时的滚动方向，`up` 或 `down`。

### disappear 事件

如果一个 `disappear` 事件被绑定到某个滚动区内的组件上，该事件将在组件滚动出视口，并从你的视线中消失时触发。

**事件对象**

- `type`: `disappear`；
- `target`: 触发事件的目标组件；
- `timestamp`: 事件触发的时间戳；
- `direction`: 屏幕滚动时的滚动方向，`up` 或 `down`。