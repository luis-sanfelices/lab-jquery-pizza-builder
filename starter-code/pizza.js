// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {

    function calculatePrice() {
        var totalPrice = 10;
        $('.price li:not(.hidden)').each(function(){
            totalPrice += parseInt(this.textContent.replace(/\D/g,''));
        });
        $('.price strong').text('$' + totalPrice);
    }

    calculatePrice();

    $('.btn-pepperonni').click(function(){
        $('.pep').toggleClass('hidden');
        $('.price li:contains("pepperonni")').toggleClass('hidden');
        $(this).toggleClass('active');
        calculatePrice();
    });
    $('.btn-mushrooms').click(function(){
        $('.mushroom').toggleClass('hidden');
        $('.price li:contains("mushrooms")').toggleClass('hidden');
        $(this).toggleClass('active');
        calculatePrice();
    });
    $('.btn-green-peppers').click(function(){
        $('.green-pepper').toggleClass('hidden');
        $('.price li:contains("green peppers")').toggleClass('hidden');
        $(this).toggleClass('active');
        calculatePrice();
    });
    $('.btn-sauce').click(function(){
        $('.sauce').toggleClass('sauce-white');
        $('.price li:contains("white sauce")').toggleClass('hidden');
        $(this).toggleClass('active');
        calculatePrice();
    });
    $('.btn-crust').click(function(){
        $('.crust').toggleClass('crust-gluten-free');
        $('.price li:contains("gluten-free crust")').toggleClass('hidden');
        $(this).toggleClass('active');
        calculatePrice();
    });
});