$(document).ready(function(){
    $('.toggle').click(function(){
        $('.main-nav').toggleClass('active');
    })
})

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        $('.main-nav').removeClass('active');
    })
})

$(window).resize(function() {
    if ($(window).innerWidth() >= 991) {
        $('.main-nav').removeClass('active');
    }
})
