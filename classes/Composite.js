class Composite {




  constructor(fonction, borneInf, borneSup) {

    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup



  }

  moyenne(inf, sup) {

    return ((inf + sup) / 2)
  }




  solve(n) {
    console.log(this.fonction)

    let interval = (this.borneSup - this.borneInf) / n
    var somme = 0.0

    for (let i = 0; i < n; i++) {
      somme = somme + (((this.borneInf + interval) - this.borneInf) * this.fonction(this.moyenne(this.borneInf, this.borneInf + interval)))
      this.borneInf = this.borneInf + interval
    }

    return somme;
  }








}