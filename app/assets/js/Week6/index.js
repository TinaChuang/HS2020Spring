(function($){
	$('.owl-carousel').owlCarousel({
		center: true,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive:{
			0:{
				items:2,
				nav:true
			},
			600:{
				items: 3,
				nav:false
			},
			1000:{
				items: 4,
        nav:true,
        loop:false
      }
      }
	});
})($);