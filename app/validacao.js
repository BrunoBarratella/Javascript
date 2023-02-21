function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +='<div>Valor inválido</div>'
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div>Valor inválido: o Numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Voce Acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}