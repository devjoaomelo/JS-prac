let option;
let items = []

while(option != 3){
    option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

    switch(option){
        case 1:
            let item = prompt("Digite o nome do item")
            items.push(item) // funciona como a variável contadora
            // sequencia aqui
            break;
        case 2:
            if(items.length == 0){
                alert("Não existem itens cadastrados")
            }else {
                alert(items)
            }
            // sequencia 2
            break;
        case 3:
            alert("Tchau")
            break;
        default:
            alert("Opção inválida, tente novamente")
            // Caminho quando não é um dos casos acima
    }













/*
    if(option == 1){
        let item = prompt("Digite o nome do item")
        items.push(item) // funciona como a variável contadora
    }
    else if (option == 2){
        if(items.length == 0){
            alert("Não existem itens cadastrados")
        } else {
            alert(items)
        }
    }
    else{
        alert("Tchau")
    }

*/
