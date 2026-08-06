/*
========================================
FORJAFORTE
Google Sheets Integration
========================================
*/

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxXDmwQJPR7n8XKQYWWVq147hPlDyhRZdbFDtZZxghIr_MQiMOGUlY2o_MKNlCtcbvI/exec";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("career-form");

    if (!form) return;

    form.addEventListener("submit", enviarFormulario);

});

async function enviarFormulario(e){

    e.preventDefault();

    const form = e.target;

    const dados = {

        nome: form.nome.value,

        email: form.email.value,

        telefone: form.telefone.value,

        cidade: form.cidade.value,

        estado: form.estado.value,

        vaga: form.vaga.value,

        curriculo: form.curriculo.files.length
            ? form.curriculo.files[0].name
            : ""

    };

    try{

        await fetch(GOOGLE_SCRIPT_URL,{

            method:"POST",

            redirect:"follow",

            headers:{
                "Content-Type":"text/plain;charset=utf-8"
            },

            body:JSON.stringify(dados)

        });

        alert("Currículo enviado com sucesso!");

        form.reset();

    }

    catch(error){

        console.error(error);

        alert("Erro ao enviar o formulário.");

    }

}