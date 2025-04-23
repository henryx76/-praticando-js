// COMANDO BASE PARA PEGAR DATA
let data = new Date();

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log("Ano:", ano);

// PEGAR O MÊS ATUAL - DE 0 ATÉ 11 (0 = JANEIRO, 11 = DEZEMBRO)
let mes = data.getMonth();

// MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesEscrito = mesesDoAno[mes];
console.log("Mês escrito:", mesEscrito);

// PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log("Dia do mês:", diaMes);

// PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();
const diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
let diaSemanaEscrito = diasDaSemana[diaSemana];
console.log("Dia da semana:", diaSemanaEscrito);

// PEGAR A HORA
let hora = data.getHours();
console.log("Hora:", hora);

// PEGAR MINUTOS
let minutos = data.getMinutes();
console.log("Minutos:", minutos);

// PEGAR SEGUNDOS
let segundos = data.getSeconds();
console.log("Segundos:", segundos);

// PEGAR MILISSEGUNDOS
let milisegundos = data.getMilliseconds();
console.log("Milissegundos:", milisegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO
let dataBR = data.toLocaleDateString('pt-BR', { dateStyle: 'short' });
console.log("Data BR:", dataBR);

// PEGAR OS VALORES SEPARADOS
function addZero(x) {
  return x < 10 ? '0' + x : '' + x;
}

let dataFormatada = addZero(diaMes) + "/" + addZero(mes + 1) + "/" + ano;
console.log("Data formatada:", dataFormatada);

// COMPARAR DATAS - MAIOR OU MENOR
let hoje = new Date();
let vencimento = new Date(2024, 0, 15); // Janeiro = 0

if (hoje > vencimento) {
  console.log("Sua conta está vencida");
} else {
  console.log("Ainda não venceu");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
let dataInicial = new Date();
let dataFinal = new Date(2024, 11, 31); // Dezembro = 11

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log("Faltam", diferencaDias, "dias");
