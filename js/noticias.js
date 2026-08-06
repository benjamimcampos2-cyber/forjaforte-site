/*
==================================================
FORJAFORTE - NOTICIAS.JS
Gerenciamento de notícias Front-end
==================================================
*/



document.addEventListener(
"DOMContentLoaded",
()=>{





const form =
document.getElementById(
"noticia-form"
);



const lista =
document.getElementById(
"lista-noticias"
);



const feedback =
document.getElementById(
"noticia-feedback"
);








/*
CARREGAR NOTÍCIAS
*/


function carregarNoticias(){



lista.innerHTML="";



const noticias =
ForjaStorage.getNoticias();





if(noticias.length===0){


lista.innerHTML=`

<p>
Nenhuma notícia publicada.
</p>

`;


return;


}







noticias.reverse()
.forEach(noticia=>{



lista.innerHTML += `


<div class="vaga-admin">



<h3>

${noticia.titulo}

</h3>




<img 
src="${noticia.imagem || 'assets/img/logo.png'}"
width="200"
alt="${noticia.titulo}"
>




<p>

${noticia.conteudo}

</p>



<small>

Publicado em:
${noticia.data}

</small>




<br><br>




<button onclick="
excluirNoticia(${noticia.id})
">

Excluir

</button>



</div>



`;



});



}









/*
SALVAR NOTÍCIA
*/


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();






const noticia={



titulo:

document.getElementById(
"titulo"
).value,



imagem:

document.getElementById(
"imagem"
).value,




conteudo:

document.getElementById(
"conteudo"
).value



};








ForjaStorage.saveNoticia(
noticia
);







feedback.textContent =
"Notícia publicada com sucesso!";



feedback.style.color =
"green";






form.reset();



carregarNoticias();



});









/*
EXCLUIR NOTÍCIA
*/


window.excluirNoticia =
(id)=>{



const confirmar =
confirm(
"Deseja remover esta notícia?"
);



if(confirmar){



ForjaStorage.deleteNoticia(
id
);



carregarNoticias();



}



};







carregarNoticias();





});