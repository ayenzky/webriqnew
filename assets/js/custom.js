$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

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
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 70
        }, 500);
        event.preventDefault();
    });

    // // Herbycookies Here
    // $(document).herbyCookie({
    //     policyText: "Lear more",
    //     text: "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
    //     link: "/cookies",
    //     expiryDays: 180
    // });


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


// Activate WOW.js plugin for animation on scrol
new WOW().init();


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