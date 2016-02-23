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

// function get_ajax(){
//     var request = new XMLHttpRequest();
//     request.open('GET', 'js/object.json');
//     request.setRequestHeader("Content-type", "application/json", true);
//     request.onreadystatechange = function(){
//         if(request.readyState === 4){

//             var data = JSON.parse(request.responseText);

//             console.log(data);

//             var items = [];

//             $.each(data, function (key, value){
//                 items.push('<li>' + value.user + ' lives in ' + value.country + '</li>')
//             });

//             $('<ul/>', {
//                 'class': 'content-list',
//                 html: items.join('')
//             }).appendTo('.blog');
//         }
//     }
//     request.send(null);
// }

// get_ajax();
// Fetching contentful API

var request = new XMLHttpRequest();

var ctype = '2wKn6yEnZewu2SCCkus4as';
var space = '3lob6yokb62o';
var token = '7398d96f6bc9393b2ed62a453da46946695daaed56305f553e831694916c520e';

request.open('GET', 'https://cdn.contentful.com/spaces/' + space + '/entries?access_token=' + token + '&content_type=' + ctype + '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {

    var json = JSON.parse(this.responseText);

    console.log(json.items);

        var items  = [];
        $.each(json.items, function(key, value){
            // console.log('Title:' + e.fields.title + 'Slug:' + e.fields.slug);
            var val  = value;
            items.push('<li> <h3><a href="'+ val.slug +'">' + val.fields.title + ' </a></h3> <br/ > Create on: ' + val.fields.date + ' <div class="content">' + val.fields.body + '</div></li>')
        });
        $('<ul />', {
            'class': 'content-list',
            html: items.join('')
        }).appendTo('.blog');
    }
}

request.send();


// var obj1 = { user: "John", age: 28, country: "Philippines"}
// var obj2 = { user: "Will", age: 22, country: "Philippines"}
// var obj3 = { user: "Maine", age: 21, country: "Philippines"}
// var obj4 = { u1: obj1, u2: obj2, u3: obj3 }

// $('.container').append("Name:" + obj4.u3.user +" Age: "+ obj4.u3.age + "Country:" + obj4.u3.country);
// obj3.country = "Italy";
// $('.container').append('<hr>');
// $('.container').append("Name:" + obj4.u3.user +" Age: "+ obj4.u3.age + "Country:" + obj4.u3.country);
// $('.container').append('<hr>');
// $('.container').append(obj4.u1.user + " is from " + obj4.u1.country);

// var meats = ['beef', 'chicken', 'fish'];
// var fruits = ['mango', 'orange', 'banana'];

// var obj4 = { arr1: meats, arr2: fruits }
// $('.container').append('<hr>');
// $('.container').append(obj4.arr1[2] +" and "+ obj4.arr2[2] + " for our dinner")






$('.services p').expander({
        slicePoint: 120,
        expandText: 'more',
        userCollapseText: 'less'
});
// Activate WOW.js plugin for animation on scrol
// new WOW().init();

_slaask.init('95426c2790f8f6fed51b9caab536ed57');

