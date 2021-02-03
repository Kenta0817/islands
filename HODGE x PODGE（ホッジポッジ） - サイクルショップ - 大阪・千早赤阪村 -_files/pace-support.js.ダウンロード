
/* 
=================================================== 

  0. Common
  1. Humb
  2. Index
  3. Under
  4. Blog

 
=================================================== 
*/

/* 
---------------------------------------------------
  0 Common
---------------------------------------------------
*/

/* --- 0-1. add Body  --- */

Pace.on('done', function(){
  setTimeout(function(){
    $('body').addClass('addAnim');
  },1400);
});


/* --- 0-2. Slide Bg  --- */

Pace.on('done', function(){
   setTimeout(function(){
    $('.baseSlider').addClass('triger');
    $('.blogSlider').addClass('triger');
    $('section.aboutSelect').addClass('triger');
    $('.galleryList').addClass('triger');
  },1500);
});


/* --- 0-3. add MvText  --- */

Pace.on('done', function(){
  setTimeout(function(){
    $('.mvTxt').addClass('remDelay');
    $('.title__bottom').addClass('remDelay');
  },4000);
});




/* 
---------------------------------------------------
  2. Index
---------------------------------------------------
*/

/* --- 2-1. mvTxt / Delay  --- */

Pace.on('done', function(){
  setTimeout(function(){
    $('.slide').addClass('remDelay');
  },3100);
});


/* --- 2-2. mvTxt / SlideShow  --- */

var flg=1;    //flgに初期値1をセット
Pace.on('done', function(){
setTimeout(function(){

  setInterval(function() {
    switch(flg){
      case 1:　//2枚目を見せる
                    $('.slide.one').addClass('rect');
                    $('.slide.one').addClass('scale');
                    $('.slide.two').removeClass('scale');
                    setTimeout(function(){
                      $('.slide.one').removeClass('zIndex2');
                      $('.slide.two').removeClass('zIndex1');
                      $('.slide.three').removeClass('zIndex0');

                      $('.slide.one').addClass('zIndex0');
                      $('.slide.two').addClass('zIndex2');
                      $('.slide.three').addClass('zIndex1');
                    },1000);

                    setTimeout(function(){
                      $('.slide').removeClass('rect');
                    },1500);

                    break;

      case 2:　//3枚目を見せる
                    $('.slide.two').addClass('rect');
                    $('.slide.two').addClass('scale');
                    $('.slide.three').removeClass('scale');
                    setTimeout(function(){
                      $('.slide.two').removeClass('zIndex2');
                      $('.slide.three').removeClass('zIndex1');
                      $('.slide.one').removeClass('zIndex0');

                      $('.slide.two').addClass('zIndex0');
                      $('.slide.three').addClass('zIndex2');
                      $('.slide.one').addClass('zIndex1');
                    },1000);

                    setTimeout(function(){
                      $('.slide').removeClass('rect');
                    },1500);

                    break;

      case 3: //1枚目を見せる
                    $('.slide.three').addClass('rect');
                    $('.slide.three').addClass('scale');
                    $('.slide.one').removeClass('scale');
                    setTimeout(function(){
                      $('.slide.three').removeClass('zIndex2');
                      $('.slide.one').removeClass('zIndex1');
                       $('.slide.two').removeClass('zIndex0');

                      $('.slide.three').addClass('zIndex0');
                      $('.slide.one').addClass('zIndex2');
                       $('.slide.two').addClass('zIndex1');
                    },1000);

                    setTimeout(function(){
                      $('.slide').removeClass('rect');
                    },1500);

                    break;
      }
        flg++;
            if(flg>3){
                flg=1;    //flgが3を越えたら1に戻る
            }
    }, 4000);//setInterval()で4秒間隔で繰り返し実行する

},3100);
});


/* --- 2-3. Band Opacity --- */

Pace.on('done', function(){
  setTimeout(function(){
    $('section.band').addClass('triger');
  },2900);
});



/* 
---------------------------------------------------
  3. Under
---------------------------------------------------
*/


/* --- 3-1. Slick / underVisual --- */

Pace.on('done', function(){
  $('.underVisual').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    pauseOnHover: false
  })
    .on('beforeChange',function(event, slick, currentSlide, nextSlide){
  if(nextSlide > 0) { //スライド1枚目以外
    $(this).slick('slickSetOption', 'autoplaySpeed', 3500, true);
  } else { //2周目以降のスライド1枚目
    $(this).slick('slickSetOption', 'autoplaySpeed', 3500, true);
  }
  });
});


/* 
---------------------------------------------------
  4. Blog
---------------------------------------------------
*/


/* --- 4-1. Slick / pickSlide --- */

Pace.on('done', function(){
  $('.pickSlider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000
  })
    .on('beforeChange',function(event, slick, currentSlide, nextSlide){
  if(nextSlide > 0) { //スライド1枚目以外
    $(this).slick('slickSetOption', 'autoplaySpeed', 3500, true);
  } else { //2周目以降のスライド1枚目
    $(this).slick('slickSetOption', 'autoplaySpeed', 3500, true);
  }
  });
});

































