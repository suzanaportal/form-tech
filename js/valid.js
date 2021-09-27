// Aqui, inicia a validação do nome.
function validar() {
  if (document.getElementById('nome').value == "" || document.getElementById('nome').value.length < 3 || document.getElementById('nome').value.length >= 50) {
    alert("Preencha seu nome!");
    document.getElementById('nome').focus();
    return;
  }

// Aqui, para validar o e-mail.
  else if (document.getElementById('email').value == "" || document.getElementById('email').value.indexOf("@") == -1 || document.getElementById('email').value.indexOf(".") == -1) {
    alert("Digite seu e-mail corretamente");
    document.getElementById('email').focus();
    return;
  }
// Aqui, será validado o celular.
  else if (document.getElementById('cel').value.length != 11) {
    alert("Digite seu celular corretamente");
    document.getElementById('cel').focus();
    return;
  }
// Para a validação do Cpf, aqui.

  else if (document.getElementById('cpf').value == "" || !testaCPF(document.getElementById('cpf').value)) {
    alert("Digite seu cpf corretamente");
    document.getElementById('cpf').focus();
    return;
  }

// Aqui, validação do CEP.

  else if (document.getElementById('cep').value == "") {
    alert("Digite seu cep");
    document.getElementById('cep').focus();
    return;
  }
  else {
    alert("Ok, formulário enviado com sucesso");
    return true;
  }
}
