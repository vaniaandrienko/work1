// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b

// function calculatorS(a, b) {
//     let S = a * b
//     return S
// }
//
// document.write(calculatorS(2,3))

//- створити функцію яка обчислює та повертає площу кола з радіусом r s=pr2

// function calculatorS(r) {
//     let p = 3.14
//     let S = p * Math.pow(r, 2)
//     return S
// }
//
// document.write('Площа круга: ' + calculatorS(2))


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calculator(h, r) {
//     let S = 2 * (3.14 * h * r)
//     return S
//
// }
// document.write('Площу циліндра' + calculator(10,20))

//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [1,2,3,4,5]
// function marray(array){
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//
//     }
// }
// marray(array)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (a){
//     document.write(`<p>${a}</p>`)
// }
// paragraph('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//
// function uliLI(a){
//     document.write(`<ul>`)
//         document.write(`<li>${a}</li>`)
//         document.write(`<li>${a}</li>`)
//         document.write(`<li>${a}</li>`)
//     document.write(`<ul>`)
//
// }
// uliLI('TEXT')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function uliLi(a,b){
//     document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${a}</li>`)
//         document.write('<hr>')
//     }
//
//     document.write(`</ul>`)
//
//     }
// uliLi('qwerty',3)


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let xxx = [1, 2, 'tree', false, true]
//
// function elements(element) {
//     document.write(`<ol>`)
//     for (let i = 0; i < element.length; i++) {
//         document.write(`<li>${element[i]}</li>`)
//
//     }
//
//     document.write(`</ol>`)
//
// }
//
// elements(xxx)


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let massivs = [{id:1,name:'Ben',age:26}]
function objectM (massiv){
    for (const massivElement of massiv) {

        document.write(`<div>${massivElement.id} : ${massivElement.name} - ${massivElement.age}</div>`)

    }
}
objectM(massivs)