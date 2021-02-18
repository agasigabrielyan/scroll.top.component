$(function () {
    let windowHeight = $(window).height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > windowHeight) {
            $('.scrolltop-icon').fadeIn();
        } else {
            $('.scrolltop-icon').fadeOut();
        }
    });
    $("html,body").scroll(function () {
        if ($(this).scrollTop() > windowHeight) {
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
    $("html,body").stop().animate({
        scrollTop:0
    },1000);
});
