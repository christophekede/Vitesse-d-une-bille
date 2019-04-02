
class Fonction {


    constructor(expression) { ///x^2 +x

        this.exp = expression

    }

    //Tranforme une expression mathématiques en fonction 
    ToFonctionExpression() {
        return this.exp
    }

    ToFonctionX(x) {
        const f = math.eval("f(x) = " + this.exp)
        return f(x)
    }

    //Transforme une expression mathématique en sa fonction dérivée
    ToDeriveExpression() {
        return math.derivative(this.exp, 'x').toString()
    }   //function(x){return 2x+1 }

    ToDeriveX(x) {
        const f = math.eval("f(x) = " + this.ToDeriveExpression())
        return f(x)
    }   //function(x){return 2x+1 }











}