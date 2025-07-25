
// Objet

let clients = [
    {
    nom: 'Mohamed',
    prenom: 'ayoub',
    active: true,
    salaire: 89600,
    courses: ['js', 'java',' python ']
    },
    {
    nom: 'yassine',
    prenom: 'ayoub',
    active: false,
    salaire: 44444,
    courses: ['js', 'GO',' python ']
    },
    {
    nom: 'Mohamed',
    prenom: 'ayoub',
    active: true,
    salaire: 89600,
    courses: ['js', 'java',' python ']
    },
    {
    nom: 'yassine',
    prenom: 'ayoub',
    active: false,
    salaire: 44444,
    courses: ['js', 'GO',' python ']
    }

]

// afficahge 
//  clients.forEach((client) => {
//      console.log(client)
// })



// Map////////////////////////////////////////////////
//  let newclients = clients.map((client)=>{
//     if(!client.active){
//         client.active=true
//     }

//     return client


// })

// console.log(newclients)


// Filter//////////////////////////////////////

let clientFiltred = clients.filter((client) => {
    return client.active
})
