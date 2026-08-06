/**
=====================================================
FORJAFORTE
FORMULÁRIO DE CANDIDATURA
Google Sheets + Google Drive
=====================================================
*/


const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyQcghNJtjPVmsDjSXIAg_sxZhnUr9mZtKG2isyIEJbz2iir7timULn0PHe_IJpubk4/exec";



document.addEventListener("DOMContentLoaded", () => {


    const form = document.querySelector("#career-form");

    const botao = document.querySelector("#btn-enviar");


    if(!form){

        console.error(
            "Formulário não encontrado"
        );

        return;

    }



    form.addEventListener(
        "submit",
        enviarFormulario
    );


});





async function enviarFormulario(e){


    e.preventDefault();



    const form = e.target;

    const botao =
    document.querySelector("#btn-enviar");



    try{


        if(botao){

            botao.disabled = true;

            botao.innerText =
            "Enviando...";

        }



        const arquivo =
        document.querySelector("#curriculo")
        .files[0];



        if(!arquivo){

            throw new Error(
                "Selecione um currículo PDF"
            );

        }



        if(arquivo.type !== "application/pdf"){

            throw new Error(
                "O arquivo deve ser PDF"
            );

        }



        const base64 =
        await converterArquivoBase64(
            arquivo
        );



        const dados = {


            nome:
            form.nome.value.trim(),


            email:
            form.email.value.trim(),


            telefone:
            form.telefone.value.trim(),


            cidade:
            form.cidade.value.trim(),


            estado:
            form.estado.value.trim(),


            vaga:
            form.vaga.value,


            mensagem:
            form.mensagem.value.trim(),



            arquivo:{


                nome:
                arquivo.name,


                tipo:
                arquivo.type,


                base64:
                base64


            }


        };




        mostrarMensagem(
            "Enviando candidatura...",
            "loading"
        );





        await fetch(

            GOOGLE_SCRIPT_URL,

            {

                method:"POST",


                mode:"no-cors",


                headers:{


                    "Content-Type":
                    "text/plain;charset=utf-8"


                },


                body:
                JSON.stringify(dados)


            }

        );





        mostrarMensagem(

            "✔ Currículo enviado com sucesso!",

            "success"

        );



        form.reset();





    }

    catch(erro){


        console.error(
            erro
        );


        mostrarMensagem(

            "Erro ao enviar candidatura.",

            "error"

        );


    }



    finally{


        if(botao){


            botao.disabled = false;


            botao.innerText =
            "Enviar candidatura";


        }


    }



}







function converterArquivoBase64(arquivo){


    return new Promise(

        (resolve,reject)=>{


            const leitor =
            new FileReader();



            leitor.onload = ()=>{


                const base64 =
                leitor.result.split(",")[1];


                resolve(base64);


            };



            leitor.onerror =
            reject;



            leitor.readAsDataURL(
                arquivo
            );


        }

    );


}







function mostrarMensagem(texto,tipo){


    const feedback =
    document.querySelector(
        "#form-feedback"
    );


    if(!feedback){

        return;

    }



    feedback.innerHTML =
    texto;



    feedback.className =
    "form-feedback " + tipo;


}