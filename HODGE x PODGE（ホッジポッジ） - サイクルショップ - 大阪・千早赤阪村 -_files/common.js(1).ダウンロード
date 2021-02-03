
/* 
=================================================== 

  0. Common
  1. Humb
  2. Main
  3. Index
  4. Under

 
=================================================== 
*/

/* 
---------------------------------------------------
  0. Common
---------------------------------------------------
*/

//browser-back

window.onpageshow = function(event) {
  if (event.persisted) {
     window.location.reload();
  }
};


//transition

$(document).ready(function(){
  $('a:not([href^="#"]):not([target]').on('click', function(e){
      e.preventDefault();         // ページ遷移を一旦キャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得

      if (url !== '') {
          $('body').addClass('transition'); // 画面遷移前のアニメーション is-slide-in

          setTimeout(function () {
            window.location = url;  // 0.7秒後に取得したURLに遷移
            }, 0);
          }
      return false;
  });
});


//cursor

if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    $(function(){
        var body = document.body;
        var cursor = document.createElement("div");
        var stalker = document.createElement("div");
        cursor.id = "cursor";
        stalker.id = "stalker";
        body.appendChild(cursor);
        body.appendChild(stalker);
        body.addEventListener("mousemove", function(e) {
              cursor.style.left = e.clientX + "px";
              cursor.style.top = e.clientY + "px";
              stalker.style.left = e.clientX + "px";
              stalker.style.top = e.clientY + "px";
        }, false);

        $(".baseSlider .slick-list,.blogSlider .slick-list").on("mouseenter", function() {
            $('#cursor').addClass("change");
            $('#stalker').addClass("change");
        });
 
        $(".baseSlider .slick-list,.blogSlider .slick-list").on("mouseleave", function() {
            $('#cursor').removeClass("change");
            $('#stalker').removeClass("change");
        });

        $(".galleryList").on("mouseenter", function() {
            $('#cursor').addClass("change");
            $('#stalker').addClass("change");
        });
 
        $(".galleryList").on("mouseleave", function() {
            $('#cursor').removeClass("change");
            $('#stalker').removeClass("change");
        });

        $(".baseSlider .slick-list .cont a,.blogSlider .slick-list .cont a").on("mouseenter", function() {
            $('#cursor').removeClass("change");
            $('#stalker').removeClass("change");
        });
 
        $(".baseSlider .slick-list .cont a,.blogSlider .slick-list .cont a").on("mouseleave", function() {
            $('#cursor').addClass("change");
            $('#stalker').addClass("change");
        });

    });
}


//totop

$(function () {
    var topBtn = $('.toTop');
    
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500,'easeInOutQuad');
        return false;
    });
});


//Scroll

$(function(){
  $('.scroll').click(function(){
    $("html,body").animate({scrollTop:$('#about').offset().top});
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "easeInOutQuad");
    return false;
  });
});


//LearnMore

$(function() {
  $('.learnMore a')

  //mouseoverした時
  .mouseover(function() {
    $(this).parent().addClass('delay');
    $(this).parent().addClass('active');
  })

  //mouseoutした時
  .mouseout(function() {
    $(this).parent().removeClass('active');
  });
});




/* 
---------------------------------------------------
  1. Humb
---------------------------------------------------
*/

  
//Btn

$(document).ready(function(){
  $('.humbBtn').click(function () {
    if($('.servUnder').hasClass('active')){

      $('.servUnder').removeClass('active');
      $('.servBtn').removeClass('active');

      setTimeout(function(){
        $('.humbCont,.humbBtn').toggleClass('active');
      },800);
    } else {
      $('.humbCont,.humbBtn').toggleClass('active');
    }
  });
});


//mainNav

$(function () {
  $('.servBtn').click(function() {
    // servBtnにActive
    $(this).toggleClass("active");

    // servUnderにActive
    $(this).parent('ul').next('ul').toggleClass('active');
  });
});


//mainBg

$(function() {
  $('.humbNav li a,.humbNav li .hover')

  //mouseoverした時
  .mouseover(function() {
    //.homeBtn
    if($(this).parent('li').hasClass('homeBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .home').addClass("active");

    //.servBtn
    } else if ($(this).parent('li').hasClass('servBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .service').addClass("active");

    ///////

    //.servTop
    } else if ($(this).parent('li').hasClass('servtopBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .servTop').addClass("active");

    //.shop
    } else if ($(this).parent('li').hasClass('shopBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .shop').addClass("active");

    //.stay
    } else if ($(this).parent('li').hasClass('stayBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .stay').addClass("active");

    //.rental
    } else if ($(this).parent('li').hasClass('rentalBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .rental').addClass("active");

    //.mtb
    } else if ($(this).parent('li').hasClass('mtbBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .mtb').addClass("active");

    ///////

    //.aboutBtn
    } else if ($(this).parent('li').hasClass('aboutBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .about').addClass("active");

    //.blogBtn
    } else if ($(this).parent('li').hasClass('blogBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .blog').addClass("active");

    //.infoBtn
    } else if ($(this).parent('li').hasClass('infoBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .info').addClass("active");

    //.brandBtn
    } else if ($(this).parent('li').hasClass('brandBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .brand').addClass("active");

    //.contactBtn
    } else if ($(this).parent('li').hasClass('contactBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .contact').addClass("active");

    //.storeBtn
    } else if ($(this).parent('li').hasClass('storeBtn')){
      $('.humbBg .common').removeClass("active");
      $('.humbBg .store').addClass("active");
    }
  })

  //mouseoutした時
  .mouseout(function() {
    $('.humbBg .common').addClass('active');
    $('.humbBg figure').not('.common').removeClass('active');
  });
});



/* 
---------------------------------------------------
  2. Main
---------------------------------------------------
*/

//SlideImage

$(function() {
  $('.slideImage')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('active');
  })

});


/* 
---------------------------------------------------
  3. Index
---------------------------------------------------
*/

//mainSNS

$(function() {
  $('.mainSNS')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('active');
  })

});


/* 
---------------------------------------------------
  4. Under
---------------------------------------------------
*/

// Scroll - underVisual

$(function() {

  $(window).on( 'scroll', function () {
    //スクロール位置を取得
    if ( $(this).scrollTop() < 30 ) {
      $('body.under').removeClass("filter");
    } else {
      $('body.under').addClass("filter");
    }
  });
});



$(function(){
  $(window).scroll(function (){
    $(".imageRand .slideImage").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/1.7){
        $(this).addClass("color");
      } else {
        $(this).removeClass("color");
      }
    });
  });
});



$(function(){
  $(window).scroll(function (){
    $(".imageRand .slideImage").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/0.9){
        $(this).addClass("color2");
      } else {
        $(this).removeClass("color2");
      }
    });
  });
});


// Brand - Image

$(function() {
  $('.brandBlog')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('remDelay');
  })

});


// Blog - Image

$(function() {
  $('.blogCont')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('active');
  })

});

$(function() {
  $('.catList li')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('active');
  })

});

$(function() {
  $('.relateCont')

  //mouseoverした時
  .mouseover(function() {
    $(this).addClass('hover');
  })

});


// Shop Info - Accordion

$(function(){
  $(".howToBox dt").on("click", function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});


// Add Up

$(function(){
  $("section.addUp .right p").addClass('desc fadeInUp');
});















