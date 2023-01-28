/*
* Theme Name: Bitt
* Author: Themez Hub
* Version: 1.0.0
  Author URI    : http://www.themezhub.com/

/* Table of Content
*****************************************************
   
    01. Sent Mail Script
	02. Preloader
    03. Owl Carousel
    04. Testimonial Carousel
    05. Popup
	06 color pannel
	07. Navigation
	
*/


/*****************************************************
***Sent Mail Script ***
*****************************************************/


   $(document).ready(function() {
   "use strict";
		var contact = $('#contact-form');
	    contact.validator();
		contact.on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact-mail.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })

/*****************************************************
*** Preloader ***
*****************************************************/
        $(window).on('load', function() { 
            $('#loader').fadeOut();
            $('#loader-wrapper').delay(350).fadeOut('slow'); 
            $('body').delay(350).css({'overflow':'visible'});
        })

/*********************************************
*****Owl Carousel
***********************************************/
	$("#screen-carousel").owlCarousel({
		items:3,
		itemsDesktop:[1199,3],
		itemsDesktopSmall:[979,2],
		itemsTablet:[768,2],
		pagination: true,
		navigation:false,
		navigationText:["",""],
		autoPlay:true
	});
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop:[1199,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		pagination: true,
		navigation:false,
		navigationText:["",""],
		autoPlay:true
	});
/*****************************************************
*** Sign Up and Login Popup ***
*****************************************************/
	
/*****************************************************
*** Color Panel ***
*****************************************************/
	var colr = $('#colorPanel');
	colr.ColorPanel({
	styleSheet: '#cpswitch'
	, colors: {
		'#d20001': 'assets/css/skins/red-style.css'
		,'#0f8dd3': 'assets/css/skins/blue-style.css'
		, '#00A838': 'assets/css/skins/green-style.css'
		, '#c837cc': 'assets/css/skins/purple-style.css'
		, '#ed295a': 'assets/css/skins/style.css'
	, }
	, linkClass: 'linka'
	, animateContainer: false
	});
	
	/*------------------------------------
	Navigation Js
	---------------------------------------*/
	// Cache selectors
	var lastId,
		topMenu = $("#my-navigation"),
		topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.on('click', function(e){
	  var href = $(this).attr("href"),
		  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
		  scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).on('scroll', function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
		   return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
		   lastId = id;
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
	
	
	
	});
	
