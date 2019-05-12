/*!
 *
 * Ivan Eremeev - 2019
 * Skype: ivan.eremeev_1
 * Telegram: IvanMessage
 * Email: ivan.frontcoder@gmail.com
 *
 */

// Подключение файлов
// При использовании gulp поменять "@prepros-prepend" на "//="
// libs-settings/fancybox_settings.js
// libs-settings/mmenu_settings.js
// libs-settings/slick_settings.js
// @prepros-append libs-settings/wow_js_settings.js
// libs-settings/fullpage_settings.js

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;
			

	// Отмена перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	myMenu($('#menu'));

	// Блок с высотой окна браузера
	screenHeight($('#full-height'));

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
	menuScroll($('#menu'));

	// Stiky menu // Липкое меню. При прокрутке добавляем класс stiky.
	stikyMenu($('#header'));

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Табы
	tabs($('#tabs'));

	// Аккордеон
	$('.accordeon_trigger').click(function() {
		var trigger = $(this),
				allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
				content = trigger.siblings('.accordeon_content'),
				allContent = trigger.parent().parent().find('.accordeon_content'),
				time = 300;
		if (!content.hasClass('open')) {
			allContent.stop().removeClass('open');
			content.stop().addClass('open');
			allTrigger.removeClass('active');
			trigger.addClass('active');
		}
		else {
			content.stop().removeClass('open');
			trigger.removeClass('active');
		}
	});

	// Модальное окно
	$('.modal-trigger').on('click', function() {
		var data = $(this).data('modal'),
				modalOver = $('.modal_over'),
				modal = $(data),
				html = $('html'),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		modal.toggleClass('open')
		.next('.modal_over').toggleClass('open');
		html.toggleClass('lock').css('padding-right',scrollbarWidth);
		$('.modal_close').on('click', function() {
			modal.removeClass('open');
			modalOver.removeClass('open');
			html.removeClass('lock').css('padding-right',0);
		});
		modalOver.on('click', function() {
			modal.removeClass('open');
			modalOver.removeClass('open');
			html.removeClass('lock').css('padding-right',0);
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
		if ($(window).width() <= breakSm) {
			tooltip.tooltipster('disable');
		}
		else if ($(window).width() > breakSm) {
			tooltip.tooltipster('enable');
		}
	};
	tooltipDisable();

	// Делает активным пункт меню при скролле до блока
	// function menuItemActive() {
	// 	var lastId,
 //    topMenu = $("#menu_list"),
 //    topMenuHeight = topMenu.outerHeight(),
 //    menuItems = topMenu.find("a"),
 //    scrollItems = menuItems.map(function(){
 //      var item = $($(this).attr("href"));
 //      if (item.length) { return item; }
 //    });
	// 	menuItems.click(function(e){
	// 	  var href = $(this).attr("href"),
	// 	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	// 	  $('html, body').stop().animate({ 
	// 	      scrollTop: offsetTop
	// 	  }, 300);
	// 	  e.preventDefault();
	// 	});
	// 	$(window).scroll(function(){
	// 	  var fromTop = $(this).scrollTop()+topMenuHeight;
	// 	  var cur = scrollItems.map(function(){
	// 	    if ($(this).offset().top < fromTop)
	// 	      return this;
	// 	  });
	// 	  cur = cur[cur.length-1];
	// 	  var id = cur && cur.length ? cur[0].id : "";
	// 	  if (lastId !== id) {
	// 	      lastId = id;
	// 	      menuItems
	// 	        .parent().removeClass("active")
	// 	        .end().filter("[href='#"+id+"']").parent().addClass("active");
	// 	  }                   
	// 	});
	// };
	// menuItemActive();

	// Изменение textarea при получении фокуса
	// $('textarea')
	// .focus(function() { 
	// 	$(this).addClass('class_name');
	// })
	// .blur(function() { 
	// 	if ($(this)[0].value == '') { 
	// 		$(this).removeClass('class_name');
	// 	} 
	// });

	// Изменение поля ввода при клике
	// $('.block_input').click(function() {
	// 	var div = $(this);
	// 	div.addClass('active'),
	// 	input = div.find('input');
	// 	$(document).mouseup(function (e){
	// 		if (!div.is(e.target)
	// 		    && div.has(e.target).length === 0 && input.val() == '') {
	// 			div.removeClass('active');
	// 		}
	// 	});
	// });

	// Управление видео
	// var playing = false;
	// $('.video').click(function() {
	// 	var video = $(this).find('video'),
	// 			img = $(this).find('img');
	// 	img.css({
	// 		display: 'none'});
	// 	if (playing == false) {
	// 		video.trigger('play');
	// 		playing = true;
	// 	}
	// 	else {
	// 		video.trigger('pause');
	// 		playing = false;
	// 	}
	// });

	// Слежение за изменением размера окна браузера
	var heightResized = false;
	$(window).resize(function() {
		var windowWidth = $(window).width();
		if (heightResized == windowWidth) {
			return;
		}
		heightResized = windowWidth;
		// fontResize(); // Резиновый сайт
		// screenHeight(); // Блок с высотой окна браузера
		// tooltipDisable(); // Отключение всплывающей подсказки
		// countNumber(); // Анимация увеличения числа
		// sliderReinstall() //Реинициализация слайдеров
	});
	
});

// Мобильное меню
function myMenu(menu) {
	var menuBtn = menu.find('#menu-btn')
			over = menu.find('.menu_over'),
			documentWidth = parseInt(document.documentElement.clientWidth),
			windowsWidth = parseInt(window.innerWidth),
			scrollbarWidth = windowsWidth - documentWidth,
			html = $('html');
	menuBtn.click(function () {
		html.toggleClass('lock').css('padding-right',scrollbarWidth);
		menu.toggleClass('open');
		menuBtn.toggleClass('is-active');
		over.click(function() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('is-active');
		});
		menu.find('a').click(function() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('is-active');
		});
	});	
};

// Блок с высотой окна браузера
function screenHeight(fullHeight) {
  fullHeight.css({
      minHeight: $(window).height() + 'px'
  });
};

// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку.
function menuScroll(menuItem) {
	menuItem.find('a[href^="#"]').click( function(){
		var scroll_el = $(this).attr('href'),
				time = 500;
		if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, time);
			$(this).addClass('active');
		}
		return false;
	});
};

// Stiky menu // Липкое меню.
function stikyMenu(header) {
	header.offset().top;
	$(window).scroll(function(){
		if( $(window).scrollTop() > header ) {
			header.addClass('stiky');
		} else {
			header.removeClass('stiky');
		}
	});
};

// Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в em)
function fontResize() {
	var windowWidth = $(window).width();
		if (windowWidth >= breakSm) {
			var fontSize = windowWidth/19.05;
		} else if (windowWidth < breakSm) {
			// Без резины на мобилке
			var fontSize = 60;
			// С резиной на мобилке
			var fontSize = windowWidth/4.8;
	}
	$('body').css('fontSize', fontSize + '%');
};

// Табы
function tabs(tabs) {
	var trigger = tabs.find('#tabs_triggers').children(),
			content = tabs.find('#tabs_content').children();
	trigger.click(function() {
		var index = $(this).index();
		trigger.removeClass('active');
		$(this).addClass('active');
		content.addClass('hide');
		content.eq(index).removeClass('hide');
	});
};