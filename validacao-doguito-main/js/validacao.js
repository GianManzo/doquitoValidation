function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
}
const validadores = {
    dataNascimento: input => validaNascmento(input)
}


const dataNascimento = document.querySelector('#nascimento');//trazendo o input
dataNascimento.addEventListener('blur',function(evento){//quando nao estiver com foco
    validaNascmento(evento.target)//chama essa funcao
})

function validaNascmento(input){
    const dataRecebida = new Date(input.value)//pega o valor do input
    let mensagem = '';//mensagem vazia caso a idade esteja ok
    
    if(!maiorQue18(dataRecebida)){//se a idade for ! oposto de true
        mensagem = 'Voce precisa ser +18'//exibe essa mensagem la no input.setCustomValidity
    }

    input.setCustomValidity(mensagem)//coloca mensagem no campo apos preencher
    
}
function maiorQue18(data){//funcao que informa qual ano seria se juntar a idade recebia com + 18
    const dataAtual = new Date()//idade atual
    const dataMais18 = new Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate())
    
    return dataMais18 <= dataAtual
}

