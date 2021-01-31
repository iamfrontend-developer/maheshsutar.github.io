

// Header Onscoll color change

$(window).on('scroll', function(){

  	if($(window).scrollTop()){
  		$('.header').addClass('black');
  	}

  	else{
  		$('.header').removeClass('black');
  	}

})


// Go To Top Button
	var btn = $('#back-top');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});