var agora = new Date()
var diaSem = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta feira
4 = quinta feira
5 = sexta feira
6 = sabado
*/
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('domingo')
        break
     case 1:   
         console.log('segunda feira')
         break
     case 2: 
         console.log('terça feira')   
         break
     case 3:
        console.log('quarta feira')
        break
     case 4:   
        console.log('quinta feira')
        break
     case 5:   
         console.log('sexta feira')
         break
     case 6:
        console.log('sabado')
        break

        default:
            console.log('[erro] dia ivalido!')
            break
}



