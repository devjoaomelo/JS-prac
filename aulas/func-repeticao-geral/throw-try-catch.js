// throw

function sayMyName(name = '') {
    if (name === ''){
        throw new Error("Nome é necessário") // throw parou a execução
    }
    console.log ('Depois do erro')
}

// try..catch
try {
    sayMyName()
    
} catch(e) {
    console.log(e)

}
