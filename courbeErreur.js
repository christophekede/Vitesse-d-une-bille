
//valeurs pour calculer l'érreur
let a = 0
let b = 1
n = 100

function Erreur(n) {
  return valeurExactesIntegralesI() - composite(q2, a, b, n)
}


//question 2.c
//ici se trouve les valeurs de défauts de n pour la courbe
var n = [1, 10, 100, 1000, 10000, 100000, 10000000]

//on stock dans un tableau la marge d'érreur en fonction de n
var Err = []
n.forEach(function (e) {
  Err.push(Erreur(e))
})

//Creation de la courbe
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: n.sort(compare),
    datasets: [
      {

        label: 'Evolution De l\'erreur en fonction de n',
        data: Err,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 1
      }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
/////////////////////////////////////////////////////////////////////////



//lorsqu'on click sur le bouton on affiche un graphe plus précis 
var btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", function () {

  for (var i = 1; i <= 10000; i += 25) {
    n.push(i)
    Err.push(Erreur(i))
    n.sort(compare)
    Err.sort(compare2)
  }




  // addData(myChart, 25, Erreur(25))
  myChart.update()

})
