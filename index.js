
/**
 * 
 * test 1: use markdown node module
 * 1.样式缺少
 * 2.有些标准markdown不支持
 * 3.markdown扩展困难
 * **/
// var fs = require('fs');
// var markdown = require('./markdown2').markdown;
// var md_content = fs.readFileSync('./test.md').toString();
// var html_content = markdown.toHTML(md_content);
// fs.writeFileSync('./index.html', html_content);

/**
 * test2 
 * node-markdown
 * 
 */
// var md = require("node-markdown").Markdown;
// var fs = require('fs');
// var md_content = fs.readFileSync('./test.md').toString();
// var html_content = md(md_content);
// fs.writeFileSync('./index.html', html_content);


/**
 * 
 * test 3: convert 
 * 使用自己开发的markdown模块
 * 
 * */
// var fs = require('fs');
// var markdown = require('./markdown')
// var md_content = fs.readFileSync('./test.md').toString();
// var html_content = markdown.toHTML(md_content);
// fs.writeFileSync('./index.html', html_content.join('\n'));
//console.log(html_content);

/**
 * test 4
 * 
 */
var fs = require('fs');
var marked = require('marked');
var content = fs.readFileSync('./test.md').toString();
var hljs = require('highlight.js');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var html = marked(content);
fs.writeFileSync('./index.html', html);



