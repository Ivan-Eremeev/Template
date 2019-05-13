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
// libs-settings/tinyscrollbar-settings.js

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
	accordeon($('#accordeon'));

	// matchHeight // Задание елементам одинаковой высоты
	// $('.match-height').matchHeight();

	// Autosize Изменение высоты текстового поля при добавлении контента
	// autosize($('textarea'));
	
	// Модальное окно
	modal();

	// Текст печатная машинка
	// textPrint($('#text-print'));

	// Анимация увеличения значения числа
	countNumber($(".count-number"));

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

	// Отслеживание скролла окна браузера
	$(window).scroll(function() {
		countNumber($(".count-number")); // Анимация увеличния значения числа
	});

	// Отслеживание изменения размера окна браузера
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
		// sliderReinstall() // Реинициализация слайдеров
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
			content = tabs.find('#tabs_content').children(),
			time = 300;
	content.filter('.hide').css({
		display: 'none'});
	trigger.click(function() {
		var $this = $(this),
				index = $this.index();
		if (!$this.hasClass('active')) {
			trigger.removeClass('active');
			$this.addClass('active');
			content.hide();
			content.eq(index).fadeIn(time);
		}
	});
};

// Аккордеон
function accordeon(accordeon) {
	var trigger = accordeon.find('.accordeon_trigger'),
			content = accordeon.find('.accordeon_content'),
			time = 300;
	content.css({
		display: 'none'});
	trigger.on('click', function() {
		$this = $(this);
		if (!$this.hasClass('active')) {
			trigger.removeClass('active');
			$this.addClass('active');
			content.stop().slideUp(time);
			$this.next('.accordeon_content').stop().slideDown(time);
		}
		else {
			$this.removeClass('active');
			$this.next('.accordeon_content').stop().slideUp(time);
		}
	});
};

// Модальное окно
function modal(modal) {
	$('.modal-trigger').on('click', function() {
		var $this = $(this),
				data = $this.data('modal'),
				thisModal = $(data),
				modalOver = thisModal.next($('.modal_over')),
				html = $('html'),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		thisModal.toggleClass('open')
		.next('.modal_over').toggleClass('open');
		html.toggleClass('lock').css('padding-right',scrollbarWidth);
		$('.modal_close').on('click', function() {
			thisModal.removeClass('open');
			modalOver.removeClass('open');
			html.removeClass('lock').css('padding-right',0);
		});
		modalOver.on('click', function() {
			thisModal.removeClass('open');
			modalOver.removeClass('open');
			html.removeClass('lock').css('padding-right',0);
		});
	});
};

// Текст печатная машинка
// function textPrint(block) {
// 	var textPrint = block,
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

// Анимация увеличения значения числа
var	countNumberStatus = true;
function countNumber (block) {
	var scrollEvent = ($(window).scrollTop() > (block.position().top - 400)),
			valUp = block.data('val-up'),
			valTo = block.data('val-to'),
			valDuration = block.data('duration');
	if(scrollEvent && countNumberStatus) {
		$({numberValue: valUp}).animate({numberValue: valTo}, {
			duration: valDuration,
			easing: "swing",
			step: function(val) {
				block.html(Math.ceil(val));
			}
		});
		countNumberStatus = false;
	}
};
wow = new WOW(
	{
		boxClass:     'wow',      // Класс блока
		animateClass: 'animated', // Добавляемый класс для анимации
		offset:       200,          // Отступ от нижнего края экрана
		mobile:       true,       // Отключение на мобилках
		live:         true        // Постоянно проверять наличие новых элементов WOW на странице.
	}
	)
	wow.init();

// class="wow" Класс для анимации
// class="slideInLeft" Класс из Animate CSS
// data-wow-duration="2s" Продолжительность
// data-wow-delay="5s" Задержка перед началом
// data-wow-offset="10" Отступ от нижнего края
// data-wow-iteration="10" Число раз, когда анимация повторяется

//# sourceMappingURL=script.js.map