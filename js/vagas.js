/*
==================================================
FORJAFORTE - VAGAS.JS
Gerenciamento de vagas Front-end
==================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{



const form =
document.getElementById(
"vaga-form"
);



const lista =
document.getElementById(
"lista-vagas"
);



const feedback =
document.getElementById(
"vaga-feedback"
);








/*
CARREGAR VAGAS
*/


function carregarVagas(){



lista.innerHTML="";



const vagas =
ForjaStorage.getVagas();





if(vagas.length===0){


lista.innerHTML=`

<p>
Nenhuma vaga cadastrada.
</p>

`;


return;


}







vagas.forEach(vaga=>{



lista.innerHTML += `


<div class="vaga-admin">


<h3>
${vaga.titulo}
</h3>


<p>
${vaga.descricao}
</p>


<p>
<strong>
Setor:
</strong>

${vaga.setor}
</p>



<p>
<strong>
Local:
</strong>

${vaga.local}
</p>




<button onclick="
excluirVaga(${vaga.id})
">

Excluir

</button>


</div>



`;



});



}








/*
CADASTRAR VAGA
*/


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();





const vaga={



titulo:
document.getElementById(
"titulo"
).value,



descricao:
document.getElementById(
"descricao"
).value,



setor:
document.getElementById(
"setor"
).value,



local:
document.getElementById(
"local"
).value,



status:
"Aberta"



};






ForjaStorage.saveVaga(
vaga
);






feedback.textContent =
"Vaga cadastrada com sucesso!";



feedback.style.color =
"green";




form.reset();



carregarVagas();



});








/*
EXCLUIR VAGA
*/


window.excluirVaga =
(id)=>{



const confirmar =
confirm(
"Deseja excluir esta vaga?"
);



if(confirmar){



ForjaStorage.deleteVaga(
id
);



carregarVagas();



}



};







carregarVagas();





});