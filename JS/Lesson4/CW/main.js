// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(one,two,three) {
//
//     if (one < two && two < three) {
//         console.log(one)
//         document.write(one)}
//
//     else if (two < three && two < one) {
//         console.log(two )
//         document.write(one)
//         }
//     else{
//         console.log(three)
//         document.write(three)
//     }
//
//         }
// numbers(3, 55, 476)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// function numbers(one, two, three) {
//     if (one > two && one > three) {
//         document.write(one)
//         console.log(one)
//     } else if (two > three && two > one) {
//         document.write(two)
//         console.log(two)
//     } else {
//         console.log(three)
//         document.write(three)
//     }
// }
//
// numbers(30, 20, 20)


// - створити функцію яка повертає найбільше число з масиву

// let numbers = [1, 3, 4, 555, 32, 76, 88, 92]
//
// function numbersMax(maxx) {
//     let max = maxx[0]
//     for (const max1 of maxx) {
//         if (max1 > max) {
//             max = max1
//         }
//     }
//         return max
//
//     }
//     document.write(`${numbersMax(numbers)}`)


// - створити функцію яка повертає найменьше число з масиву


// let numbers = [12, 44, 555, 6674, 4, 51, 23]
//
// function numbersMin(minn) {
//     let min = minn[0]
//     for (const minElement of minn) {
//         if (minElement < min) {
//             min = minElement
//         }
//
//     }
//     return min
// }
//
// document.write(`${numbersMin(numbers)}`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

//
// let array = [1,2,2,33,112]
// function returnArray(array){
//     let number = 0
//     for (const arrayElement of array) {
//         number = arrayElement + number
//         }
//
//     return number
// }
// document.write(returnArray(array))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// let arrayS = [5,10]
//
// function returnNumbers(array) {
//     let number = 0
//     for (const arrayElement of array) {
//         number = arrayElement + number
//     }
//     return number/array.length
// }
// document.write(returnNumbers(arrayS))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function numbers() {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (const Element of arguments) {
//         if (Element > max) {
//             max = Element
//         }
//         if (Element < min) {
//             min = Element
//         }
//
//     }
//     console.log('max',max)
//     return min
//
// }
// document.write('мінімальне число ' + numbers(1,2,3,4,5))


// - створити функцію яка заповнює масив рандомними числами

// function random(len) {
//     let array = []
//     for (let i = 0; i < len; i++) {
//         array.push(Math.floor(Math.random() * 100))
//
//     }
//     return array
// }
// document.write(random(9))

// - створити функцію яка заповнює масив рандомними числами в
// діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// function random(len, limit) {
//     let array = []
//     for (let i = 0; i < len; i++) {
//         array.push(Math.floor(Math.random() * limit))
//     }
//     return array
// }
//
// document.write(random(22, 300))


// - Функція приймає масив та робить з нього новий масив в
// зворотньому порядку. [1,2,3] -> [3, 2, 1].


