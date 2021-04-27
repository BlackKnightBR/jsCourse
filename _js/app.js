const chunk = ", aqui é o rodrigo"
//O comando console.log exibe mensagens no console JS dos navegadores.
console.log("Olá mundo" + chunk); // Aqui temos um exemplo de concatenação, onde os valores se tornam um valor só.
//Em javaScript o tipo da variável é definido pela atribuição.
var numero = 99; //isto é um inteiro.
var string = "isto é uma string";
var float = 100.34; //isto é um float;
var boolean = true; //isto é um boolean (verdadeiro e falso)
var indefinido; //esta variável tem valor de indefinido(undefined) pois nada foi associado a ela.
var nulo = null; //está variável é considerada nula
const fixa = 100; //Uma vez que seu valor foi atribuido está variável não pdoe ser alterada.
// 'var' pode ser declarado mais de uma vez criando bugs no código, enquanto const não pdoe ser declarado novamente.
//As variáveis declaradas aqui tem ecopo global e podem ser acessadas durane todo código.

//Esta é uma função declarada em Javascript, nada mais é que um algoritmo.
function upperCase (texto){//text é um parametro
    //Este é o escopo da função as variáveis declaradas aqui estaram disponiveis apenas para a função
    texto = texto.toUpperCase();
    //Esta é uma função do construtor de strings "toUpperCase"
    return texto;
};

string = upperCase(string);
console.log(string);

//Formas de declarar funções:
//Funções podem ser declaradas como variáveis, onde o valor da variável se torna a função.

var exemplo = function(){

};
// a forma mais atual de se declara funções hoje em dia é usando esse modelo:
var exemplo2 = () => {

};

//Concatenação com simbolos reservados pode se usar '\' para faze o escapping,
// o que dira para o interpredtador JS que aquele lugar é apenas uma forma de escrita
console.log('Hello it\'s me Rodrigo!');
//Outra forma de resolver esse problema com as aspas simples é usar apas duplas
console.log("Dessa forma posso usar aspas 'simples' dentro de aspas duplas");
//As duas formas são validas, é interessante por boa prática de código usar de forma padrão
//ou aspas duplas ou simples
console.log(`Esse é o jeito moderno de fazer isso ${"aqui você pode escrever código javascript"}`);
console.log(`Esse é mais um exemplo, ${string}, usando variáveis ${float}`);

// usando o comando 'typeof' você pode descobrir qual o tipo de cada variável
console.log(typeof float);

//EM javascript uma estrutura if
if(numero === 100){
    console.log(`Numero é 100`);
}else if(numero > 100){
    console.log(`Numero é maior que 100`);
}else{
    console.log(`Numero é menor que 100`);
}

//Arrays em javascript são declarados assim
var schedule = [ "Acordar 8:00", "Meditar", "Exercício", "posts", "desenvolvimento", "bks" ];
var tamanho = 5;
for(i = 0; i <= tamanho; i++) console.log(schedule[i]);
