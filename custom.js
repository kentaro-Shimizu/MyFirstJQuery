$(document).ready(function () {
    $("li").hover(function () {
        $(this).addClass("green");
    }, function () {
        $(this).removeClass("green");
    });
});