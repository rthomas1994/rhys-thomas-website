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



	// if ($(window).width() < 700) {
	// 	scrollOffset = 120;
	// }

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
	});

	// Close mobile menu on click of x button
	$(".menu-button--close, .mobile-nav__links .nav-link > a").click(function() {
		$(".mobile-nav").removeClass("mobile-nav--visible");
	});

	// Scroll nav shadows
	// $(window).scroll(function() {     
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 0) {
  //       $("nav").addClass("shadow");
  //   }
  //   else {
  //       $("nav").removeClass("shadow");
  //   }
	// });

	// $(window).scroll(function() {
  //   clearTimeout($.data(this, 'scrollTimer'));
  //   $.data(this, 'scrollTimer', setTimeout(function() {
  //       $("nav").removeClass("shadow");
  //   }, 250));
	// });

	// Skill item data
	const skillData = [
		{
			skill: 'Figma',
			icon: 'media/figma-logo.png',
			alt: 'Figma icon',
			level: '7+ years experience',
			type: 'design'
		},
		{
			skill: 'Sketch',
			icon: 'media/sketch-logo.png',
			alt: 'Sketch app icon',
			level: '2-3 years experience',
			type: 'design'
		},
		{
			skill: 'Web Accessibility',
			icon: 'media/accessibility-logo.png',
			alt: 'Web accessibility icon',
			level: '5+ years experience',
			type: 'design'
		},
		{
			skill: 'Adobe CC',
			icon: 'media/adobe-cc-logo.png',
			alt: 'Adobe CC icon',
			level: '2-3 years experience',
			type: 'design'
		},
		{
			skill: 'InVision',
			icon: 'media/invision-logo.png',
			alt: 'InVision icon',
			level: '1-2 years experience',
			type: 'design'
		},
		{
			skill: 'HTML5',
			icon: 'media/html-logo.png',
			alt: 'CSS3 icon',
			level: '5+ years experience',
			type: 'development'
		},
		{
			skill: 'CSS3',
			icon: 'media/css-logo.png',
			alt: 'CSS3 icon',
			level: '5+ years experience',
			type: 'development'
		},
		{
			skill: 'SASS/SCSS',
			icon: 'media/sass-logo.png',
			alt: 'SASS icon',
			level: '5+ years experience',
			type: 'development'
		},
		{
			skill: 'JavaScript',
			icon: 'media/javascript-logo.png',
			alt: 'JavaScript icon',
			level: '3-4 years experience',
			type: 'development'
		},
		{
			skill: 'jQuery',
			icon: 'media/jquery-logo.png',
			alt: 'jQuery icon',
			level: '3-4 years experience',
			type: 'development'
		},
		{
			skill: 'GitHub',
			icon: 'media/github-logo.png',
			alt: 'GitHub icon',
			level: '5+ years experience',
			type: 'development'
		},
		{
			skill: 'Bootstrap',
			icon: 'media/bootstrap-logo.png',
			alt: 'Bootstrap icon',
			level: '2-3 years experience',
			type: 'development'
		},
		{
			skill: 'ReactJS',
			icon: 'media/react-logo.png',
			alt: 'ReactJS icon',
			level: '0-1 years experience',
			type: 'development'
		}
	];

	var skillsContainer = $("#skills_container");

	// Dynamically build skill items
	$(skillData).each(function(k, v) {
		var element = `<div class="skill" data-skill-type="${v.type}">
											<div class="skill__icon">
												<img src="${v.icon}" class="" alt="${v.alt}" />
											</div>
											<div class="skill__info">
												<p>${v.skill}</p>
												<span>${v.level}</span>
											</div>\
										</div>`;
		skillsContainer.append(element);
	});

	// When skill filter changes
	$("input[name='skillFilter']").change(function() {
		var checkedValue = $("input[name='skillFilter']:checked").val();
		// Remove active styling from all filter buttons
		$(".filter-item").removeClass("filter-item--active");
		// Add active styling to relevant filter button
		$(".filter-item[data-filter-value='"+checkedValue+"']").addClass("filter-item--active");
		// Hide all skill items
		$(".skill").hide();
		if (checkedValue === "all") {
			$(".skill").fadeIn(500);
		} else {
			$(".skill[data-skill-type='"+checkedValue+"']").fadeIn(500);
		}
	});

	var uiTag = `
		<div class="work-tag work-tag--design">
			<i class="bi bi-brush"></i>
			<span>UI/UX Design</span>
		</div>
	`;

	var figmaTag = `
		<div class="work-tag work-tag--design">
			<i class="fab fa-figma"></i>
			<span>Figma</span>
		</div>
	`;

	var htmlTag = `
		<div class="work-tag work-tag--dev">
			<i class="fab fa-html5"></i>
			<span>HTML</span>
		</div>
	`;

	var cssTag = `
		<div class="work-tag work-tag--dev">
			<i class="fab fa-css3"></i>
			<span>CSS3</span>
		</div>
	`;

	var jsTag = `
		<div class="work-tag work-tag--dev">
			<i class="bi bi-code-slash"></i>
			<span>JavaScript</span>
		</div>
	`;

	var desktopTag = `
		<div class="work-tag work-tag--design">
			<i class="bi bi-display"></i>
			<span>Desktop Design</span>
		</div>
	`;

	var mobileTag = `
		<div class="work-tag work-tag--design">
			<i class="bi bi-phone"></i>
			<span>Mobile Design</span>
		</div>
	`;

	var responsiveTag = `
		<div class="work-tag work-tag--design">
			<i class="bi bi-phone"></i>
			<span>Responsive Design</span>
		</div>
	`;

	var nocodeTag = `
		<div class="work-tag work-tag--dev">
			<i class="bi bi-hand-index"></i>
			<span>No-Code Platform</span>
		</div>
	`;

	var uxrTag = `
		<div class="work-tag work-tag--design">
			<i class="bi bi-people"></i>
			<span>User Research</span>
		</div>
	`;

	const tagList = [
		{
			uidesign: uiTag,
			figma: figmaTag,
			html: htmlTag,
			css: cssTag,
			javascript: jsTag,
			desktop: desktopTag,
			mobile: mobileTag,
			responsive: responsiveTag,
			nocode: nocodeTag,
			uxr: uxrTag
		}
	];

	// Add all tags
	$(".work-tag-outer").each(function() {
		var currentTagOuter = $(this);
		var tagName = String(currentTagOuter.data("tag-name"));
		// Find the relevant item in the tagList array and append it
		currentTagOuter.append(tagList[0][tagName]);
	});

});