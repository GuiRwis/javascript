let valores = [8,1,7,4,2,9]
console.log(valores)
valores.sort()
/* 
console.log(valores[0])                                                             //codigo mais burro
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

/*for (let total =0; total <valores.length; total++){                             // codigo mais extenso
    console.log(`a posição ${total} tem o valor ${valores[total]}`)
}
*/

for(let pos in valores){                                                         // codigo simplificado
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
