$(document).ready(main);
var contador = 1;

function main() { //funcion para animar el aparece o desaparecer el menu
    $('.menu_bar').click(function () {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
}

function modal() {
    
}

function edad(birthDate){
var currentTime = new Date();
var year = currentTime.getFullYear()
return year - birthDate;
}
