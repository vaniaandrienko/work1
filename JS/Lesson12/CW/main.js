//
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при
//     кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responce => {
        return responce.json()
    })
    .then(posts => {
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper')
        for (const post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('card')
            divCard.innerHTML = `
        <h3>${post.id}</h3>
        <h4>${post.title}</h4>
        <h4>${post.body}</h4>`

            let button = document.createElement('button');
            button.innerText = 'Enter'
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(responce => responce.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComments = document.createElement('div');
                                divComments.classList.add('cardComments')
                                divComments.innerHTML = `
                            <h3>${comment.id}</h3>
                            <h4>${comment.name}</h4>
                            <h4>${comment.email}</h4>
                            <h4>${comment.body}</h4>`
                                divCard.appendChild(divComments)

                            }
                            button.disabled = true
                        }
                    })
            }

            wrapper.appendChild(divCard);
            document.body.appendChild(wrapper);
            divCard.appendChild(button)
        }
    })