/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ["gustavo", 1, true, function () {}, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcao1(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcao1(qualquer)[1]; // 1

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcao2(array, numero) {
    return array[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var queRecebe = ["string", 0, false, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcao2(queRecebe, 0); // ["string", 0, false, undefined, null]
funcao2(queRecebe, 1);
funcao2(queRecebe, 2);
funcao2(queRecebe, 3);
funcao2(queRecebe, 4);
/* Erros:
    entendida errado, era pra usar a funcao2
 */

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
  var livros = {
    "Programando em Python":{
      quantidadePaginas: 16,
      autor: "Livia",
      editora: "Ifes"
    },
    "Kama Sutra":{
      quantidadePaginas: 69,
      autor: "Gustavo",
      editora: "X"
    },
    "MongoDB NINJA":{
      quantidadePaginas: 99,
      autor: "Marlon",
      editora: "?"
    }
  };

  return !nomeLivro ? livros : livros[nomeLivro];
}
/* Erros:
    código melhorado agora usa ternário
 */

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "Kama Sutra";
"O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro " + nomeLivro + " foi publicado pela editora " + book(nomeLivro).editora + ".";
/* Erros:
    códigos melhorados pra reutilizar código
 */
