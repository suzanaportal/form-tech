// Aqui, função de validação do CPF
/*Essa função é equivalente ao mesmo script da receita federal, porém, alterei alguns comportamentos para o melhor desempenho da concatenação dentro do for da variável soma que recebe o valor do CPF, depois de passar pelo parcint.*/

function testaCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma += parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
  return true;
}

// Aqui, inicia a validação do CEP.
/*A função limpar formulário, limpa todos os campos do endereço caso o cep digitado seja inválido.*/

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

// Aqui, função para pesquisar dados do CEP.
/*A função pesquisa CEP, recebe o id do Cep e faz uma requisição para o API do viacep e retorna com os dados localizados.*/

function pesquisacep(valor) {
//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

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
      /*Aqui ele cria um novo elemento chamado script, 
esse elemento faz uma requisição para a API do via cep passando o parâmetro do CEP digitado e atribuindo a função meu callback.
Caso encontrado, é adicionado aos campos correspondentes dentro do body através da chamada de document.body.appendChild*/

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
