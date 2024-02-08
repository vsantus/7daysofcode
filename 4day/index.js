const numeroCerto = Math.floor(Math.random() * (10 - 0 + 1) + 0) 
let acertou = false
let tentativa = ''


for(contador=0; contador<3; contador++){
    tentativa = prompt('Vamos brincar, tente advinhar um valor de 0 a 10, você terá três tentativas ok?')
    if(tentativa == numeroCerto){
     alert('Que droga, você advinhou')
     acertou = true;
     break
 }
 }

 if(!acertou){
   alert(`kkkkkkk você errou, o numero era ${numeroCerto}`)
 }
 