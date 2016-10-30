(function(win, undefined){
  /*
  * 回到顶部
  * 1.当文档高度大于屏幕高度时才会显示滚动到顶部的按钮
  * 2.当用户滚动一定距离时，才出现滚动按钮
  * 3.滚动需要有一定的动画
  * */
  var goto_top = $('#_mx__gotop');
  var doc_container = $('.doc_container');
  var screenHeight =  document.body.scrollHeight;
  var containerHeight = $('#_mx__md_container').height();
  goto_top.on('click', function(){
    doc_container.animate({scrollTop: '0px'}, 400);
  });
  doc_container.on('scroll',function(){
    //滚动条件预设
    var top = doc_container.scrollTop();
    if(containerHeight > screenHeight && top > 200){
      goto_top.css('display', 'block');
    }else{
      //隐藏滚动按钮
      goto_top.css('display', 'none');
    }
  });


  /*
   * 增加锚点
   * 1.截取的是标题的一部分
   * */
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

  /*
  * 生成二维码
  * 1.正式环境需要替换成playground的地址
  * 2.测试环境可以在url上加上参数123=test
  * */
  var links = $('._mx__link');
  links.each(function(i){
    var link = links[i];
    if(link.innerText == '体验一下' && (link.href.indexOf('playground') > 0 || link.href.indexOf('123=test') > 0)){
      var href = link.href;
      var qrcode = $('.qrcode');
      var qr_view = $('.qr_view');
      $(link).on('mouseenter', function(){
        qr_view.css('display', 'block');
        qrcode.qrcode({
          text: href,
          width: 250,
          height: 250
        });

        $('.qrcode').animate({
          height:'+=15px',
          width:'+=15px'
        });
      });
      $(link).on('mouseleave', function(){
        qr_view.css('display', 'none');
        qrcode.empty();
        qrcode.animate({
          height:'-=15px',
          width:'-=15px'
        });
      });
    }
  });


})(window);


