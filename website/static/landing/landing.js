$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top -100
        }, 500);
    }

});


var controller;
$(document).ready(function($) {
    // init controller
    controller = new ScrollMagic();
});

/*

$(document).ready(function($) {
    // build scene
    var scene = new ScrollScene({triggerElement: "#first-section", duration: 300})
    //var scene = new ScrollScene({duration: 300})
        .setPin("#first-section")
        .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
});
*/
