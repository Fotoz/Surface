$(function() {

// slick
	$(window).on("load resize", function() {
		var width = $(document).width();

		if (width > 768) {
			$('.slider').slick('unslick');
		} else {
			$('.slider').not('.slick-initialized').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				adaptiveHeight: true
			});
		};
	});

});