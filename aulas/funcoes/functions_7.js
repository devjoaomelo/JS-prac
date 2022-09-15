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