
/* 
=================================================== 

  0. Common
  1. Humb
  2. Index
  3. Blog
   
=================================================== 
*/

/* 
---------------------------------------------------
  0. Common
---------------------------------------------------
*/

//loading

$(function(){
  setTimeout(function(){
    $('body').addClass('loading');
  },0);
});


/* 
---------------------------------------------------
  1. Humbugur
---------------------------------------------------
*/

$(function(){
  $(".humbSP .servBtn .hover").on("click", function() {
    $('.humbNavUnder').addClass('active');
    $('.humbSP').removeClass('active');
  });
});

$(function(){
  $(".backIndex").on("click", function() {
    $('.humbNavUnder').removeClass('active');
    $('.humbSP').addClass('active');
  });
});


/* 
---------------------------------------------------
  2. Index
---------------------------------------------------
*/

var mediaQuery = matchMedia('(max-width: 767px)');

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズが変更されても実行されるように
mediaQuery.addListener(handle);

function handle(mq) {
  if (mq.matches) {

    // ウィンドウサイズが768px以下のとき
    $(document).ready(function(){
    var hSize = $(window).height();
      $('.mv').height(hSize);
    });

    // ページをリサイズした時の処理
    $(window).resize(function(){
    var hSize = $(window).height();
      $('.mv').height(hSize);
    });

  } else {
    
    
  }
}


/* 
---------------------------------------------------
  3. Blog
---------------------------------------------------
*/

//selectBox

$('#parent').on('change', function(){
  $('body').addClass("selectJpn");
});




