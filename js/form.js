/**
=====================================================
FORJAFORTE
FORMULÁRIO DE CANDIDATURA
Supabase Database + Storage
=====================================================
*/


// ===============================
// CONFIGURAÇÃO SUPABASE
// ===============================

const SUPABASE_URL =
"https://dafbbagzpnigfuekjbfd.supabase.co";


const SUPABASE_KEY =
"sb_publishable_rzQ1xfRLw_UfEFM-Mr6a2Q_kTFmunLu";


const supabaseClient =
supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);



// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  const form =
  document.querySelector("#career-form");


  if (!form) {

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




// ===============================
// ENVIO DO FORMULÁRIO
// ===============================

async function enviarFormulario(e) {

  e.preventDefault();


  const form = e.target;


  const botao =
  document.querySelector("#btn-enviar");



  try {


    if (botao) {

      botao.disabled = true;

      botao.innerText =
      "Enviando...";

    }



    const arquivo =
    document.querySelector("#curriculo")
    .files[0];



    if (!arquivo) {

      throw new Error(
        "Selecione um currículo PDF"
      );

    }



    if (arquivo.type !== "application/pdf") {

      throw new Error(
        "O arquivo deve ser PDF"
      );

    }



    // Limite de 5MB

    if (arquivo.size > 5 * 1024 * 1024) {

      throw new Error(
        "O currículo deve ter no máximo 5MB"
      );

    }



    mostrarMensagem(
      "Enviando currículo...",
      "loading"
    );




    // ===============================
    // UPLOAD PDF STORAGE
    // ===============================


    const nomeArquivo =
    Date.now()
    + "-"
    +
    arquivo.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.-]/g, "_");



    const upload =
    await supabaseClient
    .storage
    .from("curriculos")
    .upload(
      nomeArquivo,
      arquivo
    );



    if (upload.error) {

      throw upload.error;

    }




    // ===============================
    // PEGAR URL DO ARQUIVO
    // ===============================


    const arquivoURL =
    supabaseClient
    .storage
    .from("curriculos")
    .getPublicUrl(
      nomeArquivo
    );



    const curriculoLink =
    arquivoURL.data.publicUrl;




    // ===============================
    // DADOS DO CANDIDATO
    // ===============================


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


      curriculo_url:
      curriculoLink

    };





    // ===============================
    // SALVAR NO BANCO
    // ===============================


    const resposta =
    await supabaseClient
    .from("candidatos")
    .insert([
      dados
    ]);



    if (resposta.error) {

      throw resposta.error;

    }




    mostrarMensagem(
      "✔ Currículo enviado com sucesso!",
      "success"
    );



    form.reset();



  } catch (erro) {


    console.error(
      "Erro:",
      erro
    );



    mostrarMensagem(
      erro.message ||
      "Erro ao enviar candidatura.",
      "error"
    );



  } finally {



    if (botao) {

      botao.disabled = false;

      botao.innerText =
      "Enviar candidatura";

    }


  }

}





// ===============================
// MENSAGEM AO USUÁRIO
// ===============================

function mostrarMensagem(
  texto,
  tipo
) {


  const feedback =
  document.querySelector(
    "#form-feedback"
  );



  if (!feedback) {

    return;

  }



  feedback.innerHTML =
  texto;



  feedback.className =
  "form-feedback "
  +
  tipo;

}