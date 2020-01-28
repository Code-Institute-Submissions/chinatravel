
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}




//For scroll to top ::::Get the button:
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



//bar chart for destinations pages... to be updated for more cities//
google.charts.load('current', {packages: ['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
      var data = new google.visualization.BarChart();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows([
        [{v: [1, 0, 0], f: 'January'}, 53, 40],
        [{v: [2, 0, 0], f: 'Febuary'}, 55, 42],
        [{v: [3, 0, 0], f:'March'}, 59, 45],
        [{v: [4, 0, 0], f: 'April'}, 66, 50],
        [{v: [5, 0, 0], f: 'May'}, 74, 56],
        [{v: [6, 0, 0], f: 'June'}, 82, 63],
        [{v: [7, 0, 0], f: 'July'}, 87, 67],
        [{v: [8, 0, 0], f: 'August'}, 86, 67],
        [{v: [9, 0, 0], f: 'September'}, 79, 62],
        [{v: [10, 0, 0], f: 'October'}, 71, 55],
        [{v: [11, 0, 0], f: 'November'}, 61, 49],
        [{v: [12, 0, 0], f: 'December'}, 55, 44],
      ]);

      var options = {
        title: 'Average temperatures',
        width:400,
        height:300
      };

      var chart = new google.visualization.Bar(
        document.getElementById('chartdiv'));

      chart.draw(data, options);
    }



    