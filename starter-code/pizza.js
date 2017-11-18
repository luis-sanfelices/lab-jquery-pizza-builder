// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    $(".btn-pepperonni").click(function(){
        $(".pep").toggleClass('hidden');
    });
    $(".btn-mushrooms").click(function(){
        $(".mushroom").toggleClass('hidden');
    });
    $(".btn-green-peppers").click(function(){
        $(".green-pepper").toggleClass('hidden');
    });
    $(".btn-sauce").click(function(){
        $(".sauce").toggleClass('hidden');
    });
    $(".btn-crust").click(function(){
        $(".crust").toggleClass('hidden');
    });
});