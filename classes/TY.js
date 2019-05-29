class TY {


  constructor(fonction, borneInf = null, borneSup, alpha) { ///x^2 +x

    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup
    this.alpha = alpha


  }

  //Tranforme une expression mathématiques en fonction 
  solve(h, n) {

    return (new Hybride(this.ToTY, this.borneSup, this.alpha)).solve(h, n)
  }
  //Transforme une expression mathématique en sa fonction dérivée

  ToTY(x) {
    Math.sqrt(1 + Math.pow(this.fonction.ToFonction(x), 2)) / Math.sqrt(2 * 10 * this.fonction.ToDerive(x))
  }









}