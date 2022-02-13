// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = () => {
//     let array = []
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * 100))
//     }
//     return array
//
// }
// let result = random()
// console.log(result)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let random = () => {
//     let array = []
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * 100))
//     }
//     return array.sort((a,b)=>a-b)
//
// }
// let result = random()
// console.log(result)
//
//

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let random = () => {
//     let array = []
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.floor(Math.random() * 100))
//     }
//     return array.filter(number=>number%2===0)
//
// }
// let result = random(10)
// console.log(result)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let randomNumbers = (length, num) => {
//     let array = []
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random()*num))
//     }
//     return array.map(number => number.toString())
// }
// let result = randomNumbers(10,100)
// console.log(result)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

// let sortNums = (array, direction) => {
//     if (direction === 'asc')
//         return array.sort((a, b) => a-b) // b-a
// }
// console.log(sortNums([11, 21, 3], 'asc'))

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let sortArray = coursesAndDurationArray.sort((a,b) =>b.monthDuration-a.monthDuration)
console.log(sortArray)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterArray = coursesAndDurationArray.filter(nums=>nums.monthDuration>5)
console.log(filterArray)

