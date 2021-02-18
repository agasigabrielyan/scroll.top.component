$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrolltop-icon').fadeIn();
        } else {
            $('.scrolltop-icon').fadeOut();
        }
    });
});
$(document).on("mouseover",".scrolltop-icon__image",function(){
    $(this).stop().addClass("animate__bounce");
});
$(document).on("mouseout",".scrolltop-icon__image",function(){
    $(this).stop().removeClass("animate__bounce");
});
$(document).on("click",".scrolltop-icon__image",function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
