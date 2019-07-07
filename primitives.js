//////////////// à remplir avec les fonctions primitives 

function ab(t){
  return  eval("(function (x) { return "+t+"})")
}


res=ab("Math.pow(x,2)")
console.log(res(4))