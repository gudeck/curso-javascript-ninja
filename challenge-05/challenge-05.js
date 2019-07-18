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
funcao1(queRecebe); // ["string", 0, false, undefined, null]


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

  if(nomeLivro === undefined)
    return livros;

  return livros[nomeLivro];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*  'Programando em Python': { quantidadePaginas: 16, autor: 'Livia', editora: 'Ifes' },
    'Kama Sutra': { quantidadePaginas: 69, autor: 'Gustavo', editora: 'X' },
    'MongoDB NINJA': { quantidadePaginas: 99, autor: 'Marlon', editora: '?' }
 */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro " + "Kama Sutra" + " tem " + book("Kama Sutra").quantidadePaginas + " páginas!";
// 'O livro Kama Sutra tem 69 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro " + "Kama Sutra" + " é " + book("Kama Sutra").autor + ".";
// 'O autor do livro Kama Sutra é Gustavo.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro " + "Kama Sutra" + " foi publicado pela editora " + book("Kama Sutra").editora + ".";
// 'O livro Kama Sutra foi publicado pela editora X.'
