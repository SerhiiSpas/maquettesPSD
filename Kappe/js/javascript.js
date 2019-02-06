$(function() {
    'used script';

    $("#info").click(function() {
        $('#info_box').toggleClass('open');
    });

    $('.pr_bar').each(function () {
        let width = $(this).data('skill');
        $(this).css('width', width + '%')
    });
});