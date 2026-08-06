/*
========================================
FORJAFORTE
Google Analytics 4

Responsável por:
- Inicialização do GA4
- Rastreamento de páginas
- Eventos personalizados
========================================
*/

(function () {

"use strict";


const GA_ID = "G-SEU_ID_ANALYTICS";



function carregarAnalytics(){


    if(GA_ID === "G-SEU_ID_ANALYTICS"){

        console.warn(
            "Google Analytics: ID não configurado."
        );

        return;

    }



    const script = document.createElement("script");


    script.async = true;


    script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;


    document.head.appendChild(script);



    window.dataLayer = window.dataLayer || [];


    window.gtag = function(){

        window.dataLayer.push(arguments);

    };



    gtag("js", new Date());


    gtag(
        "config",
        GA_ID,
        {
            page_path:
            window.location.pathname
        }
    );


    console.log(
        "Google Analytics carregado."
    );


}



window.addEventListener(
"load",
carregarAnalytics
);


})();