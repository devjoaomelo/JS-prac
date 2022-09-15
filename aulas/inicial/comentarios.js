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

/* const e let são locais, só funcionam no escopo onde foi criar {
}
var é global e funciona fora do escopo*/

// declaração or declaration
/*var nome
// assignment or atribuição de valores  
nome = "joao"
// que tipo de dado foi declarado
console.log(typeof nome)
// agrupando declarações
let age, isHuman

age = 18
isHuman = true

console.log(nome, age, isHuman)
console.log('o ' + nome +' tem ' + age +' anos')*/
// console.log(`o ${name} tem ${age} anos.`)


// object

const person = {
    nome: 'Joao',
    age: 30,
    weight: 88.6,
    isAdmin: true

}

console.log(`${person.nome} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Moneky',
    'Cat',
    {
        obj_name: 'paulo',
        obj_age: 3
    }
]

// acessar valores entro do array
console.log(animals[0])
console.log(animals.length) // Tamanho da lista
console.log(animals[3].obj_name) //acessando objeto dentro de array

// atribuir numa posição da array

const john = {
    obj_name: "John",
    obj_age: "23",
    weight: 74.8,
    isSubscribed: true,
}

animals[4] = john