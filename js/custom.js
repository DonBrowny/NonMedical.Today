$(function () {
    //carousel
    var owl = $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        navSpeed:500,
        smartSpeed: 450,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
        //onTranslate : carouselChanges,
        // navText:['<img width="50" height="50"  src="./images/carousel-arrow-left.png">','<img width="50" height="50" src="./images/carousel-arrow-right.png">']
    });

    function carouselChanges(event) {
        // $('#captionDiv').removeClass('bounce');
        // $('#captionDiv').addClass('');
        console.log(event);
        var currentItem = $('.owl-item', owl).eq(event.item.index);
        $('#captionDiv').addClass('py-10 text-info animated lightSpeedIn HC');
    }

    owl.on('change.owl.carousel', function (event) {
        const animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        // var currentItem = $('.owl-item', owl).eq(event.item.index);
        var currentItem = $('#captionDiv');
        currentItem.addClass('bounce animated').one(animationEndEvent, function () {
            currentItem.removeClass('bounce'); // remove animate.css Class at the end of the animations
        });
    });

    //smooth scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: $(window).height() / 2
    });

    //auto close nav bar after click on link on mobile view
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //smooth scroll of the body navigation
    $("#navbarCollapse a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //Navbar Toggle button animation
    $('.navbar-toggler').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });
    $('.nav-link').on('click', function () {
        $('.animated-icon').toggleClass('open');
    });

    //scroll event
    $(window).on('scroll', function () {
        let vScroll = $(this).scrollTop();
        if (vScroll > 600) {
            $('#nav').removeClass('navbar-custom');
            $('#nav').addClass('bg-dark');
        } else {
            $('#nav').addClass('navbar-custom');
            $('#nav').removeClass('bg-dark');
        }
    });
});