const myform = document.querySelector('form')
const myusers = document.querySelector('.users')
const users= []




myform.addEventListener('submit', (event)=> {

    // stop l'actualisation\\\\\\\\\\\\\\\\\\\\\\\\_
    event.preventDefault()

    const name = document.querySelector('.name').value
    const phone = document.querySelector('.phone').value
    const email = document.querySelector('.email').value
    const username = document.querySelector('.username').value
    const password = document.querySelector('.password').value

    console.log(name,phone,email,username,password)
    // affichage 
    // cration d'un objet user
    // camelcase
    // const newUser = {
    //     name: name,
    //     phone: phone,
    //     email: email,
    //     username: username,
    //     password: password
    // }

// 2eme methode\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\__

// git clone

    const newUser = {
        name,
        phone,
        email,
        username,
        password
    }


    // affichage d'un nouveau user 
    console.log(`New User : ${newUser}`)
    // ajout new user from table
    users.push(newUser)
    console.log('Al users : ',users)
    myusers.innerHTML = ''
    users.forEach((u) => {
        myusers.innerHTML +=`<div class="user">
        <div class="info">Name : ${u.name}</div>
        <div class="info">phone : ${u.phone} </div>
        <div class="info">email : ${u.email} </div>
        <div class="info">username : ${u.username} </div>
        <div class="info">password : ${u.password} </div>
        </div>
        `
        
    })
    
    
    // setTimeout(()=> {},4000)


})