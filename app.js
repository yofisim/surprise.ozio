$(document).ready(function(){
    //Set Image to Full Height of Window VP
    const windowHeight = $( window ).height();
    let tnkImg = $('#tnkImg');
    tnkImg.height(windowHeight);


    //Create the squares
    //Get the exact measurements
    // Iterate over the whole Image

    let tnkProp = {
        'height': tnkImg.height(),
        'width': tnkImg.width(),
    };

    const squareWidth = tnkProp.width / 12;
    const squareHeight = tnkProp.height / 16.666667;

    for(let i = 1; i<= 12; i++) {
        let squareHTML = $('<div class="square" id="'+i+'"><a href="#">'+i+'</a></div>');
        squareHTML.width(squareWidth);
        squareHTML.height(squareHeight);
        $('#colContain').append(squareHTML);
        if ( i === 1 ) {
            $('#1').css('left', '15px');
        } else {
            let leftSpace = 92.5 * (i-1);
            if (leftSpace < tnkProp.width) {
                $('#'+i+'').css('left', 'calc(15px + '+leftSpace+'px)');
            } else {
                $('#'+i+'').hide();
            }

        }
    }



});