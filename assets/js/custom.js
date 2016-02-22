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


    // Remove menu on click
    $('#navbar').find('a').click(function(){
        $('#navbar').collapse('hide');
    });
    // $('body:not("button")').click(function(){
    //     $('#navbar').removeClass('in');
    // });

    $('body').bind('click', function(e) {
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

    // Herbycookies Here

    $(document).herbyCookie({
        policyText: "Lear more",
        text: "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
        link: "/cookies",
        expiryDays: 180
    });


});

// Activate WOW.js plugin for animation on scrol
// new WOW().init();
