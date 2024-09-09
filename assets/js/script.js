// Window load
$(window).on("load", function () {
	/*------preloader-----*/
	if ($(".preloader").length) {
		$(".preloader").delay(200).fadeOut();
	}
})

$(document).ready(function () {
	"use strict";
	// swift-up-text
	const swiftUpElements = document.querySelectorAll('.swift-up-text');

	swiftUpElements.forEach(elem => {

		const words = elem.textContent.split(' ');
		elem.innerHTML = '';

		words.forEach((el, index) => {
			words[index] = `<span><i>${words[index]}</i></span>`;
		});

		elem.innerHTML = words.join(' ');

		const children = document.querySelectorAll('span > i');
		children.forEach((node, index) => {
			node.style.animationDelay = `${index * .3}s`;
		});

	});


	/*------custom-cursor-----*/
	if ($(".custom-cursor").length) {
		var cursor = document.querySelector(".custom-cursor-one");
		var cursorinner = document.querySelector(".custom-cursor-two");
		var a = document.querySelectorAll("a");

		document.addEventListener("mousemove", function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
		});

		document.addEventListener("mousemove", function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursorinner.style.left = x + "px";
			cursorinner.style.top = y + "px";
		});

		document.addEventListener("mousedown", function () {
			cursor.classList.add("click");
			cursorinner.classList.add("custom-cursor-innerhover");
		});

		document.addEventListener("mouseup", function () {
			cursor.classList.remove("click");
			cursorinner.classList.remove("custom-cursor-innerhover");
		});

		a.forEach((item) => {
			item.addEventListener("mouseover", () => {
				cursor.classList.add("custom-cursor-hover");
			});
			item.addEventListener("mouseleave", () => {
				cursor.classList.remove("custom-cursor-hover");
			});
		});
	}


	$('body').on('click', 'a[href="#"]', function (e) { e.preventDefault() });

	// sticky-header

	$(window).on("scroll", function () {
		if ($(".main-header").length) {
			var headerScrollPos = 300;
			var stricky = $(".main-header");
			if ($(window).scrollTop() > headerScrollPos) {
				setTimeout(function () {
					stricky.addClass("sticky-fixed");
				})
				stricky.addClass("sticky-header--cloned");
			} else if ($(this).scrollTop() <= headerScrollPos) {
				stricky.removeClass("sticky-fixed");
				stricky.removeClass("sticky-header--cloned");
			}
		}
	});

	// current
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];
		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}
	if ($(".main-menu>ul, .main-menu-left>ul").length) {
		// dynamic current class
		let mainNavUL = $(".main-menu>ul, .main-menu-left>ul");
		dynamicCurrentMenuClass(mainNavUL);
	}



	// mobile-nav

	jQuery(function ($) {
		$('.header-right-end, .header-three-menu').click(function () {
			$('.mobile-nav-wrapper').toggleClass('expanded')
			$("body").toggleClass("locked");
		})
	})
	if ($(".mobile-nav-toggler").length) {
		$(".mobile-nav-toggler").on("click", function (e) {
			e.preventDefault();
			$(".mobile-nav-wrapper").toggleClass("expanded");
			$("body").toggleClass("locked");
		});
	}
	if ($(".mobile-nav-container .mobile-menu-list").length) {
		let dropdownAnchor = $(
			".mobile-nav-container .mobile-menu-list .dropdown > a"
		);
		dropdownAnchor.each(function () {
			let self = $(this);
			let toggleBtn = document.createElement("BUTTON");
			toggleBtn.setAttribute("aria-label", "dropdown toggler");
			toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
			self.append(function () {
				return toggleBtn;
			});
			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("expanded");
				self.parent().toggleClass("expanded");
				self.parent().parent().children("ul").slideToggle();
			});
		});
	}

	// ---------------service-one-count
	$('.service-one-count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 5000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
		$('.service-one-count').addClass('wow animated fadeInLeft');
	});


	// ---------------fact-count
	$('.fact-count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 9000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	// Hover Image
	const link = document.querySelectorAll(".service-two-hover-item, .peoject-one-hover-item");
	const linkHoverReveal = document.querySelectorAll(".service-two-hover-item-box, .peoject-one-hover-item-box");
	const linkImages = document.querySelectorAll(".service-two-hover-item-box-img, .peoject-one-hover-item-box-img");
	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener("mousemove", (e) => {
			linkHoverReveal[i].style.opacity = 1;
			linkHoverReveal[
				i
			].style.transform = `translate(-100%, -50% )`;
			linkImages[i].style.transform = "scale(1, 1)";
			linkHoverReveal[i].style.left = e.clientX + "px";
		});
		link[i].addEventListener("mouseleave", (e) => {
			linkHoverReveal[i].style.opacity = 0;
			linkHoverReveal[
				i
			].style.transform = `translate(-50%, -50%)`;
			linkImages[i].style.transform = "scale(0.8, 0.8)";
		});
	}

	// ---------------video-popup
	if ($(".video-popup").length) {
		$('.video-popup').YouTubePopUp();
	}

	// wow animation
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}

	// ----product-details  Add-to-Cart
	var buttonPlus = $(".qty-btn-plus");
	var buttonMinus = $(".qty-btn-minus");
	var incrementPlus = buttonPlus.click(function () {
		var $n = $(this)
			.parent(".qty-container")
			.find(".input-qty");
		$n.val(Number($n.val()) + 1);
	});
	var incrementMinus = buttonMinus.click(function () {
		var $n = $(this)
			.parent(".qty-container")
			.find(".input-qty");
		var amount = Number($n.val());
		if (amount > 0) {
			$n.val(amount - 1);
		}
	});

	// animation_image_zoom
	var $wrap = $('.animation_image_zoom'),
		lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 12;

	function animate() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		$wrap.css({
			'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
		});
		window.requestAnimationFrame(animate);
	}

	$(window).on('mousemove click', function (e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (5 * lMouseX) / 200; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (5 * lMouseY) / 200;
	});

	animate();

	// range
	const allRanges = document.querySelectorAll(".range-wrap");
	allRanges.forEach(wrap => {
		const range = wrap.querySelector(".range");
		const bubble = wrap.querySelector(".bubble");

		range.addEventListener("input", () => {
			setBubble(range, bubble);
		});
		setBubble(range, bubble);
	});

	function setBubble(range, bubble) {
		const val = range.value;
		const min = range.min ? range.min : 0;
		const max = range.max ? range.max : 100;
		const newVal = Number(((val - min) * 100) / (max - min));
		bubble.innerHTML = val;

		// Sorta magic numbers based on size of the native UI thumb
		bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
	}

	$('.tile')
		// tile mouse actions
		.on('mouseover', function () {
			$(this).children('.photo').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
		})
		.on('mouseout', function () {
			$(this).children('.photo').css({ 'transform': 'scale(1)' });
		})
		.on('mousemove', function (e) {
			$(this).children('.photo').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
		})
		// tiles set up
		.each(function () {
			$(this)
				// add a photo container
				.append('<div class="photo"></div>')
				// set up a background image for each tile based on data-image attribute
				.children('.photo').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
		})

	// Function to ease the scrolling effect
	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	// Function to perform smooth scrolling with animation for a given element
	function smoothScrollTo(element, to, duration) {
		const start = window.pageYOffset;
		const change = to - start;
		let currentTime = 0;

		function animateScroll() {
			currentTime += 1 / 60; // assuming 60 fps
			const position = easeInOutQuad(currentTime, start, change, duration);
			window.scrollTo(0, position);

			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
		}

		animateScroll();
	}

	// Event listener for scroll with smooth scrolling and animation effect
	window.addEventListener('scroll', function () {
		// Example: Apply the smooth animation to multiple elements with different classes
		const elementsToAnimate = document.querySelectorAll('.scroll_item_select_img img');

		elementsToAnimate.forEach((element) => {
			let winPos = window.pageYOffset;
			let targetPos = winPos * 0.10;

			// Apply the smooth animation to the element's transform property
			element.style.transition = 'transform 0.5s ease-out'; // Adjust the transition duration as needed
			element.style.transform = `translateY(${targetPos}px) scale(1.5)`;
		});
	});
})

if ($('input[name="rangeOne"]').length) {
		var rangeOne = document.querySelector('input[name="rangeOne"]'),
			rangeTwo = document.querySelector('input[name="rangeTwo"]'),
			outputOne = document.querySelector('.outputOne'),
			outputTwo = document.querySelector('.outputTwo'),
			inclRange = document.querySelector('.incl-range'),
			updateView = function () {
				if (this.getAttribute('name') === 'rangeOne') {
					outputOne.innerHTML = ("$") + this.value;
					outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
				} else {
					outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
					outputTwo.innerHTML = ("$") + this.value
				}
				if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
					inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
					inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
				} else {
					inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
					inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
				}
			};


		document.addEventListener('DOMContentLoaded', function () {
			updateView.call(rangeOne);
			updateView.call(rangeTwo);
			$('input[type="range"]').on('mouseup', function () {
				this.blur();
			}).on('mousedown input', function () {
				updateView.call(this);
			});
		});

}