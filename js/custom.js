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

    $('.js-modal-show').on('click', function(e) {
        e.preventDefault(); 

        var currentModal = $(this).attr('href');
        $(currentModal + ', #js-owerlay').fadeIn();  // Показаваем модальное окно
        $('body').addClass('open-modal');            // Добавляем класс отменяющий скроллинг
    });

    $('.js-modal-close, #js-owerlay').on('click', function(e) {
        e.preventDefault();
        $('.js-modal, #js-owerlay').fadeOut();       // Скрываем модальное окно
        $('body').removeClass('open-modal');        // Убираем класс отменяющий скроллинг
    });


});
