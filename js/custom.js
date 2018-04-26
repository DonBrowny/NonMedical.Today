$(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        items:1,
        nav:true,
        loop:true,
        autoplay:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed:450,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText:['<img width="50" height="50"  src="./images/carousel-arrow-left.png">','<img width="50" height="50" src="./images/carousel-arrow-right.png">']
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
    // $("#navbarCollapse a").on('click', function (event) {
    //     if (this.hash !== "") {
    //         event.preventDefault();
    //         var hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top
    //         }, 800, function () {
    //             window.location.hash = hash;
    //         });
    //     }
    // });

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
        if(vScroll > 100){
            $('#nav').removeClass('navbar-custom');
            $('#nav').addClass('bg-dark');
        }  
        else{
            $('#nav').addClass('navbar-custom');
            $('#nav').removeClass('bg-dark');
        }
    });
});