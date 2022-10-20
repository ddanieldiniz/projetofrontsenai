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
    const distanceTop = getDistanceTop(event.target) - 100;
    nativeScroll(distanceTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollSuave);
});

//EFEITO SCROLL SUAVE - MENU FIM

window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display =='flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        }else{
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};


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