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

    //sidelinks open and close
    $(function () {
    $(".sidelinks-close").on("click", function () {

        $(".sidelinks-box").toggleClass("sidelinks-box-active");
         $("#sidelinks-arrow").toggleClass('arrow-left');
    });
    $(document).on("click", function (e) {
        if (e.target.class != "sidelinks-close" && !$(e.target).closest(".sidelinks-box").length) {
            $(".sidelinks-box").removeClass("sidelinks-box-active");
             $("#sidelinks-arrow").removeClass('arrow-left');
        }
    });


    $(function() {
    if($(window).width() > 1600) {
        $('.sidelinks-box').addClass('sidelinks-box-active');
        $("#sidelinks-arrow").addClass('arrow-left');
    }
});

});


})(jQuery); // End of use strict


