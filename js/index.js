function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => DisplayUsers2(data));
}

function DisplayUsers2(data) {
    const ul = document.getElementById('users-list');
    for(const users of data){
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = users.name;
        ul.appendChild(li)
    }
};