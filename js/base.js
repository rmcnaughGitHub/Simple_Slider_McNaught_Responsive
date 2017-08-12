//Revealing Module Pattern 
//** No need for an 'init function' this automaticallay Initializes **
//** Javascript in html must be after body for DOM elements to Initialize **

var run = (function(){

    'use strict'

    var $animationSpeed = 300,
        $pause =  2000,
        $currentSlide = 1,
        $interval = 0,

        //Cache DOM
        ul = $('.slider ul'),
        slide_count = ul.children.length,
        slide_width_pc = 100.0/slide_count,
        slide_index = 0,
        $button_prev = $('.button_prev'),
        $button_next = $('.button_next');

    //Click Events
    $button_prev.on('click', function(){
        moveLeft();
    });

    $button_next.on('click', function(){
        moveRight();
    });

    //Start Module
    runModule();


    //METHODS
    function runModule(){
        arrangeImages();
    }

    function arrangeImages(){
        ul.find('li').each(function(indx){
            var left_percent = (slide_width_pc * indx) + '%';
            $(this).css({'left': left_percent});
            $(this).css({width: (100/slide_count) + '%'});
        });
        console.log('$slide.length ',ul.length);
    }

    function slide(new_slide_index){
        if(new_slide_index < 0 || new_slide_index >= slide_count) return; 
        var margin_left_pc = (new_slide_index * (-100)) + "%";
        //
        ul.animate({"margin-left": margin_left_pc}, 400, function() {
          slide_index = new_slide_index
        });
    }

    function startSlider() {
        /*$interval = setInterval(function() {
            $slides.animate({'margin-left': '-='+$width}, $animationSpeed, function() {
                if (++$currentSlide === $slide.length) {
                    $currentSlide = 1;
                    $slides.css('margin-left', 0);
                }
            });
            }, $pause);*/
        console.log('$slide.length ',$slide.length);
    }

    function $pauseSlider() {
        clearInterval($interval);
    }

    function moveLeft(){
        slide(slide_index - 1);
        console.log('CurrentSlide ',$currentSlide);
    }

    function moveRight(){
        slide(slide_index + 1);
        console.log('CurrentSlide ',$currentSlide);
    }

    //can be accessed globally
    return {
        runModule: runModule,
        startSlider: startSlider,
        moveLeft: moveLeft,
        moveRight: moveRight
    }

})();



