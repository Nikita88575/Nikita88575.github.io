$(document).on("click", ".go-to-skills" || ".go-to-contacts", function(skills) {
    skills.preventDefault();
    const id  = $(this).attr('href');
    const cord = $(id).offset().top; 
    $('body, html').animate({scrollTop: cord}, 750);
});

$(document).on("click", ".go-to-about-me", function(about) {
    about.preventDefault();
    const id  = $(this).attr('href');
    const cord = $(id).offset().top; 
    $('body, html').animate({scrollTop: cord}, 1500);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });