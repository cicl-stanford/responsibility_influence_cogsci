function set_slider() {
    let slider_parent = '.jspsych-html-slider-response-response';
    let next_button = '#jspsych-html-slider-response-next';
    if (!$(next_button).length) {
        next_button = '#jspsych-instructions-next';
    }

    $(slider_parent).slider();
    $('.ui-slider-handle').hide();
    $(slider_parent)
        .slider({ min: 0, max: 10, step:1 })
        .slider('pips', { first: 'pip', last: 'pip', rest:"pip" });
    $(next_button).prop('disabled', true);

    $(slider_parent).slider().on('slidestart', function() {
        // show handle
        $(this).find('.ui-slider-handle').show();
        if ($('.ui-slider-handle:hidden').length == 0) {
            $(next_button).prop('disabled', false);
        }
    });
}


function shuffle(n) {
    let array = Array.from({ length: n }, (_, i) => i);
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


