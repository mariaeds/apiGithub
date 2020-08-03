let res = document.getElementById('res')
function busca(event, form){
    event.preventDefault();
    const inputUser = form.username;
    if(inputUser){
        const user = inputUser.value;
        const URL = `https://api.github.com/users/${user}`;
        fetch(URL)
            .then(resposta => resposta.json())
            .then(data => mostrarUser(data))
            .catch(erro => console.error(erro));
    }
}

function mostrarUser(user){
    res.innerHTML = `<p>Nome: ${user.name}</p>`
    res.innerHTML += `<p>Bio: ${user.bio}</p>`
    res.innerHTML += `<p>Company: ${user.company}</p>`
    res.innerHTML += `<p>Location: ${user.location}</p>`
    res.innerHTML += `<img src='${user.avatar_url}'>`
}

