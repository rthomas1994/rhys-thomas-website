var scrollOffset = 50;

$(document).ready(function() {

    if ($(window).width() < 700) {
        scrollOffset = 120;
    }

    // Check on page load
    checkThemeSwitch();

    $("#theme_switch").change(function() {
        checkThemeSwitch();
    });

    $('[id^="nav_"]').click(function() {

        var clickedSection = $(this).attr("id").replace("nav_", "");

        // Scroll to clicked section
        $("html, body").animate({
            scrollTop: $("#" + clickedSection).offset().top - scrollOffset
        }, 400)

        // Remove active class from all
        $(".navItem").removeClass("navItem--active");

        // Add active class to clicked item
        $(this).addClass("navItem--active");

    });

    // Add active class for workItem on hover
    $(".workItem").hover(function() {
        $(this).closest(".workItem").toggleClass("workItem--active");
    });

    // Show relevant work item when using menu
    $("[id^='menu_']").click(function() {

        // Get number of clicked menu item
        var menuNumber = $(this).attr("id").replace("menu_", "");

        // Hide all workItems
        $(".workItem").fadeOut(400);
        // $(".workItem").addClass("displayNone");

        setTimeout(function() {
            // Show relevant workItem
            // $("#workItem_" + menuNumber).removeClass("displayNone");
            $("#workItem_" + menuNumber).fadeIn(400);
        }, 400);

        // Remove all active menu classes
        $(".menuItem").removeClass("menuItem--active")

        // Add active class to clicked item
        $(this).addClass("menuItem--active");

    });

    // Hover state on image for work section
    // $(".workItem_hoverBox").hover(function() {
    //     $(this).closest(".workItem").toggleClass("workItem--active");
    // });




    // On scroll remove active class from nav items
    // $(window).scroll(function() {

    //     // Remove active class from all
    //     $(".navItem").removeClass("navItem--active");

    // });

});

function checkThemeSwitch() {

    if ($("#theme_switch").is(':checked')) {
        $(".toggleSwitch_slider").addClass("toggleSwitch_slider--checked");
        $("body").removeClass("lightMode");
    } else {
        $(".toggleSwitch_slider").removeClass("toggleSwitch_slider--checked");
        $("body").addClass("lightMode");
    }

}