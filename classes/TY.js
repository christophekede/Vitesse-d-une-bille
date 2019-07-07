class TY {


  constructor(fonction, borneInf, borneSup) { ///x^2 +x

    this.fonction = fonction
    this.borneInf = borneInf
    this.borneSup = borneSup



  }

  //Tranforme une expression mathématiques en fonction 
  solve(n) {

    return (new Composite(this.ToTY, 0.0001, this.borneSup)).solve(n)
  }
  //Transforme une expression mathématique en sa fonction dérivée

  ToTY(x) {
    return Math.sqrt(1 + Math.pow(this.fonction.ToFonctionX(x), 2)) / Math.sqrt(2 * 10 * this.fonction.ToDeriveX(x))
  }



  moyenne(inf, sup) {

    return ((inf + sup) / 2)
  }


  solveComp(n) {

    let interval = (this.borneSup - this.borneInf) / n
    var somme = 0.0

    for (let i = 0; i < n; i++) {
      somme = somme + (((this.borneInf + interval) - this.borneInf) * this.ToTY(this.moyenne(this.borneInf, this.borneInf + interval)))
      this.borneInf = this.borneInf + interval
    }

    return somme;
  }







}