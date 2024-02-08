let calculo = ''

let valorA = parseInt(prompt('Insira o primeiro valor:'))
let valorB = parseInt(prompt('Insira o segundo valor:'))

calculo = prompt('Qual tipo de calculo quer fazer? "soma", "subtração", "multiplicação" ou "divisão". Digite o nome da operação')

switch (calculo) {
    case 'soma':
        alert(valorA + valorB)
        alert('Até a próxima!')
        break

    case 'subtração':
        alert(valorA - valorB)
        alert('Até a próxima!')
        break

    case 'multiplicação':
        alert(valorA * valorB)
        alert('Até a próxima!')
        break

    case 'divisão':
        alert(valorA / valorB)
        alert('Até a próxima!')
        break

    case '':
        alert('Este campo está vazio, portanto até a próxima!')
        break

}