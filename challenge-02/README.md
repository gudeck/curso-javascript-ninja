# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function funcao(x, y){
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var variavel = funcao(5,5) + 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novaFuncao(){
  novaVariavel += 5;
  return 'O valor da variável agora é ' + novaVariavel;
}

// Invoque a função criada acima.
novaFuncao();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 5 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function novaNovaFuncao(x, y, z){
  if(x === undefined || y === undefined || z === undefined){
    return 'Preencha todos os valores corretamente!';
  }
  
  return (x * y * z) + 2;
}
/*  Erros:
      null tem que ser explicitamente inserido na variável, foi substuido por undefined (undefined significa que aquela variável não possui valor)
      não foi usada comparação de tipos nas condições
 */

// Invoque a função criada acima, passando só dois números como argumento.
novaNovaFuncao(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
novaNovaFuncao(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novaNovaNovaFuncao(x, y, z) {
  if(x !== undefined && y === undefined && z === undefined){
    return x;  
  }else if(x !== undefined && y !== undefined && z === undefined){
    return x + y;  
  }else if(x !== undefined && y !== undefined && z !== undefined){
    return (x + y) / z;
  }else if(x === undefined && y === undefined && z === undefined){
       return false;
  }else{
    return null;
  }
} 
/*  Erros:
      null tem que ser explicitamente inserido na variável, foi substuido por undefined (undefined significa que aquela variável não possui valor)
      não foi usada comparação de tipos nas condições
      haviam verificações desnecessárias, pois uma vez que algum dos primeiros argumentos fossem undefined a verificação das condições terminaria ali
 */


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
novaNovaNovaFuncao(); // false
novaNovaNovaFuncao(1); // 1
novaNovaNovaFuncao(1, 2); // 3
novaNovaNovaFuncao(1, 2 ,3); // 1
```
