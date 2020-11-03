$(function() {

    var player = $("#player"),
        bloque = $(".bloque:first-child"),
        upDown = bloque.width() - player.width(),
        leftRight = bloque.height() - player.height(),
        button = {}, //to get keyCode in object
        xPixel = 8;  //element movement per pixel
    
    //detect if any button has been pressed
    $(window).keydown(function(e) {
        button[e.which] = true; 
    });
    
    $(window).keyup(function(e) {
        button[e.which] = false; 
    });

    movePlayer(bloque, player, upDown, leftRight, button, xPixel)
})

function movePlayer(bloque, player, upDown, leftRight, button, xPixel) {
    var nuevaPosicion;
    setInterval(() => {
        player.css({
            left: function(e, posicionActual) {
                nuevaPosicion = parseInt(posicionActual)
                - (button[37] ? xPixel : 0) //37 -> keyCode Left | Izquierda
                + (button[39] ? xPixel : 0); //39 -> keyCode Right | Derecha

                return nuevaPosicion < 0 ? 0 : nuevaPosicion > leftRight ? leftRight : nuevaPosicion;
            },
            top: function(e, posicionActual) {
                nuevaPosicion = parseInt(posicionActual)
                - (button[38] ? xPixel : 0) //38 -> keyCode Up | Arriba
                + (button[40] ? xPixel : 0); //40 -> keyCode Down | Abajo
                
                return nuevaPosicion < 0 ? 0 : nuevaPosicion > upDown ? upDown : nuevaPosicion;
            }
        });        
        leftRight = bloque.width() - player.width();
        upDown = bloque.height() - player.height();
    }, 20)
}