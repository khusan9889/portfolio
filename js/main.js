$(document).ready(function () {

	fetch('data.json').then(response => response.json()).then(data => {
		data.info.forEach(element => {
			let photo = element.block.image;
			let title = element.block.title;
			let content = element.block.content;

			$('#imageContainer').append(`<div class="card" style="width: 300px; margin: 10px;">
				<img src="${photo}" class="card-img-top" style="border: rgb(197, 197, 197) 1px solid; width:100%" alt="...">
				<div class="card-body" style="padding: 10px 15px; border: rgb(197, 197, 197) 1px solid;">
				<h5 class="card-title" style="font-size: 22px; font-weight: 600;">${title}</h5>
				<p class="card-text">${content}</p>
				</div>
			</div>`);
		});
	});

	fetch('data.json').then(response => response.json()).then(data => {
		data.slider.forEach(element => {
			let description = element.block.description;
			let title = element.block.title;
			let name = element.block.name;

			$("#jsonCarousel").append(`
				  <div class="item">
                    <div class="testimonial">
                      <h3>${title}</h3>
                      <p>“${description}”</p>
                      <div class="star-rating">
                        <i class="fa fa-star gold-star"></i>
                        <i class="fa fa-star gold-star"></i>
                        <i class="fa fa-star gold-star"></i>
                        <i class="fa fa-star gold-star"></i>
                        <i class="fa fa-star gold-star"></i>
                      </div>
                      <p class="customer-name">${name}</p>
                    </div>
                  </div>
			`);
		});
		document.getElementById("jsonCarousel").querySelectorAll(".item")[0].classList.add("active");
	});




	// Scroll Events
	$(window).scroll(function () {

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function (e) {
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function (e) {
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');


	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function () {
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function () {
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');
	});


	// Wow Animations
	wow = new WOW(
		{
			boxClass: 'wow',      // default
			animateClass: 'animated', // default
			offset: 0,          // default
			mobile: true,       // default
			live: true        // default
		}
	)
	wow.init();


	// Menu For Xs Mobile Screens
	if ($(window).height() < 450) {
		$('#slide_out_menu').addClass('xs-screen');
	}

	$(window).on('resize', function () {
		if ($(window).height() < 450) {
			$('#slide_out_menu').addClass('xs-screen');
		} else {
			$('#slide_out_menu').removeClass('xs-screen');
		}
	});


	// Magnific Popup
	$(".lightbox").magnificPopup();



});
