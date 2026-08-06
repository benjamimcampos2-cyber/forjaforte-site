/*
========================================
FORJAFORTE
Plugin LGPD - Adopt Cookie Manager
========================================
*/

(function(){

"use strict";


const ADOPT_ID = "SEU_ID_ADOPT";



function carregarAdopt(){


if(ADOPT_ID === "SEU_ID_ADOPT"){


console.warn(
"Adopt: ID ainda não configurado."
);


return;


}



const script =
document.createElement("script");


script.src =
"https://tag.goadopt.io/injector.js";


script.dataset.adoptId =
ADOPT_ID;


script.async = true;


document.head.appendChild(script);


}



window.addEventListener(
"load",
carregarAdopt
);


})();