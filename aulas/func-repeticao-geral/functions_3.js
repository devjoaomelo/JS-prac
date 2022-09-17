// function scope

let subject = 'create video'

function createThink(subject){ // só existe dentro do escopo um novo subject se ele for passado como parametro senão o subject será sobrescrevido pelo o da função e ambos retornarão study
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))