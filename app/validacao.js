function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +='<div>Valor inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div>Valor inválido: o Numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Voce Acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O Numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O Numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}