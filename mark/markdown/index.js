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

module.exports = require('./marked');