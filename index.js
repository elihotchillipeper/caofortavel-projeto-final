/* //this is a js file

let condicao1 = true;
// "var" e "let" são a mesma coisa
if (condicao1){
    console.log('Entrei no if 1!');
}

let condicao2 = false;

if (condicao2){
    console.log('Entrei no if condicao2!')
}



 */


/* var num1 = 1;
var num2 = 0;

if (num1 === num2){
    console.log("São iguais!")
}else{
    if(num1 > num2){
        console.log("São diferentes e num1 maior!");
    }else{
        console.log("São diferentes e num2 é maior!");
    }

} */



/* var paisDeOrigem = "brasil";
 
switch (paisDeOrigem) {
    case "brasil":
        console.log("brasileiro")
        break;
    case "EUA":
        console.log("americano")
        break;
    case "japão":
            console.log("japones")
        break;
    default:
        console.log("Sem resposta")
        break;
}
 */

/* var pokemonInicial = "Charmander"

switch (pokemonInicial) {
    case "Charmander":
        console.log("Pokemon tipo fogo!")
        break;
    case "Bulbassauro":
        console.log("Pokemon tipo planta e veneno!")
        break;
    case "Squirtle":
        console.log("Pokemon tipo água!")
         break;
    default:
        console.log("Pokemon Desconhecido")
        break;
}
 */

/*var lista = [1,2,3,4,5,6,7,8,9,10];

lista.forEach(element => {
    console.log(element)
});


for (const element of lista) {
    console.log(element)
}



for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element)   
}
 */

/* var i = 0;
while(i < 10){
    console.log(i);
    i = i =1;
} */



/* function calcularArea(altura = 10, largura = 20) {
    var area = altura * largura;
    return (area);
}

function somaArea(largura1, largura2, altura1, altura2) {
    var area1 = calcularArea(altura1, largura1);
    var area2 = calcularArea(altura2, largura2);
    return(area1 + area2);
}

console.log(somaArea(10,20,30,40)); */

/* function imprimeNomes(nome) {
    console.log(nome);
}
imprimeNomes("nome1");
imprimeNomes("nome2");
imprimeNomes("nome3");

function imprimeNomesComReturn(nome){
    return nome
}
console.log(imprimeNomes("nome1"));
console.log(imprimeNomes("nome2"));
console.log(imprimeNomes("nome3"));
 */


/* 

function recebeArray(lista = []){
    var arrayFinal = [];
    arrayFinal[0] = lista[lista.length -1];
    arrayFinal[1] = lista[0];
    console.log(arrayFinal);
}
var lista = [1,2,3,4,5,6,7,8,9];
 recebeArray(lista);

 */


 //Declaração de variáveis
const header = document.createElement("header");
const content = document.createElement("main");
const footer = document.createElement("footer");

//Adiciona conteúdo ao cabeçalho
header.innerHTML = `
    <h1>Cabeçalho</h1>
    <p>Este é o cabeçalho da página.</p>
`;

//Adiciona conteúdo ao conteúdo
content.innerHTML = `
    <h2>Conteúdo</h2>
    <p>Este é o conteúdo da página.</p>
`;

//Adiciona conteúdo ao rodapé
footer.innerHTML = `
    <p>Rodapé.</p>
`;

//Adiciona os elementos á página
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

header.style.backgroundColor = "#ccc";
header.style.padding = "10px";

content.style.backgroundColor = "#fff";
content.style.padding = "20px";

footer.style.backgroundColor = "#ccc";
footer.style.padding = "10px"

const container = document.querySelector("main");
const linhas = [];
const cores = ["#fff", "#ccc"];

for (let i = 0; i < 10; i++) {
    const linha = document.createElement("div");
    linha.classList.add("linha");
    linha.innerHTML = `
    <h3>Linha ${i + 1}</h3>
    <p>Este é o conteúdo da linha ${i + 1}.</p>
    `;
    container.appendChild(linha);

    linhas.push(linha);
}

//alterna as cores das linhas
function alternarCores(){
    for (let i = 0; i < linhas.length; i++){
        linhas[i].style.backgroundColor = cores[i % 2];
    }
}
alternarCores();



























