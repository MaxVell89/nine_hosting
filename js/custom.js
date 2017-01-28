$(function() {

	/* Smooth scroll to plans */
    $('#js-get-started').on('click', function(e) {
    	e.preventDefault();
    	var plansOffset = $('#js-plans').offset().top;

    	$('html, body').animate({
    		scrollTop: plansOffset
    	}, 500);
    });


    /* Fixed header when scroll */
    var headerH = $('#js-header').height(),
    		navH = $('#js-nav').innerHeight();

    $(document).on('scroll', function() {
    	var documentScroll = $(this).scrollTop();

    	if (documentScroll > headerH) {
    		$('#js-nav').addClass('fixed');
    		$('#js-header').css('paddingTop', navH);
    	} else {
    		$('#js-nav').removeClass('fixed');
    		$('#js-header').removeAttr('style');
    	}

    });

});
