function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] verificar os dados e tente novamente`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianca-masculina.png')
            }else if (idade < 18){
                //jovem
                img.setAttribute('src', 'jovem masculino.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulto-masculino.png')

            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
                

        }else if (fsex[1].checked){
            genero ='mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-feminina.png')
            }else if (idade < 18){
                //jovem
                img.setAttribute('src', 'jovem feminina.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src', 'adulta-feminina.png')

            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}