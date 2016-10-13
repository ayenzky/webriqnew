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

	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#featured").mousemove(function(e){
			  var pageX = e.pageX - ($(window).width() / 2);
			  var pageY = e.pageY - ($(window).height() / 2);
			  var newvalueX = width * pageX * -1 - 25;
			  var newvalueY = height * pageY * -1 - 50;
			  $('#featured').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});

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


_slaask.init('a2185cf7997e55eb9484fc90fe78066a');


// Install Cookies
document.addEventListener('DOMContentLoaded', function(event) {
	cookieChoices.showCookieConsentBar('Cookies help us deliver our services. By using our services, you agree to our use of cookies.',
  'Got it', 'learn more', '/cookies');
});


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

function onReady(callback) {
	var intervalID = window.setInterval(checkReady, 1000);

	function checkReady() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalID);
			callback.call(this);
		}
	}
	}

	function show(id, value) {
		document.getElementById(id).style.display = value ? 'block' : 'none';
	}

	onReady(function () {
		show('page', true);
		show('loading', false);
	});



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

	TweenMax.staggerFromTo('#features_security_body.in-view .left .m-b-xl', 1, {opacity:0, x:200}, {opacity: 1, x: 0}, 0.2);
	TweenMax.staggerFromTo('#features_security_body.in-view .right .m-b-xl', 1, {opacity:0, x:-200}, {opacity: 1, x: 0}, 0.2);
	TweenMax.staggerTo('#features_automation.in-view .col-md-4', 1, {opacity:1}, 0.2);

	TweenMax.staggerFromTo('.in-view #different_languages li', 2, {
		scale:0.2,
		ease:Elastic.easeIn,
		force3D:true,
		 y:100},
		{scale:1, opacity:1, ease:Elastic.easeOut, force3D:true, y:0},
		 0.2);

	$(this).off(e);
})

var svg = new Walkway({
  selector: '#Layer_1',
  duration: '5000'
}).draw();


TweenMax.staggerFrom( '#react, #css3, #html5, #js, #pug, #git, #github, #netlify', 2, {scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut, force3D:true}, 0.2);

