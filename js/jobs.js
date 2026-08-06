/*
==================================================
FORJAFORTE - JOBS.JS
Exibição de vagas públicas
==================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{


const area =
document.getElementById(
"jobs-list"
);



if(!area) return;




const vagas =
ForjaStorage.getVagas();





const abertas =
vagas.filter(
vaga=>vaga.status==="Aberta"
);





if(abertas.length===0){


area.innerHTML=`

<p>
No momento não temos vagas abertas.
</p>

`;


return;


}








abertas.forEach(vaga=>{



area.innerHTML += `


<div class="job-card">



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




<button 
onclick="selecionarVaga('${vaga.titulo}')">

Candidatar-se

</button>



</div>


`;



});








window.selecionarVaga =
(vaga)=>{


const campo =
document.getElementById(
"cargo"
);



if(campo){


campo.value =
vaga;



window.scrollTo({

top:
campo.offsetTop-100,

behavior:"smooth"

});


}



};






});