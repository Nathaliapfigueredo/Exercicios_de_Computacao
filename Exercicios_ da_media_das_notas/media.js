
//declaração do array das notas
const notas = [4, 9, 6];

//declaração das variáveis
let soma = 0;
let i = 0;

//laço while para somar nota por nota
while(i<notas.length){
    soma+=notas[i]; //adiciona a nota atual a soma
    i++;//acrescenta no contador
}

//calculo da média
var  media = soma/3;

//imprimindo cada notas
console.log("Primeira nota do aluno:", notas[0]);
console.log("Segunda nota do aluno:", notas[1]);
console.log("Terceira nota do aluno:", notas[2]);


//verificação se a média é maior ou menor que 7, para saber se foi aprovado ou não e imprimir a média
if(media>= 7){
    console.log("Parabéns! Você foi aprovado! Sua média foi de", media.toFixed(2));
}else {
    console.log("Você foi reprovado! Sua média foi de", media.toFixed(2));
}






