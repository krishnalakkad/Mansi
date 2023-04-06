$(document).ready(function () {
    $('#main_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#img_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    // new WOW().init();
});