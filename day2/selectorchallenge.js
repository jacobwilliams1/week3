$(function () {
$('h1').css({ "font-size":"50px",
            "color" : "red"});
    $('#buttonHideShow').click(function() {
        $("#para1").toggle();
});

 $('h3').click(function () {
            $('h3').remove();
 });
        $('li').first().attr("style", "color: purple;");
});