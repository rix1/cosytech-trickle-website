$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

/*
$("#how").click(function() {
    $('html, body').animate({
        scrollTop: $("#why").offset().top
    }, 2000);
});
 */