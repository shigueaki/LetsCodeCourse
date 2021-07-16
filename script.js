//Functions Class
var escreva = function(texto){
    console.log(texto);
}
function somar(a,b) {
    return a+b;
}
const somarAnonimo = function(a,b) {return a+b;}
const somarFuncaoDeFlecha = (a,b) => {let soma = a+b; return soma};

escreva('Olá Mundo!');
escreva('Meu segundo parâmetro');
let resultado = somar(1,3);
escreva(resultado);
let resultadoSomarAnonimo = somarAnonimo(5,3);
escreva(resultadoSomarAnonimo)
let resultadoFuncaoDeFlecha = somarFuncaoDeFlecha(4,2);
escreva(resultadoFuncaoDeFlecha);
//Functions Class

//High Orders Functions Class
const subtrair = (a,b) => a-b;
const aplicaOperacao = (a, b, operacao) => operacao(a,b);
let result = aplicaOperacao(4,2, subtrair);

//----
const somarX = (x) => (y) => x+y;
escreva(result)
const somar2 = somarX(2);
escreva(somar2(5));

//Map Class
 const vetor = ["10", "20", "30"];
 escreva(vetor);
 const stringToInt = (x) => parseInt(x);
 const vetor2 = vetor.map(stringToInt);
 escreva(vetor2);
const vetor3 = vetor2.map(value => value * value);
escreva(vetor3);

//Filter Class
const vetorFilter = [1,2,3,4,5,6,7,8,9,10];
const pares = vetorFilter.filter(value => value % 2 === 0);
const pares2 = vetorFilter.filter(function(x){return x%2==0});
console.log(pares)
console.log(pares2)

//Reduce Class
const vetorReduce = [1,2,3,4,5,6];
const somaReduce = vetorReduce.reduce((estado, item)=>estado+item,0);
escreva(somaReduce);

const matriz =[
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
]

const somaColuna = (estado, item) => {
    return [estado[0]+item[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[4]+item[5]];
}

const vetorMatriz = matriz.reduce(somaColuna,[0,0,0]);
escreva(vetorMatriz);
