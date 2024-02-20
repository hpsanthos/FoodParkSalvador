
function TamScreen(){
                
    if( window.screen.width >=560 && window.screen.height >= 920){
                return slides= 3
        }else{
                return slides= 1
        } 
    
}

window.addEventListener('resize', function(){
    TamScreen();

});

$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 3,   // tentativa de exibir 3
        slidesToScroll: 3, // tentativa de três em três
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        centerMode: true,
        centerPadding: '0',
    });
});

