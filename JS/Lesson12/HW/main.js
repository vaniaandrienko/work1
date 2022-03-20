// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(posts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        for (const post of posts) {
            console.log(post)
            let divCard = document.createElement('div');
            divCard.classList.add('post')
            divCard.innerHTML = `
            <h3>ID: ${post.id}</h3>
            <h4>${post.title}</h4>
            <h5>${post.body}</h5> `
            wrapper.append(divCard)
            document.body.append(wrapper)
        }

    })



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        for (const comment of comments) {
            let divCard = document.createElement('div');
            divCard.classList.add('comment')
            divCard.innerHTML = `
            <h3>${comment.id}</h3>
            <h3>${comment.name}</h3>
            <h3>${comment.email}</h3>
            <h3>${comment.body}</h3>`
            wrapper.append(divCard)
            document.body.append(wrapper)

        }
    })