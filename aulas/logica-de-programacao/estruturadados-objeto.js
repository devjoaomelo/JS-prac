const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Paulo",
        age: 23,
        weight: 95,
        height: 170,
    },
    {
        name: "Naldo",
        age: 30,
        weight: 90,
        height: 180,
    },
]

let patientsNames = []

for (let patient of patients) {
    patientsNames.push("Nome: " + patient.name +
    " Idade: " + patient.age + " Peso: " + patient.height + " Altura " + patient.weight)
}

alert(patientsNames)