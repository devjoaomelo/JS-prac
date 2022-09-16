/*
    Function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(nome, idade){
    this.nome = nome
    this.idade = idade
    this.walk = function(){
        return this.nome + " está andando"
    }
}
const joao = new Person ("joao", 25)
const mayk = new Person ("mayk", 25)

console.log(joao)
console.log(mayk.walk())


/*
Transformar número quebrado com 2 casas decimais e trocar ponto por vírgula
*/

let number = 345.33542354
console.log(number.toFixed(2).replace(".",","))

/*
Transformar letras minúsculas para maiúsculas e vice versa
*/

let word = " ProGraMar é legal!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // escolher oq corta a frase
let phraseWithUnderScore = myArray.join("_") // escolher o separador
console.log(phraseWithUnderScore)

// Verificar se o texto contém uma palavra

let frase = "Eu quero comer lanche"
console.log(frase.includes("lanche")) // retorna true ** Case sens tem que estar escrito igual

// manipulando arrays
// Transformar uma cadeia de caracteres em elemntos de um array

let palavra = "manipulação"
console.log(Array.from(palavra)) // cada caractere vira um elemento da array
console.log(palavra[2])


let techs = ["html", "css", "js", "adobe","corel"]
// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1,2))
// remover 1 ou mais items de qualquer posição do array
techs.splice(1, 1) // splice(index, quantos)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 2)
console.log(techs)

const pessoa = {
    nome: "Joao",
    age: 25,
}
delete pessoa.age // dele a propriedade age de dentro do objeto


// comparação
let one = 1
let two = 2

// == igual a
console.log(two == 1) // retorna boolean false or true

// != diferente de
// console.log(one != two)

let pao = true
let queijo = true
const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim' // ? então : senão
// and && 
console.log(pao && queijo) // se for true para as duas é true
console.log (pao || queijo) // se tiver qualquer um
console.log (!pao) // se for true altera pra false e vice-versa