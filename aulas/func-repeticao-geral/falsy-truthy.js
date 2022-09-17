/*
Falsy
Quando o valor é considerado false em contextos onde um booleano é 
obrigatorio (condicionais e loop)

false
0
-0
""
null
undefined
NaN
*/

console.log(undefined ?'verdadeiro' : 'falso') // retorna false

/*
Truthy
Quando um valor é considerado true em contextos onde um booleano é
obrigatório (condicionais e loops)
true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/

console.log("false" ?'verdadeiro' : 'falso')
