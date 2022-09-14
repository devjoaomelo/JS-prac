// Aqui eu tenho um comentário em linha
/* Aqui eu tenho
um comentário de bloco*/
console.log('Hello World!')

// `` template literals  

console.log(`João ${1 + 1}`)
// 2
console.log(1+1)
// 2

/*
Numer
* números
33 // Inteiros
12.5 // Reais
NaN // Not a number
Infinity // infinito 

Boolean
* true or false*

null = nulo não possui nada dentro
undefined = indefinido

Object 
- Propriedades / Atributos / Funcionalidades / Métodos
{propriedade: "valor"}*/

console.log({
    name:"Joao",
    idade: 36,
    andar: function(){
        console.log('andar')
    }
})

/*
Array (vetores)
Uma lista
agrupamento de dado
["Joao", 36]*/

console.log([
    "Leite",
    "Ovos",
    "Farinha"
])


/*#Variáveis
var = muda
let = muda
const = não muda
*/

var clima = "Quente"
clima = "Frio"
console.log(clima)