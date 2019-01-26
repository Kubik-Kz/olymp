//$(".form__a").click(function(){
//             $(".form__overlay").toggleClass("open__2e");
//            $(".form__overlay__1").toggleClass("open__2e");
//            
//            $(".form__overlay").removeClass("dis__none");
//            $(".form__overlay__1").removeClass("dis__none");
//         });
//        
//        $(".close").click(function(){
//             $(".form__overlay").toggleClass("dis__none");
//            $(".form__overlay__1").toggleClass("dis__none");
//            
//         $(".form__overlay").removeClass("open__2e");
//            $(".form__overlay__1").removeClass("open__2e");
//         });
//$(".hamburger").click(function(){
//        $(".hamburger").toggleClass("is-active");
//        $(".menu__responsive").toggleClass("open__1");
//        $("body").toggleClass("body_none");
//        
//    });
//    $(".is-active").click(function(){
//        $(".menu__responsive").toggleClass("open__1");
//        $("body").removeClass("body_none");
//        
//    });
//$(".discount__button").click(function(){
//             $(".form__overlay").toggleClass("open__2e");
//            $(".form__overlay__1").toggleClass("open__2e");
//            
//            $(".form__overlay").removeClass("dis__none");
//            $(".form__overlay__1").removeClass("dis__none");
//         });


$(".hamburger").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".hamburger").toggleClass("top-menu");
        $(".menu--adaptive").toggleClass("open__1");
        $(".active__anime").toggleClass("fadeInUp1");
        $("body").toggleClass("overflow__none");
        $(".menu--adaptive").removeClass("close__n");
    });

$(".cool-to").click(function(){
        $(".hamburger").toggleClass("is-active");
        $(".menu--adaptive").toggleClass("close__n");
        $("body").toggleClass("overflow__none");
    $(".menu--adaptive").removeClass("open__1");
    });

    $(".is-active").click(function(){
        $(".menu--adaptive").toggleClass("close__n");
        $("body").removeClass("overflow__none");
        $(".menu--adaptive").removeClass("open__1");
        $(".hamburger").toggleClass("top-menu");
        
    });


$(".hamburger22").click(function(){
        $(".hamburger22").toggleClass("is-active");
        $(".hamburger22").toggleClass("top-menu1");
        $(".menu--adaptive").toggleClass("open__1");
        $(".active__anime").toggleClass("fadeInUp1");
        $("body").toggleClass("overflow__none");
        $(".menu--adaptive").removeClass("close__n");
    });

$(".cool-to").click(function(){
        $(".hamburger22").toggleClass("is-active");
        $(".menu--adaptive").toggleClass("close__n");
        $("body").toggleClass("overflow__none");
    $(".menu--adaptive").removeClass("open__1");
    });

    $(".is-active").click(function(){
        $(".menu--adaptive").toggleClass("close__n");
        $("body").removeClass("overflow__none");
        $(".menu--adaptive").removeClass("open__1");
        $(".hamburger22").toggleClass("top-menu1");
        
    });$(".hamburger33").click(function(){
        $(".hamburger33").toggleClass("is-active");
        $(".hamburger33").toggleClass("top-menu2");
        $(".menu--adaptive").toggleClass("open__1");
        $(".active__anime").toggleClass("fadeInUp1");
        $("body").toggleClass("overflow__none");
        $(".menu--adaptive").removeClass("close__n");
    });

$(".cool-to").click(function(){
        $(".hamburger33").toggleClass("is-active");
        $(".menu--adaptive").toggleClass("close__n");
        $("body").toggleClass("overflow__none");
    $(".menu--adaptive").removeClass("open__1");
    });

    $(".is-active").click(function(){
        $(".menu--adaptive").toggleClass("close__n");
        $("body").removeClass("overflow__none");
        $(".menu--adaptive").removeClass("open__1");
        $(".hamburger33").toggleClass("top-menu2");
        
    });

$(document).ready(function() {
 
 
   $("a.scrollto").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 800,
         easing: "swing"
      });
      return false;
   });
 
 
});


//fixeed
//fixeed
//fixeed

jQuery(window).scroll(function(){
         var $sections = $('section');
	$sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');

        }
    })
 });

$(".fixed-n").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
 
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
 
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });


   
	  
			
    
    
  $('.right__1').on('click', function() {
  $('.slider--house-main').slick('slickNext');
});
    $('.left__1').on('click', function() {
  $('.slider--house-main').slick('slickPrev');
}); 
    
    $('.right__1').on('click', function() {
  $('.slider__first').slick('slickNext');
});
    $('.left__1').on('click', function() {
  $('.slider__first').slick('slickPrev');
});


$('.slider__card').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
       {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
      {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $(".other__network").addClass("fixed__menu_soc");
        }
        else{
            $(".other__network").removeClass("fixed__menu_soc")
        }
    }) 
 
$(".close").click(function(){
   $(".success-send").addClass("none__form"); 
   $(".overlay_f").addClass("none__form"); 
});

$("#ed1").click(function(){
   $(".Complect-1").toggleClass("watch__comp"); 
   $(".overlay_f").toggleClass("watch__comp"); 
    $(".Complect-1").removeClass("none__form"); 
   $(".overlay_f").removeClass("none__form");
});

$("#ed2").click(function(){
   $(".Complect-2").toggleClass("watch__comp"); 
   $(".overlay_f").toggleClass("watch__comp"); 
    $(".Complect-2").removeClass("none__form"); 
   $(".overlay_f").removeClass("none__form");
});

$("#ed3").click(function(){
   $(".Complect-3").toggleClass("watch__comp"); 
   $(".overlay_f").toggleClass("watch__comp"); 
    $(".Complect-3").removeClass("none__form"); 
   $(".overlay_f").removeClass("none__form");
});

$(".close-comp").click(function(){
    $(".Complect-1").removeClass("watch__comp"); 
   $(".overlay_f").removeClass("watch__comp"); 
   $(".Complect-1").toggleClass("none__form"); 
   $(".overlay_f").toggleClass("none__form"); 
    
});
$(".close-comp").click(function(){
    $(".Complect-2").removeClass("watch__comp"); 
   $(".overlay_f").removeClass("watch__comp"); 
   $(".Complect-2").toggleClass("none__form"); 
   $(".overlay_f").toggleClass("none__form"); 
    
});
$(".close-comp").click(function(){
    $(".Complect-3").removeClass("watch__comp"); 
   $(".overlay_f").removeClass("watch__comp"); 
   $(".Complect-3").toggleClass("none__form"); 
   $(".overlay_f").toggleClass("none__form"); 
    
});
