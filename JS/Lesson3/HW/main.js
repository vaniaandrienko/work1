// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let xxx = [ 1,2,3,4,5]
// let xx = [ '1','2','3','4','5']
// let x =[1,'2',true,false,'45']
// console.log(xxx)
// console.log(xx)
// console.log(x)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let xxx = [ 1,'two',false,4,'65']
// console.log(xxx[2])


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text</div>`)
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> ${i} - text </div>`)
//     // const name = 'eblan'
//     // const a = i < 4 ? `5 ${name}`: name
//         console.log(i)
// }
//
// let i = 0
// while (i < 20){
//     i++
//     document.write(`<h1>text</h1>`)}
//
// let i = 0
// while (i < 20){
//     i++
// document.write(`<h1>${[i]} text</h1>`)}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 стрічкових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let xxx = [11,22,33,44,55,66,77,88,99,100]
// let lxxx = xxx.length
// for (let i = 0; i < lxxx; i++) {
//     console.log(xxx[i])
// }
//
// let www = ['one','two','three','four','five','six','seven','eight','nine','ten']
// for (let i = 0; i < www.length; i++) {
// console.log(www)}
//
// let eee = ['one',2,3,4,5,false,'seven',true,'nine',10]
// for (let i = 0; i < eee.length; i++) {
// console.log(eee)}

// let sss = ['one', 2, 3, 4, 5, false, 'seven', true, 'nine', 10]
// for (i = 0; i < sss.length; i++) {
//     const element = sss[i]
//     if (typeof element === "boolean") {
//         console.log(sss[i])
//     }
// }

// let fff = ['one', 2, 3, 4, 5, false, 'seven', true, 'nine', 10]
// for (let i = 0; i < fff.length; i++) {
//     if (typeof fff[i]==='number'){
//         console.log(fff[i])
//     }
// }

// let ggg = ['one', 2, 3, 4, 5, false, 'seven', true, 'nine', 10]
// for (let i = 0; i < ggg.length; i++) {
//     if (typeof ggg[i]==='string'){
//         console.log(ggg[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//
// let www=[]
// www[0] = 'one'
// www[1] = 2
// www[2] = 3
// www[3] = 4
// www[4] = 5
// www[5] = false
// www[6] = 'seven'
// www[7] = true
// www[8] = 'nine'
// www[9] = 10
// for (let i = 0; i < www.length; i++) {
//     console.log(www[i])
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//
// for( let i=1; i<11; i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

    // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i=1; i<100;i++){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i=0; i<100; i+=2){
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i=0; i<100; i++){
//     if (i % 2===0){
//     console.log(i)
//     document.write(`<div>${i}</div>`)}
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0; i<100; i++){
//     if (i%2===1){
//     console.log(i)
//     document.write(`<div>${i}</div>`)}
// }