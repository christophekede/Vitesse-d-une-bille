class Hybride {




    constructor(fonction, borneSup, alpha) {
        this.fonction=fonction
        this.borneSup=borneSup
        this.alpha=alpha


    }
    
          


    solve( h, n) {

       
        if(this.alpha < 1  ) {
           var beta= 1-(this.alpha/2)
        }
         if(this.alpha >= 1 && this.alpha<2){
            var beta= 1-(this.alpha/2)
        }

        var u = (1 - beta) / (2 - beta)
        return (((Math.pow(h, (1 - beta))) / (1 - beta)) * this.fonction(h * u) * Math.pow(Math.abs((h * u)), beta)) 
         + (new Composite(this.fonction, h, this.borneSup)).solve(n)
      
      }
      
}