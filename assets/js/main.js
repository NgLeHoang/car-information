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
    $("#next").on("click", setInterval(function() {
        $(".car-container").eq(index).removeClass("active");
        index = (index + 1) % $(".car-container").length;
        $(".car-container").eq(index).addClass("active");
    }, 5000));

    // Active slide when click prev
    $("#prev").on("click", function() {
        $(".car-container").eq(index).removeClass("active");
        index = (index - 1 + $(".car-container").length) % $(".car-container").length;
        $(".car-container").eq(index).addClass("active");
    })

});

// let index = 0;
// let slides = document.querySelectorAll('.car-container');
// function next(){
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// };


