let fs = require('fs');
let path = require('path');
let colors = require('colors');
let fsAdd = require('./fs_add');
let marked = require('./markx');
let util = require('./util');
let minify = require('html-minifier').minify;


const ORG_DIR = './doc';
const DIST_DIR = './../website/doc';

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
  let path = '../website/' + v.replace('.md', '.html');
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
    + '</div>' 
    + util.wrapScript(util.commonJS);
    
    let html = fs.readFileSync('./source/doc.html').toString();
    let css = fs.readFileSync('./source/doc.css').toString();
    
    html =  html.replace('<%include @doc.css %>', css);
    data =  html.replace('<%include @doc_container %>', page);
    
  
    //执行压缩
    // data = minify(data, {
    //   minifyJS: true,
    //   minifyCSS: true,
    //   removeAttributeQuotes: true,
    //   keepClosingSlash: true,
    //   collapseWhitespace: true,
    //   collapseInlineTagWhitespace: true,
    //   conservativeCollapse: true
    // });
    
    
  }else{
    //执行拷贝动作
    data = fs.readFileSync(v);
  }
  fs.writeFileSync(path, data);
});


console.log('..............批量网页构建成功..............'.yellow);

