
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

jQuery(function(){
  setTimeout(function(){
    jQuery('body').addClass('loading');
  },0);
});


/* 
---------------------------------------------------
  1. Humbugur
---------------------------------------------------
*/

jQuery(function(){
  jQuery(".humbSP .servBtn .hover").on("click", function() {
    jQuery('.humbNavUnder').addClass('active');
    jQuery('.humbSP').removeClass('active');
  });
});

jQuery(function(){
  jQuery(".backIndex").on("click", function() {
    jQuery('.humbNavUnder').removeClass('active');
    jQuery('.humbSP').addClass('active');
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
    jQuery(document).ready(function(){
    var hSize = jQuery(window).height();
      jQuery('.mv').height(hSize);
    });

    // ページをリサイズした時の処理
    jQuery(window).resize(function(){
    var hSize = jQuery(window).height();
      jQuery('.mv').height(hSize);
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

jQuery('#parent').on('change', function(){
  jQuery('body').addClass("selectJpn");
});




