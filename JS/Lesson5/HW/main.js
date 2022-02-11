// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let sTriangle = (a, b) =>{
    return a*b
}
console.log(sTriangle(10, 2))
document.write('Площа прямокутника -' + sTriangle(10, 2))
document.write(`<br><hr>`)


// - створити функцію яка обчислює та повертає площу кола

let sCircle = (r) => 3.14 * Math.pow(r, 2)
console.log(sCircle(3))
document.write('Площа кола -' + sCircle(3))
document.write(`<br><hr>`)


// - створити функцію яка обчислює та повертає площу циліндру

let sCylinder = (r, h) => 2 * 3.14 * r * h
console.log(sCylinder(2, 4))
document.write('Площа циліндра -' + sCylinder(2, 4))
document.write(`<br><hr>`)


// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 3, true, false, 'car', 'car2']

let nArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(array[i])
    }
}
nArray(array)
document.write(`<br><hr>`)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => {
    document.write(`<p>${text}</p>`)
    document.write(`<hr>`)

}
paragraph('Mazda')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let threeElement = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
    document.write(`<hr>`)
}
threeElement('Mazda 2')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let threeElement2 = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 5; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
    document.write(`<hr>`)
}
threeElement2('Mazda 3')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let elements = [1, 2, 3, 4, 5, true, 'car', false]

let enterArray = (array) => {
    document.write(`<ol>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ol>`)

}
enterArray(elements)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let element = [{id: 1, name: 'Andre', age: 23}, {id: 2, name: 'Pavlo', age: 33}]

let enterArray2 = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name}.${arrayElement.age} </div>`)
    }
}
enterArray2(element)