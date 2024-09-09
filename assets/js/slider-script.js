document.addEventListener("DOMContentLoaded", function(){
		"use strict";		
		$('.testimonial-one-slider').owlCarousel({
			items: 1,
			margin: 60,
			loop: true,
			dots: true,
		});

		$('.partener-one-slider').owlCarousel({
			items: 8,
			margin: 130,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			slideTransition: 'linear',
			smartSpeed: 3000,
			responsive: {
				0: {
					items: 3,
					margin: 60,
				},
				575: {
					items: 3,
					margin: 60,
				},
				768: {
					items: 3,
					margin: 0,
				},
				992: {
					items: 5,
					margin: 60,
				},
				1199: {
					items: 5,
					margin: 60,
				},
				1400: {
					items: 8,
				}
			}
		});

		$('.partener-four-slider, .partener-five-slider').owlCarousel({
			items: 7,
			margin: 50,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			slideTransition: 'linear',
			smartSpeed: 3000,
			responsive: {
				0: {
					items: 2.5,
					margin: 50,
				},
				480: {
					items: 3,
					margin: 50,
				},
				575: {
					items: 3,
					margin: 50,
				},
				768: {
					items: 4.5,
					margin: 0,
				},
				992: {
					items: 4,
					margin: 20,
				},
				1199: {
					items: 5,
					margin: 50,
				},
				1400: {
					items: 7,
				}
			}
		});
		$('.quoye-one-details, .quoye-two-details').owlCarousel({
			items: 5,
			margin: 0,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 3000,
			slideTransition: 'linear',
			smartSpeed: 3000,
			responsive: {
				0: {
					items: 1.5,
				},
				480: {
					items: 1.8,
				},
				575: {
					items: 2,
				},
				768: {
					items: 3,
				},
				992: {
					items: 4,
				},
				1199: {
					items: 5,
				},
				1400: {
					items: 5,
				}
			}
		});

		$('.case-one-slider').owlCarousel({
			items: 3,
			margin: 70,
			loop: true,
			dots: true,
			responsive: {
				0: {
					items: 1,
					margin: 20,
				},
				768: {
					items: 1,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
				1199: {
					items: 2,
				},
				1500: {
					items: 2,
				},
				1800: {
					items: 3,
				}
			}
		});

		$('.case-two-slider').owlCarousel({
			items: 2,
			margin: 30,
			loop: true,
			dots: true,
			
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 2,
					margin: 30,
				},
				1199: {
					items: 2,
				},
				1500: {
					items: 2,
				},
				1800: {
					items: 2,
				}
			}
		});
		$('.case-three-slider').owlCarousel({
			items: 3,
			margin: 0,
			loop: true,
			dots: true,
			responsive: {
				0: {
					items: 1,
					margin: 0,
				},
				768: {
					items: 1,
					margin: 0,
				},
				992: {
					items: 2,
					margin: 30,
				},
				1199: {
					items: 2,
				},
				1500: {
					items: 2,
				},
				1800: {
					items: 3,
				}
			}
		});


		$('.testimonial-two-slider').owlCarousel({
			items: 1,
			margin: 30,
			nav: true,
			loop: true,
			dots: false,
			navText: ["<i class='icon-arrow-right-up'></i>", "<i class='icon-arrow-right-up'></i>"],
			responsive: {
				0: {
					margin: 0,
				},
				992: {
					margin: 30,
				}
			}
		});

		$('.testimonial-five-slider, .testimonial-six-slider').owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			responsive: {
				0: {
					margin: 20,
					items: 1,
				},
				768: {
					margin: 20,
					items: 2,
				},
				992: {
					margin: 30,
					items: 2,
				},
				1199: {
					margin: 30,
					items: 3,
				}
			}
		});

		$('.about-two-bottom-slider-one').owlCarousel({
			items: 2.3,
			margin: 100,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 10000,
			slideTransition: 'linear',
			smartSpeed: 10000,
			responsive: {
				0: {
					margin: 20,
					items: 1.5,
				},
				768: {
					margin: 20,
					items: 2,
				},
				992: {
					margin: 50,
				},
				1199: {
					margin: 100,
				}
			}
		});

		$('.about-two-bottom-slider-two').owlCarousel({
			items: 2.3,
			margin: 100,
			loop: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 10000,
			rtl: true,
			slideTransition: 'linear',
			smartSpeed: 10000,
			responsive: {
				0: {
					margin: 20,
					items: 1.5,
				},
				768: {
					margin: 20,
					items: 2,
				},
				992: {
					margin: 50,
				},
				1199: {
					margin: 100,
				}
			}
		});


		if ($('.testimonial-three-thumb').length) {
			var review_thumb = new Swiper(".testimonial-three-thumb", {
				slidesPerView: 3,
				spaceBetween: 0,
			})
		}
		if ($('.testimonial-three-reviews').length) {
			var review_swiper = new Swiper(".testimonial-three-reviews", {
				slidesPerView: 1,
				loop: true,
				spaceBetween: 0,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				thumbs: {
					swiper: review_thumb,
				},
			})
		}
});