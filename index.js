

//retourne la moyenne entre deux nombres
function moyenne(a, b) {
  return ((a + b) / 2)

}

//methode du point de milieu
//le paramètres fn est une fonction, a et b sont les intervalles
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




let a = 0
let b = 1
n = 100


let point = pointMilieu(carre, a, b)
let compose = composite(carre, a, b, 100)


console.log(compose / point)

console.log(composite(q2, a, b, 100))

