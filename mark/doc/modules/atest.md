# atest test

mx_time 
	0.7及以上版本
mx_time 


storage 是 Weex 的一个模块，提供本地数据的存储、修改、删除等功能，没有时间限制。但是需要注意的是，在 H5/Web 端的实现是采用 `HTML5 LocalStorage API`。因此，就会存在数据大小的限制。一般而言，现代浏览器提供 5M 的存储空间。storage 可以存储一些关键数据，例如一些轻量的服务接口数据。
````javascript
<template>
  <div>
    <text>{{weex}}</text>
  </div>
</template>

<style></style>

<script>
  module.exports = {
    data: {
      weex: ''
    },
    created: function(){
      var self = this;
      var storage = require('@weex-module/storage');
      //setItem
      storage.setItem('weex', 'A framework for building Mobile cross-platform UI', function(e) {
        if(e.result === 'success'){
          console.log('存储数据成功');
          storage.getItem('weex', function(e) {
            if(e.result === 'success'){
              self.weex = e.data
            }
          });
        }
      });
    }
  };
  
</script>
````   
[体验一下](http://www.baidu.com?123=test)


## API  
storage 提供了一系列的 API 供我们调用。我们只需要引入该模块，然后调用对应的 API 即可。

### setItem(key, value, callback)

该方法可以通过键值对的形式将数据存储到本地。同时可以通过该方法，更新已有的数据。

**参数**

* key(string): 要存储的键，不允许是""或null.

* value(string): 要存储的值，不允许是""或null.

* callback(object): 执行操作成功后的回调.

**示例**

````javascript
var storage = require('@weex-module/storage');
storage.setItem('bar', 'bar-value', function(e) {
  //'e'是一个包含'result'和data的对象。可以通过e.result判断setItem操作是否执行成功。
  //e.data返回undefined表示设置成功，返回invalid_param表示key/value 为 "" 或者 null
});
````      

### getItem(key, callback)

传入键名返回对应的键值

**参数**

+ key(string): 要获取的值的名称，不允许是""或null.

+ callback(object): 执行操作成功后的回调.

**示例**

````javascript
var storage = require('@weex-module/storage');
storage.getItem('foo', function(e) {
	//'e'是一个包含result和data的对象.
	//使用e.data获取键的值，如果没有找到对应的键值则返回undefined.
});
````

### removeItem(key, callback)

传入一个键名将会删除本地存储中对应的键值

**参数**

* key(string): 要删除的值的名称，不允许是""或null.

* callback(object): 执行操作成功后的回调.

**示例**

````javascript
var storage = require('@weex-module/storage');
storage.removeItem('foo', function(e) {
	// 'e'是一个包含result和data的对象.
	// e.result返回执行结果success或failed.
	// e.data在成功执行后返回undefined.
});
````

### length(callback)

返回本地存储的数据中所有存储项数量的整数

**参数**

* callback(object): 执行操作成功后的回调.

**示例**

````javascript
var storage = require('@weex-module/storage');
storage.length(function(e) {
	// 'e'是一个包含'result'和'data'的对象.
	// e.data返回所有已存储项的数量.
});
````

### getAllKeys(callback)

返回一个包含全部已存储项键名的数组

**参数**

* callback(object): 执行操作成功后的回调。   



**示例**

````javascript
var storage = require('@weex-module/storage');
storage.getAllKeys(function(e) {
	// 'e'是一个包含'result'和'data'的对象.
	// e.data返回键名组成的数组.
});
````  

[体验一下](https://m.taobao.com?123=test)

## 其它参考 

+ [html5 localStorage: http://www.w3school.com.cn/html5/html_5_webstorage.asp](http://www.w3school.com.cn/html5/html_5_webstorage.asp)       
+ [add features to storage module(android)](https://github.com/alibaba/weex/pull/1296) 
+ [fix storage module in swift](https://github.com/alibaba/weex/pull/998)       
+ [storage 在 iPhone 上无效，在模拟器上有效，如何解决？](https://github.com/alibaba/weex/issues/1453) 
+ [storage 模块完整的 Demo](https://github.com/alibaba/weex/blob/dev/examples/module/storage-demo.we)
      
[mobile_preview](http://gtms03.alicdn.com/tps/i3/TB1pQENMXXXXXaLXVXXkIFHLVXX-624-1105.jpg)