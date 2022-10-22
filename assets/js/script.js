//EFEITO SCROLL SUAVE - MENU

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceTop) {
    window.scroll({
       top: distanceTop,
       behavior: "smooth",
    });
}

function scrollSuave(event) {
    event.preventDefault();
    const distanceTop = getDistanceTop(event.target);
    nativeScroll(distanceTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollSuave);
});

//EFEITO SCROLL SUAVE MENU - FIM

//MENU MOBILE ABRIR -- FECHAR

window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display =='flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        }else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};

//MENU MOBILE ABRIR E FECHAR -- FIM

//ANIMAÇÃO DE BLOCOS APARECENDO AO ROLAR SCROLL NA PAGINA

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    })
}

//ANIMAÇÃO DE BLOCOS APARECENDO AO ROLAR SCROLL NA PAGINA -- FIM

//ANIMAÇÃO CONTAGEM
/* 
const targetCount = document.querySelectorAll('[data-count]');

function animeCount() {    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    targetCount.forEach(function(element){
        setInterval(stepCount(element), 1000);
        if((windowTop) > element.offsetTop) {
            //stepCount(element);            
        }
    })
}

function stepCount(elemento) {
    let el = elemento.querySelector('.contador');    
    let valor = parseInt(elemento.dataset.count);
    let c = parseInt(el.innerHTML);
    console.log(c, valor);
    if (c < valor){
        c++;
        el.innerHTML = c;        
        //setInterval(stepCount(elemento), 5000);
    }
}

animeCount();

if(targetCount.length) {
    window.addEventListener('scroll', function() {
        animeCount();
    })
}
*/
//ANIMAÇÃO CONTAGEM --FIM

//MODAL IMG

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for(let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});

//MODAL IMG --FIM

//Carousel de Imagens 

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img .slide");

let idx = 0;

function carrosel() {
    idx++;
    
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(carrosel, 5000);

//Carousel de Imagens -- FIM

//BOTAO TOP

const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
    window.scrollTo(0,0);
})

document.addEventListener('scroll', ocultar);

function ocultar(){
    if(window.scrollY > 300){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar();

//BOTAO TOP --FIM