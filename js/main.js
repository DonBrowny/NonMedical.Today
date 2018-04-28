var speed = 50; /* The speed/duration of the effect in milliseconds */
var typeText="";
var typeObj;
$(document).ready(function()
{
    $('#portfolioSlide').bind('slide.bs.carousel', function (e) {
        i = 0;
        typeText = $(this).find('h4').html();
        typeObj = $(this).find('h4');
        $(this).find('h4').html('');
        typeWriter();
    });

    $(window).scroll(function() {

        var winTop = $(this).scrollTop();
        var $sli = $('#sli');
        
        $.each($imgs, function(item) {
            if($(item).position().top <= winTop)
                 {
                     $(item).find().css();
                 }
        
        });

    });
});

function typeWriter() {
    if (i < typeText.length) {
         $(typeObj).html($(typeObj).html() + typeText.charAt(i));
         i++;
        setTimeout(typeWriter, speed);
  }
}