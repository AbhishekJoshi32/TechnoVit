new WOW().init();

var homeHtml = "snippets/home-snippet.html";
var delay = 5000;
$( document ).ready(function(){
	$(".quote").css({
		"top":screen.height/2-350,
		"left":screen.width/5-150
	}).addClass(" animated zoomIn");
	$(".cssload-loader-inner").css({
		"top":"200px",
		"left":screen.width/2
	}).addClass("rollIn animated")
	$.ajax({
		type:'GET',
		url: homeHtml,
		datatype: "html",
		success: function(response){
			setTimeout(function(){
				delaySuccess(response);
			},delay);
		}
	});
});

function delaySuccess(data) {
	$(".loader").addClass("animated zoomOutDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			insertHtml("#wrapper",data);
			introAnimations();
		});
}

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};




function introAnimations() {
    console.log( "ready!" );
    

    $('.intro').addClass('animated fadeInDownBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			console.log("ep");
			$('.logo').html("<img src='images/logo.png'>").addClass('animated zoomIn');
			$('.intro-heading').css('visibility','visible').addClass('animated lightSpeedIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
				function(){
					$('.intro-cont').css('visibility','visible').addClass('animated fadeInDownBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',shieldAnimations());
					$('.extra-cont').css('visibility','visible').addClass('animated fadeInLeftBig');
				}
			);
		}
	);
}


function shieldAnimations(){
	$('.shield1').css({
		'top':screen.height-300,'left':screen.width/2-300,'visibility':'visible'
	}).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$('.shield1').removeClass('animated bounceIn ').addClass('animated bounce infinite')
		});
    
    $('.shield2').css({
    	'top':screen.height-300,'left':screen.width/2-70,'visibility':'visible'
    }).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$('.shield2').removeClass('animated bounceIn ').addClass('animated bounce infinite')
		});;
    
    $('.shield3').css({
    	'top':screen.height-300,'left':screen.width/2+150,'visibility':'visible'
    }).addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		function(){
			$('.shield3').css({'animation-delay':0,'-webkit-animation-delay': 0});
			$('.shield3').removeClass('animated bounceIn ').addClass('animated bounce infinite')
		});;
	}


$(document).on("click", ".shield1", function() {	
	$('.shield1').animate({
		top:screen.height/3,
		left:screen.height/3,
		height:80%;
	})

});