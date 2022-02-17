// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// let user1 = new User(1, 'Ben', 'Johnson', 'ben@.gmail', '0971231211')
// let user2 = new User(2, 'Bon', 'Johnson', 'bon@.gmail', '0971231212')
// let user3 = new User(3, 'Bin', 'Johnson', 'bin@.gmail', '0971231213')
// let user4 = new User(4, 'Bed', 'Johnson', 'bed@.gmail', '0971231214')
// let user5 = new User(5, 'Bred', 'Johnson', 'bred@.gmail', '0971231215')
// let user6 = new User(6, 'Brown', 'Johnson', 'brown@.gmail', '0971231216')
// let user7 = new User(7, 'Bob', 'Johnson', 'bob@.gmail', '0971231217')
// let user8 = new User(8, 'Big', 'Johnson', 'big@.gmail', '0971231218')
// let user9 = new User(9, 'Boon', 'Johnson', 'boon@.gmail', '0971231219')
// let user10 = new User(10, 'Bend', 'Johnson', 'bend@.gmail', '0971231210')
//
// let userArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
// console.log(userArray)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser = userArray.filter((user)=>
// {
//     return user.id % 2 === 0
// })
// console.log(filterUser)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUser = userArray.sort((a,b)=>a.id-b.id)
// console.log(sortUser)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone,order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order=order
    }
}
let user = new Client (1, 'Ben', 'Johnson', 'ben@.gmail', '0971231211', ['mazda','car'])
let user1 = new Client(1, 'Ben', 'Johnson', 'ben@.gmail', '0971231211',[''])
let user2 = new Client(2, 'Bon', 'Johnson', 'bon@.gmail', '0971231212',22)
let user3 = new Client(3, 'Bin', 'Johnson', 'bin@.gmail', '0971231213',13)
let user4 = new Client(4, 'Bed', 'Johnson', 'bed@.gmail', '0971231214',55)
let user5 = new Client(5, 'Bred', 'Johnson', 'bred@.gmail', '0971231215',76)
let user6 = new Client(6, 'Brown', 'Johnson', 'brown@.gmail', '0971231216',87)
let user7 = new Client(7, 'Bob', 'Johnson', 'bob@.gmail', '0971231217',54)
let user8 = new Client(8, 'Big', 'Johnson', 'big@.gmail', '0971231218',44)
let user9 = new Client(9, 'Boon', 'Johnson', 'boon@.gmail', '0971231219',37)
let user10 = new Client(10, 'Bend', 'Johnson', 'bend@.gmail', '0971231210',89)

let userArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10]
console.log(userArray)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let sortUser = userArray.sort((a,b)=>a.order.length-b.order.length)

console.log(sortUser)





