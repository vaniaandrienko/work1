// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let user = document.forms.userF;
let key = 'key'

user.onsubmit = function (e) {
    e.preventDefault()
    let nameInput = e.target.name.value;
    let ageInput = e.target.age.value;
    let users = {nameInput, ageInput}
    localStorage.setItem(key, JSON.stringify(users))
}
let btn1 = document.getElementById('btn');
btn1.style.background = 'yellow'
btn1.style.borderRadius = '10px'


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let carModel = document.forms.carModel;
let keycars = JSON.parse(localStorage.getItem('cars')) || []

carModel.onsubmit = function (e) {
    e.preventDefault()
    let modelCar = e.target.model.value;
    let typeCar = e.target.type.value;
    let volumeCar = e.target.volume.value;
    let car = {modelCar, typeCar, volumeCar}
    keycars.push(car)
    localStorage.setItem(car, JSON.stringify(keycars))
}
let btn2 = document.getElementById('btn2');
btn1.style.background = 'yellow'
btn1.style.borderRadius = '10px'