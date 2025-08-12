
/////////////////////////////////////////////////////////////////////
////////////////// 1. Classe & Objets
/////////////////////////////////////////////////////////////////////


// Déclaration d'une classe
// class Voiture {
//     // Attributs
//     name;
//     age;

//   // Méthode simple
//   demarrer() {
//     console.log("La voiture démarre.");
//   }
// }


// // // Création d'un objet à partir de la classe
// const maVoiture = new Voiture();

// // Appel d'une méthode de l'objet
// maVoiture.demarrer()

// console.log(maVoiture.age)
// console.log(maVoiture.name)



/////////////////////////////////////////////////////////////////////
////////////////// 2. Constructeur & Méthodes
/////////////////////////////////////////////////////////////////////

// class Voiture {
//     marque;
//     couleur;
//   // Le constructeur est appelé lors de la création de l'objet
//   constructor(marque, couleur) {
//     this.marque = marque;
//     this.couleur = couleur;
//   }

//   // Méthode pour afficher les infos
//   afficherInfos() {
//     console.log(`Marque: ${this.marque}, Couleur: ${this.couleur}`);
//   }
// }

// // // Création d'un objet avec des valeurs
// const v1 = new Voiture("Tesla", "Rouge");
// v1.afficherInfos(); // Marque: Toyota, Couleur: Rouge

// const v2 = new Voiture("Toyota", "Black");
// v2.afficherInfos();

// const v3 = new Voiture("Audi", "Blue");
// v3.afficherInfos();


class User {

  constructor(name,email,age){
    this.name=name
    this.email=email
    this.age=age
  }




}

const etudiant = new User('safwan ahendouz','safwanahendouz@gmail.com',17)
// Getters
console.log(etudiant.name)
console.log(etudiant.email)
console.log(etudiant.age)


// setters
etudiant.name='imran'
etudiant.age=26
etudiant.email='imran@gmail.com'

// Getters
console.log(etudiant.name)
console.log(etudiant.email)
console.log(etudiant.age)




// // function showInfo(name) {
// //     console.log('Name : ', name)
// // }

// // showInfo('Safouan')


// /////////////////////////////////////////////////////////////////////
// ////////////////// 3. Héritage
// /////////////////////////////////////////////////////////////////////
// // Classe parent
// // class Animal {
// //   constructor(nom) {
// //     this.nom = nom;
// //   }

// //   parler() {
// //     console.log(`${this.nom} fait un bruit.`);
// //   }
// }

// // Classe enfant qui hérite d'Animal
// class Chien extends Animal {
//   aboyer() {
//     console.log(`${this.nom} aboie.`);
//   }
// }

// const rex = new Chien("Rex");
// rex.parler(); // Hérité
// rex.aboyer(); // Propre à Chien



 
/////////////////////////////////////////////////////////////////////
////////////////// 4. Polymorphisme
/////////////////////////////////////////////////////////////////////
// class Animal {
//   parler() {
//     console.log("Un animal fait un bruit.");
//   }
// }

// class Chat extends Animal {
//   parler() {
//     console.log("Le chat miaule.");
//   }
// }

// class Chien extends Animal {
//   parler() {
//     console.log("Le chien aboie.");
//   }
// }

// const animaux = [new Animal(), new Chat(), new Chien()];

// // Appelle la méthode selon le type de l’objet
// animaux.forEach(a => a.parler());

