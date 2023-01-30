let firstNumber = 7
let secondNumber = -10
let thirdNumber = 4

let averageArithmetic = Math.pow(Math.abs(firstNumber), 3) + Math.pow(Math.abs(secondNumber), 3) + Math.pow(Math.abs(thirdNumber), 3) / 3
console.log("Среднее арифметическое модулей кубов чисел", firstNumber + ",", secondNumber + ",", thirdNumber, "равно:",averageArithmetic.toFixed(2))
let averageGeometrical = Math.cbrt(Math.abs(firstNumber) * Math.abs(secondNumber) * Math.abs(thirdNumber))
console.log("Среднее геометрическое квадратов чисел", firstNumber + ",", secondNumber + ",", thirdNumber, "равно:", averageGeometrical.toFixed(2))