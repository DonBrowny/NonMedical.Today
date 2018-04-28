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
    
    $('.collapse').on('hidden.bs.collapse', closeCollapse);
    $('.collapse').on('shown.bs.collapse', openCollapse);
    $('.modalContactUs').on('click',goToContact);
});

function goToContact()
{
    setTimeout(function(){
        window.location.href = "home.html#contact"
    },1000); 
}

function openCollapse(e)
{
    $(e.target).prev('.headerCollapse').find('i').attr('class','floatRight fas fa-minus');
}

function closeCollapse(e)
{
    $(e.target).prev('.headerCollapse').find('i').attr('class',' floatRight fas fa-plus');
}
function typeWriter() {
    if (i < typeText.length) {
         $(typeObj).html($(typeObj).html() + typeText.charAt(i));
         i++;
        setTimeout(typeWriter, speed);
  }
}

function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}