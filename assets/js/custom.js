$(document).ready(function () {

	// Highlight the top nav as scrolling
	// $('body').scrollspy({
	//     target: '.navbar-fixed-top',
	//     offset: 80
	// });

	// Remove menu on click
	// $('#navbar').find('a').click(function(){
	//     $('#navbar').collapse('hide');
	// });

	// Modified Version
	$(document).on('click', '.navbar-collapse.in', function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});

	$(document).bind('click', function(e) {
	if($(e.target).closest('#navbar').length == 0) {
			// click happened outside of menu, hide any visible menu items
			$('#navbar').collapse('hide');
		}
	});

	// Page scrolling feature
	// $('a.page-scroll').bind('click', function(event) {
	//     var link = $(this);
	//     $('html, body').stop().animate({
	//         scrollTop: $(link.attr('href')).offset().top - 70
	//     }, 500);
	//     event.preventDefault();
	// });

	// // Herbycookies Here
	// $(document).herbyCookie({
	//     policyText: "Lear more",
	//     text: "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
	//     link: "/cookies",
	//     expiryDays: 180
	// });

	$("nav").on("open.navigation", function() {
		$("#nav-icon1").addClass('open');
		$(".nav.navbar-nav").removeClass('show-down');
		$(".nav.navbar-nav").addClass('show-up');

	}).on("close.navigation", function() {
		$("#nav-icon1").removeClass('open');
		$(".nav.navbar-nav").removeClass('show-up');
		$(".nav.navbar-nav").addClass('show-down');
	});

	$("nav").navigation();

	// $(".bg").interactive_bg();

	// var movementStrength = 25;
	// var height = movementStrength / $(window).height();
	// var width = movementStrength / $(window).width();
	// $(".slider").mousemove(function(e){
	// 		  var pageX = e.pageX - ($(window).width() / 2);
	// 		  var pageY = e.pageY - ($(window).height() / 2);
	// 		  var newvalueX = width * pageX * -1 - 25;
	// 		  var newvalueY = height * pageY * -1 - 50;
	// 		  $('.slider').css("background-position", newvalueX+"px     "+newvalueY+"px");
	// });

	$('#toolsTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		tabidentify: 'tools'
	});



});

$('.services p').expander({
		slicePoint: 110,
		expandText: 'more',
		userCollapseText: 'less'
});

// Popup
$('[data-toggle="popover"]').popover();

$('body').on('click', function(e) {
	$('.btn-plus-feature').each(function() {
		//the 'is' for buttons that trigger popups
		//the 'has' for icons within a button that triggers a popup
		if (!$(this).is(e.target) && $(this).has(e.target).length ===
			0 && $('.popover').has(e.target).length === 0) {
			$(this).popover('hide');
		}
	});
});


setTimeout(function(){

	_slaask.init('a2185cf7997e55eb9484fc90fe78066a');

}, 120000);



// Install Cookies
setTimeout(function(){

document.addEventListener('DOMContentLoaded', function(event) {
	cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
  'Got it', 'learn more', '/cookies');
});

}, 120000);


// Activate WOW.js plugin for animation on scroll
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

// _slaask.init('95426c2790f8f6fed51b9caab536ed57');

function masonry(element){
	var container = $(element).isotope({
	  itemSelector: ".entries",
	  layoutMode: 'masonry'
	});
	container.imagesLoaded().progress(function(){
		container.isotope('layout');
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
		  container.imagesLoaded().progress(function(){
		  container.isotope('layout');
		  });
		}
	});
}

// function onReady(callback) {
// 	var intervalID = window.setInterval(checkReady, 1000);

// 	function checkReady() {
// 		if (document.getElementsByTagName('body')[0] !== undefined) {
// 			window.clearInterval(intervalID);
// 			callback.call(this);
// 		}
// 	}
// 	}

// 	function show(id, value) {
// 		document.getElementById(id).style.display = value ? 'block' : 'none';
// 	}

