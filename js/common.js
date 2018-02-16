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

// smooth-scroling
    var $page = $('html, body');
        $('a[href*="#"]').click(function() {
            $page.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
            return false;
    });

});