let agora = new Date() //pegando hora de agora
let hora = agora.getHours() //pegando hora de agora
console.log(`Agora são exatamente ${hora} horas.`)

if ( hora < 12 ){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else if (hora <= 23){
    console.log('Boa Noite')
} else if( hora >= 0 || hora <= 4){
    console.log('Boa Madrugada')
}