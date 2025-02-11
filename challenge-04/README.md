# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
  return !!x;
};
/* Erros:
    faltava o ; pra terminar a instrução
    não precisava do else
    poderia ser ternário
 */

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy("");
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy("Gustavo");
isTruthy([]);
isTruthy({});
isTruthy(function() {});
isTruthy(50 * 10);
isTruthy(1 + 2);
isTruthy(-312);
isTruthy('0');
isTruthy('-0');
/* Erros:
    não estava errado, só foram adicionados outros tipos para exemplo
 */

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: 'Pão',
  modelo: 'Doce',
  placa: '6969',
  ano: 1666,
  cor: 'Roxo',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor) {
  this.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
  return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
  return this.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
  return this.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  return "Esse carro é um " + this.obterMarca() + " " + this.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(pessoas) {
  var totalPessoas = this.quantidadePessoas + pessoas;
  
  if(this.quantidadePessoas === this.assentos && totalPessoas >= carro.assentos)
    return "O carro já está lotado!";
  
  if(totalPessoas > this.assentos)
    return "Só cabem mais " + (this.assentos - this.quantidadePessoas) === 1 ? " pessoa!" : " pessoas!";
  
  this.quantidadePessoas = totalPessoas;
  
  return "Já temos " + this.quantidadePessoas + " pessoas no carro!";
};
/* Erros:
    algumas melhorias na lógica do método
    a verificação de menor não era necessária pois se o número não for igual (primeiro if)
    ou não for maior (segundo if), fica implícito que ele é menor
    
    adicionada verificação no primeiro if pra conseguir tirar pessoas do carro usando
    esse mesmo método
 */


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // "Roxo"

// Mude a cor do carro para vermelho.
carro.mudaCor("Vermelho");

// E agora, qual a cor do carro?
carro.obterCor(); // "Vermelho"

// Mude a cor do carro para verde musgo.
carro.mudaCor("Verde Musgo");

// E agora, qual a cor do carro?
carro.obterCor(); // "Verde Musgo"
/* Erros:
    foram adicionadas aspas pra identificar que o retorno das funções é string
 */

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // Esse carro é um Pão Doce

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
carro.adicionarPessoas(3); // "Já temos 5 pessoas no carro!"
/* Erros:
    o a chamada do método com 4 não adicionaria pessoas ao carro, logo o carro não estaria cheio
 */

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // "Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // "Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1

```
