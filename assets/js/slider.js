var b = $('body');

var sliderScene = b.find('svg.drawsvg').drawsvg({
	duration: 1500,
	callback: function(){
		$("svg.drawsvg").css('opacity', '0');
		$(b).find('.hided').each(function(){
			$(this).removeClass('hided');
			$(this).addClass('showed');
		});
		$(b).find('.slider').css({"background-image": "url('assets/img/background.jpg')"})
	}
});

sliderScene.drawsvg('animate')

// TweenMax.staggerFrom("#react, #css3, #html5, #js, #pug, #git, #github, #netlify", 2,{
// 	scale:.5,
// 	opacity:0,
// 	delay: 1.2,
// 	ease:Elastic.easeOut,
// 	force3D:true},
// 	.2)
