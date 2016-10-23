let fs = require('fs');
let colors = require( 'colors');
let fsAdd = require('./fs_add');
let marked = require('./markx');
let util = require('./util');

const ORG_DIR = './doc';
const DIST_DIR = './../website/doc';

/***
 * -----------------------------------------------------------
 * ***********************构建文件夹****************************
 * -----------------------------------------------------------
 */

console.log('*********创建文件夹开始*********'.yellow);
let files = fsAdd(ORG_DIR, DIST_DIR);
console.log('*********创建文件夹成功*********'.yellow);

/***
 * -----------------------------------------------------------
 * ***********************转义md文件****************************
 * -----------------------------------------------------------
 */
console.log('**********文件转义开始**********'.yellow);
files.map(function(v){
  let path = '../website/' + v.replace('.md', '.html');
  let data;
  console.log(v.green);
  if(v.indexOf('.md') > 0){
    //转换md
    data = fs.readFileSync(v).toString();
    data = marked(data);
    data = '<meta charset="utf-8"><div id="_mx__md_container"> <div id="_mx__gotop">Top</div>' + util.wrapCSS(util.commonStyle) + util.script + data + '</div>' + util.wrapScript(util.commonJS);
  }else{
    //执行拷贝动作
    data = fs.readFileSync(v);
  }
  fs.writeFileSync(path, data);
});
console.log('**********文件转义成功**********'.yellow);

