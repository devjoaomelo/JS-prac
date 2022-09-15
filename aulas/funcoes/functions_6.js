// callback function
// função passada como parâmetro para outra função

function sayMyName(nome) {
    console.log('Antes de executar a função callback')
    nome()
    console.log('Depois de exutar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)