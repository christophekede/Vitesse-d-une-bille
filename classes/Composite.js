class Composite {




    constructor(fonction, borneInf, borneSup) {
        this.fonction=fonction
        this.borneInf=borneInf
        this.borneSup=borneSup

    }
    
          


    solve(n) {

        let interval = (this.borneSup - this.borneInf) / n
        somme = 0.0
      
        for (let i = 0; i < n; i++) {
          somme = somme + (((this.borneInf + interval) - this.borneInf) * this.fonction(moyenne(this.borneInf, this.borneInf + interval)))
          this.borneInf= this.borneInf + interval
        }
      
        return somme;
      }
      





}