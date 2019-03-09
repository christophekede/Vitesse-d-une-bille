

//retourne la moyenne entre deux nombres
function moyenne(a, b) {

  return ((a + b) / 2)
}

//methode du point de milieu
//le paramètre fn est une fonction, a et b sont les intervalles
function pointMilieu(fn, a, b) {

  return ((b - a) * fn(moyenne(a, b)))
}

//methode composite
function composite(fn, a, b, n) {

  let interval = (b - a) / n
  somme = 0.0

  for (let i = 0; i < n; i++) {
    somme = somme + (((a + interval) - a) * fn(moyenne(a, a + interval)))
    a = a + interval
  }

  return somme;
}

//x^2
function carre(x) {

  return x * x
}

//x^2*e^x
function exp(x) {

  return (x * x * Math.exp(x))
}

//x^(-3/4) de la question 2 (q2) 
function q2(x) {

  return (x ** (-3 / 4))
}


//question 2.a
//x^(-3/4) 
function valeurExactesIntegralesI() {
  return (-1 / (((3 / 4) - 1)) * (1 / 1 ^ ((3 / 4) - 1))) - (-1 / (((3 / 4) - 1)) * (1 / 0 ^ ((3 / 4) - 1)))
}

//question 2 b



function Erreur(n) {
  return valeurExactesIntegralesI() - composite(q2, a, b, n)
}



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

//question 2.c
//ici se trouve les valeurs de défauts de n pour la courbe
var n = [1, 10, 100, 1000, 10000, 100000, 10000000]

//on stock dans un tableau la marge d'érreur en fonction de n
var Err = []
n.forEach(function (e) {
  Err.push(Erreur(e))
})

//fonction permettant de trier un nombre CROISSANT
function compare(x, y) {
  return x - y;
}

//fonction permettant de trier un nombre DECROISSANT
function compare2(x, y) {
  return y - x;
}

//function permettant de mettre à jour le Graphe
function addData(chart, label, data) {

  chart.data.labels.push(label)
  chart.data.labels.sort(compare)
  console.log(chart.data.labels)
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  chart.update();
}

console.log(Err)