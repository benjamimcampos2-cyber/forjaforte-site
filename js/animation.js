/*
==================================================
FORJAFORTE - ANIMATION.JS
Animações e interações visuais
==================================================
*/


document.addEventListener("DOMContentLoaded",()=>{





/* ==============================================
   SCROLL REVEAL
============================================== */


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver((entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.classList.add("active");



revealObserver.unobserve(
entry.target
);



}



});



},{

threshold:0.15


});





revealElements.forEach(element=>{


revealObserver.observe(element);


});









/* ==============================================
   CONTADORES ANIMADOS
============================================== */


const counters =
document.querySelectorAll("[data-counter]");





const counterObserver =
new IntersectionObserver((entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



animarContador(
entry.target
);



counterObserver.unobserve(
entry.target
);



}



});



},{

threshold:.5


});





counters.forEach(counter=>{


counterObserver.observe(counter);


});








function animarContador(element){



const valorFinal =
Number(
element.getAttribute("data-counter")
);



let valorAtual = 0;



const velocidade =
valorFinal / 100;





const contador =
setInterval(()=>{



valorAtual += velocidade;



if(valorAtual >= valorFinal){



element.textContent =
valorFinal.toLocaleString("pt-BR");



clearInterval(contador);



}

else{



element.textContent =
Math.floor(valorAtual)
.toLocaleString("pt-BR");



}



},20);



}









/* ==============================================
   LIGHTBOX GALERIA
============================================== */


const galleryItems =
document.querySelectorAll(".gallery-item");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.getElementById("lightbox-close");





if(
galleryItems.length &&
lightbox
){





galleryItems.forEach(item=>{



item.addEventListener("click",()=>{



const imagem =
item.getAttribute(
"data-image"
);



lightboxImage.src =
imagem;



lightbox.classList.add(
"active"
);



});



});








/*
Fechar pelo botão
*/


closeLightbox.addEventListener(
"click",
()=>{


lightbox.classList.remove(
"active"
);


});








/*
Fechar clicando fora
*/


lightbox.addEventListener(
"click",
(e)=>{



if(e.target === lightbox){



lightbox.classList.remove(
"active"
);



}



});








/*
Fechar com ESC
*/


document.addEventListener(
"keydown",
(e)=>{



if(
e.key === "Escape"
){



lightbox.classList.remove(
"active"
);



}



});



}









/* ==============================================
   ANIMAÇÃO DOS CARDS
============================================== */


const cards =
document.querySelectorAll(
".feature-card, .benefit-card, .equipment-card"
);



cards.forEach((card,index)=>{


card.style.transitionDelay =
`${index * 0.08}s`;



});









/* ==============================================
   EFEITO PARALLAX HERO
============================================== */


const hero =
document.querySelector(".hero");





if(hero){



window.addEventListener(
"scroll",
()=>{


const movimento =
window.scrollY * 0.25;



hero.style.backgroundPositionY =
`${movimento}px`;



});



}








});