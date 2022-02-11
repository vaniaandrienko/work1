// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
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

// let minNumbers = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1)
//         console.log(num1)
//     } else if (num2 < num3 && num2 < num1) {
//         document.write(num2)
//
//     } else {
//         document.write(num3)
//         console.log(num3)
//     }
// }
// minNumbers(2, 3, 4)
// document.write('<br><hr>')

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const maxNumbers = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1)
//         console.log(num1)
//     } else if (num2 > num1 && num2 > num3) {
//         document.write(num2)
//         console.log(num2)
//     } else {
//         document.write(num3)
//         console.log(num3)
//     }
// }
// maxNumbers(3,5,44)
// document.write('<br><hr>')

// - створити функцію яка повертає найбільше число з масиву

// let numbers = [1, 3, 9, 5, 6]
//
// let maxNumber = (array) => {
//     let max = array[0]
//     for (let i = 1; i < array.length; i++) {
//
//         if (max < array[i]) {
//             max = array[i]
//
//         }
//     }
//     return max
// }
// console.log(maxNumber(numbers))



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const EnterArray = (array)=> {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result =  result + array[i]
//     }
//     return result
// }
// console.log(EnterArray([1,2]))



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const EnterArray = (array)=> {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result =  result + array[i]
//     }
//     return result /array.length
// }
// console.log(EnterArray([1,2,3,4]))


// - створити функцію яка заповнює масив рандомними числами


const RandomNumbers = (a,limit)=>{
    let array = []
    for (let i = 0; i < a; i++) {

        array.push(Math.floor(Math.random()*limit)
        )
    }
    return array
}
console.log(RandomNumbers(20,10))







// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
// function EnterArray(a) {
//     let b = []
//     for (let i = a.length - 1; i >= 0; i--) {
//         b.push(a[i])
//     }
//     return b
// }
//
// console.log(EnterArray([1, 3, 5]))