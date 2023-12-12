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

    // Display car details when scroll
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100)
        {
            $(".container__details").first().css("display", "flex");
        }
        if ($(this).scrollTop() > 450)
        {
            $(".container__details:nth-child(2)").css("display", "flex");
        }
        if ($(this).scrollTop() > 850)
        {
            $(".container__details:nth-child(3)").css("display", "flex");
        }
    });

    $(".btn-login").on("click", function() {
        $(".login-form").addClass("active");
    });

    $(".close-login-form").on("click", function() {
        $(".login-form").removeClass("active");
    });
});

var swiper = new Swiper(".car-list__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        },
      991: {
        slidesPerView: 3,
        },
    },
});
