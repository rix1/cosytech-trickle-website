$(document).ready(function(){

    animatedHover('#downArrow', 'bounceDown');

    // Helper functions

    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top -350
            }, 500);
        }
    });


    // Add animations on hover
    function animatedHover(element, animation){
        element = $(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);
            },
            function(){
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 2000);
            }
        );
    };


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


});