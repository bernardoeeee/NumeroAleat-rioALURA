function exibirTextos(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function mensagensNaTela(){
    exibirTextos('h1', 'Bem vindo ao jogo da adivinhação')
    exibirTextos('p', 'Escolha um numero de 1 a 100')
}

mensagensNaTela()
let tentativas = 1
let numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 100 + 1)
}


function verificarChute(){

    let numeroEscolhido = document.querySelector('input').value

    if(numeroEscolhido == numeroSecreto){
        exibirTextos('h1', `Voce acertou o numero secreto: ${numeroSecreto}. Com ${tentativas} ${totalTentativas}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroEscolhido > numeroSecreto){
            exibirTextos('p', `O numero é menor que ${numeroEscolhido}`)
        }else{
            exibirTextos('p', `O numero é maior que ${numeroEscolhido}`)
        }
        tentativas ++
        limparCampo()
    }
}

let totalTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'

function limparCampo(){
    let campo = document.querySelector('input')
    campo.value = '';
}

function novoJogo(){
    gerarNumeroSecreto()
    tentativas = 1
    mensagensNaTela()
    document.getElementById('reiniciar').setAttribute('disabled', true)
    limparCampo()
}
novoJogo()