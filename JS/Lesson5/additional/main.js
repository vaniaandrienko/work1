// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.


const Elements = (a, b) => {
    if (a !== undefined && b === undefined) {
        console.log(a)
    } else if (a !== undefined && b !== undefined) {
        console.log(a + b)
    }

}
Elements(1,6)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array12 =[1,3,4,5]
let array22 =[2,4,5,6]

const EnterArray = (array1,array2)=>{    // let array1 = array12
    let array =[]
    for (let i = 0; i < array1.length; i++) {
        array.push([i]+array2[i])
    }
    return array
}

console.log(EnterArray(array12,array22))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let array33 = [{name: 'Dima', age: 13}, {model: 'Camry'}]
console.log(array33[0]["name"])
const EnterArray1 = (a)=>{
    let array = []
    for (const aElement of a) {
        for(const item in aElement){ // витягує ключ (об'єкти)
            // array.push(item)
            array.push(aElement[item])
        }
    }
    return array
}
console.log((EnterArray1(array33)))
