
/**
 * markdown文档增强工具
 * 1. 独立css文件，默认／更新css样式
 * 2. 扩展已有语法的样式
 * 3. 增加新语法
 * 4. 制作各种语法Demo
 */
var fs = require('fs');
var marked = require('marked');
var hljs = require('highlight.js');
var renderer = new marked.Renderer();

/**
 * 针对不同的组件，重写View，包括样式和布局
 * 命名格式：组件名.css
 */
var headingStyle = fs.readFileSync('./heading.css').toString();
var codeStyle = fs.readFileSync('./code.css').toString();
var paragraphStyle = fs.readFileSync('./paragraph.css').toString();
var commonStyle = fs.readFileSync('./code.css').toString();

/**
 * 针对不同的组件，重写动态化效果
 * 命名格式：组件名.js
 */
var headingJS = fs.readFileSync('./heading.js').toString();
var codeJS = fs.readFileSync('./code.js').toString();
var paragraphJS = fs.readFileSync('./paragraph.js').toString();

/**
 * 第三库链接，最终该链接的文件会部署到github page 上
 * 1. jquery / zepto
 * 2. highlight
 * 3. 以及一些其它的效果库 或者 公共基础库
 */
var script = '<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js"></script>\n';

// 整个markdown文章的容器
var mdPageHTML = '';
// markdown转换后的html片段
var mdTransformHTML = '';

/**
 * TODO: 读取某个文件夹所有的.md文件进行编译
 * 1. 最终编译的效果是.html文件，能够独立运行
 * 2. 非公共组件，都是直出html页面，不做Ajax异步读取
 */
var content = fs.readFileSync('./test.md').toString();

/**
 * 包装读取的.css文件的内容，以便浏览器解析
 * content：css内容纯文本
 */
var wrapCSS = function(content){
  return '<style type="text/css">' + content + '</style>\n';
};

/**
 * 包装读取的.js文件的内容，以便浏览器解析
 * content：js内容纯文本
 */
var wrapScript = function(content){
  return '<script type="text/javascript">' + content + '</script>';
};

//如果escapedText长度超过30个字符，则取30个
renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  var anchor = escapedText;
  if(anchor.length > 30){
    anchor = anchor.substr(0, 30);
  }
  var tpl = '<h';
  tpl += level;
  tpl += '><a name="';
  tpl += anchor;
  tpl += '" class="anchor" href="#';
  tpl += anchor;
  tpl += '"><span class="header-link"></span></a>';
  tpl += text;
  tpl += '</h';
  tpl += level;
  tpl += '>';
  return tpl;
};

renderer.code = function(code, language){
  var tpl = wrapCSS(codeStyle);
  tpl += '<pre class="vczero_code_pre" id="__aa"><code>';
  tpl += '<a>'; 
  tpl += hljs.highlightAuto(code).value;
  tpl += '</a>';
  tpl += '</code></pre>';
  tpl += wrapScript(codeJS);
  return tpl;
}

renderer.paragraph = function(text){
  var str = '';
  str +='<div style="font-size:14px;">';
  str += text;
  str += '</div>';
  return str;
}


marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  smartypants: false
});


mdTransformHTML = marked(content);
mdPageHTML = '<div class="vczero_md_container">' + wrapCSS(commonStyle) + script + mdTransformHTML + '</div>';

fs.writeFileSync('./index.html', mdPageHTML);



