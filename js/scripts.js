/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $(function () {
    $("#sidelinks-button").on("click", function () {

        $(".sidelinks-box").toggleClass("sidelinks-box-active");
    });
    $(document).on("click", function (e) {
        if (e.target.class != "sidelinks-button" && !$(e.target).closest(".sidelinks-box").length) {
            $(".sidelinks-box").removeClass("sidelinks-box-active");
        }
    });

    $('#sidelinks-button').click(function() {
        $("#sidelinks-arrow").toggleClass('arrow-left');
    });

});



//     hide = true;
//     $('body').on("click", function () {
//         if (hide) $('.sidelinks-box').removeClass('sidelinks-box-active');
//         hide = true;
//     });

// // add and remove .active
//     $('body').on('click', '.sidelinks-box', function () {

//         var self = $(this);

//     if (self.hasClass('sidelinks-box-active')) {
//         $('.sidelinks-box').removeClass('sidelinks-box-active');
//         return false;
//     }

//     $('.sidelinks-box').removeClass('sidelinks-box-active');

//     self.toggleClass('sidelinks-box-active');
//     hide = false;
// });







})(jQuery); // End of use strict


 function sliderToggle1() {
            var element = document.getElementById("slide1");
            element.classList.toggle("slider-toggle");
            }


