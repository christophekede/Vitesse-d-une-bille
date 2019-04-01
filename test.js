



let a = 0
let b = 1
var h = 0.01
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
var res = new Composite(q2, a, b)
console.log("___________________class composite applique sur q2  " + res.solve(100))
var res2 = new PointDuMilieu(q2, a, b)
console.log("___________________class Point Du Milieu applique sur q2  " + res2.solve())

console.log("****Méthode Hybride appliquée sur I " + hybride(q2, 0.01, b, 100))

var res3 = new Hybride(q2, b, (-3 / 4))
console.log("___________________class Hybride applique sur q2  " + res3.solve(0.001, 35000))

console.log("Composite sur T(y) " + composite(Ty, a, b, 100))
console.log("y2  " + y2(1))



//plan
console.log("Valeur de plan hybride " + hybridePlan(TYplan, h, b, 32768))
var plan = new Hybride(TYplan, b, 1)
console.log("___________________class Hybride applique sur TYplan " + plan.solve(0.1, 32768))
console.log("Valeur de plan  Point milieu " + (pointMilieu(TYplan, a, b)))
console.log("Valeur de plan  composite " + composite(TYplan, a, b, 32768))

//Raide

console.log("Valeur de raide hybride " + hybrideRaide(TYraide, h, b, 32768))
console.log("Valeur de raide  Point milieu " + (pointMilieu(TYraide, a, b)))
console.log("Valeur de raide  composite " + composite(TYraide, a, b, 32768))

//Doux

console.log("Valeur de doux hybride " + hybrideDoux(TYdoux, h, b, 32768))
console.log("Valeur de doux Point milieu " + (pointMilieu(TYdoux, a, b)))
console.log("Valeur de doux  composite " + composite(TYdoux, a, b, 32768))

//test De classe 



document.querySelector('table')

document.getElementById('')


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