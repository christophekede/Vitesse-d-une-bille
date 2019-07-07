class PointDuMilieu {


  constructor(fonction, borneInf, borneSup) {
    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup


  }

  moyenne() {

    return ((this.borneInf + this.borneSup) / 2)
  }




  solve() {
    return ((this.borneSup - this.borneInf) * this.fonction.ToFonctionX(moyenne(this.borneInf, this.borneSup)))
  }






}

