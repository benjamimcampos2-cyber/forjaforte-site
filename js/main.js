/*
==================================================
FORJAFORTE - MAIN.JS
Funções principais do site
==================================================
*/


document.addEventListener("DOMContentLoaded", () => {




/* ==============================================
   PRELOADER
============================================== */


const preloader = document.getElementById("preloader");



if(preloader){


   window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.display = "none";

    }

});

}








/* ==============================================
   MENU MOBILE
============================================== */


const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector(".nav-menu");



if(menuToggle && navMenu){



menuToggle.addEventListener("click",()=>{


    menuToggle.classList.toggle("active");


    navMenu.classList.toggle("active");


});





/*
Fechar menu ao clicar
*/


document.querySelectorAll(".nav-menu a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        menuToggle.classList.remove("active");


        navMenu.classList.remove("active");


    });



});



}








/* ==============================================
   HEADER NO SCROLL
============================================== */


const header = document.getElementById("header");



function headerScroll(){



if(!header) return;



if(window.scrollY > 80){


    header.classList.add("scrolled");


}

else{


    header.classList.remove("scrolled");


}



}



window.addEventListener(
"scroll",
headerScroll
);



headerScroll();








/* ==============================================
   BACK TO TOP
============================================== */


const backTop = document.getElementById("back-top");



if(backTop){



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }

    else{


        backTop.classList.remove("show");


    }



});





backTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });



});



}








/* ==============================================
   LINKS INTERNOS SUAVES
============================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener("click",function(e){



const target = document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({


behavior:"smooth"


});


}



});



});








});