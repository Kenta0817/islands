
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

jQuery(document).ready(function(){
  jQuery('a:not([href^="#"]):not([target]').on('click', function(e){
      e.preventDefault();         // ページ遷移を一旦キャンセル
      url = jQuery(this).attr('href'); // 遷移先のURLを取得

      if (url !== '') {
          jQuery('body').addClass('transition'); // 画面遷移前のアニメーション is-slide-in

          setTimeout(function () {
            window.location = url;  // 0.7秒後に取得したURLに遷移
            }, 0);
          }
      return false;
  });
});


//cursor

if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    jQuery(function(){
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

        jQuery(".baseSlider .slick-list,.blogSlider .slick-list").on("mouseenter", function() {
            jQuery('#cursor').addClass("change");
            jQuery('#stalker').addClass("change");
        });
 
        jQuery(".baseSlider .slick-list,.blogSlider .slick-list").on("mouseleave", function() {
            jQuery('#cursor').removeClass("change");
            jQuery('#stalker').removeClass("change");
        });

        jQuery(".galleryList").on("mouseenter", function() {
            jQuery('#cursor').addClass("change");
            jQuery('#stalker').addClass("change");
        });
 
        jQuery(".galleryList").on("mouseleave", function() {
            jQuery('#cursor').removeClass("change");
            jQuery('#stalker').removeClass("change");
        });

        jQuery(".baseSlider .slick-list .cont a,.blogSlider .slick-list .cont a").on("mouseenter", function() {
            jQuery('#cursor').removeClass("change");
            jQuery('#stalker').removeClass("change");
        });
 
        jQuery(".baseSlider .slick-list .cont a,.blogSlider .slick-list .cont a").on("mouseleave", function() {
            jQuery('#cursor').addClass("change");
            jQuery('#stalker').addClass("change");
        });

    });
}


//totop

jQuery(function () {
    var topBtn = jQuery('.toTop');
    
    topBtn.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500,'easeInOutQuad');
        return false;
    });
});


//Scroll

jQuery(function(){
  jQuery('.scroll').click(function(){
    jQuery("html,body").animate({scrollTop:jQuery('#about').offset().top});
  });
});

jQuery(function(){
  jQuery('a[href^="#"]').click(function(){
    var speed = 500;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    jQuery("html, body").animate({scrollTop:position}, speed, "easeInOutQuad");
    return false;
  });
});


//LearnMore

jQuery(function() {
  jQuery('.learnMore a')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).parent().addClass('delay');
    jQuery(this).parent().addClass('active');
  })

  //mouseoutした時
  .mouseout(function() {
    jQuery(this).parent().removeClass('active');
  });
});




/* 
---------------------------------------------------
  1. Humb
---------------------------------------------------
*/

  
//Btn

jQuery(document).ready(function(){
  jQuery('.humbBtn').click(function () {
    if(jQuery('.servUnder').hasClass('active')){

      jQuery('.servUnder').removeClass('active');
      jQuery('.servBtn').removeClass('active');

      setTimeout(function(){
        jQuery('.humbCont,.humbBtn').toggleClass('active');
      },800);
    } else {
      jQuery('.humbCont,.humbBtn').toggleClass('active');
    }
  });
});


//mainNav

jQuery(function () {
  jQuery('.servBtn').click(function() {
    // servBtnにActive
    jQuery(this).toggleClass("active");

    // servUnderにActive
    jQuery(this).parent('ul').next('ul').toggleClass('active');
  });
});


//mainBg

jQuery(function() {
  jQuery('.humbNav li a,.humbNav li .hover')

  //mouseoverした時
  .mouseover(function() {
    //.homeBtn
    if(jQuery(this).parent('li').hasClass('homeBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .home').addClass("active");

    //.servBtn
    } else if (jQuery(this).parent('li').hasClass('servBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .service').addClass("active");

    ///////

    //.servTop
    } else if (jQuery(this).parent('li').hasClass('servtopBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .servTop').addClass("active");

    //.shop
    } else if (jQuery(this).parent('li').hasClass('shopBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .shop').addClass("active");

    //.stay
    } else if (jQuery(this).parent('li').hasClass('stayBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .stay').addClass("active");

    //.rental
    } else if (jQuery(this).parent('li').hasClass('rentalBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .rental').addClass("active");

    //.mtb
    } else if (jQuery(this).parent('li').hasClass('mtbBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .mtb').addClass("active");

    ///////

    //.aboutBtn
    } else if (jQuery(this).parent('li').hasClass('aboutBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .about').addClass("active");

    //.blogBtn
    } else if (jQuery(this).parent('li').hasClass('blogBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .blog').addClass("active");

    //.infoBtn
    } else if (jQuery(this).parent('li').hasClass('infoBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .info').addClass("active");

    //.brandBtn
    } else if (jQuery(this).parent('li').hasClass('brandBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .brand').addClass("active");

    //.contactBtn
    } else if (jQuery(this).parent('li').hasClass('contactBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .contact').addClass("active");

    //.storeBtn
    } else if (jQuery(this).parent('li').hasClass('storeBtn')){
      jQuery('.humbBg .common').removeClass("active");
      jQuery('.humbBg .store').addClass("active");
    }
  })

  //mouseoutした時
  .mouseout(function() {
    jQuery('.humbBg .common').addClass('active');
    jQuery('.humbBg figure').not('.common').removeClass('active');
  });
});



/* 
---------------------------------------------------
  2. Main
---------------------------------------------------
*/

//SlideImage

jQuery(function() {
  jQuery('.slideImage')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('active');
  })

});


/* 
---------------------------------------------------
  3. Index
---------------------------------------------------
*/

//mainSNS

jQuery(function() {
  jQuery('.mainSNS')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('active');
  })

});


/* 
---------------------------------------------------
  4. Under
---------------------------------------------------
*/

// Scroll - underVisual

jQuery(function() {

  jQuery(window).on( 'scroll', function () {
    //スクロール位置を取得
    if ( jQuery(this).scrollTop() < 30 ) {
      jQuery('body.under').removeClass("filter");
    } else {
      jQuery('body.under').addClass("filter");
    }
  });
});



jQuery(function(){
  jQuery(window).scroll(function (){
    jQuery(".imageRand .slideImage").each(function(){
      var imgPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/1.7){
        jQuery(this).addClass("color");
      } else {
        jQuery(this).removeClass("color");
      }
    });
  });
});



jQuery(function(){
  jQuery(window).scroll(function (){
    jQuery(".imageRand .slideImage").each(function(){
      var imgPos = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      var windowHeight = jQuery(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/0.9){
        jQuery(this).addClass("color2");
      } else {
        jQuery(this).removeClass("color2");
      }
    });
  });
});


// Brand - Image

jQuery(function() {
  jQuery('.brandBlog')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('remDelay');
  })

});


// Blog - Image

jQuery(function() {
  jQuery('.blogCont')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('active');
  })

});

jQuery(function() {
  jQuery('.catList li')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('active');
  })

});

jQuery(function() {
  jQuery('.relateCont')

  //mouseoverした時
  .mouseover(function() {
    jQuery(this).addClass('hover');
  })

});


// Shop Info - Accordion

jQuery(function(){
  jQuery(".howToBox dt").on("click", function() {
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle();
  });
});


// Add Up

jQuery(function(){
  jQuery("section.addUp .right p").addClass('desc fadeInUp');
});















