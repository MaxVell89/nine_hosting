$(function() {

	/* Плавный скрол до блока с тарифами 
    ========================================*/

    $('#js-get-started').on('click', function(e) {
    	e.preventDefault();
    	var plansOffset = $('#js-plans').offset().top;    // расстояние от верха(top) до элемента

    	$('html, body').animate({
    		scrollTop: plansOffset     // скроллинг от верха до переменной plansOffset
    	}, 500);
    });


    /* Фиксированное верхнее меню при скроле за первый экран 
    ============================================================*/

    var headerH = $('#js-header').height(),        // узнаем высоту элемента
    		navH = $('#js-nav-container').innerHeight();     // полная высота элемента (с padding)

    $(document).on('scroll', function() {
    	var documentScroll = $(this).scrollTop();   // расстояние скрола до верха

    	if (documentScroll > headerH) {
    		$('#js-nav-container').addClass('fixed');
    		$('#js-header').css('paddingTop', navH);
    	} else {
    		$('#js-nav-container').removeClass('fixed');
    		$('#js-header').removeAttr('style');
    	}

    });


    /* Скролинг при нажатии ссылок меню 
    =======================================*/

    $('#js-nav a').on('click', function(e) {
        e.preventDefault();
        var currentBlock = $(this).attr('href'),    // Узнаем значение атрибута href
            currentBlockOffset = $(currentBlock).offset().top;   // Узнаем расстояние от верха страницы до блока
        $('html, body').animate({
            scrollTop: currentBlockOffset - 20    // Анимация скрола от верха документа до блока - 20 пикселей
        }, 500);
        }
    );


    /* Модальные окна
    =======================================*/

    var modalWidth = $('.js-modal').innerWidth();

    $('.js-modal').css({
        'marginLeft': '-' + (modalWidth / 2) + 'px'
    });

    $('.js-modal').each(function() {
        var modalWidth = $(this).innerWidth();

        $(this).css({
            'marginLeft': '-' + (modalWidth / 2) + 'px'
        });
    });

    $('.js-modal-show').on('click', function(e) {
        e.preventDefault(); 

        var currentModal = $(this).attr('href'),
            widthScrollVisible = $('body').innerWidth(),
            widthScrollHidden,
            scrollWidth;
        $(currentModal).fadeIn();  // Показаваем модальное окно
        $('body').append('<div class="overlay" id="js-owerlay"></div>').addClass('open-modal');            // Добавляем класс отменяющий скроллинг
        widthScrollHidden = $('body').innerWidth();
        scrollWidth = widthScrollHidden - widthScrollVisible;
        $('body').css({
            'paddingRight': scrollWidth
        });
    });

    $('.js-modal-close').on('click', function(e) {
        e.preventDefault();
        $('.js-modal').fadeOut();       // Скрываем модальное окно
        $('#js-owerlay').remove();
        $('body').removeClass('open-modal').css({
            'paddingRight': 0
        });        // Убираем класс отменяющий скроллинг
        
    });

    $('body').on('click', '#js-owerlay', function() {
        $('.js-modal').fadeOut();       // Скрываем модальное окно
        $('#js-owerlay').remove();
        $('body').removeClass('open-modal').css({
            'paddingRight': 0
        });;        // Убираем класс отменяющий скроллинг
    })




    /* FAQ
    ===================================*/

    $('.js-faq-title').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            answerId = $this.attr('href');

        if( !$this.hasClass('active')) {
            $('.js-faq-content').slideUp();
            $('.js-faq-title').removeClass('active');  // закрываем открытые слайды
        }
        
        $this.toggleClass('active');

        // $(this).next().slideDown('fast');     // Плавно выезжает
        // $(this).next().slideUp();             // Плавно задвигается
        $(answerId).slideToggle();         // slideUp и slideDown переключатель
    });


    /* Popup
    ===================================*/

    $('.js-popup-hover').hover(function() {
        var $this = $(this),
            popupId = $this.attr('href');

        $(popupId).fadeIn();
    }, function() {
        $('.js-popup').fadeOut();
    });

});
