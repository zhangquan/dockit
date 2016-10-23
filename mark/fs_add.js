/**
 * 构建777权限的目录 
 * 仅复制目录结构
 * 
 */
let fs = require('fs');
let path = require('path');
let mkdir = require('mkdir-p');
let colors = require( 'colors');

function FileTools(from, to, filter) {
  this.from = from;
  this.to = to;
  this.filter = filter;
  return this;
}

FileTools.prototype.findSync =  function() {
  let that = this;
  let filelist = {
    dirs: [],
    files: []
  };
  let getfiles = function(from) {
    let files = fs.readdirSync(from);
    let index = 0;
    let filecount = files.length;
    let loop = function() {
      let filename = files[index];
      let filepath = path.join(from, filename);
      let stats = fs.lstatSync(filepath);
      if (stats.isDirectory()) {
        if (that.filter('directory', filepath, filename)) {
          filelist.dirs.push(filepath);
          getfiles(filepath);
        }
      } else if (stats.isFile()) {
        if (that.filter('file', filepath, filename)) {
          filelist.files.push(filepath);
        }
      }
      return checker();
    };
    let checker = function() {
      index++;
      if(index === filecount) {
        return filelist;
      } else {
        return loop();
      }
    };
    if(filecount > 0) {
      return loop();
    } else {
      return filelist;
    }
  };
  return getfiles(this.from);
};

FileTools.prototype.mkdirSync = function(list) {
  let index = 0;
  let filecount = list.length;
  let loop = function() {
    mkdir.sync(list[index]);
    index++;
    if(index === filecount) {
      return true;
    } else {
      return loop();
    }
  };
  if(filecount > 0) {
    return loop();
  } else {
    return true;
  }
};

FileTools.prototype.copyfileSync = function(list) {
  let that = this;
  let index = 0;
  let filecount = list.length;
  let loop = function() {
    let filepath = list[index];
    let distpath = path.join(that.to, path.relative(that.from, filepath));
    fs.writeFileSync(distpath, fs.readFileSync(filepath, 'binary'), 'binary');
    index++;
    if(index === filecount) {
      return true;
    } else {
      return loop();
    }
  };
  if(filecount > 0) {
    return loop();
  } else {
    return true;
  }
};

function copy(from, to, filter, callback) {
  if (typeof filter === 'function' && !callback) {
    callback = filter;
    filter = null;
  }
  filter = filter || function(state, filepath, filename) {
    return true;
  };
  let tools = new FileTools(from, to, filter);
  tools.find(function(err, list) {
    let dirs = list.dirs.map(function(v) {
      return path.join(tools.to, path.relative(tools.from, v));
    }).concat([tools.to]);
    tools.mkdir(dirs, function(err) {
      tools.copyfile(list.files, callback);
    });
  });
}

copy.sync = function(from, to, filter) {
  filter = filter || function(state, filepath, filename) {
    return true;
  };
  let tools = new FileTools(from, to, filter);
  let list = tools.findSync();
  let dirs = list.dirs.map(function(v) {
    let dir =  path.join(tools.to, path.relative(tools.from, v));
    console.log(dir.green);
    return dir;
  });
  tools.mkdirSync(dirs);
  return list.files;
};

module.exports = copy.sync;