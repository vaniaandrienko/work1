let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get('data'));
console.log(post)


let postContainer = document.getElementsByClassName('post')[0]
postContainer.innerText = JSON.stringify(post)

let commentsContainer = document.getElementsByClassName('comments')[0]
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(json => {
        for (const comment of json) {
            let commentContainer = document.createElement('li');
            commentContainer.classList.add('commentContainer')
            commentContainer.innerText = comment.body;
            commentsContainer.append(commentContainer);
        }
    });