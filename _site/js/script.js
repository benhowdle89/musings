$(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		if(window.location.pathname !== '/' && $(window).scrollTop() == 0){
			$('html,body').animate({scrollTop: $("#content").offset().top},'slow');
		}
	}

	$('#focus').click(function(){
		$('#sidebar, #menu').toggleClass('focus');
		$(this).toggleClass('focus-on');
	});

});