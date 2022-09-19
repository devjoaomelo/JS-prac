let student = prompt("Qual o nome do(a) aluno(a)? ")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (n1 + n2 + n3) / 3;

let result = avarege > 6;

average = average.toFixed(2);

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average )
} else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average)
}