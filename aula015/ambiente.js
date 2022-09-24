let num = [5,7,9,8,2]
num.push(1)                           // colocar valores dentro da variavel
num.sort()                            // colocar em ordem crescente
console.log(num)
console.log(`o vetor tem ${num.length} posições`)             // num.lenght = posição dos vetores
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${pos}`)
}



