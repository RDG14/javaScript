function verificar(){
    let data = new Date()
    let ano = data.getFullYear() //Ano atual
    let fano= document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) { //Se tiver vazio ou valor maior que ano atual
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value) //Ano atual - o número digitado
        let genero = ''
        let img = document.createElement('img') //criando tag de img no html
        img.setAttribute ('id', 'foto') //dando id para a imagem


        if (fsex[0].checked){ //se o masculino tiver marcado...
            genero = 'Homem' //Dando valor a variável genêro

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-menino.jpg') //selecionando src da imagem
            } else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }

        } else if (fsex [1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-menina.jpg')
            } else if(idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //Adicionando elemento.
    }
}