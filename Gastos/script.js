/* Crie um objeto que possuirá 2 propriedade, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem a familia que esta com saldo negativo,
seguido o valor do saldo */

let family = {
    receitas: [2500, 3200, 250, 375.50],
    despesas: [125.85, 359.98, 1000, 100]
}

function sum(array){
    let total = 0

    for(let valor of array){
        total = total + valor
    }

    return total
}

function calculateBalance(){
    const calculaReceitas = sum(family.receitas)
    const calculaDespesas = sum(family.despesas)

    const total = calculaReceitas - calculaDespesas

    const positivo = total >= 0

    let balanceText = 'negativo'

    if(positivo){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()