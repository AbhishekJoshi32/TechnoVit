new WOW().init();

var homeHtml = "snippets/home-snippet.html";

$( document ).ready(
	$ajaxUtils.sendGetRequest(homeHtml,
		function (responseText) {
		    document.querySelector("#wrapper")
		    .innerHTML = responseText;
		    ajaxFillText();
		    introAnimations();
	  	},
		false
	));



var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

function ajaxFillText(){
	
}


function introAnimations() {
    console.log( "ready!" );
    

    $('.intro').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
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