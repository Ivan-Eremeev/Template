$(document).ready(function () {

	// libs-settings/fancybox_settings.js
	// libs-settings/mmenu_settings.js
	// libs-settings/slick_settings.js
	// @prepros-prepend libs-settings/wow_js_settings.js
	// @prepros-prepend libs-settings/fullpage_settings.js

	// Брэйкпоинты js
	var mediaXs = 576,
			mediaSm = 768,
			mediaMd = 1024,
			mediaLg = 1200,
			mediaXl = 1400;

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	$('.menu_btn').click(function () {
		var menu = $(this).closest('#menu');
		var over = $(this).siblings('.menu_over');
		var btn = $(this);
		menu.toggleClass('open');
		btn.toggleClass('is-active');
		over.click(function() {
			menu.removeClass('open');
			btn.removeClass('is-active');
		});
		menu.find('a').click(function() {
			menu.removeClass('open');
			btn.removeClass('is-active');
		});
	});
	
	// Блок с высотой окна браузера
	// function screenHeight() {
	//     $('.full__height').css({
	//         minHeight: $(window).height() + 'px'
	//     });
	// };
	// screenHeight();

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
	// var HeaderTop = $('#header').offset().top;
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() > HeaderTop ) {
	// 		$('#header').addClass('stiky');
	// 	} else {
	// 		$('#header').removeClass('stiky');
	// 	}
	// });

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в rem)
	// function fontResize() {
	// 	var windowWidth = $(window).width();
	// 		if (windowWidth >= mediaSm) {
	// 			var fontSize = windowWidth/19.05;
	// 		} else if (windowWidth < mediaSm) {
	// 			// Без резины на мобилке
	// 			var fontSize = 60;
	// 			// С резиной на мобилке
	// 			var fontSize = windowWidth/4.8;
	// 	}
	// 	$('html').css('fontSize', fontSize + '%');
	// }

	// Табы
	$('.tabs_trigger').find('li').click(function() {
		var trigger = $(this),
				allTrigger = trigger.siblings();
				content = trigger.parent().siblings('.tabs_content').find('div'),
				index = trigger.index();
		allTrigger.removeClass('active');
		trigger.addClass('active');
		content.addClass('hide');
		content.eq(index).removeClass('hide');
	});

	// Аккордеон
	$('.accordeon_trigger').click(function() {
		var trigger = $(this),
				allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
				content = trigger.siblings('.accordeon_content'),
				allContent = trigger.parent().parent().find('.accordeon_content'),
				time = 300;
		if (!content.hasClass('open')) {
			allContent.stop().slideUp(time).removeClass('open');
			content.stop().slideDown(time).addClass('open');
			allTrigger.removeClass('active');
			trigger.addClass('active');
		}
		else {
			content.stop().slideUp(time).removeClass('open');
			trigger.removeClass('active');
		}
	});

	// Модальное окно
	$('.modal-trigger').on('click', function() {
		var data = $(this).data('modal'),
				modalOver = $('.modal_over'),
				modal = $('#modal-' + data);
		modal.toggleClass('open')
		.next('.modal_over').toggleClass('open');
		$('.modal_close').on('click', function() {
			modal.removeClass('open'),
			modalOver.removeClass('open');
		});
		modalOver.on('click', function() {
			modal.removeClass('open');
			modalOver.removeClass('open');
		});
	});

	// Стилизация полосы прокрутки
	$('#scrollbar1').tinyscrollbar({
		axis: "y", // Направление оси
		// trackSize: 100, // Высота дорожки
		thumbSize: 50, // Высота тамба
		// thumbSizeMin: 100, // Минимальная высота тамба
		wheel: true, // Отключить прокрутку
		wheelSpeed: 10, // Прокручивать пикселей
	});

	$('#scrollbar2').tinyscrollbar({
		axis: "y", // Направление оси
		// trackSize: 100, // Высота дорожки
		thumbSize: 50, // Высота тамба
		// thumbSizeMin: 100, // Минимальная высота тамба
		wheel: true, // Отключить прокрутку
		wheelSpeed: 10, // Прокручивать пикселей
	});

	// matchHeight // Задание елементам одинаковой высоты
	// $('.item').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));

	// Текст печатная машинка
	// function textPrint() {
	// 	var textPrint = $('#text-print'),
	// 		a = textPrint.text(),
	// 		j = 0,
	// 		c = a.length,
	// 		time = 50;
	// 	textPrint.text('');
	// 	setInterval(function () {
	// 		if (j<c) {
	// 			textPrint.text(textPrint.text() + a[j]);
	// 			j++;
	// 		}
	// 	},time);
	// };
	// textPrint();

	// Анимация увеличения числа
	// var blockStatus = true;
	// function countNumber () {
	// 	var target_block = $(".count-number");
	// 	var scrollEvent = ($(window).scrollTop() > (target_block.position().top - 400));
	// 	if(scrollEvent && blockStatus) {		
	// 		blockStatus = false;
	// 		$({numberValue: 0}).animate({numberValue: 2580}, {
	// 			duration: 5000,
	// 			easing: "swing",	
	// 			step: function(val) {
	// 				$(".count-number").html(Math.ceil(val));
	// 			}	
	// 		});
	// 	}
	// };
	// countNumber();

	// Tooltipster Всплывающая подсказка
	var tooltip = $('.tooltip').tooltipster({
		theme : 'tooltipster-noir', // Тема
		delayTouch: 0, // Задержка при наведении
   	trigger: 'click', // Появление при наведении, клике
   	maxWidth: 200, // Максимальная ширина
   	contentAsHTML: true, // HTML контент
   	interactive: true,
   	side:  ['right', 'top', 'bottom', 'left'], // Появление по сторонам по порядку
   	zIndex: 97, // z-index
	});

	// Отключение подсказки на мобильных
	function tooltipDisable() {
		if (window.matchMedia('(max-width: 720px)').matches) {
			tooltip.tooltipster('disable');
		}
		else if (window.matchMedia('(min-width: 721px)').matches) {
			tooltip.tooltipster('enable');
		}
	};

	tooltipDisable();

	// Слежение за изменением размера окна браузера
	// $(window).resize(function() {
	// 	fontResize(); // Резиновый сайт
	// 	screenHeight(); // Блок с высотой окна браузера
	// 	tooltipDisable(); // Отключение всплывающей подсказки
	// 	countNumber(); // Анимация увеличения числа
	// });
	
});