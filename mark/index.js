let fs = require('fs');
let path = require('path');
let colors = require('colors');
let fsAdd = require('./fs_add');
let marked = require('./markx');
let util = require('./util');
let minify = require('html-minifier').minify;


const ORG_DIR = '../en-doc';
const DIST_DIR = './../website/';

/***
 * -----------------------------------------------------------
 * ***********************构建文件夹****************************
 * -----------------------------------------------------------
 */

console.log('.............创建文件夹开始..............'.yellow);
let files = fsAdd(ORG_DIR, DIST_DIR);
console.log('..............创建文件夹成功..............'.yellow);



/***
 * -----------------------------------------------------------
 * ***********************拷贝资源文件****************************
 * -----------------------------------------------------------
 */

console.log('.............拷贝资源文件开始..............'.yellow);
const FROM = './source';
const DIST =  './../website/source';
let source = fsAdd(FROM, DIST);
source.map(function(v){
   let data = fs.readFileSync(v);
   console.log(v.green);
   let dist = path.join(DIST, path.relative(FROM, v));
   fs.writeFileSync(dist, data);
});
console.log('..............拷贝资源文件成功..............'.yellow);


/***
 * -----------------------------------------------------------
 * ***********************批量网页构建****************************
 * -----------------------------------------------------------
 */
console.log('..............批量网页构建开始..............'.yellow);
files.map(function(v){
  //切记v不能改变
  let md2html = v.replace('.md', '.html');
  md2html = md2html.replace('../en-doc/', '');
  let path = './../website/' + md2html;

  let data;
  console.log(v.green);
  if(v.indexOf('.md') > 0){
    //转换md
    data = fs.readFileSync(v).toString();
    data = marked(data);
    let page = util.script
    + '\n<div id="_mx__md_container">\n'
    + util.wrapCSS(util.commonStyle)
    + data 
    + '</div>';

    
    let html = fs.readFileSync('./source/doc.html').toString();
    let css = fs.readFileSync('./source/doc.css').toString();
    let tree_menu = fs.readFileSync('./source/tree_menu.html').toString();
    
    html =  html.replace('<%include @doc.css %>', css);
    html = html.replace('<%include @tree_menu.css %>', tree_menu);
    data =  html.replace('<%include @doc_container %>', page);
    //最后执行js脚本
    data +=  util.wrapScript(util.commonJS);
    
    //压缩代码
    data = minify(data, {
       minifyJS: true,
       minifyCSS: true,
       removeAttributeQuotes: true,
       keepClosingSlash: true,
       collapseWhitespace: true,
       collapseInlineTagWhitespace: true,
       conservativeCollapse: true
    });
    
    
  }else{
    //执行拷贝动作
    data = fs.readFileSync(v);
  }
  fs.writeFileSync(path, data);
});


console.log('..............批量网页构建成功..............'.yellow);

