//COMANDO BASE PARA PEGAR DATA
let data = new Date();
//console.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR O MES ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO 11 DEZEMBRO
let mes = data.getMonth();
//console.log(mes);

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesDoAno =  ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()];

//PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();

//PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();

const diaDaSemana = ["Domingo", "segunda", "terça", "quarta", "quinta", "quinta", "sexta", "sabado"]
let diaSemanaEscrito = diaSemana[data.getDay()]

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora)

//PEGAR O MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();

//PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR MILISEGUNDOS - 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES/ ANO
let dataBR = data.toLocaleDateString('pt-BR', {datestyle: 'short'});
console.log(dataBR);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.Date();
mes = d.getmonth() + 1;
ano = d.getFullYear();
function addZero(x) { return x < 10 ? '0' + x : '' +x; }

let dataPadraoBR = diaMes + "/" + mes + "/" + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new date();
var vencimento = new date(2024, 0, 15);

if(hoje > vencimento){
    console.log("sua conta está vencida");
}else{
    console.log("ainda não venceu")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new date();
var dataFinal = new date(2024, 11, 31)

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 *1000));

console.log(diferencaDias + " dias");