$(document).ready(function () {

    $('.services p').expander({
    	slicePoint: 120,
    	expandText: 'more',
    	userCollapseText: 'less'
    });
    // Highlight the top nav as scrolling
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
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

// Activate WOW.js plugin for animation on scrol
new WOW().init();
