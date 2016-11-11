# Hello World    
Weex 是多端一致、高性能的移动动态化解决方案。可以使用Web的技术栈（即HTML、CSS、JavaScript）开发高性能的移动应用。因此，入门相对来说，比较简单；同时Weex提供一系列的辅助工具帮助开发、调试。后面会详细介绍。
下面来看一下，如何开发出第一个Demo：Hello World。  

### 第1步：安装Node.js    
关于Node.js环境搭建，可以参考 [Node.js官网](https://nodejs.org/en/)。一般情况下，下载可执行程序即可，例如MacOSX，可以直接下载dmg文件安装。
第一次安装Node.js，可以使用以下命令测试是否安装成功:  

```bash   
$ node -v
v6.3.1
$ npm -v
3.10.3
```	
node -v 和 npm -v 命令来测试Node.js环境是否搭建成功。	
### 第2步：安装weex-toolkit    
通常，安装了Node.js环境，npm的命令也随着安装了。因此，使用npm来安装 `weex-toolkit`。       

```bash
$ npm install -g weex-toolkit    
```	  
	
如果发现安装过程很慢，可以考虑使用cnpm来安装了。首先，我们全局安装 cnpm：     

```bash
$ npm install -g cnpm 	       
```
		
cnpm 是一个淘宝的npm镜像，可以提高下载速度。尝试使用cnpm来安装 `weex-toolkit`：     

```bash
$ cnpm install -g weex-toolkit      
``` 

**备注：** 如果提示权限问题，这时候加上`sudo`关键字即可。例如：  
 
```bash 
$ sudo npm install -g weex-toolkit 	   
```
这时会提示需要输入密码，因此输入你本机电脑密码即可。       
 
 weex-toolkit安装完成后，输入如下命令测试:
 
```bash 	
 $ weex --version    
 info 0.5.8 
```
             
没有错误，则说明安装成功。               


### 第3步：创建文件     
`weex-toolkit`已经安装成功。可以开始编写代码了。首先，我们创建一个.we文件。weex程序的文件后缀（扩展名）是.we。使用Mac OSX的同学，可以使用touch命令创建文件。      

```bash	
$ touch hello.we       
```

打开空白的hello.we文件，输入三个标签，内容为：       
 
```html
<template></template>
<style></style>
<script></script>      
```	

其实，上面的代码就是最简单的Weex程序。但是.we文件是不能直接运行的。这时候需要使用刚才安装好的`weex-toolkit`。`weex-toolkit`会编译.we文件，并且创建html文件的临时目录。
这里，使用 weex hello.we 命令编译该程序。      

```bash
$ weex hello.we       
```	
	 
这时，命令行会干三件事： 
+ 编译.we文件；

+ 启动静态服务器；

+ 打开浏览器，地址为：http://127.0.0.1:8081/weex_tmp/h5_render/?hot-reload_controller&page=hello.js&loader=xhr

这时候，浏览器的页面应该是空白，因为.we文件中没有任何实质的内容。

### 第4步：添加内容     
修改weex.we文件，向 template 中添加内容。具体代码如下：      

````html
<template>
  <div>
	<text>Hello world</text>
  </div>
</template>
<style></style>
<script></script>       
````	
	 
再次编译hello.we文件：    

```bash
$ weex hello.we       
```	

这时会看到浏览器显示了“Hello world”字样。        

### 第5步：增加样式       
现在，对已有的文本内容进行样式修饰。这里将文本颜色设置为红色，字体大小为160像素。具体代码如下：              

````html 
<template>
  <div>
	  <text class="text" style="color:red;">Hello world</text>
  </div>
</template>
<style>
  .text{
    font-size:160;
  }
</style>
<script></script>     
````

这时候，浏览器已经重新载入了页面。其实，是weex-toolkit开启了热加载。可以看到红色的“Hello world”。
**注意:**
weex支持`style`和`class`来设定样式。但是，font-size：160后面没有px，这是建议的写法。如需了解有哪些通用的样式，可以参考 [基础样式](http://alibaba.github.io/weex/doc/references/common-style.html)。   


### 第6步：html文件载体在哪   
浏览器运行一个页面，需要一个html文件。那么，刚才weex命令编译.we文件的时候也生成了html文件。在hello.we同级目录，生成了`weex_tmp`文件夹。weex_tmp文件夹里面就是编译生成的代码。

### 第7步：使用playground预览效果           
已经在浏览器中看到了刚才的代码效果。这里，使用playground再验证一次。首先，需要下载安装playground。点击[这里](http://alibaba.github.io/weex/download.html)下载playground。  
playground已经安装成功。这里，使用`weex hello.we --qr`命令生成js bundle的二维码。

```bash
$ weex hello.we --qr      
```	   

然后，使用playground扫描在命令行生成的二维码，即可预览效果。   


[mobile_preview](http://alibaba.github.io/weex/img/demo/start-1.png)


	
		
	
		
	     

 
   

           
	
	
 