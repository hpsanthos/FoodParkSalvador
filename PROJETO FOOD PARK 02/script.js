AOS.init();


function menuShow() { //colocando o icone no modo mobile 
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) { //Se a classe mobile tiver  aberto
        menuMobile.classList.remove('open'); //remova a clase "open"
        document.querySelector('.icon').src="img/menu_white_36dp (2).svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp (1).svg";
    }
}

const header = document.getElementById("navBar");
const body = document.querySelector("body");
let funcionamento = document.getElementById("horarios");
const opcoes = document.getElementById("opcoes");
addEventListener("scroll", (event) => {
    let ScrollPosition = window.scrollY; //fazendo uma variavel com a rolagem
    let carrossel = document.getElementById("carrossel");

    if (ScrollPosition > 200) {
        funcionamento.classList.add("teto"); //adicionando uma classe que esta no css, para fixa a barra lateral após a rolagem 
        carrossel.classList.add("baixo");

      
    } 

   
 
    
    
    else {
        funcionamento.classList.remove("teto"); //removendo a classe caso ao contrario da logica


    }
    

    let barraLateral = document.querySelector(".comidas");

    if (ScrollPosition > 12800) {
        barraLateral.classList.add("opacidade") //diminuindo a opacidade da barra lateral quando a posicao da rolagem estiver na altura do footer
    }  else {
        barraLateral.classList.remove("opacidade")
    }




});

