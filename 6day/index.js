let frutas = []
let laticinios = []
let congelados = []
let doces = []

let removerComida = 'sim'
let remover = ""
let alimento = ""
let setor = ""
let posicao = ""

let addMais = 'sim'
while (addMais != 'não') {
    addMais = prompt("Você quer adicionar algum item na lista de compras? Responda 'sim' ou 'não'.")
    while (addMais != "sim" && addMais != "não") {
        alert(`Operação não reconhecida!`)
        addMais = prompt("Você quer adicionar algum item na lista de compras? Responda 'sim' ou 'não'.")
    }

    if (addMais === "não") {
        break;
    }

    alimento = prompt('Qual alimento você deseja inserir?')
    setor = prompt('Seu alimento está relacionado a "frutas", "laticinios", "congelados" ou "doces"?')
    if (setor === 'frutas') {
        frutas.push(alimento)
        console.log(frutas)
    } else if (setor === 'laticinios') {
        laticinios.push(alimento)
        console.log(laticinios)
    } else if (setor === 'congelados') {
        congelados.push(alimento)
        console.log(congelados)
    } else if (setor === 'doces') {
        doces.push(alimento)
        console.log(doces)
    }
    else {
        alert('"Este setor não foi pré-definida."')
    }
}

    removerComida = prompt(`Deseja remover algo da sua lista de compras? Digite "sim" ou "não"`)

while (removerComida == 'sim') {

    remover = prompt(`O que você quer remover?\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Congelados: ${congelados} \n Doces: ${doces} `);

    //remover itens da lista
    if (frutas.indexOf(remover) != -1) {
        frutas.splice(frutas.indexOf(remover), 1);
        alert(`${remover} foi removido da lista`);

    } else if (laticinios.indexOf(remover) != -1) {
        laticinios.splice(laticinios.indexOf(remover), 1);
        alert(`${remover} foi removido da lista`);

    } else if (congelados.indexOf(remover) != -1) {
        congelados.splice(congelados.indexOf(remover), 1);
        alert(`${remover} foi removido da lista`);

    } else if (doces.indexOf(remover) != -1) {
        doces.splice(doces.indexOf(remover), 1);
        alert(`${remover} foi removido da lista`);

    } else {
        alert("essa comida não está na lista");
    }

    removerComida = prompt('Deseja remover mais algum item?')

    //verificar se a lista está vazia
    if (frutas.length === 0) {
        alert("sua lista de frutas está vazia!");
    }
    if (laticinios.length === 0) {
        alert("sua lista de laticínios está vazia!");
    }
    if (congelados.length === 0) {
        alert("sua lista de congelados está vazia!");
    }
    if (doces.length === 0) {
        alert("sua lista de doces está vazia!");
    };

}
alert(`Sua lista final de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)


