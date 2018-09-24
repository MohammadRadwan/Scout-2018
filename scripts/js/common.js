$(document).ready(function(){

    'use strict';

    // Nice Scroll
    $("html").niceScroll();

    // Navbar
    $('header nav .collapse ul li').click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $('header nav .collapse ul li.ex').click(function(){
		$(this).removeClass("active");
	});

    /* Scroll */
    var scrollBtn = $('.scroll'),
        scrollSide = $('.icon-bar');

    $(window).scroll(function(){
        scrollBtn = $(this).scrollTop() >= 630 ? scrollBtn.show() : scrollBtn.hide();
        scrollSide = $(this).scrollTop() >= 150 ? scrollSide.show() : scrollSide.hide();
    });

    scrollBtn.click(function(){
        $("html,body").animate({ scrollTop: 0 }, 2000);
    });
});