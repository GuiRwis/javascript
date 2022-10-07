function contar() {
    var n1 = Number(document.getElementById('txtn1').value)
    var n2 = Number(document.getElementById('txtn2').value)
    var n3 = Number(document.getElementById('txtn3').value)
    var res = window.document.getElementById('res')
    var tela = ''
    if (n1.length == '' || n2.length == '' || n3.length == '') {
        res.innerHTML = 'Impossível contar'
    }else if(n1 > n2) {
        for (c = n1;c >= n2;c -= n3){
            
            res.innerHTML = tela + `${c} -> `
            tela = res.innerHTML
        }
        res.innerHTML = tela + 'FIM'
    }else if (n3 == 0) {
        n3 = n1
        for (c = n1;c <= n2;c+=n3){
            
            res.innerHTML = tela + `${c} -> `
            tela = res.innerHTML
        }
        res.innerHTML = tela + 'FIM'
    }else {
        for (c = n1;c <= n2;c+=n3){
            
            res.innerHTML = tela + `${c} -> `
            tela = res.innerHTML
        }
        res.innerHTML = tela + 'FIM'
    }
    
}