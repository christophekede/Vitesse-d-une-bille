

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
  return parseFloat(Math.pow(Math.abs(x), (-3 / 4)))
}


//question 2.a
//x^(-3/4) 
function valeurExactesIntegralesI() {
  return (-1 / (((3 / 4) - 1)) * (1 / 1 ^ ((3 / 4) - 1))) - (-1 / (((3 / 4) - 1)) * (1 / 0 ^ ((3 / 4) - 1)))
}

//question 2 b




//fonction permettant de trier un nombre CROISSANT
function compare(x, y) {
  return x - y;
}

//fonction permettant de trier un nombre DECROISSANT
function compare2(x, y) {
  return y - x;
}


//question 3
function y(x) {
  return x
}

function y2(x) {
  return 1
}



function Ty(x) {
  var f = y(x)
  var f2 = y2(x)
  return (Math.sqrt(1 + (f2 ^ 2))) / (Math.sqrt(2 * 10 * f))

}


//question 4 a

function hybride(fn, h, b, n) {

  var beta = 1 - ((-3 / 4) / 2)
  var u = (1 - beta) / (2 - beta)
  console.log(fn(-0.6))

  console.log()
  return (((Math.pow(h, (1 - beta))) / (1 - beta)) * fn(h * u) * Math.pow(Math.abs((h * u)), beta)) + composite(fn, h, b, n)






}