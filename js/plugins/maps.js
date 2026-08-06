/*
========================================
FORJAFORTE
Google Maps Integration
========================================
*/


(function(){

"use strict";


const MAP_CONFIG = {


endereco:
"Avenida Esperança - Maria Preta, Santo Antônio de Jesus - BA, Brasil",


zoom:17


};



function carregarMapa(){


const mapa =
document.getElementById(
"forjaforte-map"
);



if(!mapa){

return;

}



const endereco =
encodeURIComponent(
MAP_CONFIG.endereco
);



mapa.src =
`https://www.google.com/maps?q=${endereco}&output=embed&z=${MAP_CONFIG.zoom}`;


}



function configurarRota(){


const botao =
document.getElementById(
"rota-google"
);



if(!botao){

return;

}



botao.href =
`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_CONFIG.endereco)}`;


botao.target="_blank";


}



document.addEventListener(
"DOMContentLoaded",
()=>{


carregarMapa();


configurarRota();


});


})();