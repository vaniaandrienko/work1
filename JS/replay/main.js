//HW/1/////////////////

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true


// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//
// let hello = 'hello'
// let owu = 'owu'
// let com = 'com'
// let ua = 'ua'
// let one = 1
// let ten = 10
// let number1 = -999
// let number2 = 123
// let number3 = 3.14
// let number4 = 2.7
// let number5 = 16
// let trr = true
// let fal = false
//
// console.log(hello, owu, com, ua, one, ten, number1, number2, number3, number4, number5, trr, fal)
// document.write(hello, owu, com, ua, one, ten, number1, number2, number3, number4, number5, trr, fal)
// alert(hello)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//
// let firName = 'Vania'
// let middleName = 'Olegovich'
// let lastName = 'Andrienko'
//
// let person = firName +' '+ middleName+' ' + lastName
// document.write(person)


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let firName = prompt('Введіть своє імя')
// let middleName = prompt('Введіть по батькові')
// let age = prompt('Введіть ваш вік')
// document.write('Вітаю ' + firName + ' ' + middleName + ' Тобі ' + age + 'років')

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 >= 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(123 === '123');
// console.log(123 == '123');

//CW/1/////////////////

//
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
//
// let numbers = [Math.floor(Math.random() * 10), Math.random() * 10, 43, 44, 45, 45, 42, 33, 10, 55]
// let result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]
// console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
//
// let book = {
//     name: 'King',
//     page: 777,
//     ganre: 'lol'
// }
// console.log(book)


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     name: 'King',
//     page: 777,
//     ganre: 'lol',
//     autors:'Loli Pop'
// }
// console.log(book)

//
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
//
// let book = [
//  {
//     name: 'King',
//     page: 777,
//     ganre: 'lol',
//     autors: 'Loli Pop'
// },
//      {
//         name: 'Kings',
//         page: 777,
//         ganre: 'loli',
//         autors: 'Loli Popy'
//     },
//      {
//         name: 'Kings',
//         page: 777,
//         ganre: 'loli',
//         autors: 'Loli Popy'
//     }
//
//
// ]
// console.log(book[0])
// console.log(book[1])
// console.log(book[2])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
//
// let height = 23
// let witdth = 10
// let S = height*witdth
// console.log(S)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
//
// let heightC = 10
// let dC = 4
// //pr2h
// let v = 3.14 * heightC * dC
// console.log(v)


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
// let n = 3
// let m = 4
// let k = (n**2)*(m**2)
// console.log(Math.sqrt(k))


//HW-2
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// let time = prompt('Введіть число від 0 до 59')
// if (time >= 0 && time <= 15){
//     console.log('1 частина')
//
// }else if (time >15 && time <= 30  ){
//     console.log('2 частина')
// }else if (time >= 30 && time <= 45){
//     console.log('3 частина')
// }else if (time >=45 && time <= 59){
//     console.log('4 частина')
// }

//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = prompt('Введіть число від 1 до 31')
// if (day >= 1 && day <=11){
//     console.log('1 частина місяця')
// }else if (day>=12 && day <=21){
//     console.log('2 частина місяця')
// }else if(day >= 22 && day <=31){
//     console.log('3 частина місяця')
// }else{
//     console.log('невідомий місяця')
// }


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// let test = false
// if (test === true) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
//
//
// test ?  console.log('Вірно') : console.log('Невірно')

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = +prompt('1,0,-3')
//
// if (a !== 0) {
//     console.log('вірно')
// } else {
//     console.log('невірно')
// }
//
// a !== 0 ? console.log('вірно') : console.log('невірно')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
//
// let days = prompt(' Введіть число від 1 до 7')
//
// switch (days) {
//     case '1' :
//         console.log('понеідлок : спати')
//         break;
//     case '2 ':
//         console.log('вівторок : спати')
//         break;
//     case '3 ':
//         console.log('середа : спати')
//         break;
//     case '4' :
//         console.log('четвер : спати')
//         break;
//     case '5' :
//         console.log('пятниця : спати')
//         break;
//     case '6' :
//         console.log('субота : спати')
//         break;
//     case '7' :
//         console.log('неділя : спати')
//         break;
//     default:
//         console.log('sfsdfsfs')
//
// }

//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// let ear = prompt('введіть рік')
// if (ear % 4 === 0 ){
//     console.log('високосний')
// }else{
//     console.log('ffff')
// }


//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let name = prompt('Яка «офіційна» назва JavaScript?')
//
// if (name === 'ECMAScript'){
//     alert('Правильно!')
// }else {
//     alert('Не знаєте? ECMAScript!')
// }


//CW-2//////////////////


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//
// let numbers = +prompt('введіть число 1')
// let numbers2 = +prompt('введіть число 2')
// if (numbers > numbers2){
//     console.log('1 > 2')
// }else if(numbers < numbers2 ){
//     console.log('2>1')
// }else if (numbers === numbers2){
//     console.log('1=2')
// }


//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
// let apartments = prompt('введіть номер квартири')
//     if (apartments >= 1 && apartments <=20){
//         alert('1 підзд')
//     }else if (apartments >= 21 && apartments <= 48){
//         alert('2 підїзд')
//     }else if (apartments >= 49 && apartments <= 90){
//         alert('3 підїзд')
// }else{
//         alert('квартира не з цього будинку')
//     }

