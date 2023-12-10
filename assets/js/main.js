$(document).ready(function () {
    // Add class on menu click
    $(".toogle-btn").click(function () {
        $(this).toggleClass("active");
        $(".navbar-nav").toggleClass("active");
    });
    // Sticky navbar when scroll
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 80)
        {
            $(".navbar").addClass("sticky");
        }
        else
        {
            $(".navbar").removeClass("sticky");
        }
    });
    // Active navbar when click
    $(".nav-link").on("click", function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
})