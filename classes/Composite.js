class Composite extends TY {




  constructor(fonction, borneInf, borneSup) {
    super(fonction, borneInf, borneSup, null)
    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup


  }

  moyenne(inf, sup) {

    return ((inf + sup) / 2)
  }




  solve(n) {

    let interval = (this.borneSup - this.borneInf) / n
    var somme = 0.0

    for (let i = 0; i < n; i++) {
      somme = somme + (((this.borneInf + interval) - this.borneInf) * this.fonction.ToFonctionX(this.moyenne(this.borneInf, this.borneInf + interval)))
      this.borneInf = this.borneInf + interval
    }

    return somme;
  }

  solveTY(n) {

    return (new Composite(super.ToTY, this.borneSup, this.alpha)).solve(n)
  }





}