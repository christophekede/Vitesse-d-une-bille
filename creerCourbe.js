

function creerCourbe(fn, nom, canva) {

  //question 2.c
  //ici se trouve les valeurs de défauts de n pour la courbe
  // var x= []
  // for(var i=0; i<1; i+=0.01){
  // x.push(i)
  // }
  var x = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

  //on stock dans un tableau la marge d'érreur en fonction de n
  var y = []
  x.forEach(function (e) {
    y.push(fn.ToFonctionX(e))
  })

  //Creation de la courbe
  var ctx = document.getElementById(canva).getContext('2d');
  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: x.sort(compare),
      datasets: [
        {

          label: 'Tobbogan ' + nom,
          data: y,
          backgroundColor: [
            'rgba(255, 99, 132, 0.0)'],
          borderColor: ['rgba(255,99,132,1)'],
          borderWidth: 1,
          pointRadius: 0
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            reverse: true,
            stepSize: 0.1
          }
        }],
        xAxes: [{
          position: "top",
          ticks: {
            autoSkip: true,
            maxTicksLimit: 5,

          }
        }]


      }
    }
  });
  /////////////////////////////////////////////////////////////////////////












}