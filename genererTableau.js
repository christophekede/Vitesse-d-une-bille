

function genererTabPlan(id, a, b, h){
    
    var div=document.createElement("div")
    var table=document.getElementById(id)

    var thead=" <tr><th>N</th><th>Composite</th><th>Hybride</th></tr>"
    var res=""
    for(var i =2;  i<=35000; i=2*i){
        res+="<tr><td>"+i+"</td><td>"+composite(TYplan, a, b, i)+"</td><td>"
        +hybridePlan(TYplan, h, b, i)+"</td></tr>"
    }

    
    table.innerHTML=thead+res
}

genererTabPlan('plan',0, 1, 0.01)