// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let text = document.getElementById('text');
text.onclick = function () {
    text.style.display = 'none'
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn1 = document.getElementById('btn1');
btn1.style.width = '80px'
btn1.style.height = '40px'
btn1.style.background = 'orange'
btn1.onclick = function () {
    text.style.display = 'none'
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

let btn2 = document.getElementById('btn2');
btn2.style.width = '100px'
btn2.style.marginLeft = '20px'
btn2.style.height = '40px'
btn2.style.background = 'orange'
btn2.onclick = function () {
    let age = document.getElementById('age').value;
    if (age < 18) {
        document.body.innerHTML = 'підростеш зайдеш'
    } else {
        document.body.innerHTML = 'доступ відкрито'
    }

}
// - Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');
titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]

let div1 = document.createElement('div');
for (const comment of comments) {
    let div2 = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let br = document.createElement('br');
    h3.innerHTML = comment.title
    p.innerHTML = comment.body
    button.innerHTML = 'все забув'


    button.onclick = () => {
        p.classList.add('pHidden')
    }
    div2.append(h3, p, button)
    div1.append(div2,br)
}
document.body.appendChild(div1)





