const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 1.90,
    },
    {
        name: "Paulo",
        age: 23,
        weight: 95,
        height: 1.70,
    },
    {
        name: "Naldo",
        age: 30,
        weight: 90,
        height: 1.80,
    },
]

function IMC(weight, height){
    return (weight / (height ** 2)).toFixed(2)
}


function printPatientIMC(patient) {
    return `
    Paciente:   ${patient.name} 
    Altura:      ${patient.height} M
    Peso:        ${patient.weight} KG
    Idade:       ${patient.age} Anos

    IMC: ${IMC(patient.weight, patient.height)}`

}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}