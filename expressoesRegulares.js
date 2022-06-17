/* Criando uma Expressão Regular
Há duas maneiras de construir uma expressão regular: */

const re = /ab + c/;

console.log(re)

//Ou chamando o construtor do objeto RegExp:

let re2 = new RegExp('ab + c');

console.log(re2)