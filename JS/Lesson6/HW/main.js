// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// let wordsLenght = (a,b,c)
// console.log(wordsLenght.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
//
// let upperCase = a.toUpperCase()
// let upperCase2 = b.toUpperCase()
// let upperCase3 = c.toUpperCase()
//
// console.log(upperCase,upperCase2,upperCase3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c = 'JAVASCRIPT IS COOL'
//
// let lowerCase = a.toLowerCase();
// let lowerCase2 = b.toLowerCase();
// let lowerCase3 = c.toLowerCase();
// console.log(lowerCase,lowerCase2,lowerCase3)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let number = str.replaceAll(' ','');
// console.log(number)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToarray = (str) =>{
//     return str.split(' ')
// }
// let str = ('Каждый охотник желает знать')
// let arrayStr = stringToarray(str)
// console.log(arrayStr)

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length)=>{
//     return str.substring(str,length)
// }
// let str = 'Каждый охотник желает знать'
// console.log(delete_characters(str,7))
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str)=> {
//     let zamina = str.split(' ').join('-').toUpperCase()
//     return zamina
// }
// let str = "HTML JavaScript PHP"
// console.log(insert_dash(str))
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let perUp = (str) => {
//     let up = str.charAt(0).toUpperCase() + str.slice(1);
//     return up
// }
// let str = 'java is very difficult to study'
// console.log(perUp(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let returnLine = str.charAt(0).toUpperCase()+str.slice(1)
    return returnLine
}
let str = 'java is very difficult to study'
console.log(capitalize(str))

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));