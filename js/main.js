var speed = 50; /* The speed/duration of the effect in milliseconds */

$(document).ready(function()
{
    $('#portfolioSlide').bind('slide.bs.carousel', function (e) {
        typeWriter($(this).find('.active'));
    });
});

function typeWriter(obj) {
    var txt = "";
    txt = $(obj).find('h4').html();
    $(obj).find('h4').html("")
    var i=0;
  if (i < txt.length) {
    $(obj).html($(obj).html() + txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}