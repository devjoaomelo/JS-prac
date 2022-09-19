
let items = [];

for(let item = 0; item < 5; item++) { //enquanto a váriável item for < 0 item++ incremento
   let itemName= prompt("Digite o item " + (item + 1))
   items[item] = itemName // array items de número [variável de controle] recebe texto digitado no itemName
}

alert(items) //mostra a lista toda
alert(items[1]) // posição da lista