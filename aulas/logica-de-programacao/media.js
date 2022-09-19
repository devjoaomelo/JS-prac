let student = prompt("Qual o nome do(a) aluno(a)? ")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let media = ((Number(n1) + Number(n2) + Number(n3)) / 3)
let result = media.toFixed(2)

if(media >= 7){
    alert(`Parabéns ${student}, você foi aprovado com a média alta de ${result}`)
}
else if(7 > media >= 5){
    alert(`Raspando em ${student}, você foi aprovado com a média de ${result}. Melhore.`);
}
else{
    alert(`Sinto muito ${student}, você foi reprovado com a média de ${result}. Continue tentando.`)
}