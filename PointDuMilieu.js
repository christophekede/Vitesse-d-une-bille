class PointDuMileu {


    fonction 
    borneInf=0
    borneSup=1

    constructor(fonction, borneInf, borneSup) {
        this.fonction=fonction
        this.borneInf=borneInf
        this.borneSup=borneSup


    }
    
      moyenne() {

        return ((this.borneInf + this.borneSup) / 2)
      }
      


    solve(){
         return ((this.borneSup - this.borneInf) * this.fonction(moyenne(this.borneInf, this.borneSup)))
    }






}

