(function(win, undefined){
  var goTop = document.getElementById('_mx__gotop');
  function getPagePosition() { 
    var x = 0, y = 0;
    if(window.pageYOffset){   
      y = window.pageYOffset;    
      x = window.pageXOffset; 
    } else if(document.documentElement && document.documentElement.scrollTop){
      y = document.documentElement.scrollTop;    
      x = document.documentElement.scrollLeft; 
    } else if(document.body) {
      y = document.body.scrollTop;    
      x = document.body.scrollLeft;   
    } 
    return {x:x, y:y};
  }
  
  window.onscroll = function(){
    var pos = getPagePosition();
    if(pos.y > document.body.clientHeight){
      goTop.style.display = 'block';
    }else{
      goTop.style.display = 'none';
    }
  };

  //滚动到顶部
  goTop.onclick = function(){
    var pos = getPagePosition();
    var y = pos.y;
    console.log(y);
    var handle = setInterval(function(){
      y = y - 50;
      if(y <= 0){
        window.scrollTo(0, 0);
        clearInterval(handle);
      }else{
        window.scrollTo(0, y);
      }
    }, 1);
  };

  win.addAnchor = function(a){
    var url = window.location.href;
    if(window.location.href.indexOf('#') > -1){
      url = window.location.href.split('#')[0];
    }
    window.location.href = url + '#' + a;
  };

  var searchBtn = document.getElementById('menu_search');
  searchBtn.onclick = function(){
    searchBtn.style.height = '100px';
    searchBtn.style.width = '100px';
    searchBtn.style.textAlign = 'center';
    searchBtn.style.backgroundColor = '#2792F4';

    document.getElementById('menu_search_img').src = './../../source/imgs/search_blue_t.png';
  };

})(window);


