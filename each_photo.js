
$j(document).ready(
	
function() {
$('.imgs').each(
	
	function() {
	
		var conHeight = $(".li").height();
		var imgHeight = $(this).height();
		var imgWidth = $(this).width();
	
		if (imgWidth > imgHeight) {
			var gap = ((imgHeight - conHeight)/2)+85;
			$(".li").css({"height",gap + 'px'});
		}
		else {
			$(".li").css({"margin-bottom",10});
		}		
	});
});
	