$(function () {
    var $anchors = $('.an-loader>div img');
    (function _loop(idx) {
        $anchors.removeClass('active').eq(idx).addClass('active');
        setTimeout(function () {
            _loop((idx + 1) % $anchors.length);
        }, 400);
    }(0));
});
window.setTimeout(function () {
    $('.an-loader>div img').remove()
    $('.an-loader').addClass('active')
    window.setTimeout(function () {
        $('.an-loader').fadeOut('slow')
        $('body').addClass('loaded')
    }, 200)
}, 3000)
let locomotiveScroll;

function initLocomotiveScroll() {
    if ($(window).width() > 1199) {
        locomotiveScroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });
    }
}
initLocomotiveScroll();
const secondsec = gsap.timeline({
    scale: 0.9,
    scrollTrigger: {
        trigger: '.an-banner',
        scrub: true,
        start: '0%',
        end: '60%',
        onUpdate: (self) => {
            const progress = self.progress;
            const scaleValue = 0.9 + 0.1 * progress;
            const borderradius = progress * 50;
            gsap.set('.about-animation', {
                scale: scaleValue,
                borderRadius: 50 - borderradius
            });

        },

    }
});
const zoomBackground = gsap.timeline({
    scrollTrigger: {
        trigger: 'body',
        scrub: true,
        start: 'top top',
        end: '10%',
        onUpdate: (self) => {
            const bgprogress = self.progress;
            const scaleValue = 1 + bgprogress / 5; // Adjust the scale factor as needed
            
            gsap.to('.an-banner.inner-banner .bgimage img', {
                scale: scaleValue,
                duration: 0.5 // Adjust the duration as needed
            });
            gsap.to('.an-banner.service-banner .bgimage img', {
                scale: scaleValue,
                duration: 0.5 // Adjust the duration as needed
            });
        },
    }
});


// const secondsec1 = gsap.timeline({
//     scale: 0.9,
//     scrollTrigger: {
//         trigger: '.an-banner',
//         scrub: true,
//         start: '0%',
//         end: '60%',
//         onUpdate: (self) => {
//             const progress1 = self.progress;
//             const videoScale = 1 - progress1 * 0.5;
//             gsap.set('.an-banner video', {
//                 scale: videoScale,

//             });
//         },

//     }
// });
const secondsec1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.an-banner',
        scrub: true,
        start: '0%',
        end: '100%',
        onUpdate: (self) => {
            const stagescroll = 100 * self.progress;
            const progress1 = self.progress;
            const scaleValue = progress1;
            console.log(stagescroll)
            if (stagescroll < 15) {
                gsap.to('.an-banner .banner-shape', {
                    scale: 0,
                    duration: 0.5, // Animation duration
                    ease: 'power2.out' // Easing function
                });
                $('.an-banner .banner-mobile-img').removeClass('active')
                $('.an-banner video').removeClass('videoanimation-active')
            } else if (stagescroll > 15 && stagescroll <= 30) {
                gsap.to('.an-banner .banner-shape', {
                    scale: 1,
                    duration: 0.5, // Animation duration
                    ease: 'power2.out' // Easing function
                });

            } else if (stagescroll > 30 && stagescroll <= 70) {
                $('.an-banner .banner-mobile-img').addClass('active')
                $('.an-banner video').addClass('videoanimation-active')
                $('.an-banner video').removeClass('videoanimation-active-end')
            } else if (stagescroll > 70) {
                $('.an-banner video').addClass('videoanimation-active-end')

            }

        },
    }
});
AOS.init({
    duration: 800,
    once: true,
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".an-header").addClass("sticky");
    } else {
        $(".an-header").removeClass("sticky");
    }
});


$(function () {
    var e = $(".shapeanimate");
    ! function t(a) {
        e.removeClass("active").eq(a).addClass("active"), setTimeout(function () {
            t((a + 1) % e.length)
        }, 1000)
    }(0)
});

$('.an-casestudy-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-caret-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-caret-right' aria-hidden='true'></i></button>"
});
$('.an-casestudy-slider').slick('slickGoTo', 1);
$('.ourservice-slick').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='assets/img/arrow-left.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/img/arrow-right.png'></button>",
    asNavFor: '.our-service-slider-des',
    focusOnSelect: true

});
$('.ourservice-slick1').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='assets/img/arrow-left.png'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='assets/img/arrow-right.png'></button>",
    asNavFor: '.our-service-slider-des',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 500,
          settings: {
        dots: false,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]

});
$('.our-service-slider-des').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // fade: true,
    asNavFor: '.ourservice-slick, .ourservice-slick1',
    fade: true,

});
var getslider = $('.an-casestudy-slider .item').length
// $('.casestudy-wrapper').css('height', 100 * getslider + 'vh')
// const section = document.querySelector('.an-casestudy-section');
// const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
// const windowHeight = window.innerHeight;
// var sliderCounter = 0
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= sectionPosition) {
//         $(".an-casestudy-section").addClass("an-casestudy-active");


//     } else {
//         $(".an-casestudy-section").removeClass("an-casestudy-active");

//     }
// });

$(".arrow-bottom").click(function () {
    var getscroll = $(this).attr('data-scrollid')
    $('html, body').animate({
        scrollTop: $('#' + getscroll).offset().top
    }, 'slow');
    return false;
});
var getcasestudyheight = 100 / getslider
// const casestudy = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.casestudy-wrapper',
//         scrub: true,
//         start: '0%',
//         end: 'bottom',
//         onUpdate: (self) => {
//             const stagescroll = 100 * self.progress;   

//             if (stagescroll < 25) {

//                 $('.an-casestudy-slider').slick('slickGoTo', 0);
//             } else if (stagescroll < 50) {

//                 $('.an-casestudy-slider').slick('slickGoTo', 1);
//             } else if (stagescroll < 75) {

//                 $('.an-casestudy-slider').slick('slickGoTo', 2);
//             } 

//         },

//     }
// });
$(function () {
    var e = $(".shapeanimate");
    ! function t(a) {
        e.removeClass("active").eq(a).addClass("active"), setTimeout(function () {
            t((a + 1) % e.length)
        }, 1000)
    }(0)
});


$('.abt-service-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // prevArrow:"<button type='button' class='slick-prev pull-left'><img src='assets/img/arrow-left.png'></button>",
    //  nextArrow:"<button type='button' class='slick-next pull-right'><img src='assets/img/arrow-right.png'></button>"
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
});


// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: filterValue
    });
});
$('.clint-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
});
$('.industry-silder').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 434,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
});

$('#navbarSupportedContent').collapse('hide');


$('.navbar-toggler').click(function(){
    $('.menu-ovalay').toggleClass('active')
  })
  $('.menu-ovalay').click(function(){
    $(this).removeClass('active')
    $('.navbar-collapse').removeClass('show')
  })



  $(window).load(function() {
    setTimeout(function() {
        $('#myModal').modal('show');
    }, 10000);
});

