$( document ).ready(function() {
    $('.link').click(function(e){
        e.preventDefault();
        var background = $(this).data('background');

        $('.slider').css('background', background);
    });
});