
class Fonction {


    constructor(expression){ ///x^2 +x

        this.exp=expression

    }

    fonction(){
        return eval("(function(x){ return "+ this.exp+"  })") 
    }


    derive(){
        return eval("(function(x){ return "+ math.derivative(this.exp,'x')+"  })") 
    }   //function(x){return 2x+1 }

    









}