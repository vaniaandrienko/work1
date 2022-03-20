let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.getElementsByClassName('wrapper')[0]
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        for (const user of json) {
            let userCard = document.createElement('div');
            userCard.classList.add('userCard')
            let href = document.createElement('a');
            href.innerText = `${user.id} - ${user.name}`
            href.href = `./user-details.html?data=${JSON.stringify(user)}`

            wrapper.append(userCard)
            userCard.append(href)
            document.body.append(wrapper)


        }
    })

// let buttonUser = document.createElement('button');
// buttonUser.classList.add('buttonUser')
// buttonUser.innerText = 'Enter'
// buttonUser.onclick =openUserLink(user)
// function openUserLink(data) {
//     let url = `./user-details.html?data=${JSON.stringify(data)};`
//     return function() { open(url, "_blank"); }
// }




