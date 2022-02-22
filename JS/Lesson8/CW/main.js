// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById('main_header')
// addClass.classList.add('okten')
// console.log(addClass)



// b) робить шириниу елементу ul 400px

// let wit = document.getElementsByTagName('ul')
// for (const ulElement of wit) {
//     ulElement.style.width = '400px'
//     ulElement.style.border = '1px solid black'
// }
// console.log(wit)

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let witLink = document.getElementsByClassName('linkList')
// for (const witLinkElement of witLink) {
//     witLinkElement.style.width = '50%'
//     witLinkElement.style.border = '1px solid black'
// }
// d) отримує текст який зберігається в елементі з класом listElement2

// let text = document.getElementsByClassName('listElement2')
// console.log(text)
// text[0].innerHTML = '<a href="">text</a>'


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li')
// console.log(li)
// for (const liElement of li) {
//     liElement.style.background = 'gray'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let a = document.getElementsByTagName('a')
// console.log(a)
// for (let addA of a) {
//     addA.classList.add('anchor')
//     console.log(addA)
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a2 = document.getElementsByTagName('a')
// console.log(a2)
// for (const a2Element of a2) {
//     // console.log(a2Element)
//     if (a2Element.innerText === 'link3') {
//         a2Element.style.fontSize = '40px'
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a3 = document.getElementsByTagName('a')
// console.log(a3)
// for (const a3Element of a3) {
//     console.log(a3Element)
//     let xxx = a3Element.innerText
//     a3Element.classList.add(`element_${xxx}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sub = document.getElementsByClassName('sub-header')
// console.log(sub)
// for (const subElement of sub) {
//     subElement.style.color = prompt('Введіть колір фону ')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
// let sub2 = document.getElementsByClassName('sub-header')
// console.log(sub2)
// for (const sub2Element of sub2) {
// console.log(sub2Element)
//     if (sub2Element.innerText === 'content 2 segment'){
//         sub2Element.style.color = prompt('Введіть колір фону ')
//     }
//         }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cont = document.getElementsByClassName('content_1')
// console.log(cont)
// for (const contElement of cont) {
//     contElement.innerText = prompt('Введіть текст')
// }
// l) отримати елементи p та змінити їм padding на 20px
//
// let p = document.getElementsByTagName('p')
// console.log(p)
// for (const pElement of p) {
//     pElement.style.padding = '20px'
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let text2 = document.getElementsByClassName('text2')
// console.log(text2)
// text2[0].innerText = 'sep-2021'

