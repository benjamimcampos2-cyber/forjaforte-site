/*
==================================================
FORJAFORTE - HOME NEWS
Carregamento de notícias na página inicial
==================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


const area =
document.getElementById(
"home-news"
);



if(!area) return;




const noticias =
ForjaStorage.getNoticias();




if(noticias.length===0){


area.innerHTML=`

<p>
Nenhuma notícia disponível.
</p>

`;


return;


}




noticias
.slice()
.reverse()
.slice(0,3)
.forEach(noticia=>{



area.innerHTML += `


<article class="news-card">



<img 
src="${noticia.imagem || 'assets/img/logo.png'}"
alt="${noticia.titulo}"
>



<div>


<h3>
${noticia.titulo}
</h3>



<p>
${noticia.conteudo.substring(0,120)}...
</p>



<span>

${noticia.data}

</span>



</div>



</article>



`;



});



});