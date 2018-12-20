'use strict';



function loadSkills(time) {
    var start = 0 ;
    var startTwo = 0 ;
    var startThree = 0 ;
    var progressElement = document.getElementById('load-Skills');
    var progressElementTwo = document.getElementById('load-Skills-two');
    var progressElementThree = document.getElementById('load-Skills-three');//елемент прогрес бара
    var intervalId = setInterval(function () {
        if (start>=75) {
            clearInterval(intervalId);
        }
        else  {
            progressElement.value = start;
        }
        start++;
    }, time);
    var intervalIdTwo = setInterval(function () {
        if (startTwo>=90) {
            clearInterval(intervalIdTwo);
        }
        else  {
            progressElementTwo.value = startTwo;
        }
        startTwo++;
    }, time);
    var intervalIdThree = setInterval(function () {
        if (startThree>=65) {
            clearInterval(intervalIdThree);
        }
        else  {
            progressElementThree.value = startThree;
        }
        startThree++;
    }, time);
}

loadSkills(200);

$(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
});
