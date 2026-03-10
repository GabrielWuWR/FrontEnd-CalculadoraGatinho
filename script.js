'use strict'

const inputTextoUm = document.getElementById('inputUm');
const inputTextoDois = document.getElementById('inputDois');
const botao = document.getElementById('botaoResponder');
const respostaTexto = document.getElementById('resposta');

const soma = function(numero1, numero2) {
    let numeroUm = Number(numero1);
    let numeroDois = Number(numero2);
    let respostax = numeroUm + numeroDois;
    return respostax;
};

const calcular = function() {
    let numeroUm = Number(inputTextoUm.value);
    let numeroDois = Number(inputTextoDois.value);

    let resposta = soma(numeroUm, numeroDois);

    if(resposta !== undefined) {
        respostaTexto.textContent = resposta;
    } else {
        respostaTexto.textContent = "Ops algo aconteceu";
    }
}

botao.addEventListener('click', calcular);