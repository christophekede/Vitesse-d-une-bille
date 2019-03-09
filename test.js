
let a = 0
let b = 1
n = 100
//Question 1.a
let point = pointMilieu(carre, a, b)
let expo = pointMilieu(exp, a, b)
console.log(" Point Millieu x^2 : " + point)
console.log(" Point Millieu x^2e^x : " + expo)

//Question 1.b
let compose = composite(carre, a, b, 100)
let composeExpo = composite(exp, a, b, 100)
console.log(" Composite x^2 : " + compose)
console.log(" Composite x^2e^x : " + composeExpo)


//question 1.c
console.log("rapport de precision entre la methode composite et point du milieu " + compose / point)
//on observe que la methode composite est plus précise que la methéode point du milieu

//question 2 .a 
console.log("valeurs exactes de l'intégrales I " + valeurExactesIntegralesI())

//question 2.b
console.log("Méthode composite appliquée sur I " + composite(q2, a, b, 100))
console.log("Méthode Hybride appliquée sur I " + hybride(q2, 0.01, b, 100))
console.log("Composite sur T(y) " + composite(Ty, a, b, 100))

//question 2.c
//ici se trouve les valeurs de défauts de n pour la courbe
var n = [1, 10, 100, 1000, 10000, 100000, 10000000]

//on stock dans un tableau la marge d'érreur en fonction de n
// var Err = []
// n.forEach(function (e) {
//   Err.push(Erreur(e))
// })

//fonction permettant de trier un nombre CROISSANT
function compare(x, y) {
  return x - y;
}

//fonction permettant de trier un nombre DECROISSANT
function compare2(x, y) {
  return y - x;
}

//function permettant de mettre à jour le Graphe


// console.log(Err)