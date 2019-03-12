

function creerCourbe(fn, nom, canva) {

    //question 2.c
//ici se trouve les valeurs de défauts de n pour la courbe
var x = [0, .1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

//on stock dans un tableau la marge d'érreur en fonction de n
var y = []
x.forEach(function (e) {
  y.push(fn(e))
})

//Creation de la courbe
var ctx = document.getElementById(canva).getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: x.sort(compare),
    datasets: [
      {

        label: 'Tobbogan '+nom,
        data: y,
        backgroundColor: [
            'rgba(255, 99, 132, 0.0)'],
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
          beginAtZero: true,
          reverse:true
        }
      }],
      xAxes : [{
        position:"top"
      }]
          
    
    }
  }
});
/////////////////////////////////////////////////////////////////////////














}