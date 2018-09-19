$(document).ready(function (e) {
	$('.header__burger-button').click(function () { 
		$('.header__bmenu').fadeToggle(1000);
	});

$(window).scroll(function () { 
	var scroll = $(window).scrollTop();
	if (scroll >= 200) {
		$('.header').addClass('header_bg-dark');
		$('.header__menu-link').addClass('header__menu-link_gold');
		$('.header__social-icon').addClass('header__social-icon_gold');
	} else {
		$('.header').removeClass('header_bg-dark');
		$('.header__menu-link').removeClass('header__menu-link_gold');
		$('.header__social-icon').removeClass('header__social-icon_gold');
	}
});
});