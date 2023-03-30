let heroBgHeight = 0;

$(document).ready(function () {
    let scrollPos = 0;
    heroBgHeight = ($('.js-hero').outerHeight() -
        $('.js-hero-image').outerHeight() / 2) ;
    $('.js-hero-bg').css('height', heroBgHeight)

   $('.js-steps-tab').on('click', function () {
       let id = $(this).attr('data-tab');
        $(this).addClass('steps-tab--active')
            .siblings('.steps-tab')
            .removeClass('steps-tab--active');
        $('.js-tab-image[id='+id+']').addClass('image-tab-active')
            .siblings('img').removeClass('image-tab-active');
   });

    $('.js-anchor').on('click', function (e) {
        const id = $(this).attr('href');
        const offset = $('.js-header').outerHeight();
        const target = $(id).offset().top - offset;

        $('html, body').animate({scrollTop:target}, 500);

        e.preventDefault();
    });

    $('.js-open-video').on('click', function (e) {
        scrollPos = $(window).scrollTop();
        const url = $(this).attr('data-url');
        $('.js-video').attr('src', url);
        $('.js-modal').addClass('modal--show');
        setTimeout(function () {
            $('html, body').addClass('open-modal');
        }, 300);

        e.preventDefault();
    });

    $('.js-modal-close').on('click', function () {
        $('.js-video').attr('src', '');
        $('.js-modal').removeClass('modal--show');
        $('html, body').removeClass('open-modal');
        setTimeout(function () {
            $('html, body').animate({scrollTop: scrollPos}, 0);
        }, 0);
    });

    $('.js-open-calendly').on('click', function () {
        Calendly.initPopupWidget({url: 'https://calendly.com/demo-128/30min'});
        return false;
    });

    if ($(window).scrollTop() >= heroBgHeight) {
        $('.js-header').addClass('header--sticky ');
    } else {
        $('.js-header').removeClass('header--sticky ');
    }
});

$(window).on('load', function() {
    $(function() {
        $("video  source").each(function() {
            let sourceFile = $(this).attr("data-src");
            $(this).attr("src", sourceFile);
            let video = this.parentElement;
            video.load();
            video.play();
       })
    });
});

$(window).resize(function () {
    heroBgHeight = ($('.js-hero').outerHeight() -
        $('.js-hero-image').outerHeight() / 2);
    $('.js-hero-bg').css('height', heroBgHeight)
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= heroBgHeight) {
        $('.js-header').addClass('header--sticky');
    } else {
        $('.js-header').removeClass('header--sticky');
    }
});