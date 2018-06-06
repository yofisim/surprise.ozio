$(document).ready(function(){

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

    let rows = $('.rowed');
    let count = 1;
    $.each(rows, function(key, value){
        for (let i = 1; i<= 10; i++) {
            let squareHTML = $('<div class="square gradient-border" id="'+count+'"><a class="" href="#">'+count+'</a></div>');
            $(this).append(squareHTML);
            count++;
        }
    });

    $('.square a').click(function(e){
       e.preventDefault();
       $(this).css({
           'background-color': 'rgba(0,0,0,0)',
           'background-image': 'none !important',
           'color': 'rgba(0,0,0,0)',
           'border': 'inherit !important'

       });
       $(this).addClass('clicked');
       $(this).parent().addClass('clicked');
    });

    $('#yike').click(function(e){
        $('#todaRaba').modal();
    });

});
