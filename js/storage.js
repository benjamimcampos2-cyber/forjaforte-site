/*
==================================================
FORJAFORTE - STORAGE.JS
Banco de dados local usando LocalStorage
Somente Front-end
==================================================
*/


const ForjaStorage = {



/* ==============================================
   INICIALIZAÇÃO DO SISTEMA
============================================== */


init(){


    if(!localStorage.getItem("forja_candidatos")){

        localStorage.setItem(
            "forja_candidatos",
            JSON.stringify([])
        );

    }



    if(!localStorage.getItem("forja_vagas")){

        localStorage.setItem(
            "forja_vagas",
            JSON.stringify([])
        );

    }




    if(!localStorage.getItem("forja_noticias")){

        localStorage.setItem(
            "forja_noticias",
            JSON.stringify([])
        );

    }




    if(!localStorage.getItem("forja_mensagens")){

        localStorage.setItem(
            "forja_mensagens",
            JSON.stringify([])
        );

    }



},







/* ==============================================
   CANDIDATOS
============================================== */



getCandidatos(){


return JSON.parse(
localStorage.getItem("forja_candidatos")
) || [];


},





saveCandidato(candidato){


const candidatos =
this.getCandidatos();



candidato.id =
Date.now();



candidato.data =
new Date()
.toLocaleDateString("pt-BR");



candidato.status =
"Recebido";



candidatos.push(candidato);



localStorage.setItem(
"forja_candidatos",
JSON.stringify(candidatos)
);



},






updateCandidatoStatus(id,status){



let candidatos =
this.getCandidatos();



candidatos =
candidatos.map(candidato=>{


if(candidato.id === id){


candidato.status=status;


}



return candidato;



});



localStorage.setItem(
"forja_candidatos",
JSON.stringify(candidatos)
);



},






deleteCandidato(id){



let candidatos =
this.getCandidatos();



candidatos =
candidatos.filter(
c=>c.id!==id
);



localStorage.setItem(
"forja_candidatos",
JSON.stringify(candidatos)
);



},







/* ==============================================
   VAGAS
============================================== */



getVagas(){


return JSON.parse(
localStorage.getItem("forja_vagas")
) || [];

},





saveVaga(vaga){


const vagas =
this.getVagas();



vaga.id =
Date.now();



vaga.data =
new Date()
.toLocaleDateString("pt-BR");



vagas.push(vaga);



localStorage.setItem(
"forja_vagas",
JSON.stringify(vagas)
);



},






deleteVaga(id){



let vagas =
this.getVagas();



vagas =
vagas.filter(
vaga=>vaga.id!==id
);



localStorage.setItem(
"forja_vagas",
JSON.stringify(vagas)
);



},







/* ==============================================
   NOTÍCIAS
============================================== */



getNoticias(){


return JSON.parse(
localStorage.getItem("forja_noticias")
) || [];

},






saveNoticia(noticia){



const noticias =
this.getNoticias();



noticia.id =
Date.now();



noticia.data =
new Date()
.toLocaleDateString("pt-BR");



noticias.push(noticia);



localStorage.setItem(
"forja_noticias",
JSON.stringify(noticias)
);



},






deleteNoticia(id){



let noticias =
this.getNoticias();



noticias =
noticias.filter(
n=>n.id!==id
);



localStorage.setItem(
"forja_noticias",
JSON.stringify(noticias)
);



},







/* ==============================================
   CONTATO
============================================== */



getMensagens(){


return JSON.parse(
localStorage.getItem("forja_mensagens")
) || [];

},





saveMensagem(mensagem){



const mensagens =
this.getMensagens();



mensagem.id =
Date.now();



mensagem.data =
new Date()
.toLocaleDateString("pt-BR");



mensagens.push(mensagem);



localStorage.setItem(
"forja_mensagens",
JSON.stringify(mensagens)
);



},







/* ==============================================
   ESTATÍSTICAS DO DASHBOARD
============================================== */



getDashboard(){



return {


candidatos:
this.getCandidatos().length,


vagas:
this.getVagas().length,


noticias:
this.getNoticias().length,


mensagens:
this.getMensagens().length



};



},







/* ==============================================
   LIMPAR SISTEMA
============================================== */



clearAll(){



localStorage.removeItem(
"forja_candidatos"
);



localStorage.removeItem(
"forja_vagas"
);



localStorage.removeItem(
"forja_noticias"
);



localStorage.removeItem(
"forja_mensagens"
);



}




};







/*
Inicializa automaticamente
*/


ForjaStorage.init();