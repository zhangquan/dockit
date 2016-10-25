
/**
 * 静态资源配置项：图片、公共css、javascript 等
 * 如果文件中的路径不是正规的url，则在路径前用 STATIC_SOURCE_PATH 补齐
 * STATIC_SOURCE_PATH 是 website/doc 目录相对于 github或者服务器地址，
 * 例如：
 * http://vczero.github.io/website/doc/resource/imgs/xxxx
 * http://vczero.github.io/website/doc/resource/doc.css
 * 
 * 因此，如果需要省略地址的话，应该这样书写地址：
 * /resource/imgs/logo.png  图片
 * /resource/doc.css   静态资源
 */
const STATIC_SOURCE_PATH = '';

/**
 * 是否开启基于文件夹／文件创建菜单树
 * 如果是 false，则是根据配置文件创建
 * 如果是 true， 则是根据文件(夹)自动创建
 * 
 */
let isAutoCreateMenuTreeBaseOnDirs = false;
let menuTree = []; 

if(!isAutoCreateMenuTreeBaseOnDirs){

}
  menuTree = [
    {
      name: 'components',
      readme: './doc/components/index.html',
      chiildren: [
        {
          name: 'list',
          readme: './doc/components/list/index.html',
          chiildren:[
            {
              name: 'cell',
              readme: './doc/components/list/cell.md',
              chiildren: []
            }
          ]
        },
        {
          name: 'a',
          readme: './doc/components/a.md',
          chiildren:[]
        },
        {
          name: 'div',
          readme: './doc/components/div.md',
          chiildren:[]
        }
      ]
    },
    {
      name: 'modules',
      readme: './re'
    }
  ];


/**
 * STATIC_SOURCE_PATH 不建议配置，除非统一了静态文件系统
 * menuTree 供生成静态的菜单树
 */
module.exports = {
  STATIC_SOURCE_PATH: STATIC_SOURCE_PATH,
  menuTree: menuTree
};  


