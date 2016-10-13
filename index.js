
/**
 * markdown文档增强工具
 * 1. 独立css文件，默认／更新css样式
 * 2. 扩展已有语法的样式
 * 3. 增加新语法
 * 4. 制作各种语法Demo
 */
var fs = require('fs');
var marked = require('./markdown');
var hljs = require('./highlightjs');
var renderer = new marked.Renderer();

/**
 * 针对不同的组件，重写View，包括样式和布局
 * 命名格式：组件名.css
 */
var commonStyle = fs.readFileSync('./common.css').toString();

/**
 * 针对不同的组件，重写动态化效果
 * 命名格式：组件名.js
 */
var commonJS = fs.readFileSync('./common.js').toString();


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

/**
 * TODO: 读取某个文件夹所有的.md文件进行编译
 * 1. 最终编译的效果是.html文件，能够独立运行
 * 2. 非公共组件，都是直出html页面，不做Ajax异步读取
 */
var content = fs.readFileSync('./test.cn.md').toString();

/**
 * heading组件，针对#语法转义
 * 如果转义的段落文本字数超过30个字，即escapedText长度超过30个字符，则取30个，
 * 因为这样可以控制锚点的url串的长度
 * 功能点：
 * 1. 标题可含链接，图片
 * 2. 可以使用［友好］锚点
 */
renderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  var anchor = escapedText;
  if(anchor.length > 30){
    anchor = anchor.substr(0, 30);
  }
  var tpl = '';
  tpl += '<h';
  tpl += level;
  if(level === 1){
    tpl += ' class="_mx__heading _mx__heading_border"><a name="';
  }
  tpl += ' class="_mx__heading" onclick="addAnchor(\''+ text +'\')"><a name="';
  tpl += text;
  tpl += '" class="anchor" href="#';
  tpl += text;
  tpl += '"><span class="header-link"></span></a>';
  tpl += text;
  tpl += '</h';
  tpl += level;
  tpl += '>';
  return tpl;
};

/**
 * code 组件，针对代码块语法
 * 功能：
 * 1. 语法高亮
 * 2. 背景修饰
 */
renderer.code = function(code, language){
  var tpl ='';
  tpl += '<pre class="_mx__code_pre" id="__aa"><code>';
  tpl += '<a>'; 
  tpl += hljs.highlightAuto(code).value;
  tpl += '</a>';
  tpl += '</code></pre>';
  tpl += '';
  return tpl;
}

/**
 * codespan 组件，内联代码
 * 功能：字体 & 背景颜色
 * 
 */
renderer.codespan = function(code){
  var tpl = '';
  tpl += '<span class="_mx__code_span">';
  tpl += code;
  tpl += '</span>';
  return tpl;
}


/**
 * paragraph 组件，文字段落
 * 功能：
 * 1. 字体大小增强
 * 2. 段落相关增强
 */
renderer.paragraph = function(text){
  var str = '';
  str +='<div class="_mx__paragraph">';
  str += text;
  str += '</div>';
  return str;
}

renderer.link = function(href, title, text){
  var str = '';
  str += '<a class="_mx__link" ';
  str += 'title="' + title + '" ';
  str += 'href="' + href + '" >';
  str += text;
  str += '</a>';
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
mdPageHTML = '<meta charset="utf-8"><div id="_mx__md_container"> <div id="_mx__gotop">Top</div>' + wrapCSS(commonStyle) + script + mdTransformHTML + '</div>' + wrapScript(commonJS);

fs.writeFileSync('./index.cn.html', mdPageHTML);



