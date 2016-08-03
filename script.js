$(document).ready(function(){
	
	$("button").click(function(){
		$("div").stop(false, true);
	});

	 // $(selector).animate({styles}, speed, easing, callback);
	$("div").animate({
		width: '400px',
		height: '200px'

	}, 2000);

	$("div").animate({
		width: '300px',
		height: '100px'

	}, 2000);

	$("div").animate({
		borderRadius: '20px',

	}, 2000);
	

	

});