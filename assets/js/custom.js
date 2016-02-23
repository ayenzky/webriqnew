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
    // $('body:not("button")').click(function(){
    //     $('#navbar').removeClass('in');
    // });

    // $('body, html, document').bind('click', function(e) {
    // if($(e.target).closest('#navbar').length == 0) {
    //     // click happened outside of menu, hide any visible menu items
    //     $('#navbar').collapse('hide');
    //     }
    // });

    // Modified
    jQuery(document.body).on('click', function(ev){
        if(jQuery(ev.target).closest('.navbar-collapse').length) return;

        $('#navbar').collapse('hide');
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



// Fetching contentful API

var request = new XMLHttpRequest();

var ctype = '2wKn6yEnZewu2SCCkus4as';
var space = '3lob6yokb62o';
var token = '7398d96f6bc9393b2ed62a453da46946695daaed56305f553e831694916c520e';

request.open('GET', 'https://cdn.contentful.com/spaces/3lob6yokb62o/entries?access_token=7398d96f6bc9393b2ed62a453da46946695daaed56305f553e831694916c520e&content_type=2wKn6yEnZewu2SCCkus4as');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    // console.log('Status:', this.status);
    // console.log('Headers:', this.getAllResponseHeaders());
    // // console.log('Body:', this.responseText);
    // console.log('Body:', this.responseText);
    // $('body .content-list').append(this.responseText.items);

    var json = JSON.parse(this.responseText);

    console.log(json.items);
    $(json.items).each(function(i,e){
        console.log('Title:' + e.fields.title + 'Slug:' + e.fields.slug);



        // $('.content-list li').html('<div class="title"> '+ e.fields.title +'</div><div class="body"> ' + e.fields.body + '</div>');
    });
  }
};

request.send();

// var request = new XMLHttpRequest();

// request.open('GET', 'https://cdn.contentful.com/spaces/3lob6yokb62o/content_types/2wKn6yEnZewu2SCCkus4as?access_token=7398d96f6bc9393b2ed62a453da46946695daaed56305f553e831694916c520e');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();


 $('.services p').expander({
        slicePoint: 120,
        expandText: 'more',
        userCollapseText: 'less'
    });
// Activate WOW.js plugin for animation on scrol
// new WOW().init();

_slaask.init('16402c826e9a9641d9208244ac0ecd69');