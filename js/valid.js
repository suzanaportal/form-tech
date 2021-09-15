let nome = document.getElementById("nome");
  let email = document.getElementById("email");
let cel = document.getElementById("cel");
let cpf = document.getElementById("cpf");
let cep = document.getElementById("cep");

function validar() {
if (nome.value == "") {
  alert ("Por favor, preencha o campo nome.");
  nome.focus();
  return false;
}

  if(email.value = "" || email.indexOf("@") == -1 || email.indexOf("." == -1)) {
    alert ("Por favor, preencha o campo e-mail.");
    email.focus();
    return false;
  }
  if (cel.length != 11) {
    alert ("Por favor, preencha o campo celular.")
    cel.focus();
    return false;
  }
  if (cpf.value == "") {
    alert ("Por favor, preencha o campo CPF.");
    cpf.focus();
    return false;
  }
  if (cep.value == "" ) {
  alert ("Por favor, preencha o campo CEP.)";
  cep.focus();
  return false;
}
  }
  
function TestaCPF(CPF) {
  var Soma;
  var Resto;
  Soma = 0;
if (CPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(CPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(CPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(CPF.substring(10, 11) ) ) return false;
  return true;
}
var CPF = "12345678909";
alert(TestaCPF(CPF));
}
}

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
  //Atualiza os campos com os valores.
  document.getElementById('rua').value=(conteudo.logradouro);
  document.getElementById('bairro').value=(conteudo.bairro);
  document.getElementById('cidade').value=(conteudo.localidade);
  document.getElementById('uf').value=(conteudo.uf);
  document.getElementById('ibge').value=(conteudo.ibge);
} //end if.
else {
  //CEP não Encontrado.
  limpa_formulário_cep();
  alert("CEP não encontrado.");
}
}

function pesquisacep(cep) {

//Nova variável "cep" somente com dígitos.
var cep = cep.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

  //Expressão regular para validar o CEP.
  var validacep = /^[0-9]{8}$/;

  //Valida o formato do CEP.
  if(validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('uf').value="...";
      document.getElementById('ibge').value="...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

  } //end if.
  else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
  }
} //end if.
else {
  //cep sem valor, limpa formulário.
  limpa_formulário_cep();
}
};