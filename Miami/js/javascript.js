
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});


var offset = $('#bottom-header').offset();
$(window).scroll( function () {
    if( $(window).scrollTop() > offset.top){
        $('#bottom-header').addClass('fixedNav');
    } else {
        $('#bottom-header').removeClass('fixedNav')
    }
});

$('#slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
});
