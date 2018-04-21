$(function () {
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
    //ToDo write the scroll logic here
    $(window).on('scroll',function(){
        var vScroll = $(this).scrollTop();
    });
});