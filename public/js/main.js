$(document).ready(function(){

    $("#keyboard input").on("keypress keydown keyup", function(){
        $("#temp-input").text($(this).val());
    });
});