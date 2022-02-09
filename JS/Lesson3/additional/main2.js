// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

//a
// let numbers=[]
// for (let i = 1; i < 50; i++) {
//     if ( i % 2 === 0)
//     document.write([i])
// }

//b
// let numbers=[]
// for (let i = 1; i < 50; i++) {
//     if ( i % 2 === 1)
//     document.write([i])
// }

//c
// let numbers =[]
// for (let i = 0; i < 20; i++) {
//     numbers.push(Math.round( Math.random() * 100 ))
// }
// document.write(numbers)

//d
// let numbers =[]
// for (let i = 0; i < 20; i++) {
//     numbers.push(Math.floor( Math.random() *(732-8+1)+8 ))
//
// }
//     document.write(numbers)


// 2. Вивести за допомогою console.log кожен третій елемен

//  let numbers =[]
// for (let i = 0; i < 20; i+=3) {
//     numbers.push(Math.floor( Math.random() *(732-8+1)+8 ))
//
// }
// console.log(numbers)

///3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let numbers =[]
// for (let i = 0; i < 20; i+=3) {
//     if (i%2===0)
//     numbers.push(Math.floor( Math.random() *(732-8+1)+8 ))
//
// }
// console.log(numbers)


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let numbers =[]
// for (let i = 0; i < numbers.length; i+=3) {
//     if (numbers[i]%2===0) {
//         numbers.push(numbers[i])
//     }}
// console.log(numbers)

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.


let massiv = [100,250,50,168,120,345,188];
let mathe = 0;
for (u = 0; u < massiv.length; u++){
    mathe = mathe + massiv[u];
};
console.log(mathe);
mathe = +mathe / massiv.length;
console.log(mathe);