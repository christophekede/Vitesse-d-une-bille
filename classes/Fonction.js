
class Fonction {


    constructor(expression) { ///x^2 +x

        this.exp = expression

    }

    //Tranforme une expression mathématiques en fonction 
    ToFonction() {
        return eval("(function(x){ return " + this.exp + "  })")
    }

    //Transforme une exprission mathématique en sa fonction dérivée
    ToDerive() {
        return eval("(function(x){ return " + math.derivative(this.exp, 'x') + "  })")
    }   //function(x){return 2x+1 }











}