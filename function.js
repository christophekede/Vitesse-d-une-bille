

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


//question 3 à refaire 
function y(x) {
  return Math.pow(x, (-3/4))
}

function y2(x) {
  return (-3/4)*Math.pow(x, ((-3/4)-1))
}



//T(y) de I 
function Ty(x) {

  return  Math.sqrt(1 + Math.pow(Math.abs(y2(x)), 2 )) / Math.sqrt(2 * 10 * y(x))

}


//question 4 a 
//Application de la methode hybride sur I
function hybride(fn, h, b, n) {

  var beta = 1 - ((-3 / 4) / 2)
  var u = (1 - beta) / (2 - beta)
  return (((Math.pow(h, (1 - beta))) / (1 - beta)) * fn(h * u) * Math.pow(Math.abs((h * u)), beta)) + composite(fn, h, b, n)

}


//question  4 b


function evolutionDeErreurIHybride(n){

return valeurExactesIntegralesI() - hybride(q2, h, b, n)

}

/////////////////////////////////plan  / ///////////////////////////
//y(x)=x
function yx(x){
  return x
}

//y'(x)=1
function y2x(x){
  return 1
}

//T(y) d'un tobbogan plan
function TYplan(x){
  return Math.sqrt(2)/Math.sqrt(2*10*x)
}


//Methode hybride sur un tobbogan plan
function hybridePlan(fn,h, b, n){

  h=1/Math.sqrt(n)
  var beta = 1/2
  var u = (1 - beta) / (2 - beta)
  return ((((Math.pow(h, (1 - beta))) / (1 - beta)) * fn(h * u) * Math.pow(Math.abs((h * u)), beta)) + (composite(fn, h, b, n)))

}
////////////////////////////////////////////////////////////


////////////////////////   Raide ////////////////////////////////////////////////

//y(x)=Math.sqrt(x)
function racineX(x){
  return Math.sqrt(x)
}

//derivée RacineX
function racine2x(x){
  return (1/2)*Math.pow(x, (-1/2))
}

//T(y) d'un tobbogan raide
function TYraide(x){
  return (Math.sqrt(1+Math.pow(racine2x(x), 2)) )/Math.sqrt(2*10*racineX(x))
}


//Methode hybride sur un tobbogan raide
function hybrideRaide(fn,h, b, n){

  var h=1/Math.sqrt(n)
  var beta = 1-((1/2)/2)
  var u = (1 - beta) / (2 - beta)
  return ((((Math.pow(h, (1 - beta))) / (1 - beta)) * fn(h * u) * Math.pow(Math.abs((h * u)), beta)) + (composite(fn, h, b, n)))

}

/////////////////////////////////////////////////

////////////////////////   Doux ////////////////////////////////////////////////

//y(x)=((1/x)^(3/2))(5-3x)
function doux(x){
  return ((1/2)*Math.pow(x, (3/2)))*(5-3*x)
}

//derivée RaideX
function doux2x(x){
  return (3/4)*Math.sqrt(x)*(5-3*x) - (3/2) *Math.pow(x, (3/2))
}

//T(y) d'un tobbogan Doux
function TYdoux(x){
  return Math.sqrt(1+Math.pow(doux2x(x), 2))/Math.sqrt(2*10*doux(x))
}


//Methode hybride sur un tobbogan Doux
function hybrideDoux(fn,h, b, n){

  h=1/Math.sqrt(n)
  var beta = (3/2)/2
  var u = (1 - beta) / (2 - beta)
  return ((((Math.pow(h, (1 - beta))) / (1 - beta)) * fn(h * u) * Math.pow(Math.abs((h * u)), beta)) + (composite(fn, h, b, n)))

}

/////////////////////////////////////////////////