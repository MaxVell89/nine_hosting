$(function() {

	/* Smooth scroll to plans */
    $('#js-get-started').on('click', function(e) {
    	e.preventDefault();
    	var plansOffset = $('#js-plans').offset().top;    // расстояние от верха(top) до элемента

    	$('html, body').animate({
    		scrollTop: plansOffset     // скроллинг от верха до переменной plansOffset
    	}, 500);
    });


    /* Fixed header when scroll */
    var headerH = $('#js-header').height(),        // узнаем высоту элемента
    		navH = $('#js-nav').innerHeight();     // полная высота элемента (с padding)

    $(document).on('scroll', function() {
    	var documentScroll = $(this).scrollTop();   // расстояние скрола до верха

    	if (documentScroll > headerH) {
    		$('#js-nav').addClass('fixed');
    		$('#js-header').css('paddingTop', navH);
    	} else {
    		$('#js-nav').removeClass('fixed');
    		$('#js-header').removeAttr('style');
    	}

    });

});
