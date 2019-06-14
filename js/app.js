var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active'); 
}
menuBtn[0].addEventListener('click', clickedBtn);
console.log(menu-btn[0]);

// smooth scroll
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}  );
});