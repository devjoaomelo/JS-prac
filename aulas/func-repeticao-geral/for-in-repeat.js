//for... in

let person = {
    name: 'Joao',
    age: 30,
    weight: 88.6,
}

for(let property in person) {
    console.log(property) // name age weight
    console.log(person[property]) // acessa as propriedades
    console.log(person.name) // acessa o valor do name
    console.log(person["age"]) // acessa valor do age
}