// var scrollOffset = 50;

$(document).ready(function() {

	// Get current window height
	var windowHeight = $(window).height();
	setMobileNavHeight(windowHeight);

	function setMobileNavHeight(height) {
		$("aside.mobile-nav").css("height", height);
	}

	// Reset every time window resizes
	$(window).resize(function() {
		windowHeight = $(window).height();
		setMobileNavHeight(windowHeight);
	});

	var currentYear = new Date().getFullYear();

	// Set copyright year
	$("#copyright-year").html(currentYear);


	// Light/dark theme change
	const lightButtons = $("#light_button, #light_button_mobile");
	const darkButtons = $("#dark_button, #dark_button_mobile");

	darkButtons.click(function() {
		$("body").removeClass("light").addClass("dark");
		darkButtons.toggleClass("display-none");
		lightButtons.toggleClass("display-none");
	});

	lightButtons.click(function() {
		$("body").removeClass("dark").addClass("light");
		lightButtons.toggleClass("display-none");
		darkButtons.toggleClass("display-none");
	});

	// Show & hide mobile menu
	$(".menu-button--open").click(function() {
		$(".mobile-nav").addClass("mobile-nav--visible");
		$("body").addClass("scroll-lock");
	});

	// Close mobile menu on click of x button
	$(".menu-button--close, .mobile-nav__links .nav-link > a").click(function() {
		$(".mobile-nav").removeClass("mobile-nav--visible");
		$("body").removeClass("scroll-lock");
	});

	// Shrink nav on scroll

	// Check scroll position on page load
    if ($(window).scrollTop() > 80) {
        $("nav.desktop-nav").addClass("desktop-nav--min");
    }

    // Check scroll position on scroll event
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $("nav.desktop-nav").addClass("desktop-nav--min");
        } else {
            $("nav.desktop-nav").removeClass("desktop-nav--min");
        }
    });

	// Set no. of years experience
	let yearsExperience = 7;
	let lastUpdate = Date.now();

	setInterval(function() {
	    if (Date.now() - lastUpdate >= 365 * 24 * 60 * 60 * 1000) { // 1 year in milliseconds
	      yearsExperience++;
	      lastUpdate = Date.now();
	    }
	}, 1000 * 60 * 60 * 24); // Checks once a day

	// Set the value
	$("#years-experience").text(yearsExperience);

});