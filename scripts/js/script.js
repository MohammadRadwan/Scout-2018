$(document).ready(function(){

'use strict';

	// Carousel
	$('.carousel').carousel({
		interval:5000,
		pause: "hover"
	});

	// Navbar
	/*
	$('header nav .collapse ul li.ex').click(function(){
		$(this).removeClass("active");
		$('header nav .collapse ul li.ma').addClass('active');
	}); */

	/* Scroll */
	$('nav .collapse ul a.sc').click(function(){
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top- 160}, 2000);
		return true;
	});

	$('.slider .carousel').carousel('pause');

	// Counter
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	// Send Button
	$('.send').click(function(){
		$('.modal').fadeOut();
		$('.modal-backdrop').fadeOut().hide();
		setTimeout(function() {
			$.bootstrapGrowl("تشرفنا خدكمتكم..", { 
				type: 'success' ,
				offset: {from: 'top', amount: 200},
				align: 'center',
				width: 300,
				height: 80,
				delay: 2000,
				allow_dismiss: false
			});
		}, 500);
	});

	/*
	$.bootstrapGrowl("another message, yay!", {
		ele: 'body', // which element to append to
		type: 'info', // (null, 'info', 'danger', 'success')
		offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
		align: 'right', // ('left', 'right', or 'center')
		width: 250, // (integer, or 'auto')
		delay: 4000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
		allow_dismiss: true, // If true then will display a cross to close the popup.
		stackup_spacing: 10 // spacing between consecutively stacked growls.
	  });
	  */

	$('.navbar .collapse ul li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
	

	// Regular map
	function regular_map() {
		var var_location = new google.maps.LatLng(31.902669, 35.846858);

		var var_mapoptions = {
			center: var_location,
			zoom: 14
		};

		var var_map = new google.maps.Map(document.getElementById("map-container-7"),
			var_mapoptions);

		var var_marker = new google.maps.Marker({
			position: var_location,
			map: var_map,
			title: "Marj-Alhmam"
		});
	}

	// Initialize maps
	google.maps.event.addDomListener(window, 'load', regular_map);

});