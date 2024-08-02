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
