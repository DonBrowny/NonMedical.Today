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
        window.location.href = "home.html#contact"
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