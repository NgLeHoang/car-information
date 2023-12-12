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

    // Active slide when click next
    let index = 0;
    function next() {
        $(".car-container").eq(index).removeClass("active");
        index = (index + 1) % $(".car-container").length;
        $(".car-container").eq(index).addClass("active");
    };
    setInterval(next, 8000);

    $("#next").on("click", function() {
        $(".car-container").eq(index).removeClass("active");
        index = (index + 1) % $(".car-container").length;
        $(".car-container").eq(index).addClass("active");
    });

    // Active slide when click prev
    $("#prev").on("click", function() {
        $(".car-container").eq(index).removeClass("active");
        index = (index - 1 + $(".car-container").length) % $(".car-container").length;
        $(".car-container").eq(index).addClass("active");
    })

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 80)
        {
            $(".container__details").first().css("display", "flex");
        }
        if ($(this).scrollTop() > 400)
        {
            $(".container__details:nth-child(2)").css("display", "flex");
        }
        if ($(this).scrollTop() > 700)
        {
            $(".container__details:nth-child(3)").css("display", "flex");
        }
    });
});


