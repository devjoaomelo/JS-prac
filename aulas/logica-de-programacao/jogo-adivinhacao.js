let result = prompt("Advinhe o número que estou pensando? está entre 0 e 10")
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)




let controle = 1;
while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente...")
    controle++
    
}

if(controle == 1){
    alert(`Que cagada! você advinhou o número em 1 tentativa`)
}else if(controle > 1){
    alert(`Parabéns você advinhou o número em ${controle} tentativas`)
}


