let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('data'));
console.log(user)


let elements = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];
elements.innerHTML = `${JSON.stringify(user)}`

let postButton = document.createElement('button');
postButton.classList.add('btn')
postButton.innerText = 'post of current user'
postButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(json => {
            for (const post of json) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post')
                postContainer.innerText = `${post.title}`
                let postButton = document.createElement('button');
                postButton.classList.add('btn2')
                postButton.innerText = 'post-details'
                postButton.onclick=function (){
                    location.href=`./post-details.html?data=${JSON.stringify(post)}`
                }
                postContainer.append(postButton)
                postsContainer.append(postContainer)

            }
        })
}
elements.append(postButton)



