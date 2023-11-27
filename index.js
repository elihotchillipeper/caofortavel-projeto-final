/* console.log(prompt("Qual é o seu nome?"));

const nome = "Eli";
const idade = 16;

console.log("Olá", "Meu nome é", nome, "e eu tenho", idade, "anos");

//Numbers: são os tipos que representam números

//const idade = 23;
const altura = 1.79;
const temperatura = -20;

//Strings: são os tipos que representam conjunto de carcteres (texto)

const nome = "Yuzo";
const idade = "23";

var souUmBoolean = true;
console.log(souUmBoolean);
souUmBoolean = false;
console.log(souUmBoolean);
 */

/* var nome = "Eli";
var sobrenome = "Escobar";
var idade = 16;
var estudante = true;

console.log("Nome:", nome, "Sobrenome:", sobrenome, "Idade:", idade, "É estudante?", estudante);

console.log(" Nome: " + nome + " sobrenome: " + sobrenome + " idade: " + idade + " É estudante? " + estudante);

var todoTexto = " Nome: " + nome + " sobrenome: " + sobrenome + " idade: " + idade + " É estudante? " + estudante;

console.log(todoTexto)

console.log((nome));
console.log(typeof(sobrenome));
console.log(typeof(idade));
console.log(typeof(estudante)); */

/* const idadeNumero = 23;
const idadeTexto = idadeNumero.toString();

console.log(typeof idadeNumero)
console.log(typeof idadeTexto) */

/* var n1 = 10;
var n2 = 5;
var n3 = 3

var soma, subtracao, multiplicacao, divisao;

soma = n1 + n2; //15
subtracao = n1 - n2; //5
divisao = n1 / n2; //2
multiplicacao = n1 * n2; //50

console.log(soma);
console.log(subtracao);
console.log(divisao);
console.log(multiplicacao);
 */

/* var numero = 7;

console.log(numero % 2);
 */

/* var n1 = 2;
var n2 = 3565;
var n3 = 2;
var n4 = 3;

/* console.log(n1 === n2);
console.log(n1 === n3);

console.log(n1 !== n2);
console.log(n1 !== n3);
 */
/* console.log(n1 > n3);
console.log(n1 >= n3); */
/* 
console.log(n1 === n2 && n1 === n3); apenas v e v geram true, se uma das operações for falsas toda a operação será falsa
console.log(n1 === n2 || n1 === n3); */


/* 
var a = true;
var b = false;
var c = true;

/* console.log(a && b);
console.log(b && c);
console.log(a && c);
console.log(a && b && c);

console.log(a || b);
console.log(b || c);
console.log(a || c);
console.log(a || b || c);

console.log(!a);
 */

/* 
var nome = "elJKIWRBFGWEi";
var outronome = "fisuefguigeff "
var idade = 16;
const frase = "Cade a porra do meu café Zuleica?"
var anoAtual = 2023;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("É maior de idade? " + (idade >=18));
console.log("Idade em 2050: " + (idade + (2050 - anoAtual)));

console.log("Nome: " + nome, " Idade: " + idade, " É maior de idade? " + (idade >=18), " Idade em 2050: " + (idade + (2050 - anoAtual)));


console.log(nome.length);

console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

console.log(outronome.trim());

console.log(frase.includes("café")); //true
console.log(frase.includes("cenoura")); //false 

const frase = "Cade a porra do meu café Zuleica?";
const novaFrase = frase.replaceAll("café", "almoço");
console.log(novaFrase);
*/


const listaDeCompras = ["batata", "alface", "queijo"]

const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
listaDeCompras.push("cenoura");
listaDeCompras[4] = "papel";
listaDeCompras[listaDeCompras.length] = "cebola";
listaDeCompras[1] = "tomate";
console.log(listaDeCompras)
//listaDeCompras.pop();

listaDeCompras.splice(3, 2);

console.log(listaDeCompras);
console.log(listaDeCompras[0]);
console.log(listaDeCompras[1]);
console.log(listaDeCompras[2]);

console.log(listaDeCompras.length);


















