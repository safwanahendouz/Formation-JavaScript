const myform = document.querySelector('form')
// console.log(myform)

myform.addEventListener('submit',(event) => {
    event.preventDefault()
    const username = document.querySelector('.username')
    const password = document.querySelector('.password')

    console.log('username : ',username.value)
    console.log('password : ',password.value)

})