$(document).ready(function() {
	$('.slider').slick({
		dots: true,
		arrows: false,
		swipe: false
	});

	$('.header_nav ul li a').on('click', function(event) {
		event.preventDefault();
		let hrefs = $(this).attr('href');
		let offs = $(hrefs).offset().top;
		$('html, body').animate({scrollTop: offs}, 2000)
	});
});