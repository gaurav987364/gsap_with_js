$(document).ready(function(){
    let counter = 0;
    let c = 0;
    let i = setInterval(function(){
        $('.loading-page .counting h1').html(c);
        $('.loading-page').css('width', c + '%');

        counter++;
        c++;
        if(counter == 101){
            clearInterval(i);
        }
    },50);
})