$(document).ready(function () {

    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Remove menu on click
    $('#navbar').find('a').click(function(){
        $('#navbar').collapse('hide');
    });

    // Modified Version
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
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

    // Herbycookies Here

    $(document).herbyCookie({
        policyText: "Lear more",
        text: "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
        link: "/cookies",
        expiryDays: 180
    });


});

$('.services p').expander({
        slicePoint: 120,
        expandText: 'more',
        userCollapseText: 'less'
});
// Activate WOW.js plugin for animation on scrol
// new WOW().init();

_slaask.init('95426c2790f8f6fed51b9caab536ed57');

