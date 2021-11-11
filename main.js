
//lista de objetos
const linksSocialMedia = {
    github: 'marcoscode404',
    linkedin: '/in/marcos-vini-984903181',
    facebook: 'Marcos.Code1999',
    instagram: 'marcosviniicode',
    blog: 'blog',
    
}


function changeSocialMediaLinks() {
    
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;

        // alert(li.children[0].href)
    }
    

// laço de repetição

};
//função

changeSocialMediaLinks();
//executa a função



//criando função para ir no github pegar as informações e trazer para meu projeto
function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        // userBio.textContent = data.bio
        userLink.href = data.html_url
        UserImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
    //fetch-->pega alguma informação função | se deu certo entre no then() ==> promessa de pegar alguma coisa
}

getGitHubProfileInfos();




// arrow functions
