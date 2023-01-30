let giantNumber = 367
let proccessNumber = giantNumber % 100
let firstNumber = Math.floor(giantNumber / 100)
let middleNumber = Math.floor(proccessNumber / 10)
let lastNumber = proccessNumber % 10
//console.log(firstNumber)
//console.log(middleNumber)
//console.log(lastNumber)
let plusNumbers = firstNumber + middleNumber + lastNumber
let mutliplyNumbers = firstNumber * middleNumber * lastNumber
console.log("Сумма цифр трёхначного числа", giantNumber, "равна:", plusNumbers)
console.log("Произведение цифр трёхначного числа", giantNumber, "равна:", mutliplyNumbers)