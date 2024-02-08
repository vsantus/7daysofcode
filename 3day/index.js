let carreira = prompt('Você tem interesse de atuar fo Front-End ou no Back-End?')

let pergunta = ''

let decisao = ''

if (carreira == 'Front-End') {

    pergunta = prompt('Você tem interesse em estudar Vue ou React?')

    if (pergunta == `${pergunta}`) {
        decisao = prompt(' Que Legal !, Digite "1" se você quer se especializar nessa linguagem ou "2" se tornar um Dev FullStack: ')

        if (decisao == 1) {
            alert('Especializar-se em apenas uma linguagem de programação pode ser benéfico porque permite que você desenvolva um conhecimento mais profundo e especializado nessa linguagem')

        } else if (decisao == 2) {
            alert('Tornar-se um desenvolvedor full stack é bom porque você pode trabalhar em todas as partes de um projeto, desde o front-end até o back-end.')

        } else {
            alert('Você não inseriu uma área válida')
        }

    }
}
else if (carreira == 'Back-End') {
    pergunta = prompt('Você tem interesse em estudar C# ou Java?')

    if (pergunta == `${pergunta}`) {
        decisao = prompt(' Que Legal !, Digite "1" se você quer se especializar nessa linguagem ou "2" se tornar um Dev FullStack: ')

        if (decisao == 1) {
            alert('Especializar-se em apenas uma linguagem de programação pode ser benéfico porque permite que você desenvolva um conhecimento mais profundo e especializado nessa linguagem')

        } else if (decisao == 2) {
            alert('Tornar-se um desenvolvedor full stack é bom porque você pode trabalhar em todas as partes de um projeto, desde o front-end até o back-end.')

        } else {
            alert('Você não inseriu uma área válida')
        }
    }
}
else {
    alert('Você não inseriu uma área válida')
}

let msg = prompt('Você tem interesse em conhecer mais linguagens? Responda com "ok", para caso positivo')

while (msg == 'ok') {
    let linguagens = prompt('Qual tecnologia que você gostaria de aprender? ')

    alert(`${linguagens} é muito boa na área de trabalho !`)
    
    msg = prompt('Você tem interesse em conhecer mais linguagens? Responda com "ok", para caso positivo')
}



