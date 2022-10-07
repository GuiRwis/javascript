function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    
    var hora = data.getHours()
    
    

    msg.innerHTML = `agora são ${hora}.horas`

    if(hora >= 0 && hora < 12) {
        img.src = 'manha-redonda.png'
        document.body.style.background = '#506f90'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde-redonda.png'
        document.body.style.background = '#905b52'
    }else if (hora >= 18 && hora < 23) {
        img.src = 'noite-redonda.png'
        document.body.style.background = '#362943'
    }else{
        img.src = 'madrugada-redonda.png'
        document.body.style.background = '#2e3d2a'
    }
         
}
