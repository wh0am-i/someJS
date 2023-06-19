/*1. Crie uma função que recebe 2 números como argumento e retorne se o primeiro é
maior ou igual ao segundo.*/
function atv1(num1, num2) return num1 > num2
/*2. Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
uma validação para não permitir número negativo, e quando tiver retorna uma
mensagem de erro.*/
function atv2(idade) return (idade - 1) >= 0 ? idade * 365 : "Erro!"
/*3. Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,
exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.*/
function atv3(mes) {
    meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    return meses[mes - 1]
}
/*4. Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/
function atv4(input) {
    if (typeof input === "boolean") return !input
    else if (typeof input === "number") return input * (-1)
    else return "Booelano ou Número esperados, mas o parâmetro é do tipo " + typeof input
}
/*5. Escreva uma função que recebe dois números inteiros não negativos e realize a
multiplicação deles. Porém não pode utilizar o operador de multiplicação.*/
function atv5(int, int2) {
    var output = 0
    for (var i = 1; i <= int2; i++) {
        console.log(i)
        output += int
    }
    return output
}
/*6. Escreva uma função que recebe 2 parâmetros. O primeiro parâmetro é o elemento
que repetirá, enquanto o segundo será o número de vezes que haverá repetição.
Um array serpa retornado.
Exemplo:
repetir(“teste”, 2 ) // retorna [“teste”, “teste”]
repetir( 4, 3 ) // retorna[4 ,4, 4]*/
function atv6(atb, num) {
    output = []
    for (var i = 0; i < num; i++) {
        output.push(atb)
    }
    return output
}
/*7. Crie uma função que recebe um array de elementos e retorne um array somente
com os números presentes no array recebido como parâmetro.
Exemplo:
filtro([“Js”, 2, “hoje”, 4, 5, 7, “teste”] // retorno [2,4,5,7]
filtro([“teste”,”tentativa”] // retorno []*/
function atv7(array) {
    var output = []
    for (i in array) {
        if (typeof array[i] === "number") {
            output.push(array[i])
        }
    }
    return output
}
/*8. Escreva uma função que recebe um array de números e retorna a soma de todos os
números desse array.*/
function atv8(array) {
    var output = 0
    array.forEach(element => { output += element });
    return output
}
/*9. Crie uma função que recebe um array de números e retorna o segundo maior
número presente nesse array.*/
function atv9(array) return Math.max(...array)
/*10. Crie uma função que recebe um objeto com os estudantes e suas notas. as notas de
cada estudante estarão num array. Calcule a média da nota de cada aluno e retorne
um objeto com os atributos nome e média, que indica o aluno que tem o melhor
desempenho nas notas.
Exemplo:
melhoresAlunos({
Augusto:[8, 7.6, 8.9, 6] // media 7.625
Mariana:[9, 6.6, 7.9, 8] // media 7.875
Carla:[7, 7, 8, 9] // media 7.75
}) // retorno {nome: “Mariana”, media: 7.875}*/
function atv10(obj) {
    var media = 0
    var mediaFinal = 0
    var objLen = 0
    var nome = ""
    for (i in obj) {
        media = 0
        for (x in obj[i]) {
            media += obj[i][x]
            objLen = x
        }
        media =media / (parseInt(objLen)+1)
        if (media > mediaFinal) {
            mediaFinal = media
            nome = i
        }
    }
    return { nome: nome, media: mediaFinal }
}
console.log(atv1(1, 2))
console.log(atv2(1))
console.log(atv3(2))
console.log(atv4(false))
console.log(atv5(4, 2))
console.log(atv6("Teste", 3))
console.log(atv7(['Js', 2, 'hoje', 4, 5, 7, 'teste']))
console.log(atv8([1, 2, 3, 4]))
console.log(atv9([3, 4, 11, 6, 1, 10, 2]))
console.log(atv10({
    Augusto: [8, 7.6, 8.9, 6], // media 7.625
    Mariana: [9, 6.6, 7.9, 8], // media 7.875
    Carla: [7, 7, 8, 9] // media 7.75
}))