//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
//
// let number = +prompt('введіть число')
// if (number === 10){
//     console.log('вірно')
// }else{
//     console.log('невірно')
// }


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
// let temp = prompt('введіть вашу температуру')
// if (temp>=10 && temp <=20){
//     console.log('вчитись')
// }else{
//     console.log('дома')
// }
//  temp >= 10 && temp<=20 ? console.log('вчитись') : console.log('дома')


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
//
//
// let game = +prompt('введіть число від 1 до 5 ')
// switch (game) {
//     case 1 :
//         console.log('car')
//         break;
//     case 2 :
//         console.log('phone')
//         break;
//     case 3:
//         console.log('building')
//         break;
//     case 4:
//         console.log('pencil')
//         break;
//     case 5:
//         console.log('apple')
//         break;
//     default:
//         console.log('не дійсне число')
// }


//HW-3////////

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
//
// let array = [1,2,3,4,5]
// let array2 = ['one','two','three','four','five']
// let array3 = [1,3,true,false,'five']
//
// console.log(array,array2,array3)
//
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//
// let array = [11, 22, 33, 44, 55, 66, false, true]
// console.log(array[6])
//
//
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text</div>`)
// }
//
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}-text</div>`)
// }
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
//
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
//
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = [ 11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
//
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array = ['one','two','three','four','five','six','seven','eight','nine','ten',]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array = [ 1,2,3,4,'five','six','seven',true,false]
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [ 1,2,3,4,'five','six','seven',true,false]
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (typeof arrayElement === 'boolean'){
//         console.log(array[i])
//     }
//
// }
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [ 1,2,3,4,'five','six','seven',true,false]
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (typeof arrayElement === 'number'){
//         console.log(array[i])
//     }
//
// }
//
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let array = [ 1,2,3,4,'five','six','seven',true,false]
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (typeof arrayElement === 'string'){
//         console.log(array[i])
//     }
//
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = []
// array[0]= 1
// array[1]= false
// array[2]= 'three'
// array[3]= true
// array[4]= 5
// array[5]= 'six'
// array[6]= 7
// array[7]= false
// array[8]= 9
// array[9]= 'ten'
//
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(array[i])
//
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
//
// for (let i = 1; i < 11; i++) {
//     console.log(`${i}`)
// }
//
//
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1; i < 101; i++) {
//     console.log(`${i}`)
//     document.write(`<div>${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${i}`)
//     document.write(`<div>${i}</div>`)
// }
//
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0)
//         console.log(`${i}`)
//     document.write(`<div>${i}</div>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1)
//         console.log(`${i}`)
//     document.write(`<div>${i}</div>`)
//         }

//CW-3///////

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
// let array = [2,17,13,6,22,31,45,66,100,-18]
// let i = 0
// while (i<array.length){
//     console.log(array[i])
//     i++
// }
//     2. перебрати його циклом for
// let array = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let array = [2,17,13,6,22,31,45,66,100,-18]
//
// let i = 0
// while (i<array.length){
//     if (i % 2 !== 1){
//         console.log(array[i])
//     }
//     i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// let array = [2,17,13,6,22,31,45,66,100,-18]
//
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 1 )
//     console.log(array[i])
//
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i = 0
// while (i < array.length) {
//     if (i % 2 === 0)
//         console.log(array[i])
//     i++
//
// }
//
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0)
//         console.log(array[i])
//
// }
//
//
// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0){
//         array[i] = 'okten'}
// }
// for (let i = array.length-1; i>=0; i--){
//     console.log(array[i])}
//
// 8. вивести масив в зворотньому порядку.
//
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

//HW-4////////////////////
//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc1(a, b) {
//     return a * b
// }
//
// console.log(calc1(10,20))
//
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc2(r) {
//     let S = 3.14 * Math.pow(r, 2)
//     return S
// }
//
// console.log(calc2(2))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function calc3(h, r) {
//     let S = 2 * 3.14 * h * r
//     return S
// }
// console.log(calc3(3, 3))
// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [1, 2, 3, 4, 5, 6,]
//
// function enter(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// enter(array)
//
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function par(a) {
//     document.write(`<p>${a}</p>`)
// }
// par('text')
//
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function lil(a){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// lil('text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function lil(a, b) {
//     document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// lil('text',3)
//
//
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
//
// let array = [1,2,34,4,'4324',false,true]
// function buildOl(arr){
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//
//     }
//     document.write(`</ol>`)
// }
// buildOl(array)
//
//
//
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
//
// let array = [{id:1,name:'vasa',age:23},{id:2,name:'rayan',age:21},{id:3,name:'vika',age:30}]
//
// function enterArray(arr){
//     for (const arrElement of arr) {
//
//     document.write(`<div>Id - ${arrElement.id} Name : ${arrElement.name} Age : ${arrElement.age} </div>`)
//     }
//
// }
// enterArray(array)


//CW-4/////////////////

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(a, b, c) {
//     if (a < b && a < c) {
//         console.log('Найменше число ' + a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
//
// }
//
// numbers(33, 41, 15)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numbers1(one,two,three){
//     if (one > two && one >three ){
//         console.log(one)
//     }else if(two>one && two >three){
//         console.log(two)
//     }else{
//         console.log(three)
//     }
// }
//
// numbers1(2,5,4)

// - створити функцію яка повертає найбільше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,2,10]
// function enterAr(arr){
//     let number = 0
//     for (const arrElement of arr) {
//         number = arrElement + number
//     }
//     return number
// }
// console.log(enterAr(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [1,2,3]
// function reverseAr(arr){
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }
// reverseAr(array)


