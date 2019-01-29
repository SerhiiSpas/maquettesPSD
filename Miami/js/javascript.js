
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
});

$('#view_all_gallery').click( function () {
    let content = '<div class="gallery_line">\n' +
        '<div class="box_img_gallery">\n' +
        '<img src="img/gallery_1.jpg" alt="">\n' +
        '</div>\n' +
        '<div class="box_img_gallery">\n' +
        '<img src="img/gallery_2.jpg" alt="">\n' +
        '</div>\n' +
        '</div>\n' +
        '<div class="name_gallery">\n' +
        '<p><b>Marina Palms / </b><span class="blue"> North Miami Beach, FL 33162</span></p>\n' +
        '</div>';
    $('#gallery_box').append(content);
    $(this).remove();
});
