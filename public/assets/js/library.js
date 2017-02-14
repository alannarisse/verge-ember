/* Magnific popup */
$(document).ready(function() {
	console.log("Ready!");
	$('.lightbox').magnificPopup({type:'image'});
	$('.test-popup-link').magnificPopup({
		type: 'image'
		// other options
	});
});