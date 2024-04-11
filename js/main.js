document.getElementById("form").addEventListener("submit", function(event) {
   

    var formValid = true;

    // Reset errors
    document.querySelectorAll('.error').forEach(function(e) {
      e.innerHTML = '';
    });

    // Nome
    var nome = document.getElementById("nome").value;
    if (!nome) {
      document.getElementById("nomeError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // E-mail
    var email = document.getElementById("email").value;
    if (!email) {
      document.getElementById("emailError").innerHTML = "Campo obrigatório";
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("emailError").innerHTML = "E-mail inválido";
      formValid = false;
    }

    // Sexo
    var sexo = document.getElementById("flexRadioDefault1").value;
    if (!sexo) {
      document.getElementById("sexoError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // Escolaridade
    var escolaridade = document.getElementById("escolaridade").value;
    if (!escolaridade) {
      document.getElementById("escolaridadeError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // Data de Nascimento
    var dataNascimento = document.getElementById("dataNascimento").value;
    if (!dataNascimento) {
      document.getElementById("dataNascimentoError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // Estado Civil
    var estadoCivil = document.getElementById("estadoCivil").value;
    if (!estadoCivil) {
      document.getElementById("estadoCivilError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // Senha
    var senha = document.getElementById("senha").value;
    if (!senha) {
      document.getElementById("senhaError").innerHTML = "Campo obrigatório";
      formValid = false;
    }

    // Confirmar Senha
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    if (!confirmarSenha) {
      document.getElementById("confirmarSenhaError").innerHTML = "Campo obrigatório";
      formValid = false;
    } else if (senha !== confirmarSenha) {
      document.getElementById("confirmarSenhaError").innerHTML = "Senhas não são iguais !";
      formValid = false;
    }

    if (!formValid) {
      event.preventDefault();
    }
    // // enviar
    // var enviar = document.getElementById('enviar')
    // if (enviar){
    //     alert('enviador com sussessor')
    // }else if(senha !== confirmarSenha){
    //         alert('error')
    // }
    
  });

  

