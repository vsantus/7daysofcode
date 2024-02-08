let frutas = []
let laticinios = []
let congelados = []
let doces = []
let alimento = ""
let setor = ""

let addMais = 'sim'
while(addMais != 'não'){
    addMais = prompt("Você quer adicionar algum item na lista de compras? Responda 'sim' ou 'não'.")
    while (addMais != "sim" && addMais != "não") {
    alert(`Operação não reconhecida!`)
        addMais = prompt("Você quer adicionar algum item na lista de compras? Responda 'sim' ou 'não'.")
    }

if (addMais === "não"){
    break;
}

alimento = prompt('Qual alimento você deseja inserir?')
setor = prompt('Seu alimento está relacionado a "frutas", "laticinios", "congelados" ou "doces"?')
    if (setor === 'frutas') {
     frutas.push(alimento)
    } else if (setor === 'laticinios') {
     laticinios.push(alimento)
    } else if (setor === 'congelados') {
     congelados.push(alimento)
    } else if (setor === 'doces') {
     doces.push(alimento)
    } 
     else {
         alert('"Este setor não foi pré-definida."')
     }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)