// 	onReady(function () {
// 		show('page', true);
// 		show('loading', false);
// 	});



// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function () {
//     $('.section').each(function () {
//         if (isScrolledIntoView(this) === true) {
//             $(this).addClass('in-view').trigger('classChange');
//         }
//     });

//     return false;

// });

$(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();

    $('.section').filter(function() {
      return scrolled >= $(this).offset().top-140;
    }).addClass('in-view').trigger('classChange');
});

$('.section').on('classChange', function(e){

	TweenMax.staggerFromTo('#features_performance.in-view .row .m-b-xl img', 1, {opacity:0, ease:Linear.easeInOut,}, {opacity: 1, ease:Linear.easeInOut}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .left .m-b-xl', 1, {opacity:0}, {opacity: 1}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech', 2, {opacity: 0},{opacity:1}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech .iphonesvg', 2, {opacity: 1, delay:1},{opacity:0, delay:4}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right #modern-tech .modern', 1, {opacity: 0}, {opacity: 1, delay:3}, 0.2);
	TweenMax.staggerTo('#features_automation.in-view .col-md-4', 1, {opacity:1}, 0.2);
	TweenMax.staggerTo('#features_tools.in-view .resp-tab-content .text-right',1, {opacity:1}, 0,2);
	TweenMax.staggerFromTo('#free-account.in-view .lang', 1, {opacity:0}, {opacity: 1}, 0.2);






	TweenMax.staggerFromTo('.in-view #different_languages li', 2, {
		scale:0.2,
		ease:Elastic.easeIn,
		force3D:true,
		 y:100},
		{scale:1, opacity:1, ease:Elastic.easeOut, force3D:true, y:0},
		 0.2);

	$(this).off(e);
})

// var svg = new Walkway({
//   selector: '#Layer_1',
//   duration: '5000'
// }).draw();




var b = $('body'),
		aes = b.find('.animate-earth-small'),
		ael = b.find('.animate-earth-large');

var sliderScene = b.find('svg.drawsvg').drawsvg({
	duration: 1800,
	stagger: 100,
	callback: function(){
		$("svg.drawsvg").css('opacity', '0');
		$(b).find('.hided').each(function(){
			$(this).removeClass('hided');
			$(this).addClass('showed');
		});
		TweenMax.to(".demo-buttons p", 0.75, {y: "0px", delay: 1.4, opacity: 1})
		TweenMax.to(".demo-buttons a", 0.75, {y: "0px", delay: 1.5, opacity: 1})
		TweenMax.to(aes, 2.2, {opacity: 1});
		TweenMax.to(ael, 2.5, {opacity: 1});
		TweenMax.to(aes, 90, {ease: Power0.easeNone, rotation: "+=360", transformOrigin: 'center center', repeat:-1, force3D: true })
		TweenMax.to(ael, 95, {ease: Power0.easeNone, rotation: "-=360", transformOrigin: 'center center', repeat:-1, force3D: true })
		// $(b).find('#free-account').css({"background-image": "url('../img/globe.png')"})
	}
});

sliderScene.drawsvg('animate')

TweenMax.staggerFrom(".lang .first_batch", 0.4,{
	scale: 2.2,
	opacity:0,
	delay: 2.2,
	ease:Power2.easeInOut,
	force3D:true},
	.5)

TweenMax.staggerFrom(".lang .second_batch", 0.4,{
	scale: 2.5,
	opacity:0,
	delay: 2.3,
	ease:Power2.easeInOut,
	force3D:true},
	.3)

TweenMax.staggerFrom(".lang .third_batch", 0.5,{
	scale: 2,
	opacity:0,
	delay: 2.4,
	ease:Power2.easeInOut,
	force3D:true},
	.5)



// TweenMax.staggerFrom( '#react, #css3, #html5, #js, #pug, #git, #github, #netlify', 2, {scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut, force3D:true}, 0.2);

