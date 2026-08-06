/*
==================================================
FORJAFORTE - ADMIN.JS
Painel administrativo Front-end
==================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{



const loginArea =
document.getElementById(
"login-area"
);


const panel =
document.getElementById(
"admin-panel"
);



const loginBtn =
document.getElementById(
"login-btn"
);



const user =
document.getElementById(
"admin-user"
);



const pass =
document.getElementById(
"admin-pass"
);



const error =
document.getElementById(
"login-error"
);






/*
LOGIN SIMULADO
*/


loginBtn.addEventListener(
"click",
()=>{



if(
user.value==="admin"
&&
pass.value==="123456"
){



loginArea.classList.add(
"hidden"
);



panel.classList.remove(
"hidden"
);



carregarDashboard();



}



else{


error.textContent =
"Usuário ou senha incorretos";


}



});







/*
LOGOUT
*/


document
.getElementById("logout")
.addEventListener(
"click",
()=>{


panel.classList.add(
"hidden"
);



loginArea.classList.remove(
"hidden"
);



});










function carregarDashboard(){



const dados =
ForjaStorage.getDashboard();



document
.getElementById(
"total-candidatos"
)
.textContent =
dados.candidatos;



document
.getElementById(
"total-vagas"
)
.textContent =
dados.vagas;



document
.getElementById(
"total-noticias"
)
.textContent =
dados.noticias;



document
.getElementById(
"total-mensagens"
)
.textContent =
dados.mensagens;





carregarCandidatos();

carregarVagas();

carregarMensagens();



}









function carregarCandidatos(){



const tabela =
document.getElementById(
"candidatos-list"
);



tabela.innerHTML="";



const candidatos =
ForjaStorage.getCandidatos();





candidatos.forEach(c=>{



tabela.innerHTML += `


<tr>


<td>${c.nome}</td>


<td>${c.cargo}</td>


<td>

<select 
onchange="
alterarStatus(${c.id},this.value)
">

<option>
${c.status}
</option>

<option>
Análise
</option>

<option>
Entrevista
</option>

<option>
Aprovado
</option>

<option>
Finalizado
</option>


</select>


</td>



<td>

<button onclick="
removerCandidato(${c.id})
">

Excluir

</button>


</td>


</tr>



`;



});



}









function carregarVagas(){



const area =
document.getElementById(
"vagas-list"
);



area.innerHTML="";



ForjaStorage
.getVagas()
.forEach(v=>{


area.innerHTML += `

<div class="vaga-admin">

<h3>${v.titulo}</h3>

<p>${v.descricao}</p>

</div>

`;



});



}









function carregarMensagens(){



const area =
document.getElementById(
"mensagens-list"
);



area.innerHTML="";



ForjaStorage
.getMensagens()
.forEach(m=>{


area.innerHTML += `


<div class="mensagem-admin">

<strong>
${m.nome}
</strong>

<p>
${m.mensagem}
</p>


</div>


`;



});



}








window.alterarStatus =
(id,status)=>{


ForjaStorage
.updateCandidatoStatus(
id,
status
);



carregarDashboard();


};








window.removerCandidato =
(id)=>{


ForjaStorage
.deleteCandidato(id);



carregarDashboard();


};





});