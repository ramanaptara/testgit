(function($, Drupal){
  //  alert();
  $('.owl-carousel').owlCarousel({
	  loop: true,
	  margin: 10,
	  nav: true,
	  navText: [
		"<i class='fa fa-caret-left'></i>",
		"<i class='fa fa-caret-right'></i>"
	  ],
	  autoplay: true,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	});
	

$('.mblMenu').click(function(){
	if($(this).hasClass('active')){
		$('ul.menu').removeClass('open');
		$(this).removeClass('active');
	} else{
		$('ul.menu').addClass('open');
		$(this).addClass('active');
	}

	
});
		 
  
})(jQuery);


