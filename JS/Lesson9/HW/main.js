// Все робити за допомоги js.
// - створити блок,

let h1 = document.createElement('h1');
h1.innerText = 'TEXT'

//     - додати йому класи wrap, collapse, alpha, beta

h1.classList.add('wrap')
h1.classList.add('collapse')
h1.classList.add('alpha')
h1.classList.add('beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

h1.style.background = 'green'
h1.style.color = 'white'
h1.style.fontSize = '40px'

// - додати цей блок в body.
document.body.append(h1)

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(h1.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


let array = ['Main', 'Products', 'About us', 'Contacts']
let elementsByClassNameElement = document.getElementsByClassName('menu')[0];
for (const ar of array) {
    let li = document.createElement('li');
    li.innerText = ar
    elementsByClassNameElement.appendChild(li)
}

// - Є масив

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const courses of coursesAndDurationArray) {
    let htmlDivElement = document.createElement('div');
    htmlDivElement.innerText = `${courses.title} ${courses.monthDuration}`
    document.body.append(htmlDivElement)

}

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray2) {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = courses.title
    let p = document.createElement('p');
    p.innerText = courses.monthDuration
    div.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')
    div.append(h1)
    div.append(p)
    document.body.append(div)
}



