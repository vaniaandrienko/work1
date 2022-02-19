// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let content = (document.getElementById('content'));
// let el = content.innerHTML
// console.log(el)
// -- отримує текст з блоку з id "rules"

// let rules = (document.getElementById('rules'));
// let al = rules.innerHTML
// console.log(al)


// -- замініть текст параграфа з id 'content' на будь-який інший

let content = (document.getElementById('content'));
let el = content.innerText = 'abcd'
console.log(el)

// -- замініть текст параграфа з id 'rules' на будь-який інший
let rules = (document.getElementById('rules'));
let al = rules.innerText = 'PPPPPPPPPPPPP'
console.log(al)

// -- змініть кожному елементу колір фону на червоний
let Background = document.body.children;
for (const backgroundElement of Background) {
    backgroundElement.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
let Color = document.body.children
for (const colorElement of Color) {
    colorElement.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let Rules = document.getElementById('rules');
console.log(Rules.classList)


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let Rules2 =document.getElementsByClassName('fc_rules')
for (const rule of Rules2) {
    rule.style.color = 'white'

}