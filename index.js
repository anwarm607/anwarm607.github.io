//Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//Toggle div
$('#toggle > button').click(function() {
    var ix = $(this).index();
    
    $('#left').toggle( ix === 0 );
    $('#right').toggle( ix === 1 );
});
//Toggle active class
$(document).on('click', 'button', function() {
    $("button").removeClass("active");
    $(this).addClass("active");
});