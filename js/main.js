var speed = 50; /* The speed/duration of the effect in milliseconds */
var typeText="";
var typeObj;
$(document).ready(function()
{
    $('#portfolioSlide').bind('slid.bs.carousel	', function (e) {
        setTimeout(SetTypeWriter($(this)),100);
    });
    SetTypeWriter($('#portfolioSlide'));
    $('.modalContactUs').on('click',goToContact);
    $('.collapse').on('hidden.bs.collapse', closeCollapse);
     $('.collapse').on('shown.bs.collapse', openCollapse);
});

function SetTypeWriter(obj)
{
    i = 0;
    typeText = $(obj).find('.active').find('.hidMessage').val();
    typeObj = $(obj).find('.active').find('p');
    $(obj).find('.active').find('p').html('');
    typeWriter();
}

function goToContact()
{
    setTimeout(function(){
        SmoothScrollTo('contact',1000);
    },500); 
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
         $(typeObj).text($(typeObj).text() + typeText.charAt(i));
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

function SmoothScrollTo(id_or_Name, timelength){
 console.log('id:'+id_or_Name);
    var timelength = timelength || 1000;
    $('html, body').animate({
        scrollTop: $("#"+id_or_Name).offset().top-70
    }, timelength, function(){
        window.location.hash = id_or_Name;
    });
}