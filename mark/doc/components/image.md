
# &lt;image&gt; 组件   

mx_time 
	任何版本都支持
mx_time 

image标签用于渲染图片，并且它不能包含任何子组件。可以用img作简写。需要注意的事，需要明确指定width和height，否则图片不会显示出来。简写：&lt;img&gt;&lt;/img&gt;   

````html
<template>
  <div>
    <div>
      <img style="width:100;height:230;" src="http://gtms04.alicdn.com/tps/i4/TB1ehtqMFXXXXcOXXXX1odaOXXX-370-664.gif"></img>
    </div>
  </div>
</template>
````
[体验一下](http://www.baidu.com?123=test)

### 子组件   

image组件不支持任何子组件，因此不要尝试在image组件中添加任何组件。如果需要实现`background-image`的效果，可以使用image组件和div/text组件配合，然后采用position定位来现实，如下面代码。
````html
<template>
  <div>
    <div>
      <img style="width:100;height:180;" src="http://gtms04.alicdn.com/tps/i4/TB1ehtqMFXXXXcOXXXX1odaOXXX-370-664.gif"></img>
      <div class="title">
        <text style="font-size:10;">你好，image</text>
      </div>
    </div>
  </div>
</template>
<style>
  .title{
    position:absolute;
    top:50;
    left:10;
  }
</style>
````
[体验一下](http://www.baidu.com?123=test)

### 属性   
image组件，包含src和resize两个重要的属性。

* src: 类型是<字符串>， 图片链接。

* resize: 类型是<字符串> ，可以控制图片的拉伸状态。默认值是stretch，如果此属性不指定，该值可能是cover，contain 。值行为和W3C标准一致。

例如，使用cover属性，则出现图片大于容器大小时，显示一部分图片（默认从左上角开始截取）。
````html
<template>
  <div>
    <div>
      <img style="width:100;height:480;" resize="cover" src="http://gtms04.alicdn.com/tps/i4/TB1ehtqMFXXXXcOXXXX1odaOXXX-370-664.gif"></img>
    </div>
  </div>
</template>
````
[体验一下](http://www.baidu.com?123=test)
其他属性请查阅[基本属性](http://alibaba.github.io/weex/doc/references/common-attrs.html)。  

### 样式
* width : <长度>属性 组件的宽度，需指定。

* height: <长度>属性 组件的高度，需指定。

基本样式，查看[基本样式](http://alibaba.github.io/weex/doc/references/common-attrs.html)。

* 支持 flexbox 相关样式

* 支持 box 模型相关样式

* 支持 position相关属性

* 支持 opacity，background-color等。

### 事件

基本事件，查阅[基本事件](http://alibaba.github.io/weex/doc/references/common-event.html)。

* 支持 click 事件。查阅[基本事件](http://alibaba.github.io/weex/doc/references/common-event.html)。

* 支持 appear / disappear 事件。查阅[基本事件](http://alibaba.github.io/weex/doc/references/common-event.html)。        


 ````html
 <template>
  <div>
    <image onclick="showTip" style="width:100;height:100;" resize="contain" src="http://gtms04.alicdn.com/tps/i4/TB1ehtqMFXXXXcOXXXX1odaOXXX-370-664.gif"></image>
  </div>
 </template>
 <script>
  module.exports = {
    methods: {
      showTip: function(){
        alert('hello image');
      }
    }
  };
 </script>
 ````
[体验一下](http://www.baidu.com?123=test)   
  
* weex 0.8及其以上版本，支持onload事件。需要注意的是，目前在Android、iOS上支持，H5不支持。具体代码如下：

````html
<template>
   <div>
     <image onload="load" class="img" src="http://img.alicdn.com/tps/TB1BF2hNXXXXXbgaXXXXXXXXXXX-1125-352.jpg_q50.jpg"></image>
   </div>
</template>
<style>
  .img{
    width:750;
    height:200;
  }
</style>
<script>
  module.exports = {
    methods:{
      load: function(e){
        console.log('---load---',e);
      }
    }
  };
</script>
````   
onload返回的结果e是json对象，如下所示：   

````javascript
{
    "success": "true",
    "timestamp": 1473763310591,
    "type": "load",
    "target": {
        "ref": "20",
        "type": "image",
        "attr": {
            "src": "http://img.alicdn.com/tps/TB1BF2hNXXXXXbgaXXXXXXXXXXX-1125-352.jpg_q50.jpg"
        },
        "style": {
            "width": 750,
            "height": 200
        },
        "event": [
            "load"
        ]
    }
}
````

### 例子
````html
<div>
  <image src="..." onclick="..." resize="..."></image>
  <text>...</text>
</div>
````

简写：
````
<div>
  <img src="..."  onclick="..." resize="..."></img>
  <text>...</text>
</div>
````

## 其它参考    
+ [image 的 resize="contain" 在 Android 没有效果](https://github.com/alibaba/weex/issues/1381)
+ [image组件使用demo](https://github.com/alibaba/weex/blob/dev/examples/component/image-demo.we)

[mobile_preview](http://gtms04.alicdn.com/tps/i4/TB1ehtqMFXXXXcOXXXX1odaOXXX-370-664.gif)
