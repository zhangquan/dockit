/**
 * markdown文档增强工具
 * 1. 独立css文件，默认／更新css样式
 * 2. 扩展已有语法的样式
 * 3. 增加新语法
 * 4. 制作各种语法Demo
 */
let marked = require('./markdown');
let hljs = require('./highlightjs');
let renderer = new marked.Renderer();

/**
 * heading组件，针对#语法转义
 * 如果转义的段落文本字数超过30个字，即escapedText长度超过30个字符，则取30个，
 * 因为这样可以控制锚点的url串的长度
 * 功能点：
 * 1. 标题可含链接，图片
 * 2. 可以使用［友好］锚点
 */
renderer.heading = function (text, level) {
  let escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  let anchor = escapedText;
  let img = '';
  if(text.indexOf('<a class=') > 0){
    let titles = text.split('<a class=');
    text = titles[0];
    img = titles[1];
  }
  if(anchor.length > 30){
    anchor = anchor.substr(0, 30);
  }
  let tpl = '';
  tpl += '<h';
  tpl += level;
  if(level == 1){
    tpl += ' class="_mx__heading _mx__heading_border"><a name="';
    console.log(text);
  }else if(level == 2){
    tpl += ' class="_mx__heading _mx__heading_border2" onclick="addAnchor(\''+ text +'\')"><a name="';
    console.log(text);
  }else if(level == 3){
    tpl += ' class="_mx__heading _mx__heading_color" onclick="addAnchor(\''+ text +'\')"><a name="';
  }else{
    tpl += ' class="_mx__heading" onclick="addAnchor(\''+ text +'\')"><a name="';
  }
  tpl += text;
  tpl += '" class="anchor" href="#';
  tpl += text;
  tpl += '"><span class="header-link"></span></a>';
  tpl += text;
  
  if(img){
    tpl += '<a class=' + img;
  }
  tpl += '</h';
  tpl += level;
  tpl += '>';
  return tpl;
  // return text;
};

/**
 * code 组件，针对代码块语法
 * 功能：
 * 1. 语法高亮
 * 2. 背景修饰
 */
renderer.code = function(code, language){
  let tpl ='';
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
  let tpl = '';
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
  let str = '';
  str +='<div class="_mx__paragraph">';
  str += text;
  str += '</div>';
  return str;
}

renderer.link = function(href, title, text){
  let str = '';
  str += '<a class="_mx__link" target="_blank"';
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

module.exports = marked;