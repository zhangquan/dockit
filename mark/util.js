let fs = require('fs');
const MAIN_DIR = './source/';
/**
 * 针对不同的组件，重写View，包括样式和布局
 * 命名格式：组件名.css
 */
let commonStyle = fs.readFileSync(MAIN_DIR + 'common.css').toString();

/**
 * 针对不同的组件，重写动态化效果
 * 命名格式：组件名.js
 */
let commonJS = fs.readFileSync(MAIN_DIR + 'common.js').toString();


/**
 * 第三库链接，最终该链接的文件会部署到github page 上
 * 1. jquery / zepto
 * 2. highlight
 * 3. 以及一些其它的效果库 或者 公共基础库
 */
let script = '\n<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js"></script>\n';


/**
 * 包装读取的.css文件的内容，以便浏览器解析
 * content：css内容纯文本
 */
let wrapCSS = function(content){
  return '\n<style type="text/css">\n' + content + '\n</style>\n';
};

/**
 * 包装读取的.js文件的内容，以便浏览器解析
 * content：js内容纯文本
 */
let wrapScript = function(content){
  return '\n<script type="text/javascript">\n' + content + '\n</script>';
};


module.exports = {
  commonStyle: commonStyle,
  commonJS: commonJS,
  script: script,
  wrapCSS: wrapCSS,
  wrapScript: wrapScript
};