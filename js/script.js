


var headrfixed = document.querySelector('.header-inner-top-1');
var openblock = document.querySelector('.openblock');
var dropdawn = document.querySelector('.dropdawn');
var body = document.querySelector('.body');
var tillar = document.querySelector('.tillar');
var header = document.querySelector('.header-inner-center');
var lable1 = document.querySelector('.lable1');
var lable2 = document.querySelector('.lable2');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var button = document.querySelector('.button');
var shadow = document.querySelector('.shadow');
var navbar = document.querySelector('.navbar');
var contact = document.querySelector('.contact');
var arrowright = document.querySelector('.arrow-linkright');
var arrowleft = document.querySelector('.arrow-linkleft');
var menuopen = document.querySelector('.menu');
var planshet = document.querySelector('.planshet-menu1');
var telheader = document.querySelector('.telefon-header-inner1');
var telmenu = document.querySelector('.menu-open');
var kabinet1 = document.querySelector('.kabinet1');
var close1 = document.querySelector('.close1');

kabinet1.addEventListener('click', function() {
  navbar.classList.add('telopened');
  shadow.classList.add('telopened');
  body.classList.add('opened');
});

telmenu.addEventListener('click', function () {
  telheader.classList.toggle('opened');
  // body.classList.add('opened');
})

menuopen.addEventListener('click',function() {
  planshet.classList.toggle('opened');
})

close1.addEventListener('click', function() {
  navbar.classList.remove('opened');
  body.classList.remove('opened');
  shadow.classList.remove('opened');
});

close1.addEventListener('click', function() {
  navbar.classList.remove('telopened');
  shadow.classList.remove('telopened');

})

contact.addEventListener('click',function() {
  shadow.classList.add('opened');
  navbar.classList.add('opened');
  body.classList.add('opened');
});

shadow.addEventListener('click', function() {
  navbar.classList.remove('opened');
  shadow.classList.remove('opened');
  body.classList.remove('opened');
});






input1.addEventListener('click',function() {
  lable1.classList.add('opened');
  input1.classList.add('opened');
  lable2.classList.remove('opened');
  input2.classList.remove('opened');
});
input2.addEventListener('click',function() {
  lable2.classList.add('opened');
  input2.classList.add('opened');
  lable1.classList.remove('opened');
  input1.classList.remove('opened');
})

button.addEventListener('click',function() {
  lable1.classList.remove('opened');
  input1.classList.remove('opened');
  lable2.classList.remove('opened');
  input2.classList.remove('opened');
})


openblock.addEventListener('click',function() {
  dropdawn.classList.toggle('opened');
  
});

// tillar.addEventListener('click',function() {
//   openblock.classList.remove('opened');

  
// });

// body.addEventListener('click',function() {
//   openblock.classList.remove('opened');

  
// });




window.addEventListener('scroll', function() { 
    if(window.scrollY > 0) { 
      headrfixed.classList.add ('opened'); 
    } else { 
      headrfixed.classList.remove('opened'); 
    } 
  })
  










$('.badboy').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.link-left'),
  nextArrow: $('.link-right'),
  arrows: true,
  infinite: true,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 476,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


    



$('.responsive').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: '50px',
  spaceBetween: 30,
  prevArrow: $('.arrow-linkleft'),
  nextArrow: $('.arrow-link1'),
  autoplay: false,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 476,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      }
    }
  ]
  
});

var nextlink = document.querySelector('.carousel-links');
var caruse1 = document.querySelector('.caro1');
var caruse2 = document.querySelector('.caro2');
var caruse3 = document.querySelector('.caro3');
var caruse4 = document.querySelector('.caro4');
var caruse5 = document.querySelector('.caro5');

caruse1.addEventListener('click',function() {
  caruse1.classList.toggle('slick-active');
  caruse2.classList.remove('slick-active');
  caruse3.classList.remove('slick-active');
  caruse4.classList.remove('slick-active');
  caruse5.classList.remove('slick-active');
});
caruse2.addEventListener('click',function() {
  caruse2.classList.toggle('slick-active');
  caruse1.classList.remove('slick-active');
  caruse3.classList.remove('slick-active');
  caruse4.classList.remove('slick-active');
  caruse5.classList.remove('slick-active');
});
caruse3.addEventListener('click',function() {
  caruse3.classList.toggle('slick-active');
  caruse1.classList.remove('slick-active');
  caruse2.classList.remove('slick-active');
  caruse4.classList.remove('slick-active');
  caruse5.classList.remove('slick-active');
});
caruse4.addEventListener('click',function() {
  caruse4.classList.toggle('slick-active');
  caruse1.classList.remove('slick-active');
  caruse3.classList.remove('slick-active');
  caruse2.classList.remove('slick-active');
  caruse5.classList.remove('slick-active');
});
caruse5.addEventListener('click',function() {
  caruse5.classList.toggle('slick-active');
  caruse1.classList.remove('slick-active');
  caruse3.classList.remove('slick-active');
  caruse2.classList.remove('slick-active');
  caruse4.classList.remove('slick-active');
});

































var openblock = document.querySelector ('.section6-link');
var block1 = document.querySelector('.section6-middle');

openblock.addEventListener('click', function() {
  openblock.classList.toggle('opened');
  block1.classList.toggle('opened');
});


var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  
})


