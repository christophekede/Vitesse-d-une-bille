class Trapeze {


  constructor(fonction, borneInf, borneSup) {
    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup


  }



  solve() {
    return (this.borneSup - this.borneInf) * (this.fonction.ToFonctionX(this.borneInf) + this.fonction.ToFonctionX(this.borneSup)) / 2
  }






}
