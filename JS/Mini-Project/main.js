let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.getElementsByClassName('wrapper')[0]
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        for (const user of json) {
            let userCard = document.createElement('div');
            userCard.classList.add('userCard')
            userCard.innerText=`${user.id} - ${user.name}`
            let buttonUser = document.createElement('button');
            buttonUser.classList.add('buttonUser')
            buttonUser.innerText = 'Enter'
            buttonUser.onclick = function () {
                location.href = `./user-details.html?data=${JSON.stringify(user)}`
            }
            wrapper.append(userCard)
            wrapper.append(buttonUser)
            document.body.append(wrapper)
        }
    })






