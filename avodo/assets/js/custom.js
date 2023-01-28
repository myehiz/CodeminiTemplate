(function($) {
  "use strict";
	
	// :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }
	
	
	// Back To TOp
	var pxShow = 600;
        var fadeInTime = 300;
        var fadeOutTime = 300;
        var scrollSpeed = 500;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= pxShow) {
                $("#backtotop").fadeIn(fadeInTime);
            } else {
                $("#backtotop").fadeOut(fadeOutTime);
            }
        });
	$('#backtotop a').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, scrollSpeed);
		return false;
	});

	// Testimonial
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop:[1199,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination: false,
		navigation:false,
		navigationText:["",""],
		autoPlay:true
	});
	
	$("#screen-carousel").owlCarousel({
		items:1,
		itemsDesktop:[1199,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination: false,
		navigation:true,
		navigationText:["",""],
		autoPlay:true
	});
	
	// Link
	$('.bootsnav a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 800);
		return false;
	});
				
  // COLOR cHANGING 
	var a, i = ["red-skin", "blue-skin", "green-skin", "yellow-skin", "purple-skin", "cyan-skin"];

	function o(e) {
		var a, o;
		return $.each(i, function(e) {
			$("body").removeClass(i[e])
		}), $("body").addClass(e), a = "skin", o = e, "undefined" != typeof Storage ? localStorage.setItem(a, o) : window.alert("Please use a modern browser to properly view this template!"), !1
	}(a = void("undefined" != typeof Storage || window.alert("Please use a modern browser to properly view this template!"))) && $.inArray(a, i) && o(a), $("[data-skin]").on("click", function(e) {
		$(this).hasClass("knob") || (e.preventDefault(), o($(this).data("skin")))
	})
	
})(jQuery); // End of use strict	