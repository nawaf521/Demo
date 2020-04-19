$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    // new WOW().init();
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        $(window).on('click', function () {
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click', function (e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on('click', function (e) {
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click', function (e) {
            e.stopPropagation();
        });


    } catch (er) {
        // console.log(er);
    }



    //Main Slider 
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 500,
    });
    // Slider customers service
    $('.customers-service').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 640,
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
    // our-agents
    $('.our-agents-service').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // our-agents
    $('.projects-block').slick({
         dots: true,
         infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        responsive: [{
            breakpoint: 640,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.videos-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
   });
    

    // slider producst details
    $('.slider-producst-details , .slider-page ').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
    });

    $('.slider-catelog').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
    });

    // Count Number
    $('.acount-number-now').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // Mailing List animate
    $('.btn-colse-mail').click(function () {
        $('.mailing-list-right').animate({
            opacity: 0, // animate slideUp
            marginRight: '-200px'
        }, 'slow', 'linear', function () {
            $(this).remove();
        });
    });


    // open mobile menu
    $('.js-toggle-menu').click(function (e) {
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
    });


    //    check all
    $("#check-all").click(function () {
        $('.details-item-cart input:checkbox').not(this).prop('checked', this.checked);
    });

    // check box size
    jQuery(":checkbox").change(function () {
        jQuery(this).parent('#size--wrapper .js-form-type-checkbox').toggleClass('service-selected');
    });

});


// --> Check https://codepen.io/bramus/pen/vKpjNP
jQuery(function ($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});



// number-quantity
Array.prototype.slice.call(document.querySelectorAll('.quantity-container'))
    .map(function (container) {
        return {
            input: container.querySelector('.quantity-amount'),
            decrease: container.querySelector('.decrease'),
            increase: container.querySelector('.increase'),
            get value() {
                return parseInt(this.input.value);
            },
            set value(v) {
                this.input.value = v;
            }
        }
    })
    .forEach(function (item) {
        item.decrease.addEventListener('click', function () {

            item.value = isNaN(item.value) ? 0 : item.value;
            item.value < 1 ? item.value = 1 : '';
            item.value--;
            //   item.value -= 1;
        });
        item.increase.addEventListener('click', function () {
            item.value += 1;
        });
    });


// Scroll Window
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("header").addClass("header-top-hide-mobile");
    } else {
        $("header").removeClass("header-top-hide-mobile");
    }
});