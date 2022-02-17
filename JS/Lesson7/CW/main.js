// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars(model, virobnuk, year, maxspeed, volume) {
//
//     this.model = model
//     this.virobnuk = virobnuk
//     this.year = year
//     this.maxspeed = maxspeed
//     this.volume = volume
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function (){
//         for (const inf in this)
//             if (typeof this[inf] !== 'function')
//                 console.log(`${inf}-${this[inf]}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxspeed = this.maxspeed + newSpeed
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
//
//
// }
//
// let car = new Cars('cx-5', 'mazda', 2016, 194, 2.5,)
// car.drive()
// car.info()
// car.increaseMaxSpeed(20)
// car.changeYear(1984)
// car.addDriver('Ben')
// console.log(car)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars2 {
//
//
//     constructor(model, virobnuk, year, maxspeed, volume) {
//
//         this.model = model;
//         this.virobnuk = virobnuk;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info() {
//         for (const inf in this) {
//             console.log(`${inf}-${this[inf]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car = new Cars2('cx-5', 'maxda', 2016, 194, 2.5)
// car.drive()
// car.info()
// car.increaseMaxSpeed(30)
// car.changeYear(2017)
// car.addDriver('pet')
// console.log(car)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class Princes {
    constructor(name, year, sizefoot) {
        this.name = name
        this.year = year
        this.sizefoot = sizefoot
    }
}

let princes1 = new Princes('Eva',15,36)
let princes2 = new Princes('Vika',12,38)
let princes3 = new Princes('Olya',15,35)
let princes4 = new Princes('Katya',16,34)
let princes5 = new Princes('Anastasia',18,36)
let princes6 = new Princes('Vika',20,38)
let princes7 = new Princes('Edita',10,40)
let princes8 = new Princes('Yulia',11,32)
let princes9 = new Princes('Christya',13,34)
let princes10 = new Princes('Anfisa',15,35)
let arrayPrinces = [princes1,princes2,princes3,princes4,princes5,princes6,princes7,princes8,princes9,princes10]
console.log(arrayPrinces)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name,age,findShoes) {

        this.name = name;
        this.age = age;
        this.findShoes = findShoes;

    }

}

let prince = new Prince('Ben',24,36)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let findPrinces = (arrayPrinces,prince)=>{
    for (const arrayPrince of arrayPrinces) {
        if (arrayPrince.sizefoot === prince.findShoes){
            return `You Princes ${arrayPrince.name}`
        }
    }
}
console.log(findPrinces(arrayPrinces,prince))


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let findPrinces2 = arrayPrinces.find((arrayPrince) => arrayPrince.sizefoot === prince.findShoes)
console.log(findPrinces2)