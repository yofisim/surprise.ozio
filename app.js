$(document).ready(function(){

    $('#colContain').height($(window).height());

    let rows = $('.rowed');
    let count = 1;
    $.each(rows, function(key, value){
        for (let i = 1; i<= 10; i++) {
            let squareHTML = $('<div class="square" id="'+count+'"><a href="#">'+count+'</a></div>');
            $(this).append(squareHTML);
            count++;
        }
    });

    $('.square a').click(function(e){
       e.preventDefault();
       $(this).css({
           'background-color': 'rgba(0,0,0,0)',
           'color': 'rgba(0,0,0,0)',
           'border': 'inherit !important'

       });
        $('#todaRaba').modal();
    });

});
