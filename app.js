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

    // var spaceSquares = function ( n, sWidth, imgWidth ) {
    //     let leftSpace = sWidth * (n-1);
    //     if (leftSpace < imgWidth) {
    //         $('#'+n+'').css({
    //             'left': 'calc(15px + '+leftSpace+'px)'
    //         });
    //     }
    // }


    for (let i = 1; i<= 200; i++) {
        let squareHTML = $('<div class="square" id="'+i+'"><a href="#">'+i+'</a></div>');
        squareHTML.width(squareWidth);
        squareHTML.height(squareHeight);



    }



});

// $('#colContain').append(squareHTML);
